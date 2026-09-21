import React from 'react';
import { Callout, Table, Card, Added } from '../components/Visual.jsx';

const IMG = 'L4/';

export default {
  id: 4,
  quiz: 2,
  lectureNo: 4,
  date: 'Mon, Sep 14',
  title: 'Laws, Policies & Efforts I: National Programs',
  subtitle: 'Lecture 4 — Age-friendly design, Social Security and its impending shortfall, and Medicare',
  sourceNote: 'Annotated slides (“Annotated Law Policies Slides 1.pdf”). Handwritten notes appear on the Medicare slides.',
  addedLegend: true,

  blocks: [
    {
      id: '4a',
      title: 'Age-Friendly Design: Accessible Public Seating',
      subtitle: 'What "designing for older adults" looks like at the level of a single park bench',
      images: [{ src: IMG + 'L4_s01_p02.jpg', alt: 'Accessible seating specifications diagram', caption: 'Seating specifications shown in class' }],
      content: (
        <>
          <p>
            The slide breaks one accessible bench down into its specifications. These are the details on the slide:
          </p>
          <Table
            headers={['Specification', 'On the slide']}
            rows={[
              ['Seat height', 'Seat should be 450 mm high'],
              ['Seat depth', 'Seat should be 500 mm deep'],
              ['Armrests', 'Armrest 200 mm above the seat'],
              ['Visibility', 'Seating should contrast visually with the background against which it is seen'],
              ['Approach', 'Seating should be approached on a level surface with no change in level between the path and the platform'],
              ['Wheelchair space', 'An accessible space should be provided for a wheelchair user in the general seating area'],
              ['Location', 'Location and microclimate are suitable — sheltered from breeze and direct sunlight; noise levels are acceptable']
            ]}
          />
          <Added title="Why each specification matters">
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>450 mm (~17.7 in) height and armrests:</strong> sitting down and standing up (the "sit-to-stand" transfer) gets harder with reduced leg strength and joint pain. A seat that is not too low plus armrests to push off from makes standing up possible without help.</li>
              <li><strong>Visual contrast:</strong> age-related vision changes (cataracts, reduced contrast sensitivity) make a grey bench on grey pavement hard to see — a fall risk.</li>
              <li><strong>Level approach:</strong> a single step or lip is a trip hazard and a barrier for walkers and wheelchairs.</li>
              <li><strong>Shelter and shade:</strong> older adults regulate body temperature less efficiently, which matters a great deal in Florida heat.</li>
              <li><strong>Seating at all:</strong> people who cannot walk far without resting stay home if there is nowhere to sit along the way — so benches directly affect social participation.</li>
            </ul>
            <p>
              This is an example of the <strong>WHO Age-Friendly Cities</strong> framework, whose first domain is
              <em> outdoor spaces and buildings</em>. It also connects to Lecture 5: <strong>"age-friendly
              environments"</strong> is one of the four action areas of the UN Decade of Healthy Ageing.
            </p>
          </Added>
        </>
      )
    },

    {
      id: '4b',
      title: 'Social Security: What It Is and How It Is Funded',
      subtitle: 'A social insurance program paid for by today’s workers',
      images: [
        { src: IMG + 'L4_s02_p03.jpg', alt: 'Social Security definition and payroll tax table', caption: 'Definition and payroll tax rates' },
        { src: IMG + 'L4_s04_p05.jpg', alt: 'Social Security history summary video and clip', caption: 'In-class videos: SSA “History Summary” and a short news clip' }
      ],
      content: (
        <>
          <Callout kind="info" title="Definition (from the slide)">
            Social Security is a <strong>government social insurance program</strong> that is <strong>funded by current
            workers who are not yet eligible for retirement</strong>, and that provides <strong>monthly financial
            support</strong> to:
            <ul className="list-disc ml-5 mt-1">
              <li>retired workers,</li>
              <li>people with disabilities,</li>
              <li>and the families or survivors of deceased workers.</li>
            </ul>
          </Callout>

          <p className="mt-3">The funding comes from a payroll tax. The slide's table:</p>
          <Table
            headers={['', 'Social Security tax', 'Medicare tax']}
            rows={[
              ['If you work for someone else — you pay', '6.2%', '1.45%'],
              ['Your employer pays', '6.2%', '1.45%'],
              [<strong key="se">If you’re self-employed — you pay</strong>, <strong key="se2">12.4%</strong>, <strong key="se3">2.9%</strong>]
            ]}
          />
          <Callout kind="tip" title="Read the table this way">
            The total is always <strong>12.4% for Social Security and 2.9% for Medicare</strong>. An employee and their
            employer split it evenly. A self-employed person is both, so they pay both halves.
          </Callout>

          <Added title="Key ideas the slide assumes">
            <p>
              <strong>"Pay-as-you-go."</strong> The phrase "funded by current workers" is the most important part of the
              definition. The payroll taxes you pay this year are not saved in an account with your name on it — they pay
              <em> this year’s</em> retirees. Any surplus goes into trust funds (the OASI fund for retirement and
              survivors, and the DI fund for disability). This design is why the program depends on how many workers
              there are for each retiree (block 4e).
            </p>
            <p>
              <strong>FICA and the wage cap.</strong> These payroll taxes are collectively called FICA. The 6.2% Social
              Security tax only applies up to a yearly earnings limit (the "wage cap" or taxable maximum — $184,500 in
              2026). Earnings above the cap are not taxed for Social Security. The 1.45% Medicare tax has no cap.
            </p>
            <p>
              <strong>Worked example:</strong> an employee earning $50,000 pays $3,100 (6.2%) for Social Security and $725
              (1.45%) for Medicare, and their employer pays the same again. A self-employed person earning $50,000 pays
              $6,200 + $1,450.
            </p>
            <p>
              <strong>History (the video).</strong> President Franklin D. Roosevelt signed the Social Security Act on
              August 14, 1935, during the Great Depression, when poverty among older Americans was widespread. Medicare
              was added in 1965.
            </p>
          </Added>
          <Callout kind="warn" title="Unidentified clip">
            The second video still (a speaker with the caption "BUT AFTER…") has no slide text, so I have not assigned it
            a topic. If you remember what it said, add a note below.
          </Callout>
        </>
      )
    },

    {
      id: '4c',
      title: 'Full Retirement Age & When to Claim',
      subtitle: 'Claim at 62, 67 or 70 — a permanent trade-off',
      images: [
        { src: IMG + 'L4_s03_p04.jpg', alt: 'Full retirement age by birth year table', caption: 'Full retirement age by year of birth — "early vs delayed benefits"' },
        { src: IMG + 'L4_s07_p08.jpg', alt: 'Claiming age comparison table', caption: 'Monthly and lifetime benefits by claiming age' }
      ],
      content: (
        <>
          <p>
            <strong>Full retirement age (FRA)</strong> is the age at which you can collect 100% of your earned benefit. It
            depends on your birth year:
          </p>
          <Table
            headers={['Year of birth', 'Full retirement age']}
            rows={[
              ['1943–1954', '66'],
              ['1955', '66 and 2 months'],
              ['1956', '66 and 4 months'],
              ['1957', '66 and 6 months'],
              ['1958', '66 and 8 months'],
              ['1959', '66 and 10 months'],
              [<strong key="a">1960 or later</strong>, <strong key="b">67</strong>]
            ]}
          />
          <Callout kind="tip" title="Memory hook">
            It rises by <strong>2 months per birth year</strong> from 1955 to 1959, then settles at <strong>67 for anyone
            born 1960 or later</strong> — which includes you.
          </Callout>

          <p className="mt-4">The second table compares three claiming ages (assuming a full benefit of about $2,000):</p>
          <Table
            headers={['Claiming age', 'Monthly', '% of full', 'Status for life', 'Lifetime total to 80', 'Lifetime total to 85']}
            rows={[
              [<strong key="1">62 (earliest, with penalty)</strong>, '~$1,400', '70%', 'Permanently reduced', '~$302,400', '~$386,400'],
              [<strong key="2">67 (full)</strong>, '~$2,000', '100%', 'Full base benefit', <strong key="2b">~$312,000</strong>, '~$432,000'],
              [<strong key="3">70 (no extra benefit past 70)</strong>, '~$2,480', '124%', 'Permanently increased', '~$297,600', <strong key="3b">~$446,400</strong>]
            ]}
          />
          <Callout kind="info" title="What the table shows">
            <strong>The right choice depends on how long you live.</strong> If you live to 80, claiming at 67 pays the
            most in total. If you live to 85, waiting until 70 pays the most. Claiming at 62 gives you money sooner but at
            a <strong>permanently</strong> lower rate. There is no reason to wait past 70.
          </Callout>

          <Added title="Where the percentages come from — and the break-even ages">
            <p>
              <strong>Early claiming:</strong> with an FRA of 67, claiming at 62 cuts the benefit by 30%, to 70% of the
              full amount, for life. <strong>Delayed claiming:</strong> each year you wait past FRA adds 8% ("delayed
              retirement credits"), so 3 years × 8% = 24%, which is the 124% on the slide.
            </p>
            <p>
              <strong>Break-even ages</strong>, calculated from the slide's own numbers (ignoring inflation and cost-of-living
              increases): claiming at 67 overtakes claiming at 62 at about <strong>age 79</strong>; claiming at 70
              overtakes claiming at 67 at about <strong>age 82½</strong>. That is why the "to 80" column favors 67 and the
              "to 85" column favors 70.
            </p>
            <p>
              <strong>Why FRA is 67 and not 65:</strong> the 1983 Social Security Amendments gradually raised it from 65
              to 67 to shore up the program's finances. The birth-year table is that phase-in. Raising it again is one of
              the four reform options in block 4e.
            </p>
            <p>
              <strong>Who should claim early:</strong> people with poor health or shorter expected lifespans, or those who
              cannot afford to wait. This links to Lecture 3's intersectionality material — life expectancy differs by
              income and occupation, so a single "best" claiming age does not fit everyone.
            </p>
          </Added>
        </>
      )
    },

    {
      id: '4d',
      title: 'Working While Receiving Benefits: The Earnings Test',
      subtitle: 'What happens if you claim before full retirement age and keep working',
      images: [{ src: IMG + 'L4_s06_p07.jpg', alt: 'What happens if I work and receive benefits', caption: 'Earnings limits for 2026; average monthly payment in red' }],
      content: (
        <>
          <Table
            headers={['Your situation', 'What is withheld (2026)']}
            rows={[
              [<strong key="a">Early benefits (before the year you reach FRA)</strong>, <span key="a2"><strong>$1</strong> in benefits for every <strong>$2</strong> you earn above <strong>$24,480</strong></span>],
              [<strong key="b">The year you reach FRA (before the month you reach it)</strong>, <span key="b2"><strong>$1</strong> for every <strong>$3</strong> you earn above a higher limit of <strong>$65,160</strong></span>],
              [<strong key="c">Once you reach FRA</strong>, <strong key="c2">No withholding</strong>]
            ]}
          />
          <Callout kind="danger" title="Number to know">
            <strong>Average monthly payment: $2,071</strong> (shown in red on the slide). Keep this number in mind for the
            homelessness material in Lecture 5 — it is the income many older adults live on.
          </Callout>
          <Added title="Worked examples and a common misconception">
            <p>
              <strong>Example 1:</strong> a 64-year-old claims early and earns $34,480. That is $10,000 over the $24,480
              limit, so $10,000 ÷ 2 = <strong>$5,000</strong> in benefits is withheld that year.
            </p>
            <p>
              <strong>Example 2:</strong> someone reaching FRA later this year earns $77,160 before their birthday month.
              That is $12,000 over $65,160, so $12,000 ÷ 3 = <strong>$4,000</strong> is withheld.
            </p>
            <p>
              <strong>Misconception:</strong> withheld benefits are not lost forever. At FRA, Social Security recalculates
              the monthly benefit upward to credit the months that were withheld. The rule mainly discourages claiming
              early while still earning a full salary.
            </p>
          </Added>
        </>
      )
    },

    {
      id: '4e',
      title: 'The Impending Problem & Four Reform Options',
      subtitle: 'Quiz focus — why Social Security faces a shortfall and what could fix it',
      images: [{ src: IMG + 'L4_s05_p06.jpg', alt: 'Four options for America’s Social Security system', caption: 'In-class activity: evaluate each option’s pros and cons and give it a grade (A–F)' }],
      content: (
        <>
          <p>
            The slide presents four options and asks you to grade each one. Here is exactly what the slide says:
          </p>
          <div className="grid md:grid-cols-2 gap-3 my-3">
            <div className="border-2 border-sky-300 bg-sky-50 rounded-lg p-3"><div className="font-bold text-sky-900">Option 1: Raise the payroll tax</div><div className="text-sm text-sky-900">Increase the Social Security tax rate paid by workers and employers.</div></div>
            <div className="border-2 border-emerald-300 bg-emerald-50 rounded-lg p-3"><div className="font-bold text-emerald-900">Option 2: Raise or eliminate the wage cap</div><div className="text-sm text-emerald-900">Tax more high-income earnings to replenish the fund.</div></div>
            <div className="border-2 border-violet-300 bg-violet-50 rounded-lg p-3"><div className="font-bold text-violet-900">Option 3: Increase the full retirement age</div><div className="text-sm text-violet-900">People are living longer than when the program began, so change who is getting benefits.</div></div>
            <div className="border-2 border-slate-400 bg-slate-100 rounded-lg p-3"><div className="font-bold text-slate-900">Option 4: Reduce future benefits</div><div className="text-sm text-slate-800">Change the formula used to calculate benefits to reduce costs.</div></div>
          </div>

          <Added title="What the “impending problem” actually is">
            <p>
              The slides show the options but never state the problem itself, so here it is. Because Social Security is
              <strong> pay-as-you-go</strong> (block 4b), it works only if enough workers are paying in for each person
              collecting. That ratio has collapsed:
            </p>
            <ul className="list-disc ml-5 space-y-1">
              <li>About <strong>16 workers per beneficiary in 1950</strong> → about <strong>2.7 today</strong> → projected about <strong>2.3 by 2035</strong>.</li>
              <li><strong>Baby boomers are retiring</strong> in huge numbers — more Americans are turning 65 each year now than at any time in history.</li>
              <li><strong>People live longer</strong> — life expectancy (Lecture 1) has risen, so benefits are paid for more years.</li>
              <li><strong>Birth rates have fallen</strong> — fewer future workers (the narrowing base of the population pyramid from Lecture 1).</li>
              <li><strong>The wage cap</strong> — as more income goes to high earners, a growing share of total earnings is above the cap and escapes the tax.</li>
            </ul>
            <p>
              <strong>The numbers (2026 Trustees Report, June 2026):</strong> the retirement trust fund (OASI) is projected
              to run out in <strong>late 2032</strong>. After that, incoming payroll taxes would cover only about
              <strong> 78% of scheduled benefits</strong> — an automatic across-the-board cut of roughly 22% unless Congress
              acts. With the retirement and disability funds combined, the date is <strong>2034</strong>.
            </p>
            <p>
              <strong>Common misconception:</strong> Social Security is <em>not</em> "going bankrupt" or disappearing.
              Workers keep paying payroll taxes, so most benefits would still be paid. The problem is a
              <strong> shortfall</strong>, not a zero.
            </p>
          </Added>

          <Added title="Pros and cons of each option (to help you grade them)">
            <Table
              headers={['Option', 'Pros', 'Cons', 'Who bears the cost']}
              rows={[
                [<strong key="1">1. Raise payroll tax</strong>, 'Directly closes the gap; cost spread very widely; keeps benefits intact', 'Raises taxes on every worker and employer; hits low-wage workers hardest as a share of income; may discourage hiring', 'Current workers and employers'],
                [<strong key="2">2. Raise/eliminate wage cap</strong>, 'Progressive — only affects high earners; closes a large share of the gap', 'Large tax increase for high earners; weakens the link between what you pay and what you get unless benefits also rise', 'High earners'],
                [<strong key="3">3. Raise FRA</strong>, 'Reflects longer life expectancy; gradual phase-in possible (as in 1983)', 'It is effectively a benefit cut. Hurts manual laborers and lower-income groups, whose life expectancy has not risen as much and who may not be able to keep working', 'Future retirees, especially lower-income and physically demanding jobs'],
                [<strong key="4">4. Reduce benefits</strong>, 'Immediate savings; can be targeted at higher earners', 'Many older adults rely on Social Security for most of their income; raises poverty risk (Lecture 5: unhoused older adults)', 'Future (and possibly current) beneficiaries']
              ]}
            />
            <p>
              In practice, most proposals combine several options so no single group carries the whole cost. Use the note
              box below to record the grades you gave in class.
            </p>
          </Added>
          <Callout kind="tip" title="Short-answer strategy">
            A strong answer has three parts: (1) <strong>the cause</strong> — pay-as-you-go plus fewer workers per
            retiree; (2) <strong>the consequence</strong> — the trust fund runs out in the early 2030s and benefits drop to
            ~78% of scheduled amounts; (3) <strong>at least one option with a pro and a con</strong>.
          </Callout>
        </>
      )
    },

    {
      id: '4f',
      title: 'Medicare: Parts A, B, Advantage (C) and D',
      subtitle: 'Quiz focus — the federal health insurance program for people 65+',
      images: [
        { src: IMG + 'L4_s08_p09.jpg', alt: 'Medicare parts table with handwritten notes', caption: 'Annotated: hospital insurance / medical insurance / A&B + additional benefits / prescription drug coverage' },
        { src: IMG + 'L4_s10_p11.jpg', alt: 'Medicare parts table, full text, with $202 note', caption: 'Annotated: “$202 automatically deducted every month” (Part B)' }
      ],
      content: (
        <>
          <Callout kind="info" title="Definition (from the slide)">
            Medicare is our country's <strong>health insurance program for people 65+</strong> and for many
            <strong> people with disabilities</strong>. <strong>It is NOT to be confused with Medicaid.</strong>
            <strong> Social Security enrolls you in Original Medicare (Part A &amp; Part B).</strong>
          </Callout>

          <Table
            headers={['Part', 'Her label', 'What it covers (slide)', 'Her notes']}
            rows={[
              [<strong key="a">Part A</strong>, <em key="a1">Hospital insurance</em>, 'Helps pay for inpatient care in hospitals and skilled nursing facilities; also pays for some home health care and hospice care', '—'],
              [<strong key="b">Part B</strong>, <em key="b1">Medical insurance</em>, 'Helps pay for services from doctors and other health care providers, outpatient care, home health care, durable medical equipment, and some preventive services', <span key="b2"><strong>"$202 automatically deducted every month"</strong></span>],
              [<strong key="c">Medicare Advantage plans</strong>, <em key="c1">A &amp; B + additional benefits</em>, 'Additional: prescription drugs and benefits such as vision, hearing, and dental', <span key="c2">"*subsidized by federal government" · <strong>"pay a little more for these"</strong></span>],
              [<strong key="d">Part D</strong>, <em key="d1">Prescription drug coverage</em>, '—', '—']
            ]}
          />

          <Callout kind="tip" title="Memory hook">
            <strong>A</strong> = <strong>A</strong>dmitted (hospital) · <strong>B</strong> = <strong>B</strong>asic
            doctor visits · <strong>C</strong> = <strong>C</strong>ombo (Advantage: A + B + extras) ·
            <strong> D</strong> = <strong>D</strong>rugs. "Original Medicare" = A + B only.
          </Callout>

          <Added title="Filling in the gaps">
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>Who pays for Part A?</strong> It is premium-free for most people because they already paid for it through the 1.45% Medicare payroll tax (block 4b) for at least 10 years of work.</li>
              <li><strong>The $202:</strong> the 2026 standard Part B premium is $202.90 per month. For people collecting Social Security it is deducted from the check automatically — that is her note.</li>
              <li><strong>Medicare Advantage = "Part C."</strong> These plans are sold by private insurance companies approved by Medicare; the federal government pays the plan a set amount per member (her "subsidized" note). They usually bundle drug coverage plus vision, hearing and dental, but often restrict you to a network of doctors.</li>
              <li><strong>Part D</strong> is also sold by private plans. Since 2025, a law (the Inflation Reduction Act) caps yearly out-of-pocket drug costs (about $2,100 in 2026) and caps insulin at $35 a month.</li>
              <li><strong>History:</strong> President Lyndon B. Johnson signed Medicare and Medicaid into law in 1965.</li>
              <li><strong>What Medicare does NOT cover:</strong> long-term custodial care (help with bathing, dressing, eating in a nursing home). It covers a skilled nursing facility only short-term after a hospital stay (up to 100 days). Long-term nursing home care is mostly paid by <strong>Medicaid</strong> — see block 4g.</li>
            </ul>
          </Added>
        </>
      )
    },

    {
      id: '4g',
      title: 'Medicare vs. Medicaid',
      subtitle: 'The distinction she said not to confuse',
      images: [{ src: IMG + 'L4_s11_p12.jpg', alt: 'Medicare slide — final version', caption: '“IT IS NOT to be confused with Medicaid.”' }],
      content: (
        <>
          <p>
            The slide makes a point of it — <strong>"IT IS NOT to be confused with Medicaid"</strong> — but does not say
            what Medicaid is. The comparison below is added.
          </p>
          <Added title="Medicare vs. Medicaid side by side">
            <Table
              headers={['', 'Medicare', 'Medicaid']}
              rows={[
                ['Who qualifies', 'Based on AGE (65+) or disability — income does not matter', 'Based on low INCOME and assets'],
                ['Run by', 'The federal government', 'Jointly by the federal government and each state (in Florida, through Statewide Medicaid Managed Care)'],
                ['Funded by', 'Payroll taxes, premiums, federal budget', 'Federal and state budgets'],
                ['Long-term nursing home care', 'Only short-term skilled care after a hospital stay', 'YES — the main payer for long-term care'],
                ['Cost to the person', 'Premiums, deductibles, copays', 'Little or nothing']
              ]}
            />
            <p>
              <strong>Mnemonic:</strong> Medi<strong>CARE</strong> = health <em>care</em> for people 65+. Medic<strong>AID</strong>
              = <em>aid</em> for people with low income.
            </p>
            <p>
              <strong>"Dual eligibles"</strong> are people who qualify for both — typically low-income older adults.
              <strong> This is the bridge to Lecture 5:</strong> Florida's long-term care program (SMMC LTC), whose waitlist
              CS/HB 1121 reformed, is a <em>Medicaid</em> program, not Medicare.
            </p>
          </Added>
        </>
      )
    }
  ],

  keyReview: {
    vocab: [
      { term: 'Social Security', tag: 'federal', def: 'A government social insurance program funded by current workers not yet eligible for retirement. Provides monthly financial support to retired workers, people with disabilities, and families/survivors of deceased workers.' },
      { term: 'Payroll tax rates', tag: 'numbers', tagColor: 'amber', def: 'Employee: 6.2% Social Security + 1.45% Medicare; employer matches. Self-employed: 12.4% + 2.9%.' },
      { term: 'Full retirement age (FRA)', tag: 'numbers', tagColor: 'amber', def: 'Age for 100% of benefits. 66 for those born 1943–1954, rising 2 months per year to 67 for those born 1960 or later.' },
      { term: 'Claiming at 62', tag: 'early', tagColor: 'red', def: '~70% of the full benefit (~$1,400/month in the example), permanently reduced.' },
      { term: 'Claiming at 70', tag: 'delayed', tagColor: 'green', def: '~124% of the full benefit (~$2,480/month), permanently increased. No extra benefit for waiting past 70.' },
      { term: 'Earnings test', tag: '2026', tagColor: 'amber', def: 'Before FRA: −$1 per $2 earned above $24,480. In the FRA year (before the birthday month): −$1 per $3 above $65,160. At FRA: no withholding.' },
      { term: 'Average monthly payment', tag: 'numbers', tagColor: 'amber', def: '$2,071.' },
      { term: 'Pay-as-you-go', tag: 'added', tagColor: 'violet', added: true, def: 'Today’s workers’ payroll taxes pay today’s beneficiaries; surpluses go to the trust funds.' },
      { term: 'Wage cap (taxable maximum)', tag: 'added', tagColor: 'violet', added: true, def: 'Earnings above $184,500 (2026) are not subject to the 6.2% Social Security tax. Option 2 raises or removes it.' },
      { term: 'Medicare', tag: 'federal', def: 'The national health insurance program for people 65+ and many people with disabilities. NOT Medicaid. Social Security enrolls you in Original Medicare (A & B).' },
      { term: 'Medicare Part A', tag: 'hospital', tagColor: 'sky', def: 'Hospital insurance: inpatient hospital and skilled nursing facility care; some home health and hospice.' },
      { term: 'Medicare Part B', tag: 'medical', tagColor: 'sky', def: 'Medical insurance: doctors and other providers, outpatient care, home health, durable medical equipment, some preventive services. ~$202/month deducted automatically.' },
      { term: 'Medicare Advantage (Part C)', tag: 'A+B+', tagColor: 'sky', def: 'A & B plus additional benefits — prescription drugs, vision, hearing, dental. Subsidized by the federal government; you pay a little more for the extras.' },
      { term: 'Medicare Part D', tag: 'drugs', tagColor: 'sky', def: 'Prescription drug coverage.' },
      { term: 'Medicaid', tag: 'added', tagColor: 'violet', added: true, def: 'Joint federal–state health coverage for people with LOW INCOME. Main payer for long-term nursing home care.' }
    ],
    laws: [
      { name: 'The impending problem', added: true, desc: 'Pay-as-you-go + fewer workers per beneficiary (~16 in 1950 → ~2.7 now → ~2.3 by 2035), boomer retirements, longer lives, lower birth rates. 2026 Trustees Report: the OASI trust fund runs out in late 2032, after which ~78% of scheduled benefits are payable.' },
      { name: 'Four reform options (slide)', desc: '1) Raise the payroll tax. 2) Raise or eliminate the wage cap (tax more high-income earnings). 3) Increase the full retirement age (people live longer than when the program began). 4) Reduce future benefits (change the formula).' },
      { name: 'Accessible seating specifications (slide)', desc: 'Seat 450 mm high, 500 mm deep; armrests 200 mm above seat; visual contrast with background; level approach; wheelchair space; sheltered from breeze and direct sun with acceptable noise.' }
    ],
    methods: [
      { name: 'Medicare parts', expand: 'A-B-C-D', desc: 'A = Admitted (hospital). B = Basic doctor visits. C = Combo (Advantage: A+B+extras). D = Drugs.' },
      { name: 'Medicare vs. Medicaid', expand: 'CARE vs. AID', added: true, desc: 'MediCARE = care for people 65+ (age-based, federal). MedicAID = aid for low income (income-based, federal + state; covers long-term care).' },
      { name: 'Claiming table', expand: '62 / 67 / 70', desc: '70% / 100% / 124%. Live to 80 → 67 wins ($312k). Live to 85 → 70 wins ($446k). Break-even (added): 67 beats 62 at ~79; 70 beats 67 at ~82½.' },
      { name: 'Earnings test', expand: '$1 per $2 · $1 per $3 · none', desc: 'Before FRA: $1 per $2 over $24,480. FRA year: $1 per $3 over $65,160. After FRA: nothing withheld.' }
    ]
  },

  questions: [
    {
      q: 'According to the slide, Social Security is funded by:',
      type: 'mcq', difficulty: 'E',
      choices: ['Each retiree’s personal savings account', 'Current workers who are not yet eligible for retirement', 'Medicare premiums', 'State sales taxes'],
      correct: 1,
      explanation: 'Social Security is a government social insurance program funded by current workers not yet eligible for retirement. This is the "pay-as-you-go" design — and the root of the impending problem.'
    },
    {
      q: 'Which groups does Social Security provide monthly financial support to?',
      type: 'mcq', difficulty: 'E',
      choices: ['Only retired workers', 'Retired workers, people with disabilities, and families/survivors of deceased workers', 'Anyone over 65 with low income', 'Only veterans and their survivors'],
      correct: 1,
      explanation: 'The slide lists three groups: retired workers, people with disabilities, and the families or survivors of deceased workers.'
    },
    {
      q: 'A self-employed graphic designer pays what Social Security tax rate?',
      type: 'mcq', difficulty: 'M',
      choices: ['6.2%', '1.45%', '12.4%', '2.9%'],
      correct: 2,
      explanation: 'Self-employed people pay both the employee and employer halves: 12.4% for Social Security and 2.9% for Medicare. An employee pays 6.2% + 1.45% and the employer matches.'
    },
    {
      q: 'What is the full retirement age for someone born in 1962?',
      type: 'mcq', difficulty: 'E',
      choices: ['65', '66', '66 and 6 months', '67'],
      correct: 3,
      explanation: 'Anyone born in 1960 or later has a full retirement age of 67.'
    },
    {
      q: 'Using the slide’s table, a person who expects to live to about 85 would receive the most lifetime money by claiming at:',
      type: 'mcq', difficulty: 'M',
      choices: ['62', '67', '70', 'It makes no difference'],
      correct: 2,
      explanation: 'To age 85: claiming at 62 ≈ $386,400, at 67 ≈ $432,000, at 70 ≈ $446,400. Waiting to 70 wins for long lives. To age 80, claiming at 67 wins ($312,000).'
    },
    {
      q: 'Claiming Social Security at 62 instead of 67 results in:',
      type: 'mcq', difficulty: 'M',
      choices: ['A temporary 30% reduction that ends at 67', 'About 70% of the full benefit, permanently reduced', 'The same benefit, paid for more years', '124% of the full benefit'],
      correct: 1,
      explanation: 'Claiming at 62 gives about 70% of the full benefit (~$1,400 vs ~$2,000 in the example), and the reduction is permanent — "Status for Life: Permanently Reduced."'
    },
    {
      q: 'A 63-year-old claimed benefits early and earns $30,480 this year. How much of their benefit is withheld?',
      type: 'mcq', difficulty: 'H',
      choices: ['$0', '$2,000', '$3,000', '$6,000'],
      correct: 2,
      explanation: 'Before FRA, $1 is withheld for every $2 earned above $24,480 (2026). $30,480 − $24,480 = $6,000 over the limit; $6,000 ÷ 2 = $3,000 withheld.'
    },
    {
      q: 'Which reform option matches the description "tax more high-income earnings to replenish the fund"?',
      type: 'mcq', difficulty: 'E',
      choices: ['Raise the payroll tax', 'Raise or eliminate the wage cap', 'Increase the full retirement age', 'Reduce future benefits'],
      correct: 1,
      explanation: 'Option 2 raises or removes the cap on earnings subject to the Social Security tax, so high earners pay tax on more of their income.'
    },
    {
      q: 'Explain the "impending problem" facing Social Security and evaluate ONE of the four reform options with a pro and a con.',
      type: 'saq', difficulty: 'H', added: true,
      sampleAnswer: 'Social Security is pay-as-you-go: today’s workers’ payroll taxes pay today’s retirees. The number of workers per beneficiary has dropped from about 16 in 1950 to under 3 today because baby boomers are retiring, people are living longer, and birth rates have fallen. The 2026 Trustees Report projects that the retirement trust fund will run out in late 2032; after that, payroll taxes would cover only about 78% of scheduled benefits unless Congress acts.\n\nOne option is raising the full retirement age. Pro: it reflects the fact that people live longer than when the program began. Con: it is effectively a benefit cut that falls hardest on lower-income and manual workers, whose life expectancy has not risen as much and who may be physically unable to work longer.',
      keyPoints: [
        'Pay-as-you-go: current workers fund current beneficiaries',
        'Fewer workers per retiree (boomers retiring, longer lives, lower birth rate)',
        'Trust fund depletion in the early 2030s → only ~78% of benefits payable (a shortfall, not bankruptcy)',
        'Names one of the four options correctly',
        'Gives a real pro AND a real con for that option'
      ],
      explanation: 'The slides list the options; the cause and the numbers are added context. A complete answer connects the cause (demographics + pay-as-you-go) to a specific solution.'
    },
    {
      q: 'Medicare Part A is best described as:',
      type: 'mcq', difficulty: 'E',
      choices: ['Prescription drug coverage', 'Hospital insurance — inpatient hospital and skilled nursing facility care, some home health and hospice', 'Medical insurance for doctor visits', 'A private plan with vision and dental'],
      correct: 1,
      explanation: 'Her label: "Hospital insurance." Part B is medical insurance (doctors), Advantage bundles extras, Part D is drugs.'
    },
    {
      q: 'Your grandmother’s $202 is automatically deducted from her Social Security check each month. According to Dr. Held’s note, this pays for:',
      type: 'mcq', difficulty: 'M',
      choices: ['Medicare Part A', 'Medicare Part B', 'Medicaid', 'Social Security disability'],
      correct: 1,
      explanation: 'Her handwritten note under Part B (medical insurance): "$202 automatically deducted every month." (The 2026 standard Part B premium is $202.90.)'
    },
    {
      q: 'A 70-year-old wants one plan that covers hospital and doctor care plus prescriptions, vision and dental, and is willing to pay a bit more. Which option fits?',
      type: 'mcq', difficulty: 'M',
      choices: ['Original Medicare (Parts A & B)', 'Medicare Advantage plan', 'Medicare Part D alone', 'Medicaid'],
      correct: 1,
      explanation: 'Medicare Advantage = "A & B + additional benefits" (prescription, vision, hearing, dental). Her note: "pay a little more for these."'
    },
    {
      q: 'Which statement about Medicare is TRUE according to the slides?',
      type: 'mcq', difficulty: 'E',
      choices: [
        'Medicare and Medicaid are the same program',
        'Social Security enrolls you in Original Medicare (Parts A and B)',
        'Medicare is only for people with low income',
        'Part D covers hospital stays'
      ],
      correct: 1,
      explanation: 'The slide states: "Social Security enrolls you in Original Medicare (Part A & Part B)" and "IT IS NOT to be confused with Medicaid."'
    },
    {
      q: 'An 82-year-old with advanced dementia needs years of help with bathing, dressing and eating in a nursing home. Which program is the main payer for this long-term care (if she qualifies)?',
      type: 'mcq', difficulty: 'H', added: true,
      choices: ['Medicare Part A', 'Medicare Part B', 'Medicaid', 'Social Security'],
      correct: 2,
      explanation: 'Added context: Medicare covers only short-term skilled nursing care after a hospital stay. Long-term custodial care is mostly paid by Medicaid for people with low income and assets. Florida’s Medicaid long-term care program (SMMC LTC) is exactly the program whose waitlist CS/HB 1121 reformed.'
    },
    {
      q: 'Name three of the accessible seating specifications from the slide and explain why one of them matters for older adults.',
      type: 'saq', difficulty: 'M',
      sampleAnswer: 'Specifications: the seat should be 450 mm high and 500 mm deep, armrests should be 200 mm above the seat, the seat should contrast visually with its background, and it should be reached on a level surface with space for a wheelchair, in a location sheltered from wind and direct sun. Armrests matter because standing up from a seat gets harder with reduced leg strength and joint pain; armrests let a person push off and stand without help.',
      keyPoints: ['Three correct specifications from the slide', 'A reason tied to an age-related change (strength, vision, mobility, heat)'],
      explanation: 'The specifications are on the slide; the reasons are added context (WHO Age-Friendly Cities).'
    }
  ]
};
