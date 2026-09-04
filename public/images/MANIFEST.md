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
