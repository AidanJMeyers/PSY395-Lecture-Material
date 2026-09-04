# PSY 395 · Psychology of Aging — Study Dashboard

Interactive study dashboard for **PSY 395 / 395L, Psychology of Aging with Lab** (Dr. Lindsey Held, Rollins College, Fall 2026).

**Live site:** https://aidanjmeyers.github.io/PSY395-Lecture-Material/

Built from the annotated lecture slides — every block leads with the actual annotated slide image, so the handwritten in-class notes stay attached to the concept they explain.

## What's in it

| Quiz | Status | Lectures |
|---|---|---|
| **Quiz 1** — Fri, Sep 4 | ✅ Built | L1 Adult Development · L2 Personality · L3 Ageism & Media |
| Quiz 2 — Mon, Sep 21 | Placeholder | Laws, Policies & Efforts · Cognition Changes |
| Quiz 3 — Wed, Sep 30 | Placeholder | Creativity, Wisdom & Self-Expression |
| Quiz 4 — Mon, Oct 19 | Placeholder | Friendships & Relationships · Mental Health |
| Quiz 5 — Mon, Oct 26 | Placeholder | Longevity, Health & Functioning |
| Quiz 6 — Fri, Oct 30 | Placeholder | Leisure & Retirement · Death & Dying |
| Final Exam — Thu, Dec 10 | Placeholder | Cumulative |

Each lecture has three tabs:

- **Study Guide** — annotated slide image → expanded explanation → tables/callouts → reviewed checkbox, 1–5 confidence slider, and a notes box
- **Key Review** — fast-recall vocabulary, theories, and mnemonics/discriminators
- **Practice Questions** — MCQ, short answer, and application/scenario items with full explanations on submit

Plus a **Practice Exam** (32 mixed questions weighted to Dr. Held's four stated focus areas) and a **Review Later** tab that collects every note you leave.

Progress saves automatically in your browser via `localStorage`.

## Adding a new quiz

1. Create `src/chapters/L4_<slug>.jsx` following the shape of an existing lecture file
   (`{ id, quiz, lectureNo, date, title, subtitle, blocks[], keyReview{}, questions[] }`).
2. Import it in `src/data/chapters.js` and add it to the `chapters` array.
3. Set its `quiz` field (e.g. `quiz: 2`) — the sidebar groups by that automatically.
4. Add exam questions to `src/data/exam.js` tagged `quiz: 2`.
5. Flip `ready: true` for that quiz in `src/data/quizzes.js`.

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

Built from the Quiz 1 course materials: the annotated lecture slides (Lectures 1–3), the three student slide decks, and the assigned ASA Age-Friendly Communication Guide (2025).

---

*Personal study aid. Not a course deliverable.*
