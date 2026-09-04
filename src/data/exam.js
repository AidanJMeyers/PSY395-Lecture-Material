// Quiz 1 practice exam — cumulative across Lectures 1–3.
// Weighted toward Dr. Held's four stated focus areas:
//   1. Definitions and perspectives on aging
//   2. Ways of measuring age
//   3. Major contributors to theories of adult development and personality
//   4. Ageism and its different forms
//
// TO EXTEND FOR A FUTURE QUIZ: append questions with `quiz: 2` (etc.) and the
// matching `chapter` label. The exam view filters by the selected quiz.

export const examConfig = {
  subject: 'PSY 395 · Psychology of Aging',
  timed: false,
  timeLimitMin: 30,
  passThreshold: 80
};

const L1 = 'L1 · Adult Development';
const L2 = 'L2 · Personality';
const L3 = 'L3 · Ageism & Media';

export const exam = [
  // ---------- Focus area 1: Definitions and perspectives on aging ----------
  {
    quiz: 1, chapter: L1, difficulty: 'E', type: 'mcq',
    q: 'Aging is best defined as a biological process that:',
    choices: [
      'Begins at birth and accelerates after age 65',
      'Begins at conception and continues throughout the lifespan',
      'Begins when secondary aging first appears',
      'Begins in middle adulthood and is irreversible'
    ],
    correct: 1,
    explanation: 'Begins at CONCEPTION and continues throughout the lifespan — continuous, not an event of later life. "Birth" is the standard distractor.'
  },
  {
    quiz: 1, chapter: L1, difficulty: 'M', type: 'mcq',
    q: 'Which statement best captures the Life-Span Perspective (Baltes et al.)?',
    choices: [
      'Development is complete by early adulthood',
      'Development is lifelong and multidirectional, with gains and losses occurring at every stage',
      'Development consists of growth until 30 and decline thereafter',
      'Development is determined entirely by chronological age'
    ],
    correct: 1,
    explanation: 'The Life-Span Perspective holds that development is lifelong, multidimensional and multidirectional, with growth and decline occurring SIMULTANEOUSLY at every age. It divides development into two phases — early (childhood/adolescence) and later (young adulthood, middle age, old age) — precisely to reject the idea that the later phase is only decline.'
  },
  {
    quiz: 1, chapter: L1, difficulty: 'M', type: 'short',
    q: 'In one or two sentences, distinguish gerontology from geriatrics.',
    correct: ['gerontology multidisciplinary study geriatrics branch of medicine', 'gerontology is the study, geriatrics is medicine'],
    explanation: 'GERONTOLOGY = the multidisciplinary scientific study of aging across the human lifespan; holistic, "not simply medical," and oriented toward research and program development. GERIATRICS = the specialized branch of medicine concerned with prevention, diagnosis and treatment of aging-related disease. Gerontology = the study; geriatrics = the medicine.'
  },
  {
    quiz: 1, chapter: L1, difficulty: 'H', type: 'mcq',
    q: 'Between 1900 and today, the average age at death in the US rose from roughly 47 to the high 70s, while the oldest verified human age has remained about 122. Which pair correctly labels these two figures?',
    choices: [
      'Both are measures of lifespan',
      'The first is lifespan; the second is life expectancy',
      'The first is life expectancy; the second is lifespan',
      'Both are measures of functional age'
    ],
    correct: 2,
    explanation: 'LIFE EXPECTANCY is the average age at death for people from a similar time period — the number that has risen dramatically. LIFESPAN is the maximum age attainable for a species — a biological ceiling that has barely moved. More people reach old age; the ceiling on old age has not risen.'
  },
  {
    quiz: 1, chapter: L1, difficulty: 'M', type: 'mcq',
    q: 'Which of the following is an example of OPTIMAL aging?',
    choices: [
      "A 70-year-old's hair turns gray",
      'A 70-year-old develops type 2 diabetes',
      "A 70-year-old's professional expertise and vocabulary continue to expand",
      'A 70-year-old experiences a sharp decline in vitals in her final weeks'
    ],
    correct: 2,
    explanation: 'Optimal aging = people become better with age in certain functions; her example was knowledge/skill expanding. Gray hair = primary (1°). Type 2 diabetes = secondary (2°). Sharp final decline = tertiary (3°).'
  },
  {
    quiz: 1, chapter: L1, difficulty: 'H', type: 'short',
    q: 'A 78-year-old has slower reaction times (universal with age), osteoarthritis from a lifetime of manual labor, and better emotional regulation than she had at 40. Classify each of the three using the aging-type framework.',
    correct: ['primary secondary optimal', 'primary aging, secondary aging, optimal aging'],
    explanation: 'Slower reaction time = PRIMARY aging (1°: normal/expected change over time, universal). Osteoarthritis from occupational wear = SECONDARY aging (2°: change related to disease, not universal, tied to modifiable exposure). Better emotional regulation = OPTIMAL aging (people become better with age in certain functions).'
  },

  // ---------- Focus area 2: Ways of measuring age ----------
  {
    quiz: 1, chapter: L1, difficulty: 'E', type: 'mcq',
    q: 'Reaction time, memory, learning ability and intelligence are the listed indicators of which component of functional age?',
    choices: ['Biological age', 'Psychological age', 'Social age', 'Chronological age'],
    correct: 1,
    explanation: 'PSYCHOLOGICAL age. Biological age = cardiovascular functioning, respiratory (lung) functioning, muscle and bone strength, cellular aging. Social age = work roles, family status, position in the community.'
  },
  {
    quiz: 1, chapter: L1, difficulty: 'M', type: 'mcq',
    q: 'A 62-year-old recently remarried, changed careers, and became a first-time parent — life events more typical of someone in their thirties. Which component of functional age is most directly at issue?',
    choices: ['Biological age', 'Psychological age', 'Social age', 'Tertiary aging'],
    correct: 2,
    explanation: 'SOCIAL age concerns roles and expectations relative to social norms — work roles, family status, and position in the community. His social roles do not match the norms for his chronological age.'
  },
  {
    quiz: 1, chapter: L1, difficulty: 'M', type: 'mcq',
    q: 'The Biopsychosocial (BPS) model is important to this course primarily because it:',
    choices: [
      'Proves that biology determines health outcomes in later life',
      'Shows that health and behavior emerge from interacting biological, psychological and social domains — justifying a multidisciplinary approach to aging',
      'Replaces the concept of functional age',
      'Explains why life expectancy has increased'
    ],
    correct: 1,
    explanation: 'The BPS model holds that physical and mental health sit at the intersection of biological, psychological and social domains, which are not separable. It is the conceptual parent of the three component ages and the justification for gerontology being multidisciplinary rather than purely medical.'
  },
  {
    quiz: 1, chapter: L1, difficulty: 'H', type: 'mcq',
    q: "A hiring manager rejects a 61-year-old applicant, assuming she cannot handle a fast-paced role. Using the course's framework for measuring age, the clearest critique is that the manager:",
    choices: [
      'Relied on chronological age, which is a poor predictor of actual functioning',
      'Relied on biological age, which cannot be measured',
      'Confused lifespan with life expectancy',
      'Applied the Life-Span Perspective incorrectly'
    ],
    correct: 0,
    explanation: 'This is the direct link between Lecture 1 and Lecture 3. Chronological age is objective and easy to measure but a WEAK predictor of functioning — which is exactly why ageism (prejudice and discrimination based on chronological age) is irrational. Functional age, not the number of years, would be informative here.'
  },

  // ---------- Cohort & influences ----------
  {
    quiz: 1, chapter: L1, difficulty: 'M', type: 'mcq',
    q: "Which set correctly matches the three influence types to Dr. Held's in-class examples?",
    choices: [
      'Age-graded = car accident; History-graded = puberty; Nonnormative = pandemic',
      'Age-graded = puberty; History-graded = pandemic/war; Nonnormative = car accident',
      'Age-graded = pandemic; History-graded = car accident; Nonnormative = puberty',
      'Age-graded = war; History-graded = puberty; Nonnormative = pandemic'
    ],
    correct: 1,
    explanation: 'Normative AGE-graded → occur with most people at a similar age → puberty. Normative HISTORY-graded → events common in the culture at certain times → pandemic, war. NONNORMATIVE → random or rare events affecting individuals → car accident.'
  },
  {
    quiz: 1, chapter: L1, difficulty: 'E', type: 'short',
    q: 'Define "cohort" and explain in one sentence why cohort matters when comparing 80-year-olds to 20-year-olds.',
    correct: ['group of people born at the same point in time', 'born at the same time or within a specific timespan'],
    explanation: 'A COHORT is a group of people born at the same point in time or within a specific timespan. It matters because people born together move through history together, so differences between age groups reflect BOTH aging and cohort (shared historical experience) — and separating the two is a central methodological problem in gerontology.'
  },

  // ---------- Focus area 3: Theories & contributors ----------
  {
    quiz: 1, chapter: L1, difficulty: 'H', type: 'mcq',
    q: 'A 79-year-old stops attending large social events and family gatherings, choosing instead to spend nearly all her time with her sister and two closest friends. She says she wants her remaining time to "actually mean something." Which theory best explains this?',
    choices: ['Continuity Theory', 'Socioemotional Selectivity Theory', 'Terror management theory', 'Erikson’s Ego Integrity vs. Despair'],
    correct: 1,
    explanation: 'Socioemotional Selectivity Theory (Carstensen): people perceive their time as limited and prioritize emotionally meaningful experiences and relationships — pruning the social network to the closest ties. The driver is PERCEIVED TIME REMAINING, not chronological age.'
  },
  {
    quiz: 1, chapter: L1, difficulty: 'H', type: 'short',
    q: 'Name the three components of SOC and give the Rubinstein example for each.',
    correct: ['selection optimization compensation', 'selection, optimization, compensation'],
    explanation: 'SELECTION — narrowing to fewer, higher-priority goals (he played fewer pieces). OPTIMIZATION — investing resources into those goals (he practiced them more). COMPENSATION — new means to maintain performance when old means fail (he slowed the tempo before fast passages so they sounded faster by contrast). SOC is marked on the slide as *embodying the lifespan perspective because growth, maintenance and loss regulation operate concurrently.'
  },
  {
    quiz: 1, chapter: L2, difficulty: 'M', type: 'mcq',
    q: 'Which pairing of theorist to contribution is INCORRECT?',
    choices: [
      'Carl Jung — introduced extroverts and introverts, and the notion of midlife crisis',
      'Elliott Jaques — coined the term "midlife crisis"',
      'Dan McAdams — the life-story model of personality',
      'Deborah King — the Type A behavior pattern'
    ],
    correct: 3,
    explanation: 'Deborah King is associated with the MULTIPLE JEOPARDY HYPOTHESIS (Lecture 3). The Type A behavior pattern was identified by CARDIOLOGISTS MEYER FRIEDMAN and R.H. ROSENMAN in 1974. The other three pairings are correct.'
  },
  {
    quiz: 1, chapter: L2, difficulty: 'M', type: 'mcq',
    q: 'Which Big Five traits INCREASE with age, and which DECREASE?',
    choices: [
      'Increase: Openness, Extraversion / Decrease: Conscientiousness, Agreeableness',
      'Increase: Conscientiousness, Agreeableness / Decrease: Openness, Neuroticism',
      'Increase: Neuroticism, Openness / Decrease: Agreeableness, Conscientiousness',
      'All five increase with age'
    ],
    correct: 1,
    explanation: 'Two up, two down, one flat. UP: Conscientiousness (from young adulthood into midlife, then plateaus and may decline slightly) and Agreeableness. DOWN: Openness (gradual decline) and Neuroticism (with substantial individual variation). Extraversion is relatively stable or shows a modest decline.'
  },
  {
    quiz: 1, chapter: L2, difficulty: 'H', type: 'mcq',
    q: 'Which statement about Conscientiousness across the lifespan is MOST complete?',
    choices: [
      'It increases steadily throughout life',
      'It decreases gradually with age',
      'It increases from young adulthood into midlife, then often plateaus and may decline slightly in later life',
      'It remains stable across the lifespan'
    ],
    correct: 2,
    explanation: 'Conscientiousness is the only trait with a three-part trajectory: increase → plateau → possible slight decline. An answer reading only "increases with age" is incomplete, and that incompleteness is exactly what the question is testing.'
  },
  {
    quiz: 1, chapter: L2, difficulty: 'M', type: 'mcq',
    q: 'A 58-year-old says her greatest satisfaction now comes from mentoring younger colleagues and "leaving something behind." Which Erikson stage is this, and what is its failure pole?',
    choices: [
      'Intimacy vs. Isolation — failure pole is loneliness',
      'Generativity vs. Stagnation — failure pole is self-absorption and having contributed nothing beyond oneself',
      'Ego Integrity vs. Despair — failure pole is regret',
      'Identity vs. Role Confusion — failure pole is confusion'
    ],
    correct: 1,
    explanation: 'Generativity vs. Stagnation (ages 40–65): contribution to society and to younger generations. Its failure pole, stagnation, is self-absorption and the sense of having contributed nothing that outlives you.'
  },
  {
    quiz: 1, chapter: L2, difficulty: 'H', type: 'short',
    q: "State the criticism of Erikson's stage theory raised in class.",
    correct: ['not always linear or mutually exclusive', 'demarcated stages, inability to move forward without resolving each conflict'],
    explanation: 'Criticized for DEMARCATED STAGES and the claim that a person cannot move forward without resolving each conflict — and, starred in her notes: development is NOT ALWAYS LINEAR OR MUTUALLY EXCLUSIVE. People revisit earlier crises and can work on generativity and integrity simultaneously.'
  },
  {
    quiz: 1, chapter: L2, difficulty: 'M', type: 'mcq',
    q: 'In Jung’s midlife transition, what is "individuation"?',
    choices: [
      'The process of becoming more extraverted with age',
      'Shifting from the "Ego" to the true "Self" — becoming a whole, integrated person',
      "Separating from one's family of origin",
      'The tendency for personality facets to diverge over time'
    ],
    correct: 1,
    explanation: 'Individuation is Jung’s ultimate goal: moving from the EGO (the conscious, socially performed identity built in the first half of life) to the true SELF (the whole, integrated personality) — achieved by confronting the shadow and embracing the anima/animus.'
  },
  {
    quiz: 1, chapter: L2, difficulty: 'M', type: 'mcq',
    q: 'Anima and animus refer respectively to:',
    choices: [
      'Unconscious masculine qualities in a woman; unconscious feminine qualities in a man',
      'Unconscious feminine qualities in a man; unconscious masculine qualities in a woman',
      'The conscious and unconscious mind',
      'Extraversion and introversion'
    ],
    correct: 1,
    explanation: 'ANIMA = unconscious FEMININE qualities (within a man). ANIMUS = unconscious MASCULINE qualities (within a woman). Memory hook: animA = feminine; animUS = masculine.'
  },
  {
    quiz: 1, chapter: L2, difficulty: 'M', type: 'mcq',
    q: 'The quarter-life crisis literature identified three internal and three external factors. Which are the three EXTERNAL factors?',
    choices: [
      'Commitment to purpose, spirituality, anxiety',
      'Social support, age, gender',
      'Anxiety, depression, self-esteem',
      'Openness, conscientiousness, neuroticism'
    ],
    correct: 1,
    explanation: 'EXTERNAL: social support, age and gender. INTERNAL: commitment to purpose, spirituality and anxiety. Note the surprise that age and gender are classified as external. Her annotations marked purpose and spirituality as protective and anxiety as an at-risk factor.'
  },
  {
    quiz: 1, chapter: L2, difficulty: 'H', type: 'short',
    q: 'Neuroticism decreases with age on average, yet the quarter-life crisis slide lists "temporary increases in neuroticism." Reconcile these.',
    correct: ['average trend versus temporary crisis period', 'population average vs individual crisis'],
    explanation: 'The Big Five table reports *AVERAGE TRENDS at the population level across the lifespan. A quarter-life crisis is a specific, time-limited period that can locally reverse a lifelong average trend — hence TEMPORARY increases in neuroticism while navigating uncertainty. The same reasoning applies to openness, which declines on average with age but increases during a quarter-life crisis as people explore new careers and lifestyles.'
  },
  {
    quiz: 1, chapter: L2, difficulty: 'M', type: 'mcq',
    q: 'In McAdams’ life-story model, "agency" and "communion" refer to:',
    choices: [
      'Autonomy and power of self; love and sense of belongingness',
      'Free will and religious belief',
      'Independence in daily living; community residence',
      'Selection and compensation'
    ],
    correct: 0,
    explanation: 'AGENCY = autonomy and power of self (achievement, independence, control — the "I" theme). COMMUNION = love and sense of belongingness (connection, intimacy, caring — the "we" theme). These are the two common themes in life stories.'
  },
  {
    quiz: 1, chapter: L2, difficulty: 'H', type: 'mcq',
    q: 'Which two personality traits are described as PROTECTIVE for heart health — and why is that notable?',
    choices: [
      'Openness and extraversion; both increase with age',
      'Agreeableness and conscientiousness; these are the same two Big Five traits that increase with age',
      'Neuroticism and openness; both decrease with age',
      'Extraversion and agreeableness; both remain stable with age'
    ],
    correct: 1,
    explanation: 'Agreeableness and conscientiousness are the protective traits — and they are precisely the two Big Five traits that INCREASE with age. On average, aging shifts people toward the cardioprotective end of both. Type A (Friedman & Rosenman, 1974) and Type D (distressed: negative affectivity + social inhibition) are the risk factors.'
  },

  // ---------- Focus area 4: Ageism and its forms ----------
  {
    quiz: 1, chapter: L3, difficulty: 'E', type: 'mcq',
    q: 'Which statement about ageism is TRUE?',
    choices: [
      'Ageism can only be directed at adults over 65',
      'Ageism is prejudice and discrimination based on chronological age, and can be faced by someone of any age',
      'Ageism refers only to institutional policies, not individual attitudes',
      'Positive stereotypes about older adults are not a form of ageism'
    ],
    correct: 1,
    explanation: 'Ageism is prejudice and discrimination faced by someone due to their CHRONOLOGICAL age, and it can be faced by someone of ANY age. Option D is also false — that describes benevolent ageism, which the ASA guide explicitly counts as ageism.'
  },
  {
    quiz: 1, chapter: L3, difficulty: 'H', type: 'mcq',
    q: 'A rural town’s status hierarchy shifted over three generations: elders who once held authority through land ownership and oral knowledge are now seen as out of touch as the town industrialized and young people moved into tech work. Which explanation fits best?',
    choices: ['Terror management theory', 'Modernization hypothesis', 'Inoculation hypothesis', 'Age-as-a-leveler'],
    correct: 1,
    explanation: 'MODERNIZATION HYPOTHESIS: increased urbanization/industrialization means older adults are seen as irrelevant and unable to help drive younger populations — they become devalued. This is a sociological/historical account. TMT would be the answer if the stem described death anxiety or avoidance behavior.'
  },
  {
    quiz: 1, chapter: L3, difficulty: 'M', type: 'short',
    q: 'Name and briefly define the four types of ageism identified by the World Economic Forum.',
    correct: ['personal institutional intentional unintentional'],
    explanation: 'PERSONAL — individuals hold prejudiced beliefs about aging. INSTITUTIONAL — discrimination through organizational policies and practices (e.g., excluding older adults from hires). INTENTIONAL — deliberate discrimination against an older adult. UNINTENTIONAL — unconscious biases exclude older adults. They function as a 2×2: Personal/Institutional = WHERE it lives; Intentional/Unintentional = WHETHER it was meant.'
  },
  {
    quiz: 1, chapter: L3, difficulty: 'H', type: 'mcq',
    q: 'An older Latina woman reports that her experiences of discrimination cannot be separated into "racism plus sexism plus ageism" — they combine into something distinct. Which hypothesis describes this?',
    choices: ['Age-as-a-leveler', 'Inoculation hypothesis', 'Multiple jeopardy hypothesis (Deborah King)', 'Modernization hypothesis'],
    correct: 2,
    explanation: 'MULTIPLE JEOPARDY (Deborah King): an individual with multiple marginalized identities experiences COMPOUNDED disadvantages from the INTERACTION of those identities. The disadvantages multiply rather than simply add — which is exactly the "cannot be separated" point.'
  },
  {
    quiz: 1, chapter: L3, difficulty: 'M', type: 'mcq',
    q: 'Ng (2021) analyzed a 1.1-billion-word media database in the US and UK. What was the key finding?',
    choices: [
      'Negative descriptors of older adults outnumber positive or neutral ones by 6:1',
      'Positive descriptors outnumber negative ones by 2:1',
      'Older adults appear in only 6% of media coverage',
      'Media coverage of aging increased sixfold over a decade'
    ],
    correct: 0,
    explanation: 'Negative descriptors outnumber positive OR neutral ones by 6:1. Four checkable details: 1.1 billion words, US and UK, 6:1, Ng 2021.'
  },
  {
    quiz: 1, chapter: L3, difficulty: 'H', type: 'mcq',
    q: 'A hospital newsletter reads: "Our seniors are still so sharp — they’re truly young at heart!" Which set of ASA guide problems does this contain?',
    choices: [
      'None — it is a compliment',
      'Patronizing "our seniors" + "still" implying older people do not do the activity + "young at heart" implying being old is bad',
      'Only the use of the word "seniors"',
      'Institutional and intentional ageism'
    ],
    correct: 1,
    explanation: 'Three separate ASA violations in one sentence: "our seniors" is patronizing and "seniors" is on the avoid list; "still" implies older people do not normally do the activity ("Drop the word still"); and "young at heart" implies being old is bad. This is also benevolent ageism — a positive stereotype is still a stereotype.'
  },
  {
    quiz: 1, chapter: L3, difficulty: 'M', type: 'mcq',
    q: 'In the Geena Davis Institute study, what percentage of females aged 50+ had leading roles, and what proportion of films passed the Ageless Test?',
    choices: [
      '25% had leading roles; 0% of films passed',
      '0% had leading roles; 1 in 4 films (25%) passed',
      '10% had leading roles; half of films passed',
      '0% had leading roles; no films passed'
    ],
    correct: 1,
    explanation: '0% of females aged 50+ had leading roles, and only 1 in 4 films (25%) passed the Ageless Test by having a non-stereotypical female character age 50+. Do not swap these two numbers — 25% is the film pass rate, 0% is the leading-role rate.'
  },
  {
    quiz: 1, chapter: L3, difficulty: 'H', type: 'mcq',
    q: 'Compared with male characters 50+, female characters 50+ were most disproportionately likely (7×) to be depicted as:',
    choices: ['Frumpy', 'Feeble', 'Homebound', '"Senile"'],
    correct: 2,
    explanation: 'HOMEBOUND at 7× is the largest multiplier and the outlier. "Senile," feeble and frumpy are each 4×; unattractive is 2×. Overall, 56.9% of characters 50+ carried at least one stereotype, two on average — most commonly stubborn (32.8%) and cranky (31.9%).'
  },
  {
    quiz: 1, chapter: L3, difficulty: 'H', type: 'short',
    q: 'Define compassionate ageism and benevolent ageism, and explain why both count as ageism despite sounding positive.',
    correct: ['compassionate protection benevolent positive stereotype', 'compassionate = need protection; benevolent = wise all-knowing'],
    explanation: 'COMPASSIONATE AGEISM = treating older people as needing our protection ("taking care of our poor elderly"); the reality is that older people have agency and are not a separate group to be overseen or a burden to be managed. BENEVOLENT AGEISM = positive stereotyping, e.g., assuming older adults are wise and all-knowing; the reality is that older adults are diverse and do not have all the answers. Both are ageism because both substitute a GROUP ASSUMPTION for the individual — the ASA guide says explicitly to avoid positive stereotypes as well as negative ones.'
  }
];
