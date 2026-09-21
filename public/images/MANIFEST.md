# Image Manifest — Quiz 1

## Source and extraction method

All images are **per-slide crops rendered from `Annotated Slides.pdf`**, not the clean student decks.

That file is a OneNote printout in which each slide is embedded as a raster image with Dr. Held's
handwritten ink drawn on top as vector paths. Extracting the embedded images would have produced the
slides *without* the annotations, so instead each page was rendered at 150 DPI and cropped to the
slide's bounding box (expanded to capture ink written in the margins). Crops were then downscaled to
1400px wide and saved as JPEG q86 — 11.1 MB of PNG down to 3.1 MB.

Lecture 1 has two slides per PDF page; Lectures 2 and 3 have one. Clustering the image strips by
vertical position recovered exactly **15 slides per lecture**, matching the three student decks
(`Aging Week 1.pdf`, `Personality_Student.pdf`, `Ageism&Media_Student.pdf` — 15 slides each).

**Naming:** `L<lecture>_s<slide##>_p<pdfpage##>.jpg`

## Placement

**45 slides rendered · 44 placed in blocks · 1 logged below · 0 discarded**

| Lecture | Slides | Placed | Blocks |
|---|---|---|---|
| L1 · Adult Development | 15 | 14 | 10 |
| L2 · Personality | 15 | 15 | 13 |
| L3 · Ageism & Media | 15 | 15 | 12 |

### Lecture 1 — `images/L1/`
| File | Block | Content |
|---|---|---|
| L1_s01_p01 | — | *Not placed — see below* |
| L1_s02_p02 | 1a | "What is old to you?" discussion slide |
| L1_s03_p02 | 1a | Celebrity quotes on aging (Diaz, Curtis, Kudrow, Hayek) |
| L1_s04_p03 | 1b | What is aging? Life-Span Perspective |
| L1_s05_p03 | 1c | Gerontology vs. geriatrics; lifespan vs. life expectancy |
| L1_s06_p04 | 1d | Chronological vs. functional age |
| L1_s07_p04 | 1d | Biopsychosocial (BPS) model |
| L1_s08_p05 | 1e | Cohort and the three influence types |
| L1_s09_p05 | 1f | Primary / secondary / tertiary / optimal aging |
| L1_s10_p06 | 1j | Video still — care-home reaction-time activity |
| L1_s11_p06 | 1j | Video still — unlabeled in-class clip |
| L1_s12_p07 | 1g | Relevant theories table (SST, Continuity, Erikson, SOC) |
| L1_s13_p07 | 1h | Changing times / population pyramid discussion |
| L1_s14_p08 | 1h | Median age by world region, 1950–2050 |
| L1_s15_p08 | 1i | New research on aging (Lehallier, Shen, Mousley) |

### Lecture 2 — `images/L2/`
| File | Block | Content |
|---|---|---|
| L2_s01_p09 | 2a | Personality intro — "set in plaster" |
| L2_s02_p10 | 2b | The Big 5 / dispositional traits |
| L2_s03_p11 | 2c | Big 5 age-trend table (annotated Notes row) |
| L2_s04_p12 | 2d | Erikson's 8 stages + criticism |
| L2_s05_p13 | 2e | Carl Jung's theory |
| L2_s06_p14 | 2f | Jung's midlife transition — 4 elements |
| L2_s07_p15 | 2g | Influence of Jung today |
| L2_s08_p16 | 2h | "Midlife crisis" + despair-by-age chart |
| L2_s09_p17 | 2i | Quarter-life crisis — 6 factors |
| L2_s10_p18 | 2j | QLC influence — coping skills branch |
| L2_s11_p19 | 2j | QLC influence — overwhelming stress branch |
| L2_s12_p20 | 2k | McAdams' life-story model |
| L2_s13_p21 | 2k | Agency and communion |
| L2_s14_p22 | 2l | The Life Story Method (Table 10.4) |
| L2_s15_p23 | 2m | Personality "types" & health (Type A / Type D) |

### Lecture 3 — `images/L3/`
| File | Block | Content |
|---|---|---|
| L3_s01_p24 | 3a | Video still — "Ageing shouldn't make people feel invisible" |
| L3_s02_p25 | 3a, 3b | Ageism definition + TMT / modernization *(used in two blocks)* |
| L3_s03_p26 | 3c | WEF four types of ageism |
| L3_s04_p27 | 3d | Intersectionality with ageism |
| L3_s05_p28 | 3e | Ageism & media — Ng (2021) 6:1 ratio |
| L3_s06_p29 | 3f | Language is important — Allure, AP Stylebook |
| L3_s07_p30 | 3g | Image comparison — technology alone vs. assistance |
| L3_s08_p31 | 3h | Disrupt Aging Collection (AARP + Getty) |
| L3_s09_p32 | 3i | Geena Davis / GDIGM / The Ageless Test |
| L3_s10_p33 | 3j | "Frail, Frumpy and Forgotten" — headline statistics |
| L3_s11_p34 | 3j | Stereotype breakdown table with percentages |
| L3_s12_p35 | 3k | "Acting Your Age" campaign + BAFTA nominee-age charts |
| L3_s13_p36 | 3k | Progress — 2023 Oscar winners all 50+ |
| L3_s14_p37 | 3l | Anti-ageism initiatives |
| L3_s15_p38 | 3l | Closing link — Ageism & Cinema Toolkit |

## Not placed

| File | Reason |
|---|---|
| `L1/L1_s01_p01.jpg` | Lecture 1 **title slide** — the words "Psychology of Aging" over a stock photo. No instructional content and no annotations. Kept in the repo rather than deleted, in case it is ever wanted as a course banner. |

## Not extracted

No images were extracted from the three clean student decks
(`Aging Week 1.pdf`, `Personality_Student.pdf`, `Ageism&Media_Student.pdf`) or from
`ASA-Age-Friendly-Communication-Guide-2025-2.pdf`. The first three are the *unannotated* versions of
the same 45 slides already captured above, so extracting them would have duplicated every image while
losing the handwritten notes. The ASA guide is a text document — its content is reproduced as tables in
block 3g rather than as page images.

---

# Image Manifest — Quiz 2

## Sources and method

| Folder | Source | Method |
|---|---|---|
| `L4/` | `Annotated Law Policies Slides 1.pdf` (Mon Sep 14, OneNote printout, 12 pages) | Each page rendered at 170 DPI, then cropped to the slide content. The OneNote frame border is detected and excluded so the crop hugs the actual text and handwriting. Handwritten notes appear only on pages 9 and 11 (Medicare). |
| `L5/` | `Second Day of Laws & Policies.pdf` (Wed Sep 16, clean student deck, 17 slides) | Each slide rendered whole at 110 DPI (~1400 px wide). No annotated version was provided for this day. |

## Placement

**28 slides rendered · 26 placed · 2 logged below · 0 discarded**

### Lecture 4 — `images/L4/`
| File | Block | Content |
|---|---|---|
| L4_s01_p02 | 4a | Accessible seating specifications |
| L4_s02_p03 | 4b | Social Security definition + payroll tax table |
| L4_s03_p04 | 4c | Full retirement age by birth year |
| L4_s04_p05 | 4b | Videos: SSA "History Summary" + unlabeled news clip |
| L4_s05_p06 | 4e | Four Social Security reform options (grading activity) |
| L4_s06_p07 | 4d | Earnings test + average monthly payment ($2,071) |
| L4_s07_p08 | 4c | Claiming age 62 / 67 / 70 comparison table |
| L4_s08_p09 | 4f | Medicare parts — **annotated** (labels, "subsidized", "pay a little more") |
| L4_s09_p10 | — | *Not placed — see below* |
| L4_s10_p11 | 4f | Medicare parts — full text + **annotated** "$202 automatically deducted every month" |
| L4_s11_p12 | 4g | Medicare — final clean version ("NOT to be confused with Medicaid") |

### Lecture 5 — `images/L5/`
| File | Block | Content |
|---|---|---|
| L5_s01 | 5a | Florida's aging population + county map |
| L5_s02 | 5a | Florida 60+ characteristics table (~5,967,000) |
| L5_s03 | 5b | Discussion: why are older adults moving to Florida? |
| L5_s04 | 5b | Discussion: why is Florida uniquely affected? |
| L5_s05 | 5c | Guess! That! Number! (blanks filled in class) |
| L5_s06 | 5d | CS/HB 1121 — long-term care access |
| L5_s07 | 5e | Discussion: most vulnerable first vs. first-come, first-served |
| L5_s08 | 5d | CS/HB 1121 — HCE food and nutritional supplements |
| L5_s09 | 5d, 5f | CS/HB 1121 — guardian dementia training + guardian definitions *(used twice)* |
| L5_s10 | 5f | Discussion: should family guardians need dementia training? |
| L5_s11 | 5g | Wendy Williams conservatorship |
| L5_s12 | 5h | Orange County unhoused seniors (2025) |
| L5_s13 | 5h | Why are older adults becoming unhoused? (3 categories) |
| L5_s14 | 5i | MIPAA (2002) + UN Decade of Healthy Ageing |
| L5_s15 | 5j | Median age by world region (repeat of L1) |
| L5_s16 | 5j | Rapp, Ronchetti & Sicsic (2022) article title page |
| L5_s17 | 5i | Video still — unlabeled |

## Not placed

| File | Reason |
|---|---|
| `L4/L4_s09_p10.jpg` | An intermediate "build" of the Medicare slide (Part B text revealed, Advantage column still empty). Everything on it also appears on L4_s10_p11, which adds her $202 note. |
| *(page 1 of the annotated PDF)* | OneNote page title only ("Laws, Policies, and Efforts — Monday, September 14, 2026"); no slide, so nothing was rendered. |
