import React from 'react';
import { Callout, Table, Card } from '../components/Visual.jsx';

const IMG = 'L2/';

export default {
  id: 2,
  quiz: 1,
  lectureNo: 2,
  date: 'Mon, Aug 31',
  title: 'Personality & Adult Development',
  subtitle: 'Lecture 2 — The Big Five, Erikson, Jung, midlife and quarter-life crises, McAdams, and personality & health',

  blocks: [
    {
      id: '2a',
      title: 'Is Personality Fixed? The "Set in Plaster" Debate',
      subtitle: 'The framing question for the whole lecture',
      images: [{ src: IMG + 'L2_s01_p09.jpg', alt: 'Slide: Personality intro', caption: 'The old claim vs. the current consensus' }],
      content: (
        <>
          <p>
            The old view — associated with William James and later with Costa &amp; McCrae — was that personality is
            <strong> "set in plaster" by age 30.</strong> On this account, whatever you are at 30 is what you remain.
          </p>
          <Callout kind="info" title="The current consensus (know this exact phrasing)">
            Personality is <strong>relatively stable throughout the lifespan</strong>, <em>although there are some
            changes noted.</em> Both halves matter. It is not "personality never changes," and it is not "personality
            is endlessly malleable." It is <strong>stability with measurable, patterned drift.</strong>
          </Callout>
          <p>
            This tension organizes the rest of the lecture. The <strong>Big Five</strong> gives us the stability side
            (dispositional traits) plus the documented average trends. <strong>Erikson and Jung</strong> argue
            development genuinely <em>continues</em> through adulthood. <strong>McAdams</strong> argues traits alone
            miss something essential. Notice this also connects straight back to <strong>Continuity Theory</strong>
            from Lecture 1 — "no radical change" is the personality-level version of the same claim.
          </p>
        </>
      )
    },

    {
      id: '2b',
      title: 'The Big Five (Five-Factor Model)',
      subtitle: 'Dispositional traits and their facets — OCEAN',
      images: [{ src: IMG + 'L2_s02_p10.jpg', alt: 'Slide: The Big 5', caption: 'Annotated: "dispositional traits are relatively stable internal dimensions of personality"' }],
      content: (
        <>
          <Callout kind="info" title="Definition to memorize verbatim">
            <strong>Dispositional traits</strong> are <strong>relatively stable internal dimensions of
            personality.</strong> Each disposition has <strong>six subscales or "facets."</strong>
          </Callout>
          <p>
            "Six facets each" is a precise, checkable number — she underlined the definition, and 5 traits × 6 facets
            = 30 facets total. The mnemonic for the five factors is <strong>OCEAN</strong>:
          </p>
          <Table
            headers={['Trait', 'High scorer looks like', 'Low scorer looks like']}
            rows={[
              [<span key="o"><strong>O</strong>penness to experience</span>, 'Curious, imaginative, aesthetically sensitive, willing to try new things, open to unconventional ideas', 'Conventional, practical, prefers routine and the familiar'],
              [<span key="c"><strong>C</strong>onscientiousness</span>, 'Organized, dependable, self-disciplined, goal-directed, plans ahead', 'Spontaneous, disorganized, careless with deadlines'],
              [<span key="e"><strong>E</strong>xtraversion</span>, 'Sociable, assertive, energetic, seeks stimulation and company', 'Reserved, quiet, prefers solitude (introversion)'],
              [<span key="a"><strong>A</strong>greeableness</span>, 'Cooperative, compassionate, trusting, warm, accommodating', 'Competitive, skeptical, blunt, antagonistic'],
              [<span key="n"><strong>N</strong>euroticism</span>, 'Prone to anxiety, moodiness, emotional reactivity, negative affect', 'Emotionally stable, calm, resilient under stress'],
            ]}
          />
          <Callout kind="tip" title="Jung connection">
            <strong>Extraversion</strong> is the one Big Five factor that traces directly back to Carl Jung — he
            introduced the extrovert/introvert distinction. That link is explicitly made two slides later, and it is a
            natural exam question.
          </Callout>
        </>
      )
    },

    {
      id: '2c',
      title: 'How the Big Five Change With Age',
      subtitle: 'The average trends table — highest-yield content in this lecture',
      images: [{ src: IMG + 'L2_s03_p11.jpg', alt: 'Slide: Big 5 compared to self, with age trends', caption: 'Her handwritten Notes row is filled in — those notes are reproduced below' }],
      content: (
        <>
          <p>
            This table is the single most quizzable slide in Lecture 2, and the <strong>*Average trends</strong>
            asterisk matters: these are <em>population-level averages</em>, not predictions about any one person.
          </p>
          <Table
            headers={['Trait', 'Direction with age', 'Her handwritten note']}
            rows={[
              [
                <span key="o"><strong>Openness</strong></span>,
                <span key="o2" className="text-red-700 font-bold">Decreases ↓</span>,
                <em key="o3">"Gradual decline"</em>
              ],
              [
                <span key="c"><strong>Conscientiousness</strong></span>,
                <span key="c2" className="text-emerald-700 font-bold">Increases ↑ (young adulthood → midlife), then often plateaus and may decline slightly in later life</span>,
                <em key="c3">"Plateaus" — she drew a curve that rises then flattens</em>
              ],
              [
                <span key="e"><strong>Extraversion</strong></span>,
                <span key="e2" className="text-slate-700 font-bold">Relatively stable, or a modest decline</span>,
                <em key="e3">Different facets (sociability, assertiveness, activity level) may change differently</em>
              ],
              [
                <span key="a"><strong>Agreeableness</strong></span>,
                <span key="a2" className="text-emerald-700 font-bold">Increases ↑</span>,
                <em key="a3">"Tend to become more cooperative, compassionate, emotionally mature"</em>
              ],
              [
                <span key="n"><strong>Neuroticism</strong></span>,
                <span key="n2" className="text-red-700 font-bold">Decreases ↓</span>,
                <em key="n3">"Substantial individual variation!"</em>
              ]
            ]}
          />
          <Callout kind="tip" title="Fast way to hold this">
            <strong>Two go up, two go down, one stays flat.</strong> Up: <strong>C</strong>onscientiousness and
            <strong> A</strong>greeableness (the two "getting easier to live and work with" traits). Down:
            <strong> O</strong>penness and <strong>N</strong>euroticism. Flat: <strong>E</strong>xtraversion.
          </Callout>
          <Callout kind="warn" title="The two traps in this table">
            <p className="mb-1">
              <strong>1. Conscientiousness is not simple.</strong> It is the only trait with a three-part trajectory:
              increases from young adulthood into midlife → plateaus → may decline slightly in later life. An answer
              choice reading only "increases with age" is incomplete.
            </p>
            <p>
              <strong>2. Extraversion is not "unchanged."</strong> The slide says relatively stable <em>or</em> a modest
              decline, and adds that <strong>different facets may change differently</strong> — sociability might drop
              while activity level holds. That facet-level nuance is exactly the kind of detail a short-answer question
              rewards.
            </p>
          </Callout>
          <p>
            The declining-neuroticism and rising-agreeableness pattern is often called the
            <strong> "maturity principle"</strong> — on average people become more emotionally stable and easier to get
            along with as they age. Her note that neuroticism shows <em>substantial individual variation</em> is the
            caveat: averages conceal wide individual differences.
          </p>
        </>
      )
    },

    {
      id: '2d',
      title: "Erikson's Stages of Psychosocial Development",
      subtitle: '8 stages, 8 crises — plus the criticism she emphasized',
      images: [{ src: IMG + 'L2_s04_p12.jpg', alt: "Slide: Erikson's stages", caption: 'Annotated with definitions of the two relevant stages and a criticism written across the bottom' }],
      content: (
        <>
          <p>
            <strong>Erikson's 8 stages represent the 8 great struggles</strong> that he believed people must undergo
            across the lifespan. Each stage poses a <strong>crisis</strong> between two opposing poles, and
            <strong> optimal development is contingent on crisis resolution</strong> — resolving each conflict
            successfully builds a psychosocial strength that supports the next stage.
          </p>

          <Table
            headers={['Approximate age', 'Psychosocial crisis']}
            rows={[
              ['Infant – 18 months', 'Trust vs. Mistrust'],
              ['18 months – 3 years', 'Autonomy vs. Shame & Doubt'],
              ['3 – 5 years', 'Initiative vs. Guilt'],
              ['5 – 13 years', 'Industry vs. Inferiority'],
              ['13 – 21 years', 'Identity vs. Role Confusion'],
              ['21 – 39 years', 'Intimacy vs. Isolation'],
              [<span key="g" className="font-bold text-amber-800">40 – 65 years</span>, <span key="g2" className="font-bold text-amber-800">Generativity vs. Stagnation ★</span>],
              [<span key="i" className="font-bold text-amber-800">65 and older</span>, <span key="i2" className="font-bold text-amber-800">Ego Integrity vs. Despair ★</span>]
            ]}
          />

          <Callout kind="info" title="The two stages relevant to this class (she boxed both)">
            <div className="mb-2">
              <strong>Generativity vs. Stagnation (40–65).</strong> Your annotation: <em>"contribution to society &amp;
              younger [generations]."</em> Generativity means investing in what outlives you — mentoring, parenting,
              teaching, creative work, community building. Its failure pole, <strong>stagnation</strong>, is
              self-absorption and a sense of having contributed nothing beyond oneself.
            </div>
            <div>
              <strong>Ego Integrity vs. Despair (65+).</strong> Your annotation: <em>"life fulfillment (longer
              term)."</em> Integrity is looking back on one's life and finding it coherent and meaningful — accepting
              it as it was lived. Its failure pole, <strong>despair</strong>, is bitterness and regret over a life felt
              to be wasted, often paired with fear of death and the sense that there is no time left to change course.
            </div>
          </Callout>

          <p>
            Your note beside these two — <em>"hand-in-hand"</em> — captures Erikson's own claim: people who achieved
            generativity in midlife are far more likely to reach integrity in later life, because they have something
            to look back on. The two stages are causally linked, not merely sequential.
          </p>

          <Callout kind="danger" title="The criticism she wrote across the bottom — likely a short-answer item">
            <em>"Criticized for demarcated stages &amp; inability to move forward without resolving each conflict.
            ✱ Not always linear or mutually exclusive."</em>
            <p className="mt-2">
              In other words: the age bands are too rigid, real people revisit earlier crises rather than closing them
              permanently, and a person can be working on generativity and integrity <em>at the same time</em>.
              Erikson's model also came from a specific Western, mid-20th-century vantage point and does not
              generalize cleanly across cultures. Note she wrote this under a "History Lesson" stamp — she is
              presenting Erikson as foundational but dated.
            </p>
          </Callout>
        </>
      )
    },

    {
      id: '2e',
      title: "Carl Jung's Theory",
      subtitle: 'The first theorist to take adult personality development seriously',
      images: [{ src: IMG + 'L2_s05_p13.jpg', alt: "Slide: Carl Jung's theory", caption: 'Annotated with the two-phase age split at the bottom' }],
      content: (
        <>
          <p>
            Jung was the <strong>first theorist to discuss personality development during adulthood</strong> — and
            that priority claim is the most likely single fact to be tested from this slide. Before Jung, personality
            theory essentially stopped at childhood.
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>He <strong>introduced the idea of extroverts and introverts</strong> — the ancestor of Big Five Extraversion.</li>
            <li>He <strong>invented the notion of midlife crisis</strong>, which he called the <strong>"midlife transition."</strong></li>
            <li>He described roughly age 40 onward as <strong>"the afternoon of life."</strong></li>
          </ul>

          <Callout kind="tip" title="Your annotation — Jung's two halves of life">
            <div><strong>First 30–40 → building the ego.</strong> The "morning of life": establishing a career, a family, a social identity, achieving externally.</div>
            <div className="mt-1"><strong>~40+ → look inward / confront suppressed traits → internal validation.</strong> The "afternoon of life": the task shifts from outward achievement to inner integration, from what others think to what you actually value.</div>
          </Callout>

          <Callout kind="warn" title="Attribution trap — Jung vs. Jaques">
            <strong>Jung invented the concept</strong> and named it the <em>midlife transition</em>.
            <strong> Elliott Jaques coined the actual term "midlife crisis"</strong> (next block). Questions love to
            swap these two. Jung = the idea; Jaques = the phrase.
          </Callout>
        </>
      )
    },

    {
      id: '2f',
      title: "Jung's Midlife Transition: The Four Elements",
      subtitle: 'Massive internal restructuring of personality',
      images: [{ src: IMG + 'L2_s06_p14.jpg', alt: 'Slide: Carl Jung midlife transition', caption: 'All four elements annotated in her notes' }],
      content: (
        <>
          <p>
            Jung described the midlife transition as a <strong>massive internal restructuring of personality</strong>
            with four components. Learn these as a numbered list — they are ideal short-answer material.
          </p>

          <div className="space-y-3 my-4">
            <div className="border-l-4 border-violet-500 bg-violet-50 rounded-r p-3">
              <div className="font-bold text-violet-900">1. The pendulum swings from extraversion to introversion — and vice versa</div>
              <div className="text-sm text-violet-900 mt-1">
                Whichever orientation dominated the first half of life gives way to its opposite. Your annotation:
                this produces a <em>"more balanced personality long-term."</em> The extraverted executive turns
                reflective; the lifelong introvert becomes more socially engaged.
              </div>
            </div>
            <div className="border-l-4 border-slate-600 bg-slate-100 rounded-r p-3">
              <div className="font-bold text-slate-900">2. The "shadow" is confronted in the pursuit of becoming a whole person</div>
              <div className="text-sm text-slate-800 mt-1">
                The <strong>shadow</strong> is the unconscious, repressed or disowned part of the self — the traits a
                person refuses to recognize in themselves. Your annotation gives examples:
                <em> anger, competitiveness.</em> Jung's claim is that wholeness requires <em>integrating</em> the
                shadow rather than suppressing it. This is the origin of modern <strong>"shadow work."</strong>
              </div>
            </div>
            <div className="border-l-4 border-rose-500 bg-rose-50 rounded-r p-3">
              <div className="font-bold text-rose-900">3. Embracing opposite-gender archetypes</div>
              <div className="text-sm text-rose-900 mt-1">
                <strong>Anima</strong> = the <em>unconscious feminine qualities</em> within a man.<br />
                <strong>Animus</strong> = the <em>unconscious masculine qualities</em> within a woman.
                <div className="mt-1 bg-white/70 rounded p-2 border border-rose-200">
                  <strong>Memory hook:</strong> <em>anim<strong>A</strong> = feminine</em>; <em>anim<strong>US</strong> =
                  masculine.</em> Jung held that midlife involves integrating these previously suppressed qualities.
                </div>
              </div>
            </div>
            <div className="border-l-4 border-emerald-600 bg-emerald-50 rounded-r p-3">
              <div className="font-bold text-emerald-900">4. Ultimate goal: shifting from "Ego" to true "Self" — Individuation</div>
              <div className="text-sm text-emerald-900 mt-1">
                <strong>Individuation</strong> is Jung's term for the lifelong process of becoming a whole,
                integrated person — moving from the <strong>Ego</strong> (the conscious, socially performed identity
                built in the first half of life) to the <strong>Self</strong> (the total, integrated personality
                including unconscious material). It is the endpoint the other three steps serve.
              </div>
            </div>
          </div>
          <Callout kind="tip" title="If you only remember one word from Jung">
            Make it <strong>individuation</strong> — and be able to say it means moving from Ego to true Self by
            integrating the shadow and the anima/animus.
          </Callout>
        </>
      )
    },

    {
      id: '2g',
      title: "Jung's Influence Today",
      subtitle: 'Why a century-old theory is still in the syllabus',
      images: [{ src: IMG + 'L2_s07_p15.jpg', alt: "Slide: Influence of Jung's theory today", caption: 'Annotated: "→ change emphasized"' }],
      content: (
        <>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Modern personality psychology still studies <strong>Introversion and Extraversion</strong>, with
              <strong> Extraversion being one of the Big Five personality factors.</strong> Jung's distinction survived
              into the dominant contemporary model.
            </li>
            <li>
              <strong>Jung's idea that personality continues developing throughout adulthood was ahead of its
              time.</strong> Your annotation — <em>"change emphasized"</em> — is the point: while the field was busy
              claiming personality is "set in plaster" by 30, Jung was arguing the opposite, and the current consensus
              (relatively stable <em>with some changes noted</em>) has moved toward him.
            </li>
            <li>
              Concepts such as confronting unwanted aspects of oneself (<strong>"shadow work"</strong>) are
              <strong> widely used in psychotherapy and personal growth.</strong>
            </li>
          </ul>
          <Callout kind="info" title="Exam framing">
            If asked "why does Jung still matter?", the three-part answer is: (1) extraversion/introversion lives on in
            the Big Five, (2) he was first to insist on adult development, and (3) shadow work is still practiced
            clinically.
          </Callout>
        </>
      )
    },

    {
      id: '2h',
      title: '"Midlife Crisis" — Elliott Jaques and the Midlife Correction',
      subtitle: 'Who coined the term, and why the research does not support the pop version',
      images: [{ src: IMG + 'L2_s08_p16.jpg', alt: 'Slide: Midlife crisis with despair-by-age chart', caption: 'Annotated: "cognitive growth & reassessment"; chart note about COVID' }],
      content: (
        <>
          <p>
            <strong>Canadian psychoanalyst Elliott Jaques coined the term "midlife crisis."</strong> The slide is
            careful to say it was <strong>sensationalized in the media</strong> — the sports-car-and-affair stereotype
            is not what Jaques described.
          </p>
          <Callout kind="info" title="What Jaques actually theorized">
            A <strong>turning point during which an adult reevaluates what they've done and explores who they are more
            deeply.</strong> Your annotation reframes it precisely: <em>"cognitive growth &amp; reassessment."</em>
            This is a developmental process, not a breakdown.
          </Callout>
          <p>
            Because of that, the slide offers a better label: <strong>"Midlife Correction."</strong> A <em>correction</em>
            implies adjustment and recalibration rather than crisis and collapse — and that framing matches the
            evidence far better. Research consistently finds only a minority of adults report anything resembling a
            midlife crisis.
          </p>

          <Card title="The chart: How Feelings of Despair Change with Age">
            <p className="text-sm">
              Despondency was measured in a CDC survey and tracked by age across two periods.
            </p>
            <ul className="list-disc ml-5 mt-2 space-y-1 text-sm">
              <li>
                <strong>2009–2018 (blue):</strong> despair followed a <strong>hump-shaped</strong> trend by age —
                low among the young, <strong>rising at midlife</strong>, then declining for older adults. This is the
                classic <strong>U-shaped happiness curve</strong> (happiness dips in midlife) seen from the despair side.
              </li>
              <li>
                <strong>2019–2022 (yellow):</strong> the pattern <strong>inverted</strong>. Despair now
                <strong> peaks in the late teens and falls steadily with age.</strong>
              </li>
            </ul>
            <div className="mt-2 p-2 bg-amber-50 border border-amber-200 rounded text-sm">
              <strong>Your annotation:</strong> <em>"younger age changing with higher feelings of despair due to
              COVID."</em> The midlife hump is being displaced by a youth mental-health crisis.
            </div>
          </Card>
          <Callout kind="warn" title="Two things to take from this chart">
            First, it <strong>undercuts the midlife-crisis narrative</strong> — the recent data show midlife is no
            longer the low point. Second, it demonstrates a <strong>normative history-graded influence</strong> (Lecture 1):
            COVID hit a whole society at one moment in history and reshaped an age pattern that had been stable for a decade.
          </Callout>
        </>
      )
    },

    {
      id: '2i',
      title: 'A Different Crisis: The Quarter-Life Crisis',
      subtitle: 'Six factors — three internal, three external',
      images: [{ src: IMG + 'L2_s09_p17.jpg', alt: 'Slide: The quarter-life crisis', caption: 'Annotated: protective vs. at-risk factors, and "less secure attachment"' }],
      content: (
        <>
          <p>
            The quarter-life crisis has the <strong>potential</strong> to impact personality development — she
            highlighted the word <em>potential</em>, so the claim is conditional, not deterministic. A
            <strong> systematic review</strong> found substantial reports of quarter-life crisis experiences.
          </p>

          <div className="grid md:grid-cols-2 gap-3 my-4">
            <div className="border-2 border-sky-300 bg-sky-50 rounded-lg p-3">
              <div className="font-bold text-sky-900 mb-2">3 Internal factors</div>
              <ul className="text-sm text-sky-900 space-y-1">
                <li><strong>Commitment to purpose</strong> <span className="text-emerald-700 font-semibold">— protective</span></li>
                <li><strong>Spirituality</strong> <span className="text-emerald-700 font-semibold">— protective</span></li>
                <li><strong>Anxiety</strong> <span className="text-red-700 font-semibold">— more at risk</span></li>
              </ul>
            </div>
            <div className="border-2 border-violet-300 bg-violet-50 rounded-lg p-3">
              <div className="font-bold text-violet-900 mb-2">3 External factors</div>
              <ul className="text-sm text-violet-900 space-y-1">
                <li><strong>Social support</strong> — your note: <em>lower</em> social support → <strong>less secure attachment</strong></li>
                <li><strong>Age</strong></li>
                <li><strong>Gender</strong></li>
              </ul>
            </div>
          </div>

          <Callout kind="tip" title="Her colour-coding, decoded">
            She marked <strong>commitment to purpose and spirituality as protective</strong> and
            <strong> anxiety as an at-risk factor.</strong> For the external side she wrote <em>"lower"</em> above
            social support with an arrow to <strong>"less secure attachment"</strong> — meaning weaker social support
            is associated with less secure attachment, which worsens the experience.
          </Callout>
          <Callout kind="warn" title="Count check">
            "Three internal, three external" is a clean testable structure. Do not mix them up: <strong>age and gender
            are classified as EXTERNAL</strong> factors here, which surprises people.
          </Callout>
        </>
      )
    },

    {
      id: '2j',
      title: 'How a Quarter-Life Crisis Affects Personality',
      subtitle: 'Two branching outcomes — growth or deterioration',
      images: [
        { src: IMG + 'L2_s10_p18.jpg', alt: 'Slide: Influence of QLC — coping skills', caption: 'Annotated: "Coping skills, YAY!"' },
        { src: IMG + 'L2_s11_p19.jpg', alt: 'Slide: Influence of QLC — overwhelming stress', caption: 'The downside branch' }
      ],
      content: (
        <>
          <p>
            She emphasized the word <strong>could</strong> — a quarter-life crisis <em>could</em> lead to these
            changes. The lecture presents <strong>two branches</strong> depending on whether the stress is managed or
            overwhelming.
          </p>

          <div className="border-2 border-emerald-400 bg-emerald-50 rounded-lg p-4 my-3">
            <div className="font-bold text-emerald-900 mb-2">Branch 1 — Managed stress builds coping skills ("Coping skills, YAY!")</div>
            <p className="text-sm text-emerald-900 mb-2">
              Managing uncertainty, disappointment and major life decisions <strong>can foster</strong>:
            </p>
            <ul className="list-disc ml-5 text-sm text-emerald-900 space-y-0.5">
              <li>Emotional regulation</li>
              <li>Problem-solving abilities</li>
              <li>Confidence in decision-making</li>
              <li>Adaptability</li>
            </ul>
            <p className="text-sm text-emerald-900 mt-2 font-semibold">Resulting Big Five changes:</p>
            <ul className="list-disc ml-5 text-sm text-emerald-900 space-y-0.5">
              <li><strong>Greater openness to experience</strong> — as people explore new careers, relationships, or lifestyles</li>
              <li><strong>Increased conscientiousness</strong> — as individuals learn to manage adult responsibilities</li>
              <li><strong>Extraversion may increase or decrease</strong> — depending on new social roles, confidence, and life circumstances</li>
              <li><strong>Changes in agreeableness</strong> — as people develop healthier boundaries and become clearer about relationship needs</li>
              <li><strong>Temporary increases in neuroticism</strong> — while navigating uncertainty</li>
            </ul>
          </div>

          <div className="border-2 border-red-400 bg-red-50 rounded-lg p-4 my-3">
            <div className="font-bold text-red-900 mb-2">Branch 2 — If the stress becomes overwhelming</div>
            <ul className="list-disc ml-5 text-sm text-red-900 space-y-0.5">
              <li>Persistent anxiety</li>
              <li>Depression</li>
              <li>Low self-esteem</li>
              <li>Decision paralysis</li>
              <li>Social withdrawal</li>
            </ul>
          </div>

          <Callout kind="warn" title="Note the direction reversals">
            <strong>Openness increases</strong> here, even though the age trend for openness across the lifespan is a
            gradual <em>decrease</em>. And <strong>neuroticism increases</strong> here (temporarily), even though its
            lifespan trend is a <em>decrease</em>. A crisis period can locally reverse a lifelong average trend —
            that contrast is a very likely exam question. Also note <strong>extraversion is the ambiguous one in both
            tables</strong> (may increase or decrease).
          </Callout>
        </>
      )
    },

    {
      id: '2k',
      title: "McAdams' Life-Story Model",
      subtitle: 'Why traits alone are not enough — agency and communion',
      images: [
        { src: IMG + 'L2_s12_p20.jpg', alt: "Slide: McAdams' life-story model", caption: 'The critique of a traits-only account of personality' },
        { src: IMG + 'L2_s13_p21.jpg', alt: 'Slide: agency and communion', caption: 'Annotated: agency = autonomy & power of self; communion = love, sense of belongingness' }
      ],
      content: (
        <>
          <p>
            <strong>Dan McAdams</strong> argued that if we <strong>only consider the dispositional traits described in
            the five-factor model, we are missing some very important considerations</strong> in describing and
            understanding personality. Traits tell you <em>what someone is like</em>; they do not tell you
            <em> who someone thinks they are.</em>
          </p>
          <Callout kind="info" title="The core claim">
            People are <strong>creating their own life story</strong> — a <em>narrative identity</em> — based on
            <strong> where the person has been, where the person is going, and who they want to become.</strong>
            Note that this spans past, future and aspiration, not just the present.
          </Callout>
          <p>
            <strong>Most important to life stories is the changing personal identity reflected in the emotions
            conveyed in the story.</strong> It is not the events themselves but the emotional meaning a person assigns
            to them — and that meaning keeps getting revised.
          </p>

          <div className="grid md:grid-cols-2 gap-3 my-4">
            <div className="border-2 border-amber-300 bg-amber-50 rounded-lg p-3">
              <div className="font-bold text-amber-900 mb-1">Agency</div>
              <div className="text-sm text-amber-900">
                Your annotation: <strong>autonomy &amp; power of self.</strong> Themes of achievement,
                independence, control, mastery and status — "I made this happen."
              </div>
            </div>
            <div className="border-2 border-rose-300 bg-rose-50 rounded-lg p-3">
              <div className="font-bold text-rose-900 mb-1">Communion</div>
              <div className="text-sm text-rose-900">
                Your annotation: <strong>love, sense of belongingness.</strong> Themes of connection, intimacy,
                caring, friendship and unity with others — "we were in it together."
              </div>
            </div>
          </div>
          <Callout kind="tip" title="Mnemonic">
            <strong>Agency = "I"</strong> (autonomy, power). <strong>Communion = "we"</strong> (love, belonging).
            Note the resonance with Erikson: generativity is essentially a communal theme, while ego integrity involves
            making narrative sense of one's whole story — McAdams is very much building on Erikson.
          </Callout>
        </>
      )
    },

    {
      id: '2l',
      title: 'The Life Story Method — 7 Components',
      subtitle: 'The actual interview protocol (Table 10.4) — directly relevant to your lab case study',
      images: [{ src: IMG + 'L2_s14_p22.jpg', alt: 'Slide: The Life Story Method table 10.4', caption: 'A Life Story Interview — the seven sections' }],
      content: (
        <>
          <p>
            This is the operational version of McAdams' model: the structured interview used to elicit a life story.
            It is also the closest thing in this lecture to your <strong>Westminster structured interview</strong>, so
            it is worth knowing properly.
          </p>
          <Table
            headers={['#', 'Component', 'What the participant does']}
            rows={[
              ['1', <strong key="a">Life chapters</strong>, 'Divides life into its main chapters and provides a plot summary for each'],
              ['2', <strong key="b">Eight key episodes</strong>, 'Describes eight scenes — what happened, who was involved, thoughts and feelings, and what the scene says about who they were, are, or might be'],
              ['3', <strong key="c">Life challenge</strong>, 'Identifies and describes the biggest challenge or problem faced, how it developed, and what they have done to meet it'],
              ['4', <strong key="d">Main characters</strong>, 'Describes the one character with the most positive influence and the one with the most negative influence'],
              ['5', <strong key="e">Future plot</strong>, 'Gives an account of where the story is going — what happens next, future chapters, main goals, dreams and fears'],
              ['6', <strong key="f">Personal ideology</strong>, 'Answers questions on fundamental values, religious and political beliefs, and how those values developed over time'],
              ['7', <strong key="g">Life theme</strong>, 'Identifies a single integrative theme in the life story']
            ]}
          />
          <Callout kind="info" title="The eight key episodes (component 2)">
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-0.5 text-sm mt-1">
              <div>a. High point</div>
              <div>e. Important childhood episode</div>
              <div>b. Low point</div>
              <div>f. Important adolescent episode</div>
              <div>c. Turning point</div>
              <div>g. Important adult episode</div>
              <div>d. Earliest memory</div>
              <div>h. One other important episode</div>
            </div>
          </Callout>
          <Callout kind="tip" title="Structural note">
            The protocol moves <strong>past → present → future</strong> (chapters and episodes → current challenge →
            future plot) and then abstracts upward to <strong>ideology and theme</strong>. That mirrors McAdams'
            definition exactly: where you have been, where you are going, and who you want to become.
          </Callout>
        </>
      )
    },

    {
      id: '2m',
      title: 'Personality "Types" & Health',
      subtitle: 'Type A, Type D, and the protective traits',
      images: [{ src: IMG + 'L2_s15_p23.jpg', alt: 'Slide: Personality types and health', caption: 'Cardiologists Friedman & Rosenman (1974); Type D; protective traits' }],
      content: (
        <>
          <p>
            <strong>Cardiologists Meyer Friedman and R.H. Rosenman (1974)</strong> identified the
            <strong> Type A behavior pattern</strong> as a <strong>major risk factor for heart disease.</strong>
            Note the specifics she put on the slide: they were <em>cardiologists</em>, not psychologists, and the year
            is <strong>1974</strong>.
          </p>

          <div className="space-y-3 my-4">
            <div className="border-2 border-red-300 bg-red-50 rounded-lg p-3">
              <div className="font-bold text-red-900 mb-1">Type A behavior pattern — a risk factor</div>
              <div className="text-sm text-red-900">
                Characterized by <strong>competitiveness, time urgency / impatience, achievement-striving, and
                hostility.</strong> Later research narrowed the cardiac risk primarily to the
                <strong> hostility and anger</strong> component rather than to ambition or drive as such.
                (Type B is the contrasting relaxed, non-competitive pattern.)
              </div>
            </div>
            <div className="border-2 border-slate-400 bg-slate-100 rounded-lg p-3">
              <div className="font-bold text-slate-900 mb-1">Type D personality — "distressed" — another risk factor</div>
              <div className="text-sm text-slate-800">
                The other personality risk factor for heart disease named on the slide. Type D combines
                <strong> negative affectivity</strong> (chronic worry, irritability, gloom) with
                <strong> social inhibition</strong> (suppressing those emotions in social situations for fear of
                disapproval). <strong>D = Distressed</strong> — the key feature is feeling bad <em>and</em> keeping it
                hidden.
              </div>
            </div>
            <div className="border-2 border-emerald-300 bg-emerald-50 rounded-lg p-3">
              <div className="font-bold text-emerald-900 mb-1">Protective traits</div>
              <div className="text-sm text-emerald-900">
                Personality traits also play a <strong>protective role in heart health</strong>:
                <strong> agreeableness</strong> and <strong>conscientiousness.</strong>
              </div>
            </div>
          </div>

          <Callout kind="tip" title="A satisfying connection to close the lecture">
            The two <strong>protective</strong> traits — agreeableness and conscientiousness — are precisely the two
            Big Five traits that <strong>increase with age</strong> (from the trends table in block 2c). That is a
            genuinely elegant link, and exactly the kind of cross-slide integration an application question rewards.
          </Callout>
          <Callout kind="warn" title="Don't mix up the letters">
            <strong>A = the 1974 Friedman &amp; Rosenman pattern</strong> (competitive, hostile, time-urgent).
            <strong> D = Distressed</strong> (negative affect + social inhibition). Both raise heart-disease risk.
          </Callout>
        </>
      )
    }
  ],

  keyReview: {
    vocab: [
      { term: '"Set in plaster"', tag: 'old view', tagColor: 'slate', def: 'The former claim that personality is fixed by age 30. Current consensus: personality is relatively stable throughout the lifespan, although some changes are noted.' },
      { term: 'Dispositional traits', tag: 'Big Five', tagColor: 'blue', def: 'Relatively stable internal dimensions of personality. Each disposition has six subscales or "facets" (5 × 6 = 30 facets).' },
      { term: 'Openness', tag: 'decreases ↓', tagColor: 'red', def: 'Curiosity, imagination, willingness to try new things. Gradual decline with age.' },
      { term: 'Conscientiousness', tag: 'increases ↑', tagColor: 'green', def: 'Organization, dependability, self-discipline. Increases from young adulthood into midlife, then plateaus and may decline slightly in later life.' },
      { term: 'Extraversion', tag: 'stable ~', tagColor: 'slate', def: 'Sociability, assertiveness, energy. Relatively stable or a modest decline; different facets may change differently.' },
      { term: 'Agreeableness', tag: 'increases ↑', tagColor: 'green', def: 'Cooperation, compassion, trust. Increases — people become more cooperative, compassionate and emotionally mature.' },
      { term: 'Neuroticism', tag: 'decreases ↓', tagColor: 'red', def: 'Anxiety, moodiness, emotional reactivity. Decreases, but with substantial individual variation.' },
      { term: 'Generativity vs. Stagnation', tag: 'Erikson 40–65', tagColor: 'amber', def: 'Contribution to society and to younger generations vs. self-absorption and a sense of having contributed nothing.' },
      { term: 'Ego Integrity vs. Despair', tag: 'Erikson 65+', tagColor: 'amber', def: 'Life fulfillment — accepting one\'s life as coherent and meaningful — vs. bitterness and regret over a life felt to be wasted.' },
      { term: 'Midlife transition', tag: 'Jung', tagColor: 'violet', def: "Jung's term for the massive internal restructuring of personality around age 40. He also called it 'the afternoon of life.'" },
      { term: 'Shadow', tag: 'Jung', tagColor: 'violet', def: 'The unconscious, repressed or disowned part of the self (e.g., anger, competitiveness). Must be confronted and integrated to become whole.' },
      { term: 'Anima', tag: 'Jung', tagColor: 'violet', def: 'Unconscious FEMININE qualities within a man. (animA = feminine)' },
      { term: 'Animus', tag: 'Jung', tagColor: 'violet', def: 'Unconscious MASCULINE qualities within a woman. (animUS = masculine)' },
      { term: 'Individuation', tag: 'Jung', tagColor: 'violet', def: "Jung's ultimate goal: shifting from the Ego (conscious, socially performed identity) to the true Self (whole, integrated personality)." },
      { term: 'Midlife crisis / Midlife correction', tag: 'Jaques', tagColor: 'amber', def: 'Term coined by Canadian psychoanalyst Elliott Jaques. Sensationalized in media, but theorized as a turning point of reevaluation — cognitive growth and reassessment. "Midlife correction" is the better label.' },
      { term: 'Quarter-life crisis', tag: 'core', def: 'Has the POTENTIAL to impact personality development. 3 internal factors: commitment to purpose, spirituality, anxiety. 3 external factors: social support, age, gender.' },
      { term: 'Life-story model', tag: 'McAdams', tagColor: 'sky', def: 'Traits alone miss important considerations. People create a life story based on where they have been, where they are going, and who they want to become. Most important is the changing personal identity reflected in the emotions conveyed.' },
      { term: 'Agency', tag: 'McAdams', tagColor: 'sky', def: 'Life-story theme of autonomy and power of self — achievement, independence, control. The "I" theme.' },
      { term: 'Communion', tag: 'McAdams', tagColor: 'sky', def: 'Life-story theme of love and sense of belongingness — connection, intimacy, caring. The "we" theme.' },
      { term: 'Type A behavior pattern', tag: 'risk', tagColor: 'red', def: 'Identified by cardiologists Meyer Friedman and R.H. Rosenman (1974) as a major risk factor for heart disease. Competitive, time-urgent, achievement-striving, hostile.' },
      { term: 'Type D personality', tag: 'risk', tagColor: 'red', def: 'The other personality risk factor for heart disease. D = Distressed: negative affectivity combined with social inhibition.' },
      { term: 'Protective traits (heart health)', tag: 'protective', tagColor: 'green', def: 'Agreeableness and conscientiousness — notably, the same two Big Five traits that increase with age.' }
    ],
    laws: [
      { name: "Erikson's 8 stages (in order)", desc: 'Trust vs. Mistrust → Autonomy vs. Shame & Doubt → Initiative vs. Guilt → Industry vs. Inferiority → Identity vs. Role Confusion → Intimacy vs. Isolation → Generativity vs. Stagnation (40–65) → Ego Integrity vs. Despair (65+). Optimal development is contingent on crisis resolution.' },
      { name: "Criticism of Erikson", desc: 'Criticized for demarcated stages and the claim that you cannot move forward without resolving each conflict. Development is NOT always linear or mutually exclusive — people revisit crises and can work on two at once.' },
      { name: "Jung's midlife transition — 4 elements", desc: '1) Pendulum swings extraversion ↔ introversion (→ more balanced personality long-term). 2) The shadow is confronted in pursuit of wholeness. 3) Embracing opposite-gender archetypes (anima = unconscious feminine; animus = unconscious masculine). 4) Ultimate goal: shifting from Ego to true Self = Individuation.' },
      { name: "Jung's two halves of life", desc: 'First 30–40 → building the ego (outward achievement). ~40+ → look inward at suppressed traits → internal validation ("the afternoon of life").' },
      { name: 'Quarter-life crisis outcomes', desc: 'Managed → coping skills: emotional regulation, problem-solving, confidence in decision-making, adaptability. Overwhelming → persistent anxiety, depression, low self-esteem, decision paralysis, social withdrawal.' }
    ],
    methods: [
      { name: 'Big Five age trends', expand: 'Two up, two down, one flat', desc: 'UP: Conscientiousness, Agreeableness. DOWN: Openness, Neuroticism. FLAT (or modest decline): Extraversion. Conscientiousness is the tricky one — increases, then plateaus, then may decline slightly.' },
      { name: 'OCEAN', expand: 'Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism', desc: 'The five dispositional traits, each with six facets.' },
      { name: 'Jung vs. Jaques', expand: 'Attribution trap', desc: 'JUNG invented the notion of midlife crisis and called it the "midlife transition." Elliott JAQUES coined the actual term "midlife crisis." Jung = the idea; Jaques = the phrase.' },
      { name: 'Anima vs. Animus', expand: 'animA / animUS', desc: 'animA = unconscious FEMININE qualities (in a man). animUS = unconscious MASCULINE qualities (in a woman).' },
      { name: 'Agency vs. Communion', expand: 'I vs. we', desc: 'Agency = autonomy and power of self ("I made this happen"). Communion = love and sense of belongingness ("we were in it together").' },
      { name: 'Life Story Method — 7 components', expand: 'Table 10.4', desc: '1) Life chapters 2) Eight key episodes 3) Life challenge 4) Main characters 5) Future plot 6) Personal ideology 7) Life theme. The eight episodes: high point, low point, turning point, earliest memory, important childhood, adolescent and adult episodes, plus one other.' },
      { name: 'Type A vs. Type D', expand: 'Both raise cardiac risk', desc: 'A = Friedman & Rosenman 1974: competitive, time-urgent, hostile. D = Distressed: negative affectivity + social inhibition. Protective: agreeableness and conscientiousness.' }
    ]
  },

  questions: [
    {
      q: 'Which statement best reflects the current consensus on personality stability presented in class?',
      type: 'mcq', difficulty: 'E',
      choices: [
        'Personality is set in plaster by age 30 and does not change',
        'Personality is relatively stable throughout the lifespan, although some changes are noted',
        'Personality changes dramatically and unpredictably throughout adulthood',
        'Personality is fully determined by genetics'
      ],
      correct: 1,
      explanation: 'The "set in plaster by 30" claim is presented as the OLD view. The current consensus is that personality is relatively stable throughout the lifespan, although there are some changes noted. Both halves of that sentence matter.'
    },
    {
      q: 'Dispositional traits are defined as relatively stable internal dimensions of personality. How many subscales or "facets" does each disposition have?',
      type: 'mcq', difficulty: 'E',
      choices: ['Three', 'Five', 'Six', 'Eight'],
      correct: 2,
      explanation: 'Each disposition has SIX subscales or "facets" — so the five factors comprise 30 facets in total.'
    },
    {
      q: 'According to the average trends discussed in class, which TWO Big Five traits INCREASE with age?',
      type: 'mcq', difficulty: 'M',
      choices: [
        'Openness and Extraversion',
        'Conscientiousness and Agreeableness',
        'Neuroticism and Openness',
        'Agreeableness and Neuroticism'
      ],
      correct: 1,
      explanation: 'Conscientiousness increases from young adulthood into midlife (then plateaus and may decline slightly), and Agreeableness increases — people become more cooperative, compassionate and emotionally mature. Openness and Neuroticism DECREASE; Extraversion is relatively stable or shows a modest decline.'
    },
    {
      q: 'Which Big Five trait has the most complex age trajectory, and what is it?',
      type: 'short', difficulty: 'H',
      correct: ['conscientiousness', 'conscientiousness increases then plateaus then declines'],
      explanation: 'Conscientiousness: it INCREASES from young adulthood into midlife, then OFTEN PLATEAUS, and MAY DECLINE SLIGHTLY in later life. An answer choice saying only "increases with age" is incomplete. Her handwritten note was simply "plateaus," with a curve that rises then flattens.'
    },
    {
      q: 'Why does the slide note that different facets of Extraversion "may change differently"?',
      type: 'mcq', difficulty: 'H',
      choices: [
        'Because extraversion is not really a trait',
        'Because sub-components such as sociability, assertiveness and activity level can move in different directions, so the overall trait can look flat while its parts shift',
        'Because extraversion only applies to older adults',
        'Because extraversion is measured differently in every study'
      ],
      correct: 1,
      explanation: 'Each Big Five trait has six facets. For Extraversion, sociability might decline while activity level holds steady — so the aggregate trait looks "relatively stable or a modest decline" even though its components are moving. This facet-level nuance is exactly what short-answer questions reward.'
    },
    {
      q: 'A 55-year-old high school teacher mentors new teachers and coaches a youth team, saying she wants to "leave the profession better than I found it." Which Erikson stage is she navigating?',
      type: 'mcq', difficulty: 'M',
      choices: ['Intimacy vs. Isolation', 'Generativity vs. Stagnation', 'Ego Integrity vs. Despair', 'Identity vs. Role Confusion'],
      correct: 1,
      explanation: 'Generativity vs. Stagnation (ages 40–65). Your annotation: "contribution to society and younger [generations]." Generativity means investing in what outlives you — mentoring, teaching, parenting, creative work. Its failure pole is stagnation: self-absorption and a sense of having contributed nothing.'
    },
    {
      q: 'State the criticism of Erikson\'s theory that Dr. Held wrote across the bottom of the slide.',
      type: 'short', difficulty: 'H',
      correct: ['not always linear or mutually exclusive', 'demarcated stages inability to move forward without resolving each conflict'],
      explanation: 'Criticized for DEMARCATED STAGES and the claimed INABILITY TO MOVE FORWARD WITHOUT RESOLVING EACH CONFLICT — and, starred: development is NOT ALWAYS LINEAR OR MUTUALLY EXCLUSIVE. Real people revisit earlier crises and can work on generativity and integrity at the same time.'
    },
    {
      q: 'Who was the first theorist to discuss personality development during adulthood?',
      type: 'mcq', difficulty: 'E',
      choices: ['Erik Erikson', 'Carl Jung', 'Elliott Jaques', 'Dan McAdams'],
      correct: 1,
      explanation: 'Carl Jung. This priority claim is the headline fact of that slide — before Jung, personality theory essentially stopped at childhood. He also introduced extroverts/introverts and invented the notion of midlife crisis (calling it the "midlife transition").'
    },
    {
      q: 'Who coined the actual term "midlife crisis"?',
      type: 'mcq', difficulty: 'M',
      choices: ['Carl Jung', 'Canadian psychoanalyst Elliott Jaques', 'Erik Erikson', 'Meyer Friedman'],
      correct: 1,
      explanation: 'Canadian psychoanalyst ELLIOTT JAQUES coined the term. Jung INVENTED THE NOTION and called it the "midlife transition." This attribution swap is a classic trap: Jung = the idea, Jaques = the phrase.'
    },
    {
      q: 'In Jung\'s theory, define anima and animus.',
      type: 'short', difficulty: 'M',
      correct: ['anima unconscious feminine animus unconscious masculine', 'anima feminine animus masculine'],
      explanation: 'ANIMA = unconscious FEMININE qualities (within a man). ANIMUS = unconscious MASCULINE qualities (within a woman). Embracing these opposite-gender archetypes is element 3 of the midlife transition. Memory hook: animA = feminine, animUS = masculine.'
    },
    {
      q: 'What is Jung\'s term for the ultimate goal of the midlife transition — shifting from "Ego" to true "Self"?',
      type: 'mcq', difficulty: 'M',
      choices: ['Generativity', 'Individuation', 'Communion', 'Compensation'],
      correct: 1,
      explanation: 'INDIVIDUATION — the lifelong process of becoming a whole, integrated person by moving from the Ego (the conscious, socially performed identity built in the first half of life) to the Self (the total personality, including integrated unconscious material such as the shadow and the anima/animus).'
    },
    {
      q: 'A 44-year-old executive who spent two decades pursuing promotions begins therapy, starts examining her own anger and competitiveness, and reports caring far less about others\' approval. Which framework and element does this best illustrate?',
      type: 'mcq', difficulty: 'H',
      choices: [
        'Erikson — Intimacy vs. Isolation',
        "Jung's midlife transition — confronting the shadow and shifting toward internal validation",
        'Type A behavior pattern',
        'Continuity Theory'
      ],
      correct: 1,
      explanation: 'This is Jung. Anger and competitiveness are the shadow examples from your annotation, and the shift from external achievement to internal validation is exactly the "afternoon of life" turn (~40+) after the ego-building first 30–40 years. Confronting the shadow is element 2 of the four-part midlife transition.'
    },
    {
      q: 'The 2019–2022 despair data reversed the earlier pattern, with despair now peaking in the late teens and falling with age. What did Dr. Held attribute this to, and which Lecture 1 concept does that shift illustrate?',
      type: 'short', difficulty: 'H',
      correct: ['COVID normative history-graded', 'covid, normative history graded influence'],
      explanation: 'She attributed it to COVID ("younger age changing with higher feelings of despair due to COVID"). Because it hit an entire society at one moment in history and reshaped a stable age pattern, it is a NORMATIVE HISTORY-GRADED INFLUENCE. It also undercuts the midlife-crisis narrative: the 2009–2018 hump-shaped midlife peak in despair is no longer where the low point sits.'
    },
    {
      q: 'The systematic review on quarter-life crisis identified three internal and three external factors. Which set is correct?',
      type: 'mcq', difficulty: 'M',
      choices: [
        'Internal: social support, age, gender / External: purpose, spirituality, anxiety',
        'Internal: commitment to purpose, spirituality, anxiety / External: social support, age, gender',
        'Internal: anxiety, depression, self-esteem / External: family, work, school',
        'Internal: openness, conscientiousness, neuroticism / External: social support, age, gender'
      ],
      correct: 1,
      explanation: 'INTERNAL: commitment to purpose, spirituality, and anxiety. EXTERNAL: social support, age, and gender. Note the surprise — age and gender are classified as EXTERNAL. Her colour-coding marked purpose and spirituality as protective and anxiety as an at-risk factor.'
    },
    {
      q: 'Openness DECREASES with age on average, yet the quarter-life crisis slide lists "greater openness to experience" as a possible outcome. Explain how both can be true.',
      type: 'short', difficulty: 'H',
      correct: ['average trend vs individual crisis period', 'population average versus a specific life event'],
      explanation: 'The Big Five table gives *AVERAGE TRENDS across the lifespan at the population level. A quarter-life crisis is a specific, time-limited period in one person\'s life that can locally reverse a lifelong average trend — people explore new careers, relationships and lifestyles. The same logic applies to neuroticism: its lifespan trend is a decrease, but a crisis produces TEMPORARY increases.'
    },
    {
      q: 'What was McAdams\' central critique of relying only on the five-factor model?',
      type: 'mcq', difficulty: 'M',
      choices: [
        'The Big Five traits are not measurable',
        'Considering only dispositional traits misses important considerations — people are also creating a life story based on where they have been, where they are going, and who they want to become',
        'Personality does not exist',
        'The Big Five only apply to older adults'
      ],
      correct: 1,
      explanation: 'McAdams argued that if we only consider the dispositional traits described in the five-factor model, we are missing very important considerations in describing and understanding personality. Traits tell you what someone is LIKE; the life story tells you who they think they ARE. Most important is the changing personal identity reflected in the emotions conveyed in the story.'
    },
    {
      q: 'In McAdams\' model, a man describes his life mainly through close friendships, his marriage, and caring for his mother. Which theme dominates his life story?',
      type: 'mcq', difficulty: 'M',
      choices: ['Agency', 'Communion', 'Individuation', 'Generativity'],
      correct: 1,
      explanation: 'COMMUNION — your annotation: love and sense of belongingness. Themes of connection, intimacy, caring and unity with others. AGENCY would be the contrasting theme: autonomy and power of self (achievement, independence, control). Mnemonic: agency = "I", communion = "we".'
    },
    {
      q: 'Name any four of the seven components of the Life Story Method (Table 10.4).',
      type: 'short', difficulty: 'H',
      correct: ['life chapters key episodes life challenge main characters future plot personal ideology life theme'],
      explanation: 'The seven: 1) Life chapters 2) Eight key episodes 3) Life challenge 4) Main characters 5) Future plot 6) Personal ideology 7) Life theme. The eight key episodes are: high point, low point, turning point, earliest memory, important childhood episode, important adolescent episode, important adult episode, and one other important episode.'
    },
    {
      q: 'Who identified the Type A behavior pattern as a major risk factor for heart disease, and in what year?',
      type: 'mcq', difficulty: 'M',
      choices: [
        'Psychologists Friedman and Rosenman (1954)',
        'Cardiologists Meyer Friedman and R.H. Rosenman (1974)',
        'Cardiologist Elliott Jaques (1965)',
        'Psychiatrists Baltes and Baltes (1990)'
      ],
      correct: 1,
      explanation: 'CARDIOLOGISTS Meyer Friedman and R.H. Rosenman, 1974. The slide specifies their profession and the year — both are checkable details worth memorizing.'
    },
    {
      q: 'A patient chronically worries and feels irritable and gloomy, but deliberately hides all of it in social situations for fear of disapproval. Which personality risk factor for heart disease does this describe?',
      type: 'mcq', difficulty: 'M',
      choices: ['Type A behavior pattern', 'Type B personality', 'Type D personality', 'High conscientiousness'],
      correct: 2,
      explanation: 'TYPE D — "Distressed." It combines negative affectivity (chronic worry, irritability, gloom) with social inhibition (suppressing those emotions socially). Type A is the competitive, time-urgent, hostile pattern from Friedman & Rosenman.'
    },
    {
      q: 'Which two personality traits play a PROTECTIVE role in heart health — and what is notable about them given the Big Five age trends?',
      type: 'short', difficulty: 'H',
      correct: ['agreeableness conscientiousness', 'agreeableness and conscientiousness'],
      explanation: 'AGREEABLENESS and CONSCIENTIOUSNESS. What makes this elegant: these are exactly the two Big Five traits that INCREASE with age. So on average, aging shifts people toward the cardioprotective end of both traits — a cross-slide connection that application questions love.'
    },
    {
      q: 'True or False: Elliott Jaques theorized that the midlife crisis is a period of psychological breakdown, which is why the media portrayal is accurate.',
      type: 'tf', difficulty: 'M',
      correct: 1,
      explanation: 'FALSE. The slide explicitly says the concept was SENSATIONALIZED IN THE MEDIA. Jaques actually theorized a TURNING POINT during which an adult reevaluates what they have done and explores who they are more deeply — your annotation: "cognitive growth and reassessment." The slide offers "Midlife Correction" as a better label precisely because "crisis" overstates it.'
    }
  ]
};
