## Restructure: 2-Week Bootcamp → 1-Day Live Intensive

Copy/number-only updates across the funnel. No design, layout, animation, pricing, or component-structure changes. The "100 slots" scarcity, ₱4,886 pricing, and 7-day guarantee remain.

---

### Global framing applied everywhere

- Format: **1 Day. 1 Live Online Session. ~6 Hours.**
- Structure: **3 Phases** (replacing "2 Weeks / 6 Sessions")
  - **Phase 1 — Map** (Morning, ~2 hrs): diagnose + blueprint
  - **Phase 2 — Build** (Midday, ~3 hrs): AI + no-code build live
  - **Phase 3 — Launch** (Afternoon, ~1 hr): refine, test, deploy
- Promise: walk in with a messy backend → walk out the same day with the first working version of your internal system.

---

### Files to update (used in current funnel)

| File | Change |
|---|---|
| `src/components/HeroSection.tsx` | Headline `"in Less Than 2 Weeks"` → `"in Just 1 Day"`. Pill `"14-Day Program"` → `"1-Day Intensive"`. |
| `src/components/Section3_Intro.tsx` | `"live 2-week online bootcamp"` → `"live 1-day online bootcamp"`. |
| `src/components/Section4_WhatThisIs.tsx` | `"in less than 2 weeks"` → `"in just 1 day"`. |
| `src/components/Section5_BeforeAfter.tsx` | `"Built in 14 days"` → `"Built in 1 day"`. |
| `src/components/SectionRoadmap.tsx` | Intro line → `"live 1-day intensive bootcamp"`. Replace 6 numbered Week 1/Week 2 cards with **3 Phase cards** (Map / Build / Launch) using new content below. |
| `src/components/SectionWhatYoullLearn.tsx` | Week 1 card → **Phase 1: Map (Morning)**. Week 2 card → **Phase 2 + 3: Build & Launch (Afternoon)**. `"By the end of 2 weeks"` → `"By the end of the day"`. Bridge: `"Months of back-and-forth → 1 day of building"`. Tagline: `"Built in 1 day. Owned forever."` |
| `src/components/SectionOfferZone.tsx` | `"Mon/Wed/Fri over 2 weeks"` → `"Single live intensive day"`. Subtitle `"The 14-Day Buildout Program"` → `"The 1-Day Buildout Intensive"`. Bonuses/pricing unchanged. |
| `src/components/SectionFAQ.tsx` | FAQ #02 rewritten to single-session replay answer. FAQ #05 question `"miss a session"` → `"miss the live day"` (same replay answer). FAQ #08 next-cohort answer rewritten for next 1-day date / waitlist. |
| `src/components/SectionFinalCTA.tsx` | `"In 14 days, you'll either have…"` → `"In 1 day, you'll either have…"`. |
| `src/components/SectionDashboardPreview.tsx` | `"in Week 1 of the bootcamp"` → `"in Phase 1 of the bootcamp"`. |

### Legacy / not in current funnel (still update for consistency)

These aren't imported in `src/pages/Index.tsx` but the brief lists them, so update copy in place to avoid contradictions if reused later:

- `Section8_Timing.tsx`, `Section9_HowItWorks.tsx`, `Section10_Curriculum.tsx`, `Section13_Pricing.tsx`, `Section14_Bonuses.tsx`, `Section16_Guarantee.tsx`, `Section18_FinalCTA.tsx` — apply the table mappings from the brief (stats grid → 1 Day / 3 Phases / 1 Working System; Week 1/2 → Phase 1/2+3; "every session" → "the full session"; etc.).
- `CurriculumSection.tsx`, `PricingSection.tsx`, `FAQSection.tsx`, `Section15_FAQ.tsx` — replace week-based / 14-day / 6-session strings with phase / 1-day equivalents.

`SectionAboutCreator.tsx` — no changes.

---

### New phase content (used in Curriculum / WhatYoullLearn / Roadmap)

**Phase 1 — Map (Morning, ~2 hrs)**
- Diagnose hidden operational bottlenecks
- Audit workflows, approvals, departments
- Define what data, dashboards, and reports you need
- Choose the right no-code tool stack for your business
- Walk out with a clear system blueprint

**Phase 2 — Build (Midday, ~3 hrs)**
- Use AI + prompts to translate business logic into software logic
- Build dashboards, forms, workflows live
- Set up user roles, permissions, employee logins
- Wire approvals and back-end automations

**Phase 3 — Launch (Afternoon, ~1 hr)**
- Test the system in real conditions
- Refine and polish
- Walk out with the first usable version of your internal business system

---

### Final sweep

After edits, grep for leftovers and fix any missed: `2 weeks`, `2-week`, `14 days`, `14-Day`, `6 sessions`, `6 Live`, `Week 1`, `Week 2`, `Mon/Wed/Fri`, `less than 2`.

### Out of scope

No design/layout/animation changes. No pricing changes. No sections added/removed. Meta CAPI / Cloud / payments untouched.