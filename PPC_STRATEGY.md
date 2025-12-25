# PPC Strategy - Resonance SEO Consulting
**Budget:** $1,000/month
**Objective:** Book intro calls with qualified e-commerce brands
**Timeline:** 90-day test phase

---

## Budget Allocation

### Month 1-2: Testing Phase
- **Google Search Ads:** $600/month (60%)
- **LinkedIn Ads:** $400/month (40%)

### Month 3+: Optimize Based on Performance
- Shift budget toward the channel with better Cost Per Acquisition (CPA)
- Target CPA: $150-$250 per booked call

---

## Google Search Ads Strategy

### Campaign Structure

**Campaign 1: High-Intent Commercial Keywords**
- **Budget:** $400/month (~$13/day)
- **Match Type:** Phrase + Exact
- **Bid Strategy:** Maximize Conversions (manual CPC to start)

**Campaign 2: Competitor & Alternative Keywords**
- **Budget:** $200/month (~$6.50/day)
- **Match Type:** Phrase + Exact
- **Bid Strategy:** Manual CPC

### Target Keywords

#### High-Intent Commercial (Campaign 1)
| Keyword | Est. CPC | Monthly Searches | Intent |
|---------|----------|------------------|--------|
| fractional seo consultant | $15-25 | 170 | High |
| seo consultant for ecommerce | $12-20 | 320 | High |
| ecommerce seo expert | $10-18 | 590 | High |
| hire seo consultant | $8-15 | 880 | Medium-High |
| seo consultant for shopify | $10-18 | 390 | High |
| fractional cmo seo | $18-28 | 90 | High |
| enterprise seo consultant | $15-22 | 210 | High |

#### Competitor & Alternative Keywords (Campaign 2)
| Keyword | Est. CPC | Intent |
|---------|----------|--------|
| seo agency alternative | $8-15 | Medium |
| fractional seo vs agency | $10-18 | Medium |
| [competitor name] alternative | $12-20 | Medium-High |
| better than seo agency | $8-15 | Medium |

### Ad Copy Examples

**Ad 1: Authority & Results**
```
Headline 1: Fractional SEO for E-Commerce
Headline 2: $700M+ Revenue Generated | 15 Years
Headline 3: No Agency Overhead or Junior Staff
Description 1: Partner with an SEO leader who's scaled Adidas, J.Crew & more. Strategic leadership 8-16 hrs/week.
Description 2: Transparent pricing. Direct access. Real results in 90-120 days. Book your free intro call today.
```

**Ad 2: Problem-Solution**
```
Headline 1: Tired of SEO Agency Overhead?
Headline 2: Get Senior SEO Leadership Direct
Headline 3: Fractional Consultant | E-Commerce
Description 1: No account managers. No junior staff. Just proven SEO strategy from someone who's done it before.
Description 2: $200/hr with weekly engagement. Book a free call to discuss your growth goals.
```

**Ad 3: Social Proof**
```
Headline 1: SEO Consultant for E-Commerce
Headline 2: Trusted by Adidas & J.Crew
Headline 3: 95-315% Traffic Growth Average
Description 1: Fractional SEO leadership for brands doing $1M-$10M/year. Direct access, transparent pricing, proven results.
Description 2: 15+ years experience. 35+ brands scaled. Book your free intro call.
```

### Landing Page Recommendations
- **Primary:** Homepage (as requested)
- **UTM Structure:**
  - Source: google
  - Medium: cpc
  - Campaign: {campaign_name}
  - Content: {ad_variation}
  - Term: {keyword}

### Negative Keywords (Essential)
- free seo
- seo course
- learn seo
- seo tools
- seo software
- seo tutorial
- diy seo
- cheap seo
- seo jobs
- seo salary
- how to do seo

---

## LinkedIn Ads Strategy

### Campaign Structure

**Campaign 1: Job Title Targeting**
- **Budget:** $250/month
- **Format:** Sponsored Content (Single Image)
- **Objective:** Website Conversions

**Campaign 2: Lookalike Audience**
- **Budget:** $150/month
- **Format:** Sponsored Content + Message Ads
- **Objective:** Website Conversions

### Audience Targeting

#### Primary Audience (Campaign 1)
**Job Titles:**
- VP of Marketing
- CMO / Chief Marketing Officer
- Director of Marketing
- Head of Growth
- VP of E-Commerce
- Director of Digital Marketing
- Head of SEO
- VP of Performance Marketing

**Company Size:**
- 50-500 employees (sweet spot for fractional leadership)

**Industry:**
- E-Commerce
- Retail
- Consumer Goods
- Fashion & Apparel
- Home & Garden
- Beauty & Personal Care
- Web3 / Blockchain (based on your experience)

**Geography:**
- United States (prioritize CA, NY, TX, FL, MA, WA, IL)

**Seniority Level:**
- Director
- VP
- CXO

#### Lookalike Audience (Campaign 2)
- Build lookalike based on website visitors who spent 2+ minutes on site
- Or lookalike based on email list if you have past clients

### Ad Creative Examples

**Ad 1: Problem-Aware**
```
Headline: Tired of SEO Agencies That Overpromise & Underdeliver?

Body: You don't need another agency with junior staff reading from playbooks.

You need strategic SEO leadership from someone who's actually done this before—at scale.

I've spent 15 years helping e-commerce brands like Adidas, J.Crew, and Alchemy double their organic traffic and revenue.

No account managers. No overhead. Just direct access to senior SEO strategy 8-16 hours per week.

Book a free intro call →

Image: Use your headshot or the Adidas case study chart
```

**Ad 2: Results-Focused**
```
Headline: How Adidas Got 240K Daily Clicks from Zero

Body: When I joined Adidas, their blog didn't exist.

18 months later: 6M impressions and 240K unique clicks per day.

I did the same for J.Crew (+95% organic clicks) and Alchemy (+315% organic clicks).

If you're an e-commerce brand doing $1M-$10M/year and need a proven SEO leader to untangle your growth—without agency overhead—let's talk.

Fractional SEO leadership. Transparent pricing. Real results.

Book your free intro call →

Image: Organic traffic growth chart
```

**Message Ad (InMail)**
```
Subject: Quick question about your SEO strategy

Hi {FirstName},

I noticed {Company} is in the e-commerce space, and I'm reaching out because most brands I talk to are frustrated with their SEO results.

They're either:
• Paying agencies $10K+/month with junior staff executing
• Trying to do it in-house without senior SEO leadership
• Getting traffic but not revenue growth

I've helped brands like Adidas, J.Crew, and Alchemy scale organic traffic by 95-315% in 9-24 months.

I offer fractional SEO leadership (8-16 hrs/week) at a fraction of agency cost—and you work directly with me, not an account manager.

Would it make sense to hop on a 20-minute intro call?

Best,
Aleksey
```

### LinkedIn Ad Specs
- **Image Size:** 1200 x 627px
- **Headline:** Max 200 characters
- **Body Text:** Max 600 characters (but keep to 150-200 for engagement)
- **CTA:** "Book Now" or "Learn More"

---

## Conversion Tracking Setup

### GA4 Setup
✅ **COMPLETED:** GA4 tracking code installed on website
📍 **Next Steps:**
1. Create GA4 property in Google Analytics
2. Replace `G-XXXXXXXXXX` in `/index.html` (lines 58, 63) with your actual GA4 Measurement ID
3. Create a custom event for "book_call_click" as a conversion

### Google Ads Conversion Tracking
1. In Google Ads, go to Tools > Conversions > New Conversion
2. Choose "Website"
3. Set conversion name: "Book Call - Calendly Click"
4. Category: "Submit lead form"
5. Value: Use same value for each conversion ($200 - your hourly rate)
6. Count: "One" (only count unique clicks)
7. Copy conversion ID and replace `CONVERSION_ID` in `/scripts.js:11`

### LinkedIn Conversion Tracking
1. In LinkedIn Campaign Manager, go to Account Assets > Insight Tag
2. Install the LinkedIn Insight Tag in `<head>` section (we can add this)
3. Set up conversion: "Book Call Click"
4. Event-specific tracking for Calendly link clicks

---

## Performance Metrics & KPIs

### Track Weekly
- Impressions
- Clicks
- Click-Through Rate (CTR)
- Cost Per Click (CPC)
- Conversions (Calendly clicks)
- Cost Per Conversion

### Track Monthly
- Intro calls booked
- Intro calls completed
- Qualified opportunities
- Cost Per Acquisition (CPA)
- Customer Acquisition Cost (CAC)
- Return on Ad Spend (ROAS)

### Success Benchmarks (Month 1-2)
- **Google Ads CTR:** >3% (industry avg is 1.91%)
- **LinkedIn Ads CTR:** >0.5% (industry avg is 0.39%)
- **CPA Target:** <$250 per booked call
- **Intro Call Show Rate:** >70%

---

## Month-by-Month Plan

### Month 1: Launch & Learn
**Week 1:**
- Set up GA4 property and get Measurement ID
- Set up Google Ads conversion tracking
- Launch Google Search Ads (2 campaigns, 3 ads each)
- Install LinkedIn Insight Tag
- Launch LinkedIn Campaign 1 (3 ad variations)

**Week 2-4:**
- Monitor daily performance
- Pause underperforming keywords/ads
- Increase budget on winners
- A/B test ad copy variations

**End of Month 1 Review:**
- Which channel has better CPA?
- Which keywords are converting?
- Which ad copy resonates?
- Adjust budget allocation for Month 2

### Month 2: Optimize & Scale
- Double down on winning keywords/audiences
- Add negative keywords based on search terms report
- Test new ad creative based on Month 1 learnings
- Launch LinkedIn Campaign 2 (Lookalike + Message Ads)
- Consider Remarketing campaign if traffic volume supports it

### Month 3: Scale What Works
- Shift budget to best-performing channel
- Expand keyword list for Google Ads
- Test new LinkedIn audiences
- Implement remarketing campaigns
- Consider increasing budget if CPA is profitable

---

## Quick Start Checklist

### Before Launch:
- [ ] Create Google Ads account
- [ ] Set up GA4 property
- [ ] Replace GA4 Measurement ID in index.html
- [ ] Set up Google Ads conversion tracking
- [ ] Replace conversion ID in scripts.js
- [ ] Create LinkedIn Campaign Manager account
- [ ] Install LinkedIn Insight Tag
- [ ] Prepare ad creative (images, copy)
- [ ] Set up Calendly to capture UTM parameters
- [ ] Connect Google Ads to GA4
- [ ] Set up billing in both platforms

### Week 1 After Launch:
- [ ] Check daily for disapproved ads
- [ ] Monitor spend to ensure it's pacing correctly
- [ ] Review search terms report (Google Ads)
- [ ] Add negative keywords
- [ ] Check conversion tracking is firing

### First Month:
- [ ] Weekly performance review
- [ ] Pause ads with CTR <2% after 50+ impressions
- [ ] Pause keywords with CPA >$300
- [ ] Test at least 2 new ad variations per campaign
- [ ] Document what's working

---

## Tools & Resources Needed

### Required:
- Google Ads account
- LinkedIn Campaign Manager account
- GA4 property (free)
- Calendly Pro (to capture UTM parameters)

### Recommended:
- Google Analytics 4 dashboards for PPC performance
- Google Ads Editor (for bulk changes)
- UTM.io or Google's Campaign URL Builder
- Call tracking software (e.g., CallRail) if phone calls are an option

---

## Budget Scenarios

### Conservative ($1,000/month)
- Expect 5-10 booked calls per month
- CPA: $100-$200
- 1-3 qualified opportunities

### Moderate ($2,000/month)
- Expect 10-20 booked calls per month
- CPA: $100-$150
- 3-6 qualified opportunities

### Aggressive ($5,000/month)
- Expect 30-50 booked calls per month
- CPA: $100-$150
- 8-15 qualified opportunities

---

## Next Steps

1. **Set up GA4 Property** and replace placeholder ID
2. **Set up conversion tracking** in Google Ads and LinkedIn
3. **Create ad accounts** (Google Ads, LinkedIn Campaign Manager)
4. **Prepare creative assets** (ad images, case study charts)
5. **Launch campaigns** following the strategy above
6. **Monitor daily** for the first week
7. **Weekly optimization** based on performance data

**Questions or need help with setup? Let me know!**
