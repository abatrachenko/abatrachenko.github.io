"""One-shot image optimizer for resonanceseo.com.

Right-sizes client logos and the consultant portrait, then writes
both an optimized PNG/JPG and a WebP companion. Originals in the
repo get overwritten with the smaller versions — regenerate from
brand source files if higher res is needed later.

Usage: python scripts/optimize_images.py [--logos|--portrait]
"""
from __future__ import annotations

import argparse
import sys
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent

# Client logos render at max-height 40-48px. Target 2x for retina,
# with generous headroom for the widest aspect (Ethereum ~3.26:1).
LOGO_MAX_DIMENSION = 240
LOGO_WEBP_QUALITY = 85
LOGO_PNG_OPTIMIZE = True

# Portrait renders at 200x200. Target 2x retina = 400x400.
PORTRAIT_DIMENSION = 400
PORTRAIT_WEBP_QUALITY = 82
PORTRAIT_JPG_QUALITY = 82

LOGO_FILES = [
    "logo-adidas.png",
    "logo-samsung.png",
    "logo-ethereum-2.png",
    "logo-alchemy-2.png",
    "logo-jcrew.png",
    "logo-madewell.png",
    "logo-hbs-3.png",
    "logo-dirk.png",
    "logo-dekamarkt.png",
    "logo-kpn.png",
]

PORTRAIT_FILE = "aleksey-batrachenko-seo-consultant.jpg"


def resize_keeping_aspect(im: Image.Image, max_dim: int) -> Image.Image:
    w, h = im.size
    if max(w, h) <= max_dim:
        return im
    if w >= h:
        new_w = max_dim
        new_h = round(h * max_dim / w)
    else:
        new_h = max_dim
        new_w = round(w * max_dim / h)
    return im.resize((new_w, new_h), Image.LANCZOS)


def format_size(bytes_: int) -> str:
    return f"{bytes_ / 1024:.1f} KB"


def optimize_logo(path: Path) -> tuple[int, int, int]:
    """Return (orig_bytes, final_png_bytes, new_webp_bytes).

    Small already-optimized PNGs can get bloated by Pillow's re-encode.
    Only overwrite the PNG when the new one is strictly smaller.
    """
    orig_bytes = path.stat().st_size
    with Image.open(path) as im:
        im = im.convert("RGBA")
        resized = resize_keeping_aspect(im, LOGO_MAX_DIMENSION)
        # Write PNG to temp path, keep only if smaller
        tmp_png = path.with_suffix(".tmp.png")
        resized.save(tmp_png, format="PNG", optimize=LOGO_PNG_OPTIMIZE)
        if tmp_png.stat().st_size < orig_bytes:
            tmp_png.replace(path)
        else:
            tmp_png.unlink()
        # WebP companion — only keep if strictly smaller than the final PNG
        webp_path = path.with_suffix(".webp")
        resized.save(webp_path, format="WEBP", quality=LOGO_WEBP_QUALITY, method=6)
        final_png_bytes = path.stat().st_size
        webp_bytes = webp_path.stat().st_size
        if webp_bytes >= final_png_bytes:
            webp_path.unlink()
            webp_bytes = 0
    return (
        orig_bytes,
        final_png_bytes,
        webp_bytes,
    )


def optimize_portrait(path: Path) -> tuple[int, int, int]:
    orig_bytes = path.stat().st_size
    with Image.open(path) as im:
        im = im.convert("RGB")
        # Square crop centered before resize (portrait is already ~square)
        w, h = im.size
        side = min(w, h)
        left = (w - side) // 2
        top = (h - side) // 2
        im = im.crop((left, top, left + side, top + side))
        im = im.resize((PORTRAIT_DIMENSION, PORTRAIT_DIMENSION), Image.LANCZOS)
        # Write optimized JPG in place
        im.save(path, format="JPEG", quality=PORTRAIT_JPG_QUALITY, optimize=True, progressive=True)
        # Write WebP companion
        webp_path = path.with_suffix(".webp")
        im.save(webp_path, format="WEBP", quality=PORTRAIT_WEBP_QUALITY, method=6)
    return (
        orig_bytes,
        path.stat().st_size,
        webp_path.stat().st_size,
    )


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--logos", action="store_true")
    parser.add_argument("--portrait", action="store_true")
    args = parser.parse_args()

    # Default: run both
    run_logos = args.logos or not (args.logos or args.portrait)
    run_portrait = args.portrait or not (args.logos or args.portrait)

    total_saved = 0

    if run_logos:
        print("=== LOGOS ===")
        print(f"{'file':<28} {'orig':>10} {'png':>10} {'webp':>10} {'saved':>10}")
        for name in LOGO_FILES:
            path = ROOT / name
            if not path.exists():
                print(f"  MISSING: {name}")
                continue
            orig, new_png, new_webp = optimize_logo(path)
            saved = orig - min(new_png, new_webp)
            total_saved += saved
            print(f"{name:<28} {format_size(orig):>10} {format_size(new_png):>10} {format_size(new_webp):>10} {format_size(saved):>10}")

    if run_portrait:
        print("\n=== PORTRAIT ===")
        path = ROOT / PORTRAIT_FILE
        if not path.exists():
            print(f"  MISSING: {PORTRAIT_FILE}")
        else:
            orig, new_jpg, new_webp = optimize_portrait(path)
            saved = orig - min(new_jpg, new_webp)
            total_saved += saved
            print(f"{PORTRAIT_FILE:<38} {format_size(orig):>10} {format_size(new_jpg):>10} {format_size(new_webp):>10} {format_size(saved):>10}")

    print(f"\nTotal min-format bytes saved: {format_size(total_saved)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
