// Quiz 2 practice quiz — built on Dr. Held's outline of what to expect:
//   1. Why older adults are becoming unhoused
//   2. Difference between public and professional guardians
//   3. CS/HB 1121 — what it did and why it is significant
//   4. Social Security & the impending problem
//   5. Medicare
// MCQ items auto-grade. SAQ items reveal a sample answer + key points, then you self-grade.
// `added: true` flags questions that rely on context that was not on the slides.

const T1 = '1 · Why older adults are becoming unhoused';
const T2 = '2 · Public vs. professional guardians';
const T3 = '3 · CS/HB 1121';
const T4 = '4 · Social Security & the impending problem';
const T5 = '5 · Medicare';

const L4 = 'L4 · National Programs';
const L5 = 'L5 · Florida & Global';

export const exam2Config = {
  timed: false,
  timeLimitMin: 30,
  passThreshold: 80
};

export const exam2 = [
  // ---------------- 1. Unhoused older adults ----------------
  {
    quiz: 2, topic: T1, chapter: L5, type: 'mcq', difficulty: 'E',
    q: 'Which three categories did Dr. Held give for why older adults are becoming unhoused?',
    choices: [
      'Substance use, mental illness, and criminal records',
      'Economic pressures, sudden life changes, and aging and functional barriers',
      'Hurricanes, tourism, and immigration',
      'Poor planning, family conflict, and personal choice'
    ],
    correct: 1,
    explanation: 'The slide’s three categories: economic pressures, sudden life changes, and aging and functional barriers.'
  },
  {
    quiz: 2, topic: T1, chapter: L5, type: 'mcq', difficulty: 'M',
    q: 'A 74-year-old renter lives on a Social Security check that has barely changed while his rent has risen 40% over five years. He falls behind and is evicted. This best illustrates:',
    choices: ['Sudden life changes', 'Economic pressures', 'Aging and functional barriers', 'Nonnormative history-graded influence'],
    correct: 1,
    explanation: 'Economic pressures: a fixed income (the average Social Security payment is $2,071/month) cannot keep up with rising housing costs.'
  },
  {
    quiz: 2, topic: T1, chapter: L5, type: 'mcq', difficulty: 'M',
    q: 'A 79-year-old woman living alone with early dementia forgets to pay rent for several months and is evicted before anyone notices. This best illustrates:',
    choices: ['Economic pressures', 'Sudden life changes', 'Aging and functional barriers', 'Institutional ageism'],
    correct: 2,
    explanation: 'Aging and functional barriers: cognitive decline disrupts the everyday tasks of keeping housing. Living alone (24% of older Floridians) means no one steps in.'
  },
  {
    quiz: 2, topic: T1, chapter: L5, type: 'mcq', difficulty: 'M',
    q: 'Of the 20,000+ people the Homeless Services Network of Central Florida helped in 2025, how many were age 65 or older?',
    choices: ['2,246', '2,895', '3,236', '4,462'],
    correct: 2,
    explanation: '3,236 were 65+ (about 1 in 6). 2,246 were veterans, 2,895 domestic violence survivors, and 4,462 children.'
  },
  {
    quiz: 2, topic: T1, chapter: L5, type: 'mcq', difficulty: 'H', added: true,
    q: 'Research on older homeless adults (the HOPE HOME study) found that about 44% of homeless adults age 50+ had:',
    choices: [
      'Been homeless continuously since young adulthood',
      'Become homeless for the first time after age 50',
      'Never received Social Security',
      'Refused offers of housing'
    ],
    correct: 1,
    explanation: 'Added context: about 44% became homeless for the first time after 50 — many were housed all their lives until a late-life crisis. That is why the three categories focus on late-life events and pressures.'
  },
  {
    quiz: 2, topic: T1, chapter: L5, type: 'saq', difficulty: 'M',
    q: 'Why are older adults becoming unhoused? Explain all three categories from class and give a specific example of each.',
    sampleAnswer: 'Dr. Held grouped the causes into three categories.\n\n(1) Economic pressures — older adults often live on fixed incomes, like the average Social Security check of about $2,071 a month, while rent, property insurance and other costs keep rising. When housing takes most of their income, one missed payment can lead to eviction.\n\n(2) Sudden life changes — a single event can tip someone into homelessness: the death of a spouse (the household loses one of its two Social Security checks), divorce, losing a job late in a career, an eviction, a medical crisis or a hurricane.\n\n(3) Aging and functional barriers — disability, chronic illness, mobility limits or dementia make it harder to work, maintain a home, keep up with bills or navigate benefit applications, especially for people who live alone.\n\nThis is a local problem: in 2025, 3,236 of the people helped by the Homeless Services Network of Central Florida were 65 or older.',
    keyPoints: [
      'Economic pressures, with an example (fixed income vs. rising rent/costs)',
      'Sudden life changes, with an example (spouse’s death, eviction, disaster, job loss, health crisis)',
      'Aging and functional barriers, with an example (disability, dementia, mobility, isolation)',
      'Examples are specific, not just restating the category name',
      'Bonus: a local statistic (3,236 people 65+ in Orange County, 2025)'
    ],
    explanation: 'The category names are from the slide; the examples are added context. Most of the credit is likely for naming all three and explaining each.'
  },

  // ---------------- 2. Public vs. professional guardians ----------------
  {
    quiz: 2, topic: T2, chapter: L5, type: 'mcq', difficulty: 'E',
    q: 'A public guardian is appointed for:',
    choices: [
      'Anyone over 65 who requests one',
      'Vulnerable individuals who have no appropriate family or friends available to serve as guardian',
      'Wealthy individuals who want professional money management',
      'Children whose parents are divorcing'
    ],
    correct: 1,
    explanation: 'Slide definition: a public guardian is appointed for vulnerable individuals who have no appropriate family or friends available to serve.'
  },
  {
    quiz: 2, topic: T2, chapter: L5, type: 'mcq', difficulty: 'E',
    q: 'Which feature best distinguishes a PROFESSIONAL guardian?',
    choices: [
      'They must be a family member',
      'They are paid and provide guardianship services professionally, often for multiple clients',
      'They serve only people with no money',
      'They are always attorneys'
    ],
    correct: 1,
    explanation: 'Slide definition: a professional guardian is a paid guardian who provides guardianship services professionally, often for multiple clients.'
  },
  {
    quiz: 2, topic: T2, chapter: L5, type: 'mcq', difficulty: 'M',
    q: 'A licensed guardian currently manages the finances and care decisions of 14 unrelated adults and is paid fees for her work. She is best classified as a:',
    choices: ['Family guardian', 'Public guardian only', 'Professional guardian', 'Health care surrogate'],
    correct: 2,
    explanation: 'Paid + does it as a job + multiple clients = professional guardian. (Added: in Florida, anyone who has served 3 or more unrelated wards is a professional guardian.)'
  },
  {
    quiz: 2, topic: T2, chapter: L5, type: 'mcq', difficulty: 'M',
    q: 'What did CS/HB 1121 require of public and professional guardians?',
    choices: [
      'A law degree',
      'Alzheimer’s and dementia training',
      'That they serve no more than two wards',
      'That they be family members'
    ],
    correct: 1,
    explanation: 'The law required Alzheimer’s and dementia training for public and professional guardians. (Added: specifically 1 hour of Alzheimer’s disease and related disorders training within professional guardians’ continuing education.)'
  },
  {
    quiz: 2, topic: T2, chapter: L5, type: 'mcq', difficulty: 'H', added: true,
    q: 'Why does the slide group "public AND professional" guardians together for the dementia training requirement?',
    choices: [
      'Because they are the same thing',
      'Because under Florida law, anyone who has served 3 or more unrelated wards is a professional guardian — which includes public guardians',
      'Because public guardians are always paid by their wards',
      'Because family guardians are exempt from all training'
    ],
    correct: 1,
    explanation: 'Added context: Florida defines a professional guardian as anyone who has served 3+ non-relative wards, and that definition includes public guardians. So one training requirement covers both.'
  },
  {
    quiz: 2, topic: T2, chapter: L5, type: 'saq', difficulty: 'M',
    q: 'Explain the difference between a public guardian and a professional guardian. Include who each serves and one reason the difference matters.',
    sampleAnswer: 'A guardian is someone a court appoints to make decisions for a person who has been found unable to make them, often because of dementia.\n\nA public guardian is appointed for vulnerable individuals who have no appropriate family or friends available to serve. They are essentially the guardian of last resort, usually for people with very limited money, and in Florida they work through local public guardian offices.\n\nA professional guardian is a paid guardian who provides guardianship services as a profession, often for many clients at once, and is typically paid from the ward’s estate.\n\nThe difference matters because in both cases the guardian is not a relative who knows the person, and a professional guardian may be responsible for many people at once — which is why oversight and training are important. CS/HB 1121 responded by requiring Alzheimer’s/dementia training for both and giving the state more power to investigate and fine professional guardians.',
    keyPoints: [
      'Public guardian = for people with no appropriate family or friends available',
      'Professional guardian = paid, as a profession, often for multiple clients',
      'Who each typically serves (public: usually limited means; professional: many clients)',
      'Why it matters: vulnerability of wards / need for oversight and training (HB 1121)'
    ],
    explanation: 'Both definitions are on the slide word for word — make sure you can reproduce them.'
  },
  {
    quiz: 2, topic: T2, chapter: L5, type: 'saq', difficulty: 'H',
    q: 'Florida now requires dementia training for public and professional guardians. Should family guardians also be required to complete dementia training before making healthcare and financial decisions for a loved one with Alzheimer’s? Take a position.',
    sampleAnswer: 'Yes, with support. Family guardians make exactly the same health and financial decisions as professional guardians, and people with Alzheimer’s are especially vulnerable to poor decisions, neglect and financial exploitation. Understanding how dementia progresses, how it affects decision-making capacity and behavior, and what end-of-life choices will come up would help families make better, more consistent decisions. The ward’s protection should not depend on whether the guardian happens to be paid.\n\nThe concern is that families are already stretched thin as caregivers, and a mandatory requirement could discourage relatives from serving, pushing more people into public guardianship. So the training should be short, free and available online — a requirement that informs rather than burdens.',
    keyPoints: ['A clear position', 'At least one supporting reason', 'Addresses the opposing concern', 'Ties to the vulnerability of people with dementia'],
    explanation: 'This was an in-class discussion question. Either side can earn full credit if it is argued well.'
  },

  // ---------------- 3. CS/HB 1121 ----------------
  {
    quiz: 2, topic: T3, chapter: L5, type: 'mcq', difficulty: 'E',
    q: 'CS/HB 1121 changed long-term care access by:',
    choices: [
      'Eliminating all waitlists for services',
      'Creating a statewide pre-enrollment list and expanding the role of ADRCs in screening, referrals, and placement',
      'Transferring long-term care to the federal government',
      'Requiring all older adults to enter nursing homes'
    ],
    correct: 1,
    explanation: 'The law created a statewide pre-enrollment list and expanded the role of Aging and Disability Resource Centers (ADRCs) in screening, referrals and placement.'
  },
  {
    quiz: 2, topic: T3, chapter: L5, type: 'mcq', difficulty: 'E',
    q: 'Under CS/HB 1121, Home Care for the Elderly subsidies may now be used for:',
    choices: ['Rent and utilities', 'Food and nutritional supplements', 'Car payments', 'Vacation travel'],
    correct: 1,
    explanation: 'The law expanded allowable Home Care for the Elderly subsidies to include food and nutritional supplements.'
  },
  {
    quiz: 2, topic: T3, chapter: L5, type: 'mcq', difficulty: 'M',
    q: 'Which of the following was NOT one of the changes made by CS/HB 1121?',
    choices: [
      'A statewide pre-enrollment list for services',
      'Food and nutritional supplements added to Home Care for the Elderly subsidies',
      'Alzheimer’s and dementia training for public and professional guardians',
      'Raising the full retirement age for Social Security'
    ],
    correct: 3,
    explanation: 'Social Security is a federal program — a Florida law cannot change it. Raising the full retirement age is one of the four national reform options from Lecture 4.'
  },
  {
    quiz: 2, topic: T3, chapter: L5, type: 'mcq', difficulty: 'M',
    q: 'According to the slide, the main significance of CS/HB 1121’s long-term care changes is that they:',
    choices: [
      'Reduce the number of older adults in Florida',
      'Affect how quickly older adults connect with services',
      'Increase Medicare benefits',
      'Allow family members to be paid as guardians'
    ],
    correct: 1,
    explanation: 'The slide’s "Main Point": it affects how quickly older adults connect with services.'
  },
  {
    quiz: 2, topic: T3, chapter: L5, type: 'mcq', difficulty: 'H', added: true,
    q: 'How does Florida decide who is released first from the pre-enrollment list for long-term care services?',
    choices: [
      'Strictly first-come, first-served',
      'By a priority score based on the person’s level of frailty',
      'By lottery',
      'By county of residence'
    ],
    correct: 1,
    explanation: 'Added context: ADRC screening gives each person a frailty-based priority score, and people are released by priority — Florida’s answer to her "most vulnerable vs. first-come, first-served" discussion question.'
  },
  {
    quiz: 2, topic: T3, chapter: L5, type: 'mcq', difficulty: 'M', added: true,
    q: 'What does "CS" mean in "CS/HB 1121"?',
    choices: ['Community Services', 'Committee Substitute', 'Care Standards', 'Consumer Safety'],
    correct: 1,
    explanation: 'Added context: CS = Committee Substitute (a committee rewrote the original bill); HB = House Bill. It passed in the 2026 session, was signed May 11, 2026, and took effect July 1, 2026.'
  },
  {
    quiz: 2, topic: T3, chapter: L5, type: 'saq', difficulty: 'H',
    q: 'What did CS/HB 1121 do, and why is it significant? Describe at least two changes and explain why they matter for older Floridians.',
    sampleAnswer: 'CS/HB 1121 is a 2026 Florida law on aging and disability services. It made three main changes:\n\n(1) Long-term care access: it created a statewide pre-enrollment list and expanded the role of Aging and Disability Resource Centers (ADRCs) in screening, referrals and placement.\n(2) Home Care for the Elderly: it expanded allowable subsidies to include food and nutritional supplements.\n(3) Dementia: it expanded dementia-related infrastructure and required Alzheimer’s and dementia training for public and professional guardians.\n\nIt is significant because it affects how quickly older adults connect with services — for a frail older adult, a long wait can mean declining or ending up in a nursing home before help arrives. The home care changes help people age in place, which most older adults prefer and which costs the state less than institutional care. And with roughly 506,000 older Floridians with probable Alzheimer’s, requiring guardians to understand dementia protects some of the most vulnerable people in the state, who have lost the legal right to make their own decisions.',
    keyPoints: [
      'Pre-enrollment list + expanded ADRC role (screening, referrals, placement)',
      'HCE subsidies now cover food and nutritional supplements',
      'Alzheimer’s/dementia training for public and professional guardians',
      'Significance: how quickly older adults connect with services',
      'At least one more reason it matters (aging in place, protecting people with dementia, accountability)'
    ],
    explanation: 'The three changes and the "main point" are on the slides; the extra significance points are reasoned/added context.'
  },

  // ---------------- 4. Social Security & the impending problem ----------------
  {
    quiz: 2, topic: T4, chapter: L4, type: 'mcq', difficulty: 'E',
    q: 'Social Security is a government social insurance program funded by:',
    choices: [
      'Each retiree’s personal investment account',
      'Current workers who are not yet eligible for retirement',
      'Income from Medicare',
      'State lotteries'
    ],
    correct: 1,
    explanation: 'Funded by current workers not yet eligible for retirement, through payroll taxes. This pay-as-you-go structure is the root of the impending problem.'
  },
  {
    quiz: 2, topic: T4, chapter: L4, type: 'mcq', difficulty: 'M',
    q: 'An employee and her employer each pay what Social Security tax rate?',
    choices: ['1.45% each', '6.2% each', '12.4% each', '2.9% each'],
    correct: 1,
    explanation: '6.2% each, for 12.4% total. The Medicare tax is 1.45% each (2.9% total). A self-employed worker pays 12.4% + 2.9%.'
  },
  {
    quiz: 2, topic: T4, chapter: L4, type: 'mcq', difficulty: 'M',
    q: 'Someone born in 1960 or later who claims Social Security at 62 receives about what percentage of the full benefit, and for how long?',
    choices: ['100%, for life', '70%, permanently', '70%, until age 67', '124%, permanently'],
    correct: 1,
    explanation: 'Claiming at 62 gives about 70% of the full benefit, permanently reduced. Waiting to 70 gives about 124%, permanently increased; there is no benefit to waiting past 70.'
  },
  {
    quiz: 2, topic: T4, chapter: L4, type: 'mcq', difficulty: 'H', added: true,
    q: 'What is the core reason Social Security faces an impending funding problem?',
    choices: [
      'The money was invested in the stock market and lost',
      'It is pay-as-you-go, and the number of workers paying in for each beneficiary has fallen sharply as boomers retire, people live longer, and birth rates drop',
      'Older adults are claiming benefits fraudulently',
      'The payroll tax was eliminated in 1983'
    ],
    correct: 1,
    explanation: 'Added context: roughly 16 workers per beneficiary in 1950, about 2.7 today, and about 2.3 by 2035. Fewer workers are paying for more retirees, who collect for more years.'
  },
  {
    quiz: 2, topic: T4, chapter: L4, type: 'mcq', difficulty: 'H', added: true,
    q: 'According to the 2026 Trustees Report, what happens when the Social Security retirement trust fund runs out (projected for late 2032) if Congress does nothing?',
    choices: [
      'All benefits stop immediately',
      'Payroll taxes would still cover about 78% of scheduled benefits',
      'Benefits double to use up remaining funds',
      'Only people over 80 continue to receive benefits'
    ],
    correct: 1,
    explanation: 'Added context: workers keep paying payroll taxes, so about 78% of scheduled benefits could still be paid — roughly a 22% cut. Social Security is not "going bankrupt"; the problem is a shortfall.'
  },
  {
    quiz: 2, topic: T4, chapter: L4, type: 'mcq', difficulty: 'M',
    q: 'Which reform option is justified on the slide by the statement "people are living longer than when the program began"?',
    choices: ['Raise the payroll tax', 'Raise or eliminate the wage cap', 'Increase the full retirement age', 'Reduce future benefits'],
    correct: 2,
    explanation: 'Option 3: increase the full retirement age — "people are living longer than when the program began so change who is getting benefits."'
  },
  {
    quiz: 2, topic: T4, chapter: L4, type: 'mcq', difficulty: 'H', added: true,
    q: 'Which reform option would place the cost mostly on HIGH earners?',
    choices: ['Raise the payroll tax', 'Raise or eliminate the wage cap', 'Increase the full retirement age', 'Reduce future benefits'],
    correct: 1,
    explanation: 'Raising or eliminating the wage cap taxes earnings above the current limit ($184,500 in 2026), which only affects high earners. Raising the payroll tax hits every worker; raising the FRA and cutting benefits fall on retirees.'
  },
  {
    quiz: 2, topic: T4, chapter: L4, type: 'saq', difficulty: 'H',
    q: 'Describe how Social Security works and explain its impending problem. Then evaluate TWO of the four reform options discussed in class, giving a pro and a con for each.',
    sampleAnswer: 'Social Security is a government social insurance program that pays monthly benefits to retired workers, people with disabilities, and the families or survivors of deceased workers. It is funded by current workers through payroll taxes — 6.2% from the employee and 6.2% from the employer (12.4% if self-employed). Because today’s workers pay for today’s retirees, the system depends on having enough workers for each beneficiary.\n\nThe impending problem is that this ratio has fallen from about 16 workers per beneficiary in 1950 to fewer than 3 today, because baby boomers are retiring, people live longer, and birth rates have dropped. The trust fund that covers the gap is projected to run out in the early 2030s (late 2032 in the 2026 Trustees Report), after which incoming taxes would cover only about 78% of promised benefits.\n\nOption 2, raising or eliminating the wage cap: Pro — it is progressive, affecting only high earners, and closes a large share of the gap. Con — it is a large tax increase on high earners and weakens the link between what people pay in and what they get out.\n\nOption 3, raising the full retirement age: Pro — it reflects the fact that people live longer than when the program began. Con — it is effectively a benefit cut that falls hardest on lower-income and manual workers, whose life expectancy has not risen as much and who may be physically unable to keep working.',
    keyPoints: [
      'Funded by current workers (payroll tax) — pay-as-you-go',
      'Who it pays: retirees, people with disabilities, survivors/families',
      'The problem: fewer workers per beneficiary (boomers, longer lives, lower birth rates)',
      'Consequence: trust fund runs out early 2030s → ~78% of benefits payable',
      'Two options named correctly, each with a genuine pro AND con'
    ],
    explanation: 'The definition, tax rates and four options are on the slides; the cause and numbers behind the "impending problem" are added context.'
  },

  // ---------------- 5. Medicare ----------------
  {
    quiz: 2, topic: T5, chapter: L4, type: 'mcq', difficulty: 'E',
    q: 'Medicare is best defined as:',
    choices: [
      'Health coverage for people with low income',
      'The country’s health insurance program for people 65+ and many people with disabilities',
      'A retirement savings account',
      'A state-run nursing home program'
    ],
    correct: 1,
    explanation: 'Medicare is the national health insurance program for people 65+ and many people with disabilities — NOT to be confused with Medicaid.'
  },
  {
    quiz: 2, topic: T5, chapter: L4, type: 'mcq', difficulty: 'E',
    q: 'Which part of Medicare is "hospital insurance," covering inpatient hospital care and skilled nursing facilities?',
    choices: ['Part A', 'Part B', 'Part C (Advantage)', 'Part D'],
    correct: 0,
    explanation: 'Part A = hospital insurance: inpatient care in hospitals and skilled nursing facilities, plus some home health and hospice care.'
  },
  {
    quiz: 2, topic: T5, chapter: L4, type: 'mcq', difficulty: 'M',
    q: 'A retiree’s visits to her primary care doctor, outpatient physical therapy, and a new walker are covered under:',
    choices: ['Part A', 'Part B', 'Part D', 'Medicaid only'],
    correct: 1,
    explanation: 'Part B = medical insurance: services from doctors and other providers, outpatient care, home health, durable medical equipment (like a walker), and some preventive services.'
  },
  {
    quiz: 2, topic: T5, chapter: L4, type: 'mcq', difficulty: 'M',
    q: 'Social Security automatically enrolls you in which Medicare coverage?',
    choices: ['Medicare Advantage', 'Part D only', 'Original Medicare (Parts A & B)', 'Medicaid'],
    correct: 2,
    explanation: 'From the slide: Social Security enrolls you in Original Medicare (Part A & Part B). Per Dr. Held’s note, about $202 a month (the Part B premium) is automatically deducted.'
  },
  {
    quiz: 2, topic: T5, chapter: L4, type: 'mcq', difficulty: 'M',
    q: 'Which statement best describes Medicare Advantage plans?',
    choices: [
      'They cover only prescription drugs',
      'They include Parts A & B plus additional benefits such as prescription drugs, vision, hearing, and dental — for which you pay a little more',
      'They are the same as Medicaid',
      'They are free for everyone over 65'
    ],
    correct: 1,
    explanation: 'Her notes: "A & B + additional benefits"; additional: prescription, vision, hearing, dental; subsidized by the federal government; "pay a little more for these."'
  },
  {
    quiz: 2, topic: T5, chapter: L4, type: 'mcq', difficulty: 'E',
    q: 'Medicare Part D covers:',
    choices: ['Dental care', 'Doctor visits', 'Prescription drugs', 'Disability income'],
    correct: 2,
    explanation: 'Part D = prescription drug coverage. (Mnemonic: D = Drugs.)'
  },
  {
    quiz: 2, topic: T5, chapter: L4, type: 'mcq', difficulty: 'H', added: true,
    q: 'Dr. Held stressed that Medicare "is NOT to be confused with Medicaid." What is the key difference?',
    choices: [
      'Medicare is for children; Medicaid is for older adults',
      'Medicare is based on age (65+) or disability and run federally; Medicaid is based on low income and run jointly by the federal government and states',
      'They are identical programs with different names',
      'Medicaid covers only prescription drugs'
    ],
    correct: 1,
    explanation: 'Added context: MediCARE = health care for people 65+ (age-based, federal). MedicAID = aid for people with low income (federal + state). Medicaid, not Medicare, is the main payer for long-term nursing home care.'
  },
  {
    quiz: 2, topic: T5, chapter: L4, type: 'saq', difficulty: 'M',
    q: 'Describe Medicare: who it serves, what each of its parts (A, B, Advantage, D) covers, and how it differs from Medicaid.',
    sampleAnswer: 'Medicare is the country’s health insurance program for people 65 and older and for many people with disabilities. Social Security automatically enrolls people in Original Medicare, which is Part A and Part B.\n\nPart A is hospital insurance: it helps pay for inpatient hospital care and skilled nursing facility care, plus some home health and hospice care.\nPart B is medical insurance: it helps pay for doctors and other providers, outpatient care, home health, durable medical equipment and some preventive services. The premium (about $202 a month) is automatically deducted from Social Security.\nMedicare Advantage plans include Parts A and B plus additional benefits such as prescription drugs, vision, hearing and dental; they are subsidized by the federal government, and members pay a little more for the extras.\nPart D is prescription drug coverage.\n\nMedicare is not Medicaid. Medicare is based on age or disability, while Medicaid is based on low income and is run jointly by the federal government and the states. Medicaid is also the main payer for long-term nursing home care, which Medicare mostly does not cover.',
    keyPoints: [
      'Serves people 65+ and many people with disabilities',
      'Part A = hospital insurance (inpatient, skilled nursing, some home health/hospice)',
      'Part B = medical insurance (doctors, outpatient, equipment, preventive); ~$202/month',
      'Advantage = A + B + extras (drugs, vision, hearing, dental), pay a little more',
      'Part D = prescription drugs',
      'Not Medicaid (Medicaid = low-income, federal + state)'
    ],
    explanation: 'Everything except the Medicaid comparison is on the slides or in her notes. The Medicaid details are added context.'
  }
];
