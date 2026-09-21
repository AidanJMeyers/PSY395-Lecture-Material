# PSY 395 · Psychology of Aging — Study Dashboard

Interactive study dashboard for **PSY 395 / 395L, Psychology of Aging with Lab** (Dr. Lindsey Held, Rollins College, Fall 2026).

**Live site:** https://aidanjmeyers.github.io/PSY395-Lecture-Material/

Built from the annotated lecture slides — every block leads with the actual annotated slide image, so the handwritten in-class notes stay attached to the concept they explain.

## What's in it

| Quiz | Status | Lectures |
|---|---|---|
| **Quiz 1** — Fri, Sep 4 | ✅ Built | L1 Adult Development · L2 Personality · L3 Ageism & Media |
| **Quiz 2** — Mon, Sep 21 | ✅ Built | L4 National Programs (Social Security, Medicare) · L5 Florida & Global (CS/HB 1121, guardians, unhoused older adults, MIPAA/UN Decade) |
| Quiz 3 — Wed, Sep 30 | Placeholder | Creativity, Wisdom & Self-Expression |
| Quiz 4 — Mon, Oct 19 | Placeholder | Friendships & Relationships · Mental Health |
| Quiz 5 — Mon, Oct 26 | Placeholder | Longevity, Health & Functioning |
| Quiz 6 — Fri, Oct 30 | Placeholder | Leisure & Retirement · Death & Dying |
| Final Exam — Thu, Dec 10 | Placeholder | Cumulative |

Each lecture has three tabs:

- **Study Guide** — annotated slide image → expanded explanation → tables/callouts → reviewed checkbox, 1–5 confidence slider, and a notes box
- **Key Review** — fast-recall vocabulary, theories, and mnemonics/discriminators
- **Practice Questions** — MCQ, short answer, and application/scenario items with full explanations on submit

Each quiz also has its own **Practice Quiz** built on Dr. Held's stated focus areas, with two modes:

- **Take the quiz** — multiple choice auto-grades; **short-answer (SAQ)** questions let you write an answer, reveal a model sample answer and rubric key points, tick the points you hit, then grade yourself
- **Answer key** — every question with its answer, sample answer and explanation on one page, grouped by topic, printable to PDF

A **Review Later** tab collects every note you leave.

### Added content

Where the slides are too thin to study from, background is filled in and shown in a dashed violet box tagged **➕ Added — not in slides** (and questions that rely on it carry a "Uses added content" tag). Everything untagged comes from the slides or the professor's in-class annotations. Added facts are sourced — e.g. CS/HB 1121 details come from the Florida House staff analysis, and Social Security projections from the 2026 Trustees Report.

Progress saves automatically in your browser via `localStorage`.

## Adding a new quiz

1. Create `src/chapters/L6_<slug>.jsx` following the shape of an existing lecture file
   (`{ id, quiz, lectureNo, date, title, subtitle, blocks[], keyReview{}, questions[] }`).
   Wrap anything not from the slides in `<Added>` and set `addedLegend: true`.
2. Import it in `src/data/chapters.js` and add it to the `chapters` array.
3. Set its `quiz` field (e.g. `quiz: 3`) — the sidebar groups by that automatically.
4. Create `src/data/exam_quiz3.js` (same shape as `exam_quiz2.js`) and register it in `src/data/exams.js` with prefix `studyguide:exam3`.
5. Flip `ready: true` and add the `focus` list for that quiz in `src/data/quizzes.js` — the overview automatically features the newest ready quiz.

Slide images live in `public/images/L<n>/` and are referenced as `L<n>/<file>.jpg`.

## Local development

```bash
npm install
npm run dev      # dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and publishes to GitHub Pages.
One-time setup: **Settings → Pages → Source: GitHub Actions**.

## Sources

Quiz 1: the annotated lecture slides (Lectures 1–3), the three student slide decks, and the assigned ASA Age-Friendly Communication Guide (2025).
Quiz 2: the annotated Laws & Policies slides (Sep 14) and the Day 2 student deck (Sep 16), plus the professor's quiz outline.

---

*Personal study aid. Not a course deliverable.*
