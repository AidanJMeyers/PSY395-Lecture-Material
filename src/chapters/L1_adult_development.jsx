import React from 'react';
import { Callout, Table, Card } from '../components/Visual.jsx';

const IMG = 'L1/';

export default {
  id: 1,
  quiz: 1,
  lectureNo: 1,
  date: 'Wed, Aug 26',
  title: 'Adult Development & Foundations of Aging',
  subtitle: 'Lecture 1 — What aging is, how we measure age, and the core theories of adult development',

  blocks: [
    {
      id: '1a',
      title: 'Framing: What Counts as "Old"?',
      subtitle: 'Perceptions of aging are socially constructed, not fixed facts',
      images: [
        { src: IMG + 'L1_s02_p02.jpg', alt: 'Slide: What is old to you?', caption: 'Opening discussion slide' },
        { src: IMG + 'L1_s03_p02.jpg', alt: 'Celebrity quotes about aging', caption: 'Cameron Diaz, Jamie Lee Curtis, Lisa Kudrow, Salma Hayek on aging' }
      ],
      content: (
        <>
          <p>
            Dr. Held opened the course by asking <strong>"What is old to you?"</strong> — and that question is the
            point. There is no objective threshold at which a person becomes "old." The answer shifts by culture, by
            historical era, by the age of the person answering, and by which <em>kind</em> of age you have in mind.
            Most people place "old" roughly 20–30 years beyond wherever they currently are.
          </p>
          <p>
            The celebrity quotes illustrate the competing cultural scripts we absorb about aging. They fall into two camps:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li><strong>Pro-aging / acceptance:</strong> Cameron Diaz ("I'd rather see my face aging than a face that doesn't belong to me at all"); Jamie Lee Curtis (the word "anti-aging" has to be struck).</li>
            <li><strong>Aging as threat:</strong> Lisa Kudrow ("I am scared of having to see myself looking like my grandmother one day").</li>
          </ul>
          <Callout kind="tip" title="Why this matters for the quiz">
            This slide sets up the course's central tension and previews Lecture 3. The way a culture talks about aging
            is not neutral decoration — it becomes the raw material of <strong>ageism</strong>. Keep the phrase
            <em> "anti-aging"</em> in mind; you will see it again as a term the field is actively trying to retire.
          </Callout>
        </>
      )
    },

    {
      id: '1b',
      title: 'What Is Aging? The Life-Span Perspective',
      subtitle: 'Baltes et al. — aging begins at conception, not at 65',
      images: [{ src: IMG + 'L1_s04_p03.jpg', alt: 'Slide: What is aging?', caption: 'Annotated: "continuous"; Life-Span split into (1) early and (2) later' }],
      content: (
        <>
          <p>
            <strong>Aging</strong> is a <strong>biological process that begins at conception and continues throughout
            the lifespan.</strong> Your annotation — <em>"continuous"</em> — is the key word. Aging is not an event that
            switches on in later life; it is an unbroken process running from conception until death. A 12-year-old is
            aging in exactly the same technical sense a 90-year-old is.
          </p>

          <Callout kind="info" title="The Life-Span Perspective (Baltes and colleagues)">
            A framework holding that development is a <strong>lifelong, multidimensional, multidirectional</strong>
            process involving simultaneous <em>growth and decline</em> at every age, shaped by biological,
            psychological, sociocultural and historical forces together. Crucially, no single age period dominates
            development — later life is just as developmentally "real" as childhood.
          </Callout>

          <p>The Life-Span Perspective divides development into <strong>two phases</strong> (your annotation circled "two"):</p>
          <Table
            headers={['Phase', 'Covers', 'Traditional (wrong) assumption']}
            rows={[
              [<span key="a"><strong>(1) Early</strong></span>, 'Childhood and adolescence', 'This is where all the "real" development happens'],
              [<span key="b"><strong>(2) Later</strong></span>, 'Young adulthood, middle age, and old age', 'This is just decline / maintenance']
            ]}
          />
          <p>
            The whole reason this split is taught is to <em>reject</em> the third column. Baltes argued the field had
            wrongly treated development as finished at ~18–20. The Life-Span Perspective insists that <strong>gains and
            losses occur at every stage</strong> — an older adult can lose processing speed while gaining vocabulary,
            expertise and emotional regulation at the same time.
          </p>
          <Callout kind="warn" title="Common exam trap">
            "Aging begins at birth" is <strong>wrong</strong> on this slide. She specified <strong>conception</strong>.
          </Callout>
        </>
      )
    },

    {
      id: '1c',
      title: 'Gerontology vs. Geriatrics · Lifespan vs. Life Expectancy',
      subtitle: 'Four terms that are routinely confused — and routinely tested in pairs',
      images: [{ src: IMG + 'L1_s05_p03.jpg', alt: 'Slide: Gerontology definitions', caption: 'Heavily annotated — all four definitions come from her in-class notes' }],
      content: (
        <>
          <p>
            <strong>Gerontology</strong> is the <strong>multidisciplinary scientific study of aging across the human
            lifespan.</strong> Your annotation stresses it is a <em>holistic approach — "not simply medical."</em>
            Gerontology draws on psychology, sociology, biology, public health, economics, social work and policy.
            Your second note captures its applied aim: <em>"developing programs based on research to help mitigate
            aging concerns."</em>
          </p>

          <div className="grid md:grid-cols-2 gap-3 my-4">
            <div className="border-2 border-sky-300 bg-sky-50 rounded-lg p-3">
              <div className="font-bold text-sky-900 mb-1">Gerontology</div>
              <div className="text-sm text-sky-900">
                The broad, <strong>multidisciplinary study of aging</strong> — biological, psychological and social.
                Holistic, research- and program-oriented. <em>Studies the whole aging person and their context.</em>
              </div>
            </div>
            <div className="border-2 border-violet-300 bg-violet-50 rounded-lg p-3">
              <div className="font-bold text-violet-900 mb-1">Geriatrics</div>
              <div className="text-sm text-violet-900">
                A <strong>specialized branch of medicine</strong> concerned with the <strong>prevention, diagnosis and
                treatment of aging-related disease.</strong> Narrower, clinical, physician-delivered.
              </div>
            </div>
          </div>

          <Callout kind="tip" title="One-line discriminator">
            <strong>Gerontology = the study. Geriatrics = the medicine.</strong> A gerontologist may hold a PhD and
            never treat a patient; a geriatrician is an MD treating older patients.
          </Callout>

          <div className="grid md:grid-cols-2 gap-3 my-4">
            <div className="border-2 border-emerald-300 bg-emerald-50 rounded-lg p-3">
              <div className="font-bold text-emerald-900 mb-1">Lifespan</div>
              <div className="text-sm text-emerald-900">
                The <strong>maximum age attainable for a given species.</strong> A biological ceiling — for humans
                roughly <strong>~120 years</strong> (verified record: Jeanne Calment, 122). It is a property of the
                <em> species</em>, and it has barely moved.
              </div>
            </div>
            <div className="border-2 border-amber-300 bg-amber-50 rounded-lg p-3">
              <div className="font-bold text-amber-900 mb-1">Life expectancy</div>
              <div className="text-sm text-amber-900">
                The <strong>average age at death for people from a similar time period</strong> (and place, and cohort).
                A statistical average, not a ceiling. This is the number that has risen dramatically — from roughly 47
                in 1900 to the high 70s today in the US.
              </div>
            </div>
          </div>

          <Callout kind="warn" title="The classic tested distinction">
            Modern medicine and public health have massively increased <strong>life expectancy</strong> while leaving
            <strong> lifespan</strong> essentially unchanged. More people <em>reach</em> old age; the ceiling on old age
            has not risen. If a question describes a number that <em>changed over the last century</em>, it is life expectancy.
          </Callout>
        </>
      )
    },

    {
      id: '1d',
      title: 'Ways of Measuring Age: Chronological vs. Functional',
      subtitle: 'Her stated focus area #2 — know all four "ages" and the BPS model',
      images: [
        { src: IMG + 'L1_s06_p04.jpg', alt: 'Slide: Chronological vs functional age', caption: 'Annotated: chronological = "actual years"; functional splits into biological, psychological, social' },
        { src: IMG + 'L1_s07_p04.jpg', alt: 'Biopsychosocial model diagram', caption: 'The BPS model — the conceptual parent of the three functional ages' }
      ],
      content: (
        <>
          <p>
            Dr. Held explicitly listed <strong>"ways of measuring age"</strong> as a quiz focus area. There are
            <strong> two broad approaches</strong>, and the second splits into three.
          </p>

          <div className="border-2 border-slate-300 rounded-lg p-4 bg-slate-50 my-4">
            <div className="font-bold text-slate-900 text-lg mb-1">1. Chronological Age</div>
            <p className="text-sm text-slate-700">
              <strong>Actual years since birth</strong> — your annotation: <em>"actual years (classic, e.g. 16 y/o)."</em>
              Objective, easy to measure, and legally useful (voting, driving, Medicare at 65). But it is a
              <strong> poor predictor of actual functioning</strong> — two 75-year-olds can differ enormously. This is
              precisely why ageism based on chronological age is irrational: the number itself tells you very little.
            </p>
          </div>

          <div className="border-2 border-sky-400 rounded-lg p-4 bg-sky-50 my-4">
            <div className="font-bold text-sky-900 text-lg mb-1">2. Functional Age</div>
            <p className="text-sm text-sky-900 mb-3">
              How well a person <strong>actually functions</strong> relative to others. An umbrella term that breaks
              into <strong>three component ages</strong>:
            </p>
            <Table
              headers={['Component age', 'What it measures', 'Indicators from the slide']}
              rows={[
                [<span key="1"><strong>Biological age</strong></span>, 'How well the body is physically functioning', 'Cardiovascular functioning · Respiratory (lung) functioning · Muscle and bone strength · Cellular aging'],
                [<span key="2"><strong>Psychological age</strong></span>, 'How well the mind is functioning; adaptive capacity', 'Reaction time · Memory · Learning ability · Intelligence'],
                [<span key="3"><strong>Social age</strong></span>, 'Roles and expectations relative to social norms', 'Work roles · Family status · Position in the community']
              ]}
            />
          </div>

          <Callout kind="tip" title="Her in-class framing (memorize this sentence)">
            <em>"Based on these other ages, someone is functionally ___ y/o biologically, ___ y/o psychologically,
            and ___ y/o socially."</em> A 70-year-old marathon runner who just started a business and cares for
            grandchildren might be biologically 55, psychologically 50, and socially 45 — while remaining
            chronologically 70.
          </Callout>

          <p>
            <strong>The Biopsychosocial (BPS) model</strong> is where those three components come from. Health and
            behavior emerge from the interaction of three overlapping domains — <strong>biological</strong> (disease and
            bodily health), <strong>psychological</strong> (mental and emotional wellness), and <strong>social</strong>
            (interpersonal interactions, community activities). Physical and mental health sit at the intersection.
            Isolation, imbalanced lifestyle, stress, motivation and health conditions all appear in the overlap zones —
            which is the model's real claim: <strong>these domains are not separable.</strong>
          </p>
          <Callout kind="info" title="Why the BPS model anchors this whole course">
            It is the justification for gerontology being <em>multidisciplinary</em> rather than purely medical. You
            cannot explain an older adult's outcome using biology alone.
          </Callout>
        </>
      )
    },

    {
      id: '1e',
      title: 'Cohorts and the Three Types of Developmental Influence',
      subtitle: 'Normative age-graded · normative history-graded · nonnormative',
      images: [{ src: IMG + 'L1_s08_p05.jpg', alt: 'Slide: Important aging terms — cohort and influences', caption: 'Annotated with her examples: puberty / pandemic, war / car accident' }],
      content: (
        <>
          <p>
            A <strong>cohort</strong> is a <strong>group of people born at the same point in time or within a specific
            timespan.</strong> Cohort matters because people born together move through history together — they hit the
            same wars, recessions, technologies and pandemics at the same developmental moment. When you compare
            80-year-olds to 20-year-olds, some of the difference is <em>aging</em> and some is <em>cohort</em>, and
            separating the two is a central methodological problem in gerontology.
          </p>

          <Table
            headers={['Influence type', 'Definition', 'Who it affects', 'Her example']}
            rows={[
              [
                <span key="1"><strong>Normative age-graded</strong></span>,
                'Experiences that occur with most people at roughly the same age — tied to chronological age. Largely biological or socially scheduled.',
                'Nearly everyone, at a predictable age',
                <span key="1e"><strong>Puberty</strong> — "typically occurs around this time." Also: menopause, starting school, retirement at 65.</span>
              ],
              [
                <span key="2"><strong>Normative history-graded</strong></span>,
                'Events common in the culture at certain times — they define a cohort. Everyone alive experiences them, but at different ages.',
                'A whole cohort/society, at one point in history',
                <span key="2e"><strong>Pandemic, war,</strong> etc. Also: the Great Depression, 9/11, the rise of the internet.</span>
              ],
              [
                <span key="3"><strong>Nonnormative</strong></span>,
                'Random or rare events that affect development in individuals. Unpredictable and not shared by the group.',
                'One individual (or a few)',
                <span key="3e"><strong>Car accident.</strong> Also: winning the lottery, an unexpected death, a rare illness.</span>
              ]
            ]}
          />

          <Callout kind="tip" title="How to tell them apart in one step">
            Ask <strong>"who does this happen to?"</strong> — Everyone at a certain <em>age</em> → age-graded.
            Everyone at a certain <em>time in history</em> → history-graded. Just <em>this person</em> → nonnormative.
          </Callout>
          <Callout kind="warn" title="Watch the overlap">
            The same event can be classified differently depending on framing. COVID-19 was normative history-graded
            for the population; one individual's long-COVID disability would be nonnormative for them.
          </Callout>
        </>
      )
    },

    {
      id: '1f',
      title: 'Primary, Secondary, Tertiary & Optimal Aging',
      subtitle: 'Four types of age-related change — her shorthand: 1° / 2° / 3°',
      images: [{ src: IMG + 'L1_s09_p05.jpg', alt: 'Slide: Primary, secondary, tertiary, optimal aging', caption: 'Annotated across the top: 1° → normal/expected (memory) | 2° → disease-related (cancer) | 3° → rapid loss before death' }],
      content: (
        <>
          <p>Dr. Held wrote her own shorthand across the top of this slide — the cleanest way to hold these four:</p>

          <div className="grid md:grid-cols-2 gap-3 my-4">
            <div className="border-l-4 border-emerald-500 bg-emerald-50 rounded-r p-3">
              <div className="font-bold text-emerald-900">Primary Aging (1°)</div>
              <div className="text-sm text-emerald-900 mt-1">
                <strong>Normal / expected change over time.</strong> Universal, gradual, and <em>not</em> caused by
                illness — it happens to everyone who lives long enough.
                <div className="mt-1"><strong>Her example:</strong> <em>memory</em> changes. Also: graying hair, presbyopia, slower reaction time, reduced skin elasticity.</div>
              </div>
            </div>
            <div className="border-l-4 border-amber-500 bg-amber-50 rounded-r p-3">
              <div className="font-bold text-amber-900">Secondary Aging (2°)</div>
              <div className="text-sm text-amber-900 mt-1">
                <strong>Change related to disease.</strong> Not universal and often <strong>preventable or
                modifiable</strong> — driven by illness, lifestyle and environment.
                <div className="mt-1"><strong>Her example:</strong> <em>cancer</em>. Also: type 2 diabetes, COPD from smoking, heart disease.</div>
              </div>
            </div>
            <div className="border-l-4 border-red-500 bg-red-50 rounded-r p-3">
              <div className="font-bold text-red-900">Tertiary Aging (3°)</div>
              <div className="text-sm text-red-900 mt-1">
                <strong>Rapid loss right before death.</strong> A sharp, accelerated decline across many systems in the
                final period of life — sometimes called <em>terminal drop</em> or <em>terminal decline</em>.
                <div className="mt-1"><strong>Her example:</strong> <em>loss of ambulation, vitals dropping.</em></div>
              </div>
            </div>
            <div className="border-l-4 border-sky-500 bg-sky-50 rounded-r p-3">
              <div className="font-bold text-sky-900">Optimal Aging</div>
              <div className="text-sm text-sky-900 mt-1">
                <strong>People become better with age in certain functions.</strong> The counterweight to a
                decline-only story: some capacities <em>improve</em>.
                <div className="mt-1"><strong>Her example:</strong> <em>knowledge / skill expands.</em> Also: vocabulary, expertise, emotional regulation, crystallized intelligence.</div>
              </div>
            </div>
          </div>

          <Callout kind="tip" title="The distinction that gets tested">
            <strong>Primary vs. secondary is about cause, not severity.</strong> If it happens to everyone simply from
            living longer → primary. If it traces back to a <em>disease or modifiable risk factor</em> → secondary.
            Grey hair is primary; emphysema is secondary. And note that <strong>optimal aging</strong> keeps this
            framework from being a pure deficit model — it pairs naturally with the Life-Span Perspective's insistence
            on simultaneous gains and losses.
          </Callout>
        </>
      )
    },

    {
      id: '1g',
      title: 'Four Core Theories of Adult Development',
      subtitle: 'SST · Continuity · Erikson · SOC — "to be continued through the semester"',
      images: [{ src: IMG + 'L1_s12_p07.jpg', alt: 'Slide: Relevant theories table', caption: 'Annotated: "To be continued through semester"' }],
      content: (
        <>
          <p>
            These four are the theoretical spine of the course. Dr. Held listed <strong>"major contributors to theories
            of adult development and personality"</strong> as a quiz focus area, so know the <em>name, the core claim,
            and one example</em> for each.
          </p>

          <div className="space-y-3 my-4">
            <div className="border-2 border-violet-300 rounded-lg p-4 bg-violet-50">
              <div className="font-bold text-violet-900">1. Socioemotional Selectivity Theory (SST)</div>
              <div className="text-xs text-violet-700 mb-1">Laura Carstensen</div>
              <div className="text-sm text-violet-900">
                People <strong>perceive their time as limited</strong> and therefore <strong>prioritize emotionally
                meaningful experiences and relationships.</strong> The driver is <strong>perceived time remaining</strong>,
                not chronological age. When time feels expansive (youth), people prioritize <em>information-seeking</em>
                and expanding their network. When time feels limited (later life, or terminal illness at any age),
                people prune their social circle to the emotionally closest ties and prioritize present meaning.
                <div className="mt-2 bg-white/70 rounded p-2 border border-violet-200">
                  <strong>Your in-class note:</strong> <em>choosing an M.S. instead of a PhD to have more time to spend
                  with people</em> — a decision driven by weighing time as a limited resource. That is SST reasoning.
                </div>
              </div>
            </div>

            <div className="border-2 border-sky-300 rounded-lg p-4 bg-sky-50">
              <div className="font-bold text-sky-900">2. Continuity Theory</div>
              <div className="text-xs text-sky-700 mb-1">Robert Atchley</div>
              <div className="text-sm text-sky-900">
                People <strong>maintain consistent patterns as they grow older</strong> — behaviors, relationships,
                values, personality traits. <strong>No radical change.</strong> Adults adapt to aging by applying
                <em> familiar strategies</em> to new circumstances, preserving both an internal sense of self and
                external social structures.
                <div className="mt-2 bg-white/70 rounded p-2 border border-sky-200">
                  <strong>Your annotation:</strong> <em>"expected consistency once established as an adult."</em>
                  A lifelong gardener who moves into assisted living takes up container gardening — the activity adapts,
                  the identity continues.
                </div>
              </div>
            </div>

            <div className="border-2 border-amber-300 rounded-lg p-4 bg-amber-50">
              <div className="font-bold text-amber-900">3. Erikson's Psychosocial Theory</div>
              <div className="text-xs text-amber-700 mb-1">Erik Erikson</div>
              <div className="text-sm text-amber-900">
                An <strong>8-stage theory representing the 8 great struggles</strong> Erikson believed people must
                undergo across the lifespan. Each stage is a <strong>crisis</strong> between two poles, and
                <strong> optimal development is contingent on crisis resolution.</strong> Covered in depth in Lecture 2 —
                the two stages relevant to this course are <strong>Generativity vs. Stagnation</strong> and
                <strong> Ego Integrity vs. Despair.</strong>
              </div>
            </div>

            <div className="border-2 border-emerald-300 rounded-lg p-4 bg-emerald-50">
              <div className="font-bold text-emerald-900">4. Selection, Optimization, and Compensation (SOC)</div>
              <div className="text-xs text-emerald-700 mb-1">Paul &amp; Margret Baltes · <strong>*embodies the lifespan perspective</strong></div>
              <div className="text-sm text-emerald-900">
                A <strong>dynamic process and interaction among growth, maintenance, and loss regulation.</strong>
                Your annotation — <em>"concurrent change"</em> — captures the point: these run at the same time, not in
                sequence. SOC describes <em>how</em> people successfully adapt as resources decline:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li><strong>Selection</strong> — narrowing to fewer, higher-priority goals.</li>
                  <li><strong>Optimization</strong> — investing resources (practice, time, effort) into those chosen goals.</li>
                  <li><strong>Compensation</strong> — using new means or aids to maintain performance when old means fail.</li>
                </ul>
                <div className="mt-2 bg-white/70 rounded p-2 border border-emerald-200">
                  <strong>Classic example (Arthur Rubinstein, concert pianist in his 80s):</strong> played
                  <em> fewer pieces</em> (selection), <em>practiced them more</em> (optimization), and <em>slowed the
                  tempo before fast passages</em> so they sounded faster by contrast (compensation).
                </div>
              </div>
            </div>
          </div>

          <Callout kind="warn" title="Highest-yield discrimination on this quiz">
            <strong>SST</strong> = <em>why priorities shift</em> (perceived time → emotional meaning).
            <strong> Continuity</strong> = <em>staying the same</em> (consistent patterns).
            <strong> SOC</strong> = <em>how you adapt to loss</em> (three-part strategy).
            <strong> Erikson</strong> = <em>sequential crises</em>. If a vignette shows someone giving up activities to
            focus on close family → SST. Doing the same things in a modified way → Continuity or Compensation. If the
            stem names select/optimize/compensate → SOC.
          </Callout>
        </>
      )
    },

    {
      id: '1h',
      title: 'Changing Demographics: Population Pyramids & Median Age',
      subtitle: 'Why the population is aging, and what challenges follow',
      images: [
        { src: IMG + 'L1_s13_p07.jpg', alt: 'Slide: Changing times', caption: 'Discussion slide on the shifting population pyramid' },
        { src: IMG + 'L1_s14_p08.jpg', alt: 'Median age chart by world region 1950-2050', caption: 'Median age is rising in every region — steepest in Europe & North America' }
      ],
      content: (
        <>
          <p>
            The classic <strong>population pyramid</strong> was genuinely pyramid-shaped: a wide base of many children
            narrowing to a small tip of few older adults. It is now shifting toward a
            <strong> rectangle (or "pillar")</strong>, and in some countries an inverted pyramid.
          </p>

          <Card title="Why the pyramid is changing">
            <ul className="list-disc ml-5 space-y-1 text-sm">
              <li><strong>Falling birth/fertility rates</strong> — fewer children narrow the base.</li>
              <li><strong>Rising life expectancy</strong> — better medicine, sanitation, nutrition and public health widen the top.</li>
              <li><strong>The Baby Boom cohort</strong> (born 1946–1964) moving into older adulthood — a large bulge working its way up.</li>
              <li><strong>Declining infant and child mortality</strong> — more people survive to old age.</li>
            </ul>
          </Card>

          <Card title="Challenges that follow" className="mt-3">
            <ul className="list-disc ml-5 space-y-1 text-sm">
              <li><strong>Shrinking caregiver pool</strong> — fewer working-age adults per older adult (a rising "dependency ratio").</li>
              <li><strong>Strain on Social Security, Medicare and pensions</strong> — fewer contributors, more recipients.</li>
              <li><strong>Healthcare workforce shortages</strong>, especially in geriatrics and long-term care.</li>
              <li><strong>Housing, transportation and infrastructure</strong> not designed for an older population.</li>
              <li><strong>Increased risk of social isolation</strong> and demand for age-friendly community design.</li>
            </ul>
          </Card>

          <p className="mt-3">
            <strong>The median age chart</strong> shows this globally from 1950 to a 2050 projection. Every region
            trends upward. <strong>Europe and North America</strong> are highest and rising steeply (approaching ~48 by
            2050); <strong>Sub-Saharan Africa</strong> remains the youngest and flattest. Global aging is real but
            unevenly distributed.
          </p>
          <Callout kind="info" title="Connection to Lecture 3">
            The <strong>modernization hypothesis</strong> argues that as societies industrialize and urbanize, older
            adults lose status. Demographic change is the backdrop against which that status question gets contested.
          </Callout>
        </>
      )
    },

    {
      id: '1i',
      title: 'New Research on Aging: Aging Is Not Steady',
      subtitle: 'Three recent findings — aging happens in bursts, not a smooth slope',
      images: [{ src: IMG + 'L1_s15_p08.jpg', alt: 'Slide: New research on aging', caption: 'Lehallier 2019 · Shen 2025 · Mousley 2025' }],
      content: (
        <>
          <p>
            The unifying theme across all three studies: <strong>biological aging is nonlinear.</strong> It does not
            proceed as a smooth, gradual slope — it accelerates in discrete bursts at particular ages. Learn the
            <strong> name, year, and specific ages</strong> for each.
          </p>

          <Table
            headers={['Study', 'Finding', 'Key ages']}
            rows={[
              [
                <span key="1"><strong>Lehallier and colleagues (2019)</strong></span>,
                'The biological aging process is not steady — it accelerates periodically, with the greatest bursts on average at three points.',
                <span key="1a"><strong>34, 60, 78</strong></span>
              ],
              [
                <span key="2"><strong>Shen and colleagues (2025)</strong></span>,
                'Many biological systems change in coordinated, nonlinear patterns, with major transitions at two points.',
                <span key="2a"><strong>44 and 60</strong></span>
              ],
              [
                <span key="3"><strong>Mousley and colleagues (2025)</strong></span>,
                'Identified major turning points in brain network organization. Introduced the idea of "adolescence" extending from 9–32.',
                <span key="3a"><strong>9, 32, 66, 83</strong></span>
              ]
            ]}
          />

          <Callout kind="tip" title="Memory hooks">
            <strong>Lehallier = 3 numbers (34/60/78).</strong> <strong>Shen = 2 numbers (44/60).</strong>
            <strong> Mousley = brain, 4 numbers (9/32/66/83)</strong> plus the surprising claim that
            <strong> adolescence runs 9 to 32.</strong> Note <strong>60 appears in both Lehallier and Shen</strong> —
            the most replicated transition point.
          </Callout>
          <Callout kind="info" title="Why she included this">
            These findings support the Life-Span Perspective (development continues throughout life, with change at
            every stage) and undercut the intuition that aging is a slow uniform decline beginning at a fixed age.
          </Callout>
        </>
      )
    },

    {
      id: '1j',
      title: 'In-Class Media',
      subtitle: 'Video stills shown during Lecture 1',
      images: [
        { src: IMG + 'L1_s10_p06.jpg', alt: 'Video still: testing residents reaction time', caption: 'In-class video: a care-home activity testing residents’ reaction time — a live demonstration of psychological age' },
        { src: IMG + 'L1_s11_p06.jpg', alt: 'Animated video still shown in class', caption: 'Still from an in-class video clip (no accompanying slide text)' }
      ],
      content: (
        <>
          <p>
            Two video slides were shown in Lecture 1 with no text of their own. The first — a care-home reaction-time
            game — is a concrete illustration of <strong>psychological age</strong>: reaction time is one of the four
            indicators listed on the functional-age slide, and it is measurable and trainable rather than fixed by
            chronological age.
          </p>
          <Callout kind="warn" title="Flagged for you">
            The second still has no slide text and no annotation, so I have not assigned it a topic. If you remember
            what this clip was about, add a note below — it will show up in your Review Later tab.
          </Callout>
        </>
      )
    }
  ],

  keyReview: {
    vocab: [
      { term: 'Aging', tag: 'core', def: 'A biological process that begins at conception and continues throughout the lifespan. Continuous — not an event of later life.' },
      { term: 'Life-Span Perspective', tag: 'Baltes', tagColor: 'violet', def: 'Development is lifelong, multidimensional and multidirectional, with gains and losses at every stage. Two phases: early (childhood/adolescence) and later (young adulthood, middle age, old age).' },
      { term: 'Gerontology', tag: 'core', def: 'The multidisciplinary scientific study of aging across the human lifespan. Holistic — not simply medical.' },
      { term: 'Geriatrics', tag: 'core', def: 'The specialized branch of medicine concerned with prevention, diagnosis and treatment of aging-related disease.' },
      { term: 'Lifespan', tag: 'pair', tagColor: 'amber', def: 'The maximum age attainable for a given species (~120 in humans). A biological ceiling; essentially unchanged over time.' },
      { term: 'Life expectancy', tag: 'pair', tagColor: 'amber', def: 'The average age at death for people from a similar time period. A statistical average; has risen dramatically.' },
      { term: 'Chronological age', tag: 'measure', tagColor: 'sky', def: 'Actual years since birth. Objective but a weak predictor of functioning.' },
      { term: 'Functional age', tag: 'measure', tagColor: 'sky', def: 'How well a person actually functions. Umbrella term comprising biological, psychological and social age.' },
      { term: 'Biological age', tag: 'measure', tagColor: 'sky', def: 'Physical functioning: cardiovascular, respiratory (lung), muscle and bone strength, cellular aging.' },
      { term: 'Psychological age', tag: 'measure', tagColor: 'sky', def: 'Mental functioning and adaptive capacity: reaction time, memory, learning ability, intelligence.' },
      { term: 'Social age', tag: 'measure', tagColor: 'sky', def: 'Roles relative to social norms: work roles, family status, position in the community.' },
      { term: 'Biopsychosocial (BPS) model', tag: 'model', tagColor: 'green', def: 'Health and behavior arise from the interaction of biological, psychological and social domains; physical & mental health sit at their intersection.' },
      { term: 'Cohort', tag: 'core', def: 'A group of people born at the same point in time or within a specific timespan.' },
      { term: 'Normative age-graded influences', tag: 'influence', tagColor: 'red', def: 'Occur with most people at a similar age. Example: puberty.' },
      { term: 'Normative history-graded influences', tag: 'influence', tagColor: 'red', def: 'Events common in the culture at certain times; define a cohort. Example: pandemic, war.' },
      { term: 'Nonnormative influences', tag: 'influence', tagColor: 'red', def: 'Random or rare events affecting development in individuals. Example: car accident.' },
      { term: 'Primary aging (1°)', tag: 'type', tagColor: 'green', def: 'Normal/expected change over time. Universal, not disease-caused. Example: memory changes, graying hair.' },
      { term: 'Secondary aging (2°)', tag: 'type', tagColor: 'green', def: 'Change related to disease. Not universal; often preventable. Example: cancer, type 2 diabetes.' },
      { term: 'Tertiary aging (3°)', tag: 'type', tagColor: 'green', def: 'Rapid loss right before death (terminal drop). Example: loss of ambulation, dropping vitals.' },
      { term: 'Optimal aging', tag: 'type', tagColor: 'green', def: 'People become better with age in certain functions. Example: knowledge/skill expands, vocabulary, expertise.' }
    ],
    laws: [
      { name: 'Socioemotional Selectivity Theory (Carstensen)', desc: 'People perceive their time as limited and prioritize emotionally meaningful experiences and relationships. Driven by perceived time remaining, not age.' },
      { name: 'Continuity Theory (Atchley)', desc: 'People maintain consistent patterns as they age — behaviors, relationships, values, personality traits. No radical change; expected consistency once established as an adult.' },
      { name: "Erikson's Psychosocial Theory", desc: '8 stages representing 8 great struggles across the lifespan. Optimal development is contingent on crisis resolution. Relevant here: Generativity vs. Stagnation; Ego Integrity vs. Despair.' },
      { name: 'Selection, Optimization, and Compensation — SOC (Baltes & Baltes)', desc: 'Dynamic, concurrent interaction among growth, maintenance and loss regulation. *Embodies the lifespan perspective. Select fewer goals → optimize resources toward them → compensate with new means when old ones fail.' }
    ],
    methods: [
      { name: 'The three influences', expand: 'Age / History / Individual', desc: 'Ask "who does this happen to?" Everyone at a certain AGE → age-graded. Everyone at a certain TIME → history-graded. Just THIS person → nonnormative.' },
      { name: 'Lifespan vs. life expectancy', expand: 'Ceiling vs. average', desc: 'If the number CHANGED over the last century, it is life expectancy. If it is a species maximum that has not moved, it is lifespan.' },
      { name: 'Primary vs. secondary aging', expand: 'Cause, not severity', desc: 'Universal from simply living longer → primary. Traceable to a disease or modifiable risk factor → secondary.' },
      { name: 'Nonlinear aging ages', expand: 'Lehallier / Shen / Mousley', desc: 'Lehallier 2019 → 34, 60, 78. Shen 2025 → 44, 60. Mousley 2025 (brain) → 9, 32, 66, 83, plus "adolescence" spanning 9–32. Age 60 appears twice.' },
      { name: 'SOC in one example', expand: 'Rubinstein the pianist', desc: 'Fewer pieces (Selection) · more practice on them (Optimization) · slowing before fast passages so they seem faster (Compensation).' }
    ]
  },

  questions: [
    {
      q: 'According to the definition given in class, aging is a biological process that begins at which point?',
      type: 'mcq', difficulty: 'E',
      choices: ['Birth', 'Conception', 'Puberty', 'Age 65'],
      correct: 1,
      explanation: 'Aging is defined as a biological process that begins at CONCEPTION and continues throughout the lifespan. "Birth" is the most common distractor — the slide specifically says conception.'
    },
    {
      q: 'A researcher notes that the maximum documented human age is about 122 years, and that this figure has not meaningfully changed despite a century of medical advances. Which term is she describing?',
      type: 'mcq', difficulty: 'M',
      choices: ['Life expectancy', 'Lifespan', 'Functional age', 'Tertiary aging'],
      correct: 1,
      explanation: 'Lifespan = the maximum age attainable for a given species — a biological ceiling that has not moved. Life expectancy is the AVERAGE age at death for a time period, and that is the number that has risen dramatically.'
    },
    {
      q: 'Dr. Chen is an MD who diagnoses and treats age-related diseases in a hospital clinic. Dr. Patel holds a PhD and designs community programs based on research about social isolation in older adults. Which correctly labels them?',
      type: 'mcq', difficulty: 'M',
      choices: [
        'Chen = gerontologist; Patel = geriatrician',
        'Chen = geriatrician; Patel = gerontologist',
        'Both are geriatricians',
        'Both are gerontologists'
      ],
      correct: 1,
      explanation: 'Geriatrics is the specialized branch of MEDICINE (prevention, diagnosis, treatment of aging-related disease) — Dr. Chen. Gerontology is the multidisciplinary scientific STUDY of aging, holistic and not simply medical, including program development based on research — Dr. Patel.'
    },
    {
      q: 'List the three component ages that make up FUNCTIONAL age, and give one indicator of each from the slide.',
      type: 'short', difficulty: 'M',
      correct: ['biological psychological social', 'biological, psychological, social'],
      explanation: 'Biological age (cardiovascular functioning, respiratory/lung functioning, muscle and bone strength, cellular aging); Psychological age (reaction time, memory, learning ability, intelligence); Social age (work roles, family status, position in the community). Together these answer: "someone is functionally ___ y/o biologically, ___ psychologically, ___ socially."'
    },
    {
      q: 'A 68-year-old competes in triathlons, runs a consulting business, and cares for young grandchildren. Her doctor says her cardiovascular functioning resembles someone 20 years younger. Which statement best applies?',
      type: 'mcq', difficulty: 'H',
      choices: [
        'Her chronological age has decreased',
        'Her biological age is lower than her chronological age, illustrating why chronological age poorly predicts functioning',
        'She is experiencing tertiary aging',
        'This demonstrates a normative history-graded influence'
      ],
      correct: 1,
      explanation: 'Chronological age (actual years since birth) is fixed and cannot decrease. Her BIOLOGICAL age — one component of functional age, indexed by cardiovascular functioning — is younger than her chronological age. This is exactly why the course argues chronological age is a weak predictor of actual functioning, and why age-based assumptions are irrational.'
    },
    {
      q: 'Everyone in a community lived through a major hurricane in 2024 — children, adults and older adults alike. What type of influence is this?',
      type: 'mcq', difficulty: 'E',
      choices: ['Normative age-graded', 'Normative history-graded', 'Nonnormative', 'Optimal aging'],
      correct: 1,
      explanation: 'Normative history-graded influences are events common in the culture at certain TIMES. Everyone alive experiences them, but at different ages — which is what makes them cohort-defining. Her examples were pandemic and war.'
    },
    {
      q: 'A man breaks his hip in an unusual skiing accident at 52. What type of influence is this?',
      type: 'mcq', difficulty: 'E',
      choices: ['Normative age-graded', 'Normative history-graded', 'Nonnormative', 'Primary aging'],
      correct: 2,
      explanation: 'Nonnormative influences are random or rare events that affect development in individuals — her example was a car accident. This happens to one person, not to everyone at a given age or in a given era.'
    },
    {
      q: 'An 80-year-old develops emphysema after 50 years of smoking. Her twin sister, who never smoked, has gradually grayed and needs reading glasses. Classify each.',
      type: 'mcq', difficulty: 'H',
      choices: [
        'Both are primary aging',
        'Emphysema = secondary aging; graying and presbyopia = primary aging',
        'Emphysema = primary aging; graying and presbyopia = secondary aging',
        'Emphysema = tertiary aging; graying = optimal aging'
      ],
      correct: 1,
      explanation: 'Primary vs. secondary is about CAUSE. Graying hair and presbyopia are normal/expected changes that happen to everyone who lives long enough → primary (1°). Emphysema traces to a disease process driven by a modifiable risk factor → secondary (2°). Her examples were memory (1°) and cancer (2°).'
    },
    {
      q: 'Define tertiary aging and give an example of what it looks like.',
      type: 'short', difficulty: 'M',
      correct: ['rapid loss right before death', 'rapid loss before death'],
      explanation: 'Tertiary aging (3°) = rapid loss right before death — a sharp accelerated decline across systems in the final period of life, sometimes called terminal drop. Her in-class examples: loss of ambulation and dropping vitals.'
    },
    {
      q: 'A 72-year-old retired attorney has a larger vocabulary and better professional judgment than she did at 40, even though her processing speed has slowed. The gain side of this is best described as:',
      type: 'mcq', difficulty: 'M',
      choices: ['Secondary aging', 'Optimal aging', 'Tertiary aging', 'A nonnormative influence'],
      correct: 1,
      explanation: 'Optimal aging = people become better with age in certain functions. Her example was knowledge/skill expanding. This also illustrates the Life-Span Perspective claim that growth and decline occur SIMULTANEOUSLY — slowed processing speed alongside expanded expertise.'
    },
    {
      q: 'Which theory holds that people prioritize emotionally meaningful relationships because they perceive their remaining time as limited?',
      type: 'mcq', difficulty: 'E',
      choices: ['Continuity Theory', 'Socioemotional Selectivity Theory', 'Selection, Optimization and Compensation', "Erikson's Psychosocial Theory"],
      correct: 1,
      explanation: 'Socioemotional Selectivity Theory (Carstensen). The critical nuance: the driver is PERCEIVED TIME REMAINING, not chronological age — which is why a young person with a terminal illness shows the same pattern.'
    },
    {
      q: 'An 88-year-old concert violinist now performs a smaller repertoire, practices those pieces far more than she used to, and has begun using a lighter bow to manage hand fatigue. Name the theory and its three components in order.',
      type: 'short', difficulty: 'H',
      correct: ['SOC', 'selection optimization compensation', 'selection, optimization, and compensation'],
      explanation: 'Selection, Optimization and Compensation (SOC — Baltes & Baltes). Smaller repertoire = SELECTION (narrowing to fewer high-priority goals). Practicing more = OPTIMIZATION (investing resources in chosen goals). Lighter bow = COMPENSATION (new means to maintain performance when old means fail). SOC *embodies the lifespan perspective because growth, maintenance and loss regulation operate concurrently.'
    },
    {
      q: 'A man who has been an avid fisherman his whole life moves into assisted living and joins the facility’s fishing club rather than taking up entirely new hobbies. Which theory best explains this?',
      type: 'mcq', difficulty: 'M',
      choices: ['Socioemotional Selectivity Theory', 'Continuity Theory', 'Terror management theory', 'Tertiary aging'],
      correct: 1,
      explanation: 'Continuity Theory (Atchley): people maintain consistent patterns as they grow older — behaviors, relationships, values, personality traits — with no radical change. Your annotation: "expected consistency once established as an adult." He adapts the setting but preserves the identity and activity.'
    },
    {
      q: 'Which theory is marked on the slide as "*embodies the lifespan perspective"?',
      type: 'mcq', difficulty: 'M',
      choices: ['Socioemotional Selectivity Theory', 'Continuity Theory', "Erikson's Psychosocial Theory", 'Selection, Optimization, and Compensation (SOC)'],
      correct: 3,
      explanation: 'SOC carries that asterisk on the Relevant Theories slide, because it explicitly models the concurrent interaction of growth, maintenance and loss regulation — exactly the Life-Span Perspective claim that gains and losses occur together at every stage.'
    },
    {
      q: 'Lehallier and colleagues (2019) found that biological aging accelerates in bursts at approximately which ages?',
      type: 'mcq', difficulty: 'M',
      choices: ['9, 32, 66 and 83', '44 and 60', '34, 60 and 78', '25, 50 and 75'],
      correct: 2,
      explanation: 'Lehallier et al. (2019): 34, 60 and 78. Shen et al. (2025) found transitions at 44 and 60. Mousley et al. (2025) identified brain-network turning points at 9, 32, 66 and 83. Age 60 appears in both Lehallier and Shen — the most replicated transition.'
    },
    {
      q: 'Which research team introduced the idea that "adolescence" extends from ages 9 to 32?',
      type: 'mcq', difficulty: 'M',
      choices: ['Lehallier and colleagues (2019)', 'Shen and colleagues (2025)', 'Mousley and colleagues (2025)', 'Baltes and colleagues'],
      correct: 2,
      explanation: 'Mousley et al. (2025) identified major turning points in BRAIN NETWORK organization at approximately 9, 32, 66 and 83, and introduced the idea of adolescence extending from 9 to 32. Remember: Mousley = brain = 4 numbers.'
    },
    {
      q: 'The population pyramid is shifting from a pyramid shape toward a rectangle. Name two causes and two societal challenges this creates.',
      type: 'short', difficulty: 'H',
      correct: ['falling birth rates rising life expectancy', 'declining fertility increased life expectancy'],
      explanation: 'Causes: falling birth/fertility rates (narrowing the base), rising life expectancy (widening the top), the Baby Boom cohort aging into later life, and declining infant/child mortality. Challenges: a shrinking caregiver pool and rising dependency ratio; strain on Social Security/Medicare/pensions; healthcare and geriatric workforce shortages; housing and transportation not designed for older adults; increased social isolation risk.'
    },
    {
      q: 'True or False: According to the Life-Span Perspective, development in later adulthood consists primarily of decline, while growth is concentrated in childhood and adolescence.',
      type: 'tf', difficulty: 'M',
      correct: 1,
      explanation: 'FALSE — this is exactly the assumption the Life-Span Perspective was formulated to reject. Baltes argued development is lifelong and multidirectional, with GAINS AND LOSSES OCCURRING SIMULTANEOUSLY at every stage. The concept of optimal aging (people become better with age in certain functions) makes the same point.'
    }
  ]
};
