import React from 'react';
import { Callout, Table, Card, Added } from '../components/Visual.jsx';

const IMG = 'L5/';

export default {
  id: 5,
  quiz: 2,
  lectureNo: 5,
  date: 'Wed, Sep 16',
  title: 'Laws, Policies & Efforts II: Florida & Global',
  subtitle: 'Lecture 5 — Florida’s older population, CS/HB 1121, public vs. professional guardians, older adults becoming unhoused, and global efforts',
  sourceNote: 'Student slide deck (“Second Day of Laws & Policies.pdf”) — no annotated version was provided, so in-class discussion answers are not captured. Several topics appear on the slides as one or two words; the Added boxes fill those in.',
  addedLegend: true,

  blocks: [
    {
      id: '5a',
      title: 'Florida’s Aging Population',
      subtitle: 'Who Florida’s older adults are — by the numbers',
      images: [
        { src: IMG + 'L5_s01.jpg', alt: 'Florida’s aging population slide with county map', caption: 'Map: share of each county’s population that is 60+ (Dept. of Elder Affairs 2024)' },
        { src: IMG + 'L5_s02.jpg', alt: 'Characteristics of Floridians 60+', caption: 'Florida’s 60+ population: ~5,967,000' }
      ],
      content: (
        <>
          <Card title="From the slide">
            <ul className="list-disc ml-5 space-y-1 text-sm">
              <li>Florida is <strong>second in the nation</strong> for its older adult population.</li>
              <li><strong>64%</strong> of Florida’s older adults do <strong>not</strong> have any type of disability.</li>
              <li><strong>1.4 million</strong> older Floridians were born outside the United States.</li>
              <li><strong>30%</strong> speak a language other than English at home; <strong>7%</strong> report limited English proficiency.</li>
              <li>The takeaway quote: programs and services should be designed <em>"with language access, cultural familiarity, and local context in mind."</em></li>
            </ul>
          </Card>

          <p className="mt-3">Floridians age 60+ total about <strong>5,967,000</strong>. The table:</p>
          <Table
            headers={['Characteristic (60+)', 'Number', '% of 60+']}
            rows={[
              ['Below 100% of poverty level', '650,718', '11%'],
              [<strong key="a">Living alone</strong>, '1,432,168', <strong key="a2">24%</strong>],
              ['Minority', '1,444,977', '24%'],
              ['Minority below 100% of poverty level', '178,000', '3%'],
              ['Rural areas', '270,109', '4%'],
              ['Limited English proficiency', '485,944', '8%'],
              [<strong key="b">Probable Alzheimer’s</strong>, '506,069', <strong key="b2">8%</strong>],
              ['85+', '573,014', '9%']
            ]}
          />
          <Callout kind="tip" title="Numbers that connect to other quiz topics">
            <strong>24% live alone</strong> and <strong>11% live below poverty</strong> → risk factors for becoming
            unhoused (block 5h). <strong>~506,000 with probable Alzheimer’s</strong> → why CS/HB 1121 added dementia
            training for guardians (block 5d). <strong>64% have no disability</strong> → a counter to the ageist
            assumption (Lecture 3) that older adults are frail.
          </Callout>
          <Added title="Details worth knowing">
            <p>
              "Second in the nation" refers to the <strong>number</strong> of older residents — only California has more.
              Florida is also one of the "oldest" states by share of population.
            </p>
            <p>
              On the map, the only county in the 50%+ band is <strong>Sumter County</strong>, home of The Villages
              retirement community. Several large South Florida and Gulf Coast counties (Miami-Dade, Broward, Palm Beach,
              Pinellas, Hillsborough, Lee) are circled.
            </p>
            <p>
              <strong>Note the discrepancy:</strong> the bullet says 7% have limited English proficiency, but the table
              says 8%. They likely come from different sources or age bases (65+ vs. 60+). If a question asks, use the one
              it quotes.
            </p>
          </Added>
        </>
      )
    },

    {
      id: '5b',
      title: 'Why Florida? Migration and Florida’s Unique Pressures',
      subtitle: 'Two discussion questions — the answers were not on the slides',
      images: [
        { src: IMG + 'L5_s03.jpg', alt: 'Why are older adults moving to Florida?', caption: 'Discussion question 1' },
        { src: IMG + 'L5_s04.jpg', alt: 'Why might Florida be uniquely affected by population aging?', caption: 'Discussion question 2' }
      ],
      content: (
        <>
          <p>These were class discussion prompts. Since there is no annotated version, the answers below are added.</p>
          <Added title="Why are older adults moving to Florida?">
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>No state income tax</strong> — Social Security, pensions and retirement withdrawals are not taxed by the state.</li>
              <li><strong>Warm climate</strong> — easier on arthritis and mobility, and no snow or ice (fewer winter falls).</li>
              <li><strong>Established retirement communities</strong> and 55+ housing designed for older adults (e.g., The Villages).</li>
              <li><strong>Social networks</strong> — friends and family who already moved there; this "chain migration" is self-reinforcing.</li>
              <li><strong>Leisure and lifestyle</strong> — beaches, golf, and a culture built around retirement.</li>
              <li><strong>Healthcare networks</strong> experienced in treating older patients.</li>
            </ul>
          </Added>
          <Added title="Why might Florida be uniquely affected by population aging?">
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>Hurricanes and extreme heat.</strong> Evacuating frail older adults is hard, and power outages are dangerous for people who need oxygen, dialysis, refrigerated medication or air conditioning. After Hurricane Irma in 2017, 12 residents of a Hollywood Hills nursing home died when the air conditioning failed; Florida then required nursing homes and assisted living facilities to have backup generators.</li>
              <li><strong>Housing costs and property insurance.</strong> Rising rents and insurance premiums squeeze people on fixed incomes (see block 5h).</li>
              <li><strong>Demand for care workers</strong> — home health aides, nurses, geriatricians — outpaces supply.</li>
              <li><strong>Car dependence.</strong> Much of Florida is built for driving; older adults who stop driving can become isolated.</li>
              <li><strong>Dementia.</strong> About half a million older Floridians have probable Alzheimer’s (block 5a).</li>
              <li><strong>Language and culture.</strong> 1.4 million older Floridians were born abroad and 30% speak another language at home, so services need language access.</li>
              <li><strong>Political influence.</strong> A large, high-turnout older population shapes state policy.</li>
            </ul>
          </Added>
        </>
      )
    },

    {
      id: '5c',
      title: 'Guess! That! Number!',
      subtitle: 'Older Floridians’ contributions — answers were revealed in class',
      images: [{ src: IMG + 'L5_s05.jpg', alt: 'Guess That Number slide', caption: 'The blanks were filled in during class' }],
      content: (
        <>
          <p>The slide has three blanks. The answers were given in class and are not on the slide:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li><strong>Fiscal contributions:</strong> the average retiree in Florida contributes $_____ more/less to state and local budgets than they consume in public services.</li>
            <li><strong>Voting participation:</strong> approximately ___% of older Floridians vote.</li>
            <li><strong>Volunteerism:</strong> in 2023, older adults volunteered over ___ million hours, saving the state over $_____.</li>
          </ul>
          <Added title="Likely answers — check these against what she said in class" source="University of Florida Bureau of Economic and Business Research (2013); Florida Dept. of Elder Affairs">
            <p>
              <strong>Fiscal:</strong> a University of Florida (BEBR) study found each retiree has a net
              <strong> positive</strong> effect of about <strong>$2,899 per year</strong> on Florida’s state and local
              budgets. Retirees pay slightly less in taxes than other adults, but use far less in government services
              (especially schools). So the answer is <strong>"more."</strong>
            </p>
            <p>
              <strong>Volunteerism:</strong> the Department of Elder Affairs has reported about <strong>130 million</strong>
              volunteer hours from roughly 1.16 million older volunteers. I could not confirm the year or the dollar figure.
            </p>
            <p><strong>Voting:</strong> I could not find her source — fill this in from class.</p>
          </Added>
          <Callout kind="info" title="The point of the activity">
            All three numbers push back on the idea that older adults are a drain on society — a <strong>modernization
            hypothesis</strong> / ageism theme from Lecture 3. Older Floridians are net contributors, active voters and
            major volunteers.
          </Callout>
        </>
      )
    },

    {
      id: '5d',
      title: 'CS/HB 1121: What the Law Did',
      subtitle: 'Quiz focus — Florida’s 2026 aging and disability services law',
      images: [
        { src: IMG + 'L5_s06.jpg', alt: 'CS/HB 1121 long-term care access changed', caption: 'Change 1: long-term care access' },
        { src: IMG + 'L5_s08.jpg', alt: 'CS/HB 1121 Home Care for the Elderly subsidies', caption: 'Change 2: Home Care for the Elderly subsidies' },
        { src: IMG + 'L5_s09.jpg', alt: 'CS/HB 1121 dementia training for guardians', caption: 'Change 3: dementia training for guardians' }
      ],
      content: (
        <>
          <p>The slides describe three changes. Learn these three as your core answer:</p>
          <div className="space-y-3 my-3">
            <div className="border-l-4 border-sky-500 bg-sky-50 rounded-r p-3">
              <div className="font-bold text-sky-900">1. Changed long-term care access</div>
              <div className="text-sm text-sky-950 mt-1">
                Created a <strong>statewide pre-enrollment list</strong> and expanded the role of <strong>Aging and
                Disability Resource Centers (ADRCs)</strong> in <strong>screening, referrals, and placement</strong>.
                <div className="mt-1"><strong>Main point (slide):</strong> it affects <strong>how quickly older adults connect with services.</strong></div>
              </div>
            </div>
            <div className="border-l-4 border-emerald-500 bg-emerald-50 rounded-r p-3">
              <div className="font-bold text-emerald-900">2. Expanded Home Care for the Elderly (HCE) subsidies</div>
              <div className="text-sm text-emerald-950 mt-1">Allowable subsidies now include <strong>food</strong> and <strong>nutritional supplements</strong>.</div>
            </div>
            <div className="border-l-4 border-violet-500 bg-violet-50 rounded-r p-3">
              <div className="font-bold text-violet-900">3. Dementia infrastructure and guardian training</div>
              <div className="text-sm text-violet-950 mt-1">Expanded dementia-related infrastructure and <strong>required Alzheimer’s and dementia training for public and professional guardians</strong>.</div>
            </div>
          </div>

          <Added title="The bill’s background" source="Florida Senate bill page and House Health & Human Services Committee staff analysis of CS/HB 1121 (2026)">
            <p>
              <strong>The name:</strong> "HB" = House Bill. "CS" = <strong>Committee Substitute</strong> — a committee
              rewrote the original bill. (The quiz outline’s "CS.HB21" refers to this bill.)
            </p>
            <p>
              <strong>Status:</strong> passed the Florida House 113–2 and the Senate 35–0, signed by the Governor on
              <strong> May 11, 2026</strong> (Chapter 2026-74), and took effect <strong>July 1, 2026</strong>.
            </p>
            <p><strong>Key terms:</strong></p>
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>ADRCs (Aging and Disability Resource Centers):</strong> the "front door" to aging services. Florida has <strong>11</strong>, one in each Area Agency on Aging region. They give information and referrals, screen people for eligibility and manage waitlists.</li>
              <li><strong>Pre-enrollment list:</strong> the bill renamed the "waitlist" a "pre-enrollment list." It covers the state’s Alzheimer’s Disease Initiative, Community Care for the Elderly, Home Care for the Elderly, and the Medicaid long-term care program (SMMC LTC).</li>
              <li><strong>Home Care for the Elderly (HCE):</strong> helps people 60+ live in a family home, with a live-in caregiver, instead of a nursing home. Most participants get a basic subsidy of about <strong>$160 a month</strong>. The bill wrote into law what the Department of Elder Affairs was already allowing: using that money for food and nutritional supplements.</li>
            </ul>
            <p><strong>Other provisions not on the slides:</strong></p>
            <ul className="list-disc ml-5 space-y-1">
              <li>Lets the state’s assessment program (CARES) use a recent existing assessment instead of repeating an identical one — duplicate assessments were slowing enrollment.</li>
              <li>Gives the Office of Public and Professional Guardians (OPPG) <strong>subpoena power</strong>, access to confidential court records, and the power to <strong>fine professional guardians up to $500 per violation</strong>.</li>
              <li>The dementia training requirement is specifically <strong>1 hour on Alzheimer’s disease and related disorders</strong> added to professional guardians’ 30-hour continuing education (every 2 years).</li>
              <li>Tightens oversight of Area Agencies on Aging: competitive bidding for purchases over $35,000 and a cap on how much public money can pay their CEOs.</li>
            </ul>
          </Added>
        </>
      )
    },

    {
      id: '5e',
      title: 'Why CS/HB 1121 Is Significant',
      subtitle: 'Quiz focus — the "why it matters" half of the question',
      images: [{ src: IMG + 'L5_s07.jpg', alt: 'Discussion: most vulnerable first or first-come, first-served?', caption: 'Discussion question: should services go to the most vulnerable first, or first-come, first-served?' }],
      content: (
        <>
          <p>
            The only significance statement on the slides is: <strong>it affects how quickly older adults connect with
            services.</strong> Start your answer there, then add reasons like the ones below.
          </p>
          <Added title="Why it matters — four reasons">
            <ol className="list-decimal ml-5 space-y-2">
              <li>
                <strong>Faster access to care.</strong> One statewide list, with ADRCs handling screening and placement and
                no repeated assessments, gets people off waitlists and into services sooner. For a frail older adult, a
                long wait can mean ending up in a nursing home — or declining — before help arrives.
              </li>
              <li>
                <strong>Helps people age in place.</strong> Home care, and now food and nutritional supplements, help older
                adults stay in their own homes. That is what most prefer, and it costs the state much less than a
                nursing home.
              </li>
              <li>
                <strong>Protects people with dementia.</strong> About 506,000 older Floridians have probable Alzheimer’s,
                and many people under guardianship have dementia. Guardians trained in dementia care make better
                decisions, and the new subpoena and fine powers let the state investigate and discipline guardians who
                abuse their role.
              </li>
              <li>
                <strong>More accountability.</strong> Stronger oversight of guardians and Area Agencies on Aging means
                public money and vulnerable people are better protected.
              </li>
            </ol>
          </Added>
          <Added title="Her discussion question: most vulnerable first, or first-come, first-served?">
            <p>
              <strong>Florida’s answer is vulnerability.</strong> The ADRC screening gives each person a
              <strong> priority score based on how frail they are</strong>, and people are released from the list by
              priority score, not by how long they have waited.
            </p>
            <Table
              headers={['', 'Most vulnerable first (priority/frailty)', 'First-come, first-served']}
              rows={[
                ['Pros', 'Help reaches those at greatest risk of harm or nursing home placement; can prevent crises', 'Simple, transparent, feels fair; rewards planning ahead'],
                ['Cons', 'Moderately impaired people may wait indefinitely and get worse; depends on accurate, honest screening', 'A very frail person could wait behind someone with low needs; favors people who know how to navigate the system']
              ]}
            />
          </Added>
          <Callout kind="tip" title="A complete short answer">
            <strong>What it did:</strong> (1) statewide pre-enrollment list + bigger ADRC role in screening, referral and
            placement; (2) HCE subsidies can cover food and nutritional supplements; (3) dementia training for public and
            professional guardians. <strong>Why significant:</strong> faster access to services, helps people age in
            place, and protects people with dementia under guardianship.
          </Callout>
        </>
      )
    },

    {
      id: '5f',
      title: 'Public vs. Professional Guardians',
      subtitle: 'Quiz focus — who they serve and how they differ',
      images: [
        { src: IMG + 'L5_s09.jpg', alt: 'Public guardian and professional guardian definitions', caption: 'Definitions on the slide' },
        { src: IMG + 'L5_s10.jpg', alt: 'Discussion: should family guardians require dementia training?', caption: 'Discussion question on family guardians' }
      ],
      content: (
        <>
          <div className="grid md:grid-cols-2 gap-3 my-3">
            <div className="border-2 border-sky-400 bg-sky-50 rounded-lg p-4">
              <div className="font-bold text-sky-900 text-lg">Public Guardian</div>
              <div className="text-sm text-sky-950 mt-1">
                Appointed for <strong>vulnerable individuals who have no appropriate family or friends available</strong>
                to serve as guardian.
              </div>
            </div>
            <div className="border-2 border-amber-400 bg-amber-50 rounded-lg p-4">
              <div className="font-bold text-amber-900 text-lg">Professional Guardian</div>
              <div className="text-sm text-amber-950 mt-1">
                A <strong>paid</strong> guardian who provides guardianship services <strong>professionally</strong>,
                <strong> often for multiple clients</strong>.
              </div>
            </div>
          </div>
          <Callout kind="tip" title="One-line difference">
            <strong>Public</strong> = the guardian of last resort, for people with no one else (and usually no money).
            <strong> Professional</strong> = a paid guardian who does it as a job, usually for several people.
          </Callout>

          <Added title="What guardianship is" source="Florida House staff analysis of CS/HB 1121; Chapter 744, Florida Statutes">
            <p>
              When a person can no longer make legal decisions about their own life or money — often because of dementia
              — a court can declare them <strong>incapacitated</strong> and appoint a <strong>guardian</strong> to make
              decisions about their person, their property, or both. The person is then called a <strong>ward</strong>.
              A guardian can be a family member or friend, another person, a bank or a corporation. If the person has
              limited money and no one willing to serve, they are assigned a public guardian.
            </p>
            <p>
              Guardianship is serious because it can remove a person’s rights — to manage money, sign contracts, make
              medical decisions, marry, drive or vote. Courts are supposed to consider less restrictive options first,
              such as a durable power of attorney or a health care surrogate, and can limit a guardianship to specific
              areas ("limited" rather than "plenary").
            </p>
          </Added>
          <Added title="Family vs. public vs. professional">
            <Table
              headers={['', 'Family guardian', 'Public guardian', 'Professional guardian']}
              rows={[
                ['Who', 'A relative or friend', 'A state-appointed guardian (Florida has 15 local public guardian offices)', 'A paid guardian serving several wards'],
                ['Serves', 'Their loved one', 'People with limited money and no family or friends available', 'Anyone — often people who can pay, or when family cannot or should not serve'],
                ['Paid?', 'Generally not (expenses may be reimbursed)', 'Publicly funded', 'Yes — fees paid from the ward’s estate, approved by the court'],
                ['Florida training', 'Basic guardianship training (verify hours in class notes)', 'Same as professional (public guardians count as professional guardians)', '40 hours to start + 30 hours every 2 years, now including 1 hour on Alzheimer’s'],
                ['Oversight', 'The court', 'OPPG + the court', 'OPPG + the court']
              ]}
            />
            <p>
              <strong>Why the slide says "public AND professional":</strong> in Florida law, anyone who has served as
              guardian for <strong>3 or more unrelated wards</strong> is a professional guardian — and that includes public
              guardians. So one training requirement covers both.
            </p>
          </Added>
          <Added title="Why oversight matters: the Rebecca Fierle case (Orlando)">
            <p>
              In 2019, an Orlando-area professional guardian, Rebecca Fierle, was found to have placed do-not-resuscitate
              orders on wards against their wishes or their families’; one ward died after he was not resuscitated. She
              resigned from dozens of cases and was later criminally charged, and Florida strengthened its guardianship
              laws in 2020 (for example, requiring court approval before a guardian signs a DNR). CS/HB 1121’s new OPPG
              subpoena and fine powers continue that line of reform.
            </p>
          </Added>
          <Added title="Her discussion question: should family guardians also need dementia training?">
            <Table
              headers={['Yes', 'No / not mandatory']}
              rows={[
                ['Family guardians make the same health and money decisions for someone with Alzheimer’s', 'Adds a burden for families who are already overwhelmed caregivers'],
                ['Dementia-specific knowledge (behavior changes, capacity, end-of-life choices) improves care and reduces abuse and neglect', 'Could discourage relatives from serving, pushing more people into public guardianship'],
                ['Consistency — the ward’s protection should not depend on who the guardian is', 'Families know the person’s values and history, which training cannot replace; free, voluntary training might be enough']
              ]}
            />
          </Added>
        </>
      )
    },

    {
      id: '5g',
      title: 'Guardianship in the News: Wendy Williams',
      subtitle: 'A real-world case of court-appointed control over someone’s finances',
      images: [{ src: IMG + 'L5_s11.jpg', alt: 'Wendy Williams case slide', caption: '57 years old when placed under conservatorship' }],
      content: (
        <>
          <Card title="From the slide">
            <ul className="list-disc ml-5 space-y-1 text-sm">
              <li>Wendy Williams was <strong>57 years old</strong> when she was placed under <strong>conservatorship</strong>.</li>
              <li>Her <strong>financial advisor froze her Wells Fargo bank accounts</strong> and requested a hearing from the <strong>New York Supreme Court</strong> to determine whether she was <strong>legally incapacitated</strong>.</li>
            </ul>
          </Card>
          <Added title="Context and why this case was chosen">
            <p>
              Her guardianship began in 2022. In 2024, her care team announced she had been diagnosed with
              <strong> primary progressive aphasia and frontotemporal dementia (FTD)</strong>. The case has drawn public
              debate about how much control guardians should have and how hard it is for a person to challenge a
              guardianship.
            </p>
            <p><strong>Links to the course:</strong></p>
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>Age 57 is not "old."</strong> FTD often begins between ages 45 and 65. Guardianship and dementia are about <em>functional</em> capacity, not chronological age (Lecture 1).</li>
              <li><strong>The process:</strong> an alarm is raised (here, a financial advisor) → accounts are protected → a court decides whether the person is legally incapacitated → a guardian or conservator is appointed.</li>
              <li><strong>Words:</strong> "conservatorship" and "guardianship" vary by state. Conservatorship usually means control over money; guardianship covers personal and health decisions. Many states — including Florida — use "guardianship" for both.</li>
            </ul>
          </Added>
        </>
      )
    },

    {
      id: '5h',
      title: 'Why Older Adults Are Becoming Unhoused',
      subtitle: 'Quiz focus — three categories of causes, plus local numbers',
      images: [
        { src: IMG + 'L5_s12.jpg', alt: 'Orange County unhoused seniors statistics', caption: 'Homeless Services Network of Central Florida, 2025' },
        { src: IMG + 'L5_s13.jpg', alt: 'Why are older adults becoming unhoused — three categories', caption: 'Three categories: economic pressures, sudden life changes, aging and functional barriers' }
      ],
      content: (
        <>
          <Card title="Orange County (from the slide)">
            <p className="text-sm">
              The Homeless Services Network of Central Florida helped <strong>more than 20,000 people</strong> who were
              homeless or facing homelessness in <strong>2025</strong>:
            </p>
            <ul className="list-disc ml-5 mt-1 text-sm space-y-0.5">
              <li>5,290 were people with disabilities who had already spent more than a year unhoused</li>
              <li>4,462 were children</li>
              <li><span className="font-bold bg-yellow-100 px-1">3,236 were age 65 or older</span> (highlighted on the slide)</li>
              <li>2,895 were survivors of domestic violence</li>
              <li>2,246 were veterans</li>
            </ul>
            <p className="text-xs text-slate-500 mt-2">That is roughly 1 in 6 of the people served.</p>
          </Card>

          <p className="mt-4">
            The slide names <strong>three categories</strong> of causes — just the category names. The explanations below
            are added:
          </p>

          <div className="grid md:grid-cols-3 gap-3 my-3">
            <div className="border-2 border-sky-400 bg-sky-50 rounded-lg p-3">
              <div className="font-bold text-sky-900">1. Economic Pressures</div>
            </div>
            <div className="border-2 border-emerald-400 bg-emerald-50 rounded-lg p-3">
              <div className="font-bold text-emerald-900">2. Sudden Life Changes</div>
            </div>
            <div className="border-2 border-violet-400 bg-violet-50 rounded-lg p-3">
              <div className="font-bold text-violet-900">3. Aging and Functional Barriers</div>
            </div>
          </div>

          <Added title="What each category means">
            <p><strong>1. Economic pressures</strong> — income stays flat while costs rise.</p>
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>Fixed incomes:</strong> the average Social Security check is <strong>$2,071/month</strong> (Lecture 4). The federal SSI benefit for very low-income older adults is only about $994/month in 2026.</li>
              <li><strong>Rising rent</strong> in Central Florida, plus property taxes and insurance for homeowners.</li>
              <li><strong>Little or no retirement savings</strong>, and medical bills and debt.</li>
              <li><strong>Not enough affordable, accessible senior housing</strong>, with long waitlists for subsidized units.</li>
            </ul>
            <p><strong>2. Sudden life changes</strong> — one event tips a household over the edge.</p>
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>Death of a spouse:</strong> the household loses income. A surviving spouse keeps only the larger of the couple’s two Social Security checks, not both — but the rent stays the same.</li>
              <li><strong>Divorce</strong>, or losing a job late in a career (age discrimination makes it hard to get rehired — institutional ageism from Lecture 3).</li>
              <li><strong>Eviction</strong>, a large rent increase, or a landlord selling the building.</li>
              <li><strong>A health crisis</strong> or hospitalization; the <strong>loss of a caregiver</strong>.</li>
              <li><strong>A hurricane</strong> or other disaster that destroys housing.</li>
              <li><strong>Elder financial abuse or scams</strong> that drain savings.</li>
            </ul>
            <p><strong>3. Aging and functional barriers</strong> — the body and mind make keeping a home harder.</p>
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>Disability and chronic illness</strong> limit the ability to work or care for a home.</li>
              <li><strong>Cognitive decline or dementia</strong> — missed rent or bills can lead to eviction before anyone notices.</li>
              <li><strong>Mobility limits</strong> — stairs or an unsafe home when there is no accessible alternative.</li>
              <li><strong>Hard-to-navigate systems</strong> — online applications, paperwork, limited English (8% of older Floridians).</li>
              <li><strong>Social isolation</strong> — 24% of older Floridians live alone, so no one may step in during a crisis.</li>
            </ul>
          </Added>

          <Added title="What research shows" source="Culhane et al. (2019), The Emerging Crisis of Aged Homelessness; Brown, Kushel et al., HOPE HOME study">
            <ul className="list-disc ml-5 space-y-1">
              <li>Older adults are the <strong>fastest-growing group</strong> of people experiencing homelessness. Researchers projected the number of homeless adults 65+ would nearly <strong>triple by 2030</strong>.</li>
              <li>In one major study of homeless adults 50 and older, <strong>about 44% became homeless for the first time after age 50</strong> — many had been housed all their lives until a late-life crisis.</li>
              <li>Homeless adults in their 50s have <strong>geriatric conditions</strong> (falls, trouble with daily activities, memory problems) at rates similar to housed adults about <strong>20 years older</strong>. This is why homeless services often define "older" as 50+. In Lecture 1 terms: their <em>biological</em> age is higher than their <em>chronological</em> age.</li>
            </ul>
          </Added>
          <Callout kind="tip" title="A complete short answer">
            Name all <strong>three categories</strong> and give <strong>one concrete example of each</strong> — e.g., a fixed
            Social Security income that can’t keep up with rent (economic); a spouse dying and the household losing a
            Social Security check (sudden change); dementia leading to missed rent payments (functional). Add the Orange
            County number (3,236 people 65+ in 2025) for extra credit.
          </Callout>
        </>
      )
    },

    {
      id: '5i',
      title: 'Global Efforts: MIPAA and the UN Decade of Healthy Ageing',
      subtitle: 'International frameworks for population aging',
      images: [
        { src: IMG + 'L5_s14.jpg', alt: 'Global efforts slide: MIPAA and UN Decade of Healthy Ageing', caption: 'MIPAA (2002) and the UN Decade of Healthy Ageing (2021–2030)' },
        { src: IMG + 'L5_s17.jpg', alt: 'Video still of older adults outdoors', caption: 'Still from an in-class video (no slide text)' }
      ],
      content: (
        <>
          <div className="grid md:grid-cols-2 gap-3 my-3">
            <div className="border-2 border-sky-300 bg-sky-50 rounded-lg p-4">
              <div className="font-bold text-sky-900">Madrid International Plan of Action on Ageing (MIPAA) — 2002</div>
              <p className="text-sm text-sky-950 mt-1">Adopted by governments from around the world. <strong>Three priorities:</strong></p>
              <ol className="list-decimal ml-5 text-sm text-sky-950 mt-1">
                <li>Older persons and development</li>
                <li>Health and well-being in old age</li>
                <li>Supportive environments for aging</li>
              </ol>
            </div>
            <div className="border-2 border-emerald-300 bg-emerald-50 rounded-lg p-4">
              <div className="font-bold text-emerald-900">UN Decade of Healthy Ageing — 2021–2030</div>
              <p className="text-sm text-emerald-950 mt-1">Led by the <strong>WHO and United Nations</strong> to improve older adults’ lives worldwide. <strong>Four areas:</strong></p>
              <ol className="list-decimal ml-5 text-sm text-emerald-950 mt-1">
                <li><strong>Combat ageism</strong> — reduce stereotypes and discrimination based on age</li>
                <li><strong>Age-friendly environments</strong> — communities that support independence and participation</li>
                <li><strong>Integrated care</strong> — coordinated healthcare for the multiple needs common in older adulthood</li>
                <li><strong>Long-term care</strong> — better support for older adults who need help with daily activities</li>
              </ol>
            </div>
          </div>
          <Callout kind="tip" title="Keep them straight">
            <strong>MIPAA = 2002 = 3 priorities</strong> (development, health, environments).
            <strong> UN Decade = 2021–2030 = 4 areas</strong> (ageism, age-friendly environments, integrated care,
            long-term care).
          </Callout>
          <Added title="Connections">
            <ul className="list-disc ml-5 space-y-1">
              <li>MIPAA was adopted at the UN’s <strong>Second World Assembly on Ageing</strong> in Madrid. The UN General Assembly declared the Decade of Healthy Ageing in December 2020.</li>
              <li>The WHO defines <strong>healthy ageing</strong> as developing and maintaining the <em>functional ability</em> that enables well-being in older age — the same idea as <strong>functional age</strong> in Lecture 1.</li>
              <li>The four areas tie the course together: <strong>combat ageism</strong> → Lecture 3; <strong>age-friendly environments</strong> → the bench specifications in Lecture 4; <strong>long-term care</strong> → Medicaid and CS/HB 1121.</li>
            </ul>
          </Added>
          <Callout kind="warn" title="Unidentified clip">
            The video still (a group of older adults outdoors) has no slide text. If you remember what it showed, add a
            note below.
          </Callout>
        </>
      )
    },

    {
      id: '5j',
      title: 'Global Population Aging: Where Are Populations Aging Better?',
      subtitle: 'Median age trends and an OECD comparison study',
      images: [
        { src: IMG + 'L5_s15.jpg', alt: 'Median age by world region 1950–2050', caption: 'Median age by world region, 1950–2050 (also shown in Lecture 1)' },
        { src: IMG + 'L5_s16.jpg', alt: 'Rapp, Ronchetti & Sicsic (2022) article title page', caption: 'Rapp, Ronchetti & Sicsic (2022), Value in Health 25(9), 1520–1527' }
      ],
      content: (
        <>
          <p>
            The median age chart reappears from Lecture 1: median age is rising in every region, fastest in
            <strong> Europe and North America</strong> and slowest in <strong>Sub-Saharan Africa</strong>.
          </p>
          <p>
            The slide then shows a research article: <strong>Rapp, Ronchetti &amp; Sicsic (2022), "Where Are Populations
            Aging Better? A Global Comparison of Healthy Aging Across Organization for Economic Cooperation and
            Development Countries,"</strong> <em>Value in Health</em>.
          </p>
          <Callout kind="warn" title="Findings not on the slide">
            Only the article’s title page was shown. I have not added its results, to avoid putting words in her mouth. If
            she discussed specific findings, add them in the note box.
          </Callout>
          <Added title="Why this pairing makes sense">
            <p>
              The chart shows that populations are getting older; the article asks whether they are also getting
              <em> healthier</em>. Living longer (life expectancy, Lecture 1) is not the same as living longer in good
              health. That gap is exactly what the UN Decade of Healthy Ageing (block 5i) is trying to close.
            </p>
          </Added>
        </>
      )
    }
  ],

  keyReview: {
    vocab: [
      { term: 'Florida’s older population', tag: 'slide', def: '2nd in the nation. ~5,967,000 Floridians 60+. 64% have no disability; 1.4M born abroad; 30% speak another language at home; 7% limited English.' },
      { term: 'Key 60+ percentages', tag: 'table', tagColor: 'amber', def: 'Below poverty 11% · living alone 24% · minority 24% · rural 4% · limited English 8% · probable Alzheimer’s 8% (~506,000) · 85+ 9%.' },
      { term: 'CS/HB 1121', tag: 'FL law', tagColor: 'red', def: 'Florida’s 2026 aging and disability services law. (1) Statewide pre-enrollment list + bigger ADRC role in screening, referrals, placement. (2) HCE subsidies may cover food and nutritional supplements. (3) Dementia infrastructure + Alzheimer’s/dementia training for public and professional guardians.' },
      { term: 'ADRC', tag: 'agency', tagColor: 'sky', def: 'Aging and Disability Resource Center — the front door to aging services; handles screening, referrals and placement. Florida has 11 (added).' },
      { term: 'Home Care for the Elderly (HCE)', tag: 'program', tagColor: 'sky', def: 'Helps people 60+ live in a family home with a caregiver instead of a nursing home. HB 1121 lets subsidies cover food and nutritional supplements.' },
      { term: 'Public guardian', tag: 'guardians', tagColor: 'green', def: 'Appointed for vulnerable individuals who have no appropriate family or friends available to serve as guardian.' },
      { term: 'Professional guardian', tag: 'guardians', tagColor: 'green', def: 'A paid guardian who provides guardianship services professionally, often for multiple clients.' },
      { term: 'Guardianship', tag: 'added', tagColor: 'violet', added: true, def: 'A court declares a person incapacitated and appoints a guardian over their person, property, or both. The person becomes a "ward" and may lose rights.' },
      { term: 'Wendy Williams', tag: 'case', tagColor: 'amber', def: 'Placed under conservatorship at 57 after her financial advisor froze her Wells Fargo accounts and asked the NY Supreme Court to decide whether she was legally incapacitated.' },
      { term: 'Orange County unhoused (2025)', tag: 'numbers', tagColor: 'amber', def: '20,000+ helped by the Homeless Services Network of Central Florida; 3,236 were 65+.' },
      { term: 'Why older adults become unhoused', tag: 'slide', def: 'Three categories: economic pressures, sudden life changes, aging and functional barriers.' },
      { term: 'MIPAA (2002)', tag: 'global', tagColor: 'violet', def: 'Madrid International Plan of Action on Ageing. 3 priorities: older persons and development; health and well-being in old age; supportive environments.' },
      { term: 'UN Decade of Healthy Ageing (2021–2030)', tag: 'global', tagColor: 'violet', def: 'Led by the WHO and UN. 4 areas: combat ageism; age-friendly environments; integrated care; long-term care.' }
    ],
    laws: [
      { name: 'CS/HB 1121 — why it’s significant', desc: 'Slide: affects how quickly older adults connect with services. Added: faster access (one list, no duplicate assessments), aging in place (home care + nutrition), protection for people with dementia (guardian training, OPPG subpoena and fine powers), more accountability.' },
      { name: 'CS/HB 1121 — status', added: true, desc: 'Passed House 113–2 and Senate 35–0; signed May 11, 2026 (Ch. 2026-74); effective July 1, 2026. CS = Committee Substitute; HB = House Bill.' },
      { name: 'Prioritization', added: true, desc: 'ADRC screening gives a frailty-based priority score; people are released from the pre-enrollment list by priority, not first-come, first-served.' },
      { name: 'Aged homelessness research', added: true, desc: 'Fastest-growing homeless group; 65+ projected to nearly triple by 2030 (Culhane 2019). ~44% of homeless adults 50+ first became homeless after 50 (HOPE HOME). Geriatric conditions ~20 years early.' }
    ],
    methods: [
      { name: 'Public vs. professional guardian', expand: 'Last resort vs. paid job', desc: 'PUBLIC = for people with no appropriate family or friends. PROFESSIONAL = paid, does it as a job, often for multiple clients. (Added: in Florida, serving 3+ unrelated wards makes you professional — including public guardians.)' },
      { name: 'Unhoused — 3 categories', expand: 'Money · Event · Body', desc: 'Economic pressures (fixed income vs. rising rent). Sudden life changes (spouse dies, eviction, hurricane). Aging and functional barriers (dementia, disability, mobility, isolation).' },
      { name: 'HB 1121 in three', expand: 'List · Food · Dementia', desc: 'Pre-enrollment LIST + ADRCs. FOOD and nutritional supplements under HCE. DEMENTIA training for public and professional guardians.' },
      { name: 'MIPAA vs. UN Decade', expand: '2002/3 vs. 2021–30/4', desc: 'MIPAA: 3 priorities (development, health, environments). UN Decade: 4 areas (ageism, age-friendly, integrated care, long-term care).' }
    ]
  },

  questions: [
    {
      q: 'Florida ranks where in the nation for its older adult population?',
      type: 'mcq', difficulty: 'E',
      choices: ['First', 'Second', 'Fifth', 'Tenth'],
      correct: 1,
      explanation: 'The slide states Florida is second in the nation for its older adult population. (Added: by number, only California has more.)'
    },
    {
      q: 'What percentage of Florida’s older adults do NOT have any type of disability?',
      type: 'mcq', difficulty: 'M',
      choices: ['24%', '36%', '64%', '89%'],
      correct: 2,
      explanation: '64% of Florida’s older adults have no disability — a counter to the ageist assumption that older adults are frail. (24% is the share living alone.)'
    },
    {
      q: 'According to the Florida 60+ table, about what share of older Floridians live alone?',
      type: 'mcq', difficulty: 'M',
      choices: ['4%', '11%', '24%', '64%'],
      correct: 2,
      explanation: '1,432,168 people, or 24% of Floridians 60+, live alone. 11% are below poverty; 4% are rural.'
    },
    {
      q: 'Under CS/HB 1121, which organizations gained an expanded role in screening, referrals and placement?',
      type: 'mcq', difficulty: 'E',
      choices: ['Area hospitals', 'Aging and Disability Resource Centers (ADRCs)', 'The Social Security Administration', 'County courts'],
      correct: 1,
      explanation: 'The law created a statewide pre-enrollment list and expanded the role of ADRCs in screening, referrals and placement.'
    },
    {
      q: 'CS/HB 1121 expanded allowable Home Care for the Elderly subsidies to include:',
      type: 'mcq', difficulty: 'E',
      choices: ['Rent and utilities', 'Food and nutritional supplements', 'Transportation and phones', 'Prescription drugs only'],
      correct: 1,
      explanation: 'The slide: HCE subsidies now include food and nutritional supplements.'
    },
    {
      q: 'According to the slide, what is the MAIN POINT of CS/HB 1121’s changes to long-term care access?',
      type: 'mcq', difficulty: 'M',
      choices: [
        'It lowers the age of eligibility for services to 55',
        'It affects how quickly older adults connect with services',
        'It replaces Medicaid with a state program',
        'It ends waitlists entirely'
      ],
      correct: 1,
      explanation: 'The slide’s "Main Point": it affects how quickly older adults connect with services. It does not end waitlists — it renames and reorganizes them as a statewide pre-enrollment list.'
    },
    {
      q: 'An 81-year-old widow with advanced dementia has no children, no living relatives, and very little money. The court needs to appoint a guardian. Which type is most appropriate?',
      type: 'mcq', difficulty: 'M',
      choices: ['Family guardian', 'Public guardian', 'Professional guardian hired by her bank', 'No guardian is needed'],
      correct: 1,
      explanation: 'A public guardian is appointed for vulnerable individuals who have no appropriate family or friends available to serve as guardian.'
    },
    {
      q: 'Which description matches a PROFESSIONAL guardian?',
      type: 'mcq', difficulty: 'E',
      choices: [
        'An unpaid relative appointed for one family member',
        'A paid guardian who provides guardianship services professionally, often for multiple clients',
        'A judge who reviews guardianship cases',
        'A volunteer who visits nursing homes'
      ],
      correct: 1,
      explanation: 'A professional guardian is paid and provides guardianship services professionally, often for multiple clients.'
    },
    {
      q: 'Wendy Williams was placed under conservatorship at what age, and what triggered the court process?',
      type: 'mcq', difficulty: 'M',
      choices: [
        '67 — her family filed a petition',
        '57 — her financial advisor froze her Wells Fargo accounts and requested a hearing on whether she was legally incapacitated',
        '75 — she moved into a nursing home',
        '57 — she applied for Medicare'
      ],
      correct: 1,
      explanation: 'She was 57. Her financial advisor froze her Wells Fargo bank accounts and asked the New York Supreme Court to determine whether she was legally incapacitated.'
    },
    {
      q: 'In 2025, how many people age 65+ did the Homeless Services Network of Central Florida help?',
      type: 'mcq', difficulty: 'M',
      choices: ['2,246', '3,236', '4,462', '5,290'],
      correct: 1,
      explanation: '3,236 were age 65 or older (highlighted on the slide). 2,246 were veterans, 4,462 children, and 5,290 people with disabilities unhoused more than a year.'
    },
    {
      q: 'A 70-year-old couple rents an apartment on two Social Security checks. The husband dies, the household is left with one check, and within months the widow cannot pay rent. Which category of cause does this BEST illustrate?',
      type: 'mcq', difficulty: 'M', added: true,
      choices: ['Aging and functional barriers', 'Sudden life changes', 'Normative history-graded influence', 'Institutional ageism'],
      correct: 1,
      explanation: 'The trigger is a sudden life change (death of a spouse), which then creates economic pressure. Added context: a surviving spouse keeps only the larger of the couple’s two Social Security benefits, not both.'
    },
    {
      q: 'Which pair is correctly matched?',
      type: 'mcq', difficulty: 'M',
      choices: [
        'MIPAA (2002) — four areas including combating ageism',
        'UN Decade of Healthy Ageing (2021–2030) — combat ageism, age-friendly environments, integrated care, long-term care',
        'UN Decade of Healthy Ageing — three priorities adopted in Madrid',
        'MIPAA — led by the WHO from 2021 to 2030'
      ],
      correct: 1,
      explanation: 'The UN Decade (2021–2030, led by the WHO and UN) has four areas. MIPAA (2002, Madrid) has three priorities: older persons and development; health and well-being in old age; supportive environments.'
    },
    {
      q: 'Explain the three categories of reasons older adults are becoming unhoused, with one example of each.',
      type: 'saq', difficulty: 'M', added: true,
      sampleAnswer: 'First, economic pressures: many older adults live on fixed incomes, such as an average Social Security check of about $2,071 a month, while rent and housing costs keep rising, so housing becomes unaffordable. Second, sudden life changes: a single event, like the death of a spouse (which cuts household income because only one Social Security check remains), an eviction or a hurricane, can push someone into homelessness. Third, aging and functional barriers: disability, mobility problems or dementia can make it hard to keep working, maintain a home or keep up with rent and paperwork. In Orange County in 2025, 3,236 of the people helped by the Homeless Services Network were 65 or older.',
      keyPoints: [
        'Economic pressures + example (fixed income vs. rising rent/costs)',
        'Sudden life changes + example (spouse dies, eviction, disaster, job loss)',
        'Aging & functional barriers + example (disability, dementia, mobility)',
        'Bonus: Orange County 3,236 people 65+ (2025)'
      ],
      explanation: 'The three category names are from the slide; the examples are added context.'
    },
    {
      q: 'Explain the difference between a public guardian and a professional guardian, and why CS/HB 1121 required dementia training for them.',
      type: 'saq', difficulty: 'M',
      sampleAnswer: 'A public guardian is appointed for vulnerable people who have no appropriate family or friends available to serve — the guardian of last resort. A professional guardian is paid to provide guardianship services as a job, often for many clients at once. CS/HB 1121 required Alzheimer’s and dementia training for both because many of the people they make decisions for have dementia; Florida has about 506,000 older adults with probable Alzheimer’s. Trained guardians can make better health and financial decisions and are less likely to neglect or mistreat the people in their care.',
      keyPoints: [
        'Public = for people with no appropriate family or friends',
        'Professional = paid, as a job, often for multiple clients',
        'HB 1121 requires Alzheimer’s/dementia training for both',
        'Reason: many wards have dementia; protects vulnerable people'
      ],
      explanation: 'Definitions and the training requirement are on the slides; the "why" is a reasoned answer (partly added context).'
    },
    {
      q: 'Should services go first to the most vulnerable older adults, or strictly first-come, first-served? Take a position and support it.',
      type: 'saq', difficulty: 'H', added: true,
      sampleAnswer: 'Services should go first to the most vulnerable. For a very frail person, waiting in line behind someone with lower needs could mean a fall, a hospitalization, or being forced into a nursing home. Florida’s system already works this way: ADRC screening gives each person a frailty-based priority score, and people are released from the pre-enrollment list by priority. The downside is that people with moderate needs may wait a long time and decline, so the state should rescreen regularly (Florida does so yearly) and fund enough slots to shorten the list for everyone.',
      keyPoints: [
        'Clear position',
        'At least one reason for that position',
        'Acknowledges the downside of the chosen approach',
        'Bonus: Florida uses frailty-based priority scores (added context)'
      ],
      explanation: 'This was a discussion question; either position can earn credit if it is well supported.'
    },
    {
      q: 'Name the three priorities of MIPAA.',
      type: 'saq', difficulty: 'E',
      sampleAnswer: 'The Madrid International Plan of Action on Ageing (2002) has three priorities: (1) older persons and development, (2) health and well-being in old age, and (3) supportive environments for aging.',
      keyPoints: ['Older persons and development', 'Health and well-being in old age', 'Supportive environments for aging'],
      explanation: 'MIPAA was adopted by governments worldwide in 2002.'
    }
  ]
};
