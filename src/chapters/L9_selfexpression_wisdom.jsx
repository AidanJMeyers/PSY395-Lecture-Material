import React from 'react';
import { Callout, Table, Card, Added } from '../components/Visual.jsx';

const IMG = 'L9/';

export default {
  id: 9,
  quiz: 4,
  lectureNo: 9,
  date: 'Wed, Sep 30',
  title: 'Self-Expression & Wisdom',
  subtitle: 'Lecture 9 — Creativity Day 2: identity through self-expression, and what wisdom actually is',
  sourceNote: 'Student deck “Creativity Day 2.” This is the material after the “Stopped here 9/28/26” note on the Day 1 annotated slides, so it was taught on 9/30 and belongs to Quiz 4. (Creativity Day 1 is already covered in Lecture 8 under Quiz 3.)',
  addedLegend: true,

  blocks: [
    {
      id: '9a',
      title: 'Self-Expression & Identity',
      subtitle: 'Why creativity matters when life circumstances change',
      images: [
        { src: IMG + 'L9_s01.jpg', alt: 'Title slide: Imagination: Creativity / Creativity: Self Expression', caption: 'The lecture’s framing: imagination → creativity → self-expression' },
        { src: IMG + 'L9_s02.jpg', alt: 'Self-expression and identity slide', caption: 'Six circumstances that destabilize identity' }
      ],
      content: (
        <>
          <Callout kind="info" title="The thesis (from the slide)">
            <strong>Self-expression can provide a way to maintain, explore, or reconstruct identity as circumstances
            change.</strong>
          </Callout>
          <p>The six circumstances listed as the kinds of change that make this necessary:</p>
          <div className="grid sm:grid-cols-3 gap-2 my-3">
            {['Career transitions', 'Retirement', 'Loss', 'Physical changes', 'Changing priorities', 'Changing environments'].map((t) => (
              <div key={t} className="border border-sky-300 bg-sky-50 rounded px-3 py-2 text-sm font-semibold text-sky-900 text-center">{t}</div>
            ))}
          </div>
          <Callout kind="tip" title="Note the three verbs">
            <strong>Maintain, explore, or reconstruct.</strong> Self-expression is not only about preserving who you
            were — it can also be how someone discovers or rebuilds an identity after it is disrupted. If a short
            answer asks what self-expression does for identity, use all three verbs.
          </Callout>
          <Added title="Why this slide follows the creativity lecture">
            <p>
              Every item on the list removes a <em>role</em> that people use to answer "who am I?" — a job title, a
              daily routine, a spouse, a body that could do certain things, a home. Lecture 2 called this the problem
              of identity across the lifespan; McAdams’ <strong>life-story model</strong> is the clearest connection,
              because a life story has to be revised when its chapters change.
            </p>
            <p>
              Concretely, self-expression here means things like painting, writing, memoir and storytelling, music,
              gardening, crafts, cooking, faith practice and volunteering — the same list as
              <strong> everyday creativity</strong> from Lecture 8. That is the link: everyday creativity is the
              <em> mechanism</em>, and identity maintenance is the <em>function</em>.
            </p>
          </Added>
        </>
      )
    },
    {
      id: '9b',
      title: 'What Is Wisdom? Two Everyday Definitions',
      subtitle: 'Wisdom as the synthesis of intelligence and creativity',
      images: [
        { src: IMG + 'L9_s03.jpg', alt: 'Discussion: who would you ask for advice?', caption: 'The opening discussion question' },
        { src: IMG + 'L9_s04.jpg', alt: 'Wisdom slide with APA and Merriam-Webster definitions', caption: 'APA Dictionary and Merriam-Webster definitions' }
      ],
      content: (
        <>
          <p className="italic text-slate-600">
            Opening question: "If you could ask one person for advice about one major life decision, who would you
            choose, and why?"
          </p>
          <Callout kind="danger" title="The framing line — memorize it">
            <strong>Wisdom can be thought of as the synthesis of intelligence and creativity.</strong>
          </Callout>
          <Table
            headers={['Source', 'Definition']}
            rows={[
              [<strong key="a">APA Dictionary of Psychology</strong>, '"The ability of an individual to make sound decisions, to find good answers to difficult and important life questions, and to give advice about the complex problems of everyday life and interpersonal relationships."'],
              [<strong key="b">Merriam-Webster</strong>, '"Ability to discern inner qualities and relationships; good sense; judgment; accumulated philosophical or scientific learning; a wise attitude, belief, or course of action."']
            ]}
          />
          <Callout kind="tip" title="What the two definitions share">
            Both center on <strong>judgment applied to hard, real, interpersonal problems</strong> — not on knowing
            facts. The APA version is especially practical: sound decisions, good answers to difficult life questions,
            and <em>advice to others</em>. That is why the discussion question asks who you would go to for advice:
            wisdom is defined partly by being recognized by other people.
          </Callout>
          <Added title="Why “synthesis of intelligence and creativity”">
            It takes <strong>intelligence</strong> (the knowledge base and reasoning — much of it crystallized, which
            grows with age per Lecture 6) plus <strong>creativity</strong> (flexibility, generating options nobody
            handed you — Lecture 8) to handle a problem that has no correct answer. Neither alone is wisdom: a very
            smart person can give rigid advice, and a very inventive person can give reckless advice.
          </Added>
        </>
      )
    },
    {
      id: '9c',
      title: 'Four Scholarly Definitions of Wisdom',
      subtitle: 'Baltes · Erikson · Meacham · Labouvie-Vief — know who said what',
      images: [{ src: IMG + 'L9_s05.jpg', alt: 'Four scholarly definitions of wisdom', caption: 'Baltes et al. 1992 · Erikson et al. 1986 · Meacham 1990 · Labouvie-Vief 2003' }],
      content: (
        <>
          <Table
            headers={['Theorist', 'Definition on the slide']}
            rows={[
              [<strong key="a">Baltes et al. (1992)</strong>, <span key="a2"><strong>Expert level knowledge and judgment in the fundamental pragmatics of life</strong>, including <strong>factual knowledge, procedural knowledge, knowledge of life’s contexts, relativism, and uncertainty</strong>.</span>],
              [<strong key="b">Erikson et al. (1986)</strong>, <span key="b2">An <strong>informed and detached concern with life itself in the face of death itself</strong>.</span>],
              [<strong key="c">Meacham (1990)</strong>, <span key="c2">A <strong>balance between confidence in knowledge and understanding that knowledge is fallible</strong>.</span>],
              [<strong key="d">Labouvie-Vief (2003)</strong>, <span key="d2">A <strong>link between personal growth and cognitive processes</strong>.</span>]
            ]}
          />
          <Callout kind="warn" title="Matching strategy — one keyword each">
            <strong>Baltes = expertise</strong> (the five-part list). <strong>Erikson = death</strong> (concern with
            life in the face of death). <strong>Meacham = fallibility</strong> (confidence balanced against knowing you
            can be wrong). <strong>Labouvie-Vief = growth</strong> (personal growth linked to cognition). If a matching
            question appears, those four keywords are enough.
          </Callout>
          <Added title="Unpacking Baltes’ five components">
            <p>
              Baltes’ definition comes from the <strong>Berlin Wisdom Paradigm</strong>, which treats wisdom as
              expertise in the "fundamental pragmatics of life" and scores it on five criteria — the five items listed
              on the slide:
            </p>
            <Table
              headers={['Component', 'What it means']}
              rows={[
                ['Factual knowledge', 'Knowing about human nature, relationships, and how life events typically unfold — the "what"'],
                ['Procedural knowledge', 'Knowing strategies for giving advice, weighing options and resolving conflict — the "how"'],
                ['Knowledge of life’s contexts', 'Understanding that life has many domains (work, family, health) that change across the lifespan'],
                ['Relativism', 'Recognizing that people hold different values and priorities, and resisting the urge to impose your own'],
                ['Uncertainty', 'Accepting that the future cannot be fully known and that decisions must be made anyway']
              ]}
            />
            <p>
              <strong>Erikson’s definition is the same Erikson from Lecture 2.</strong> Wisdom is the strength that
              comes out of resolving <strong>Ego Integrity vs. Despair</strong> — looking back on life, accepting it,
              and facing mortality without being consumed by it. That is exactly what "informed and detached concern
              with life itself in the face of death itself" means: engaged with living, but no longer gripped by fear
              of its ending.
            </p>
          </Added>
        </>
      )
    },
    {
      id: '9d',
      title: 'Models of Wisdom',
      subtitle: 'The figure she showed — three ways researchers map the construct',
      images: [{ src: IMG + 'L9_s06.jpg', alt: 'Three wisdom model diagrams', caption: 'Figure shown with no slide text — transcribed below' }],
      content: (
        <>
          <p>
            This slide is a figure with no text of its own. Because it defines the components of wisdom visually, here
            is what each of the three panels contains.
          </p>
          <Card title="Panel 1 — Three sources that overlap to produce wisdom">
            <Table
              headers={['Category', 'Contents']}
              rows={[
                [<strong key="a">Individual factors</strong>, 'Cognition · Social/emotional intelligence · Personality (e.g., openness) · Motivational dispositions (e.g., generativity)'],
                [<strong key="b">Experiential factors</strong>, 'Life experience · Acculturated knowledge · Building effective social skills and communication ability'],
                [<strong key="c">Facilitative contexts</strong>, 'Providing mentorship · Self-reflection/self-awareness · Social interaction']
              ]}
            />
            <p className="text-sm text-slate-600 mt-2">Wisdom sits where all three overlap — it is not any one of them alone.</p>
          </Card>
          <Card title="Panel 2 — Wise reasoning (four components)" className="mt-3">
            <ul className="list-disc ml-5 text-sm space-y-0.5">
              <li><strong>Intellectual humility</strong></li>
              <li><strong>Recognizing uncertainty and change</strong></li>
              <li><strong>Seeking others’ perspectives</strong></li>
              <li><strong>Integrating different perspectives</strong></li>
            </ul>
          </Card>
          <Card title="Panel 3 — Wisdom as the intersection of four elements" className="mt-3">
            <ul className="list-disc ml-5 text-sm space-y-0.5">
              <li><strong>Intellectual humility</strong></li>
              <li><strong>Recognition of uncertainty and change</strong></li>
              <li><strong>Others’ perspectives / broader contexts</strong></li>
              <li><strong>Compromise</strong></li>
            </ul>
          </Card>
          <Callout kind="tip" title="What all three panels agree on">
            Across every model, the same two ideas recur: <strong>intellectual humility</strong> (knowing the limits of
            what you know) and <strong>taking other perspectives</strong>. Notice that humility matches
            <strong> Meacham’s</strong> definition and uncertainty matches <strong>Baltes’</strong> fifth component —
            so the figure is really a visual summary of block 9c.
          </Callout>
          <Added title="Two notes on the figure">
            <p>
              The "wise reasoning" panel reflects a line of research (associated with Igor Grossmann) arguing wisdom
              is better measured as <em>reasoning in a specific situation</em> than as a fixed trait — a person can
              reason wisely about a friend’s divorce and poorly about their own. Notice that
              <strong> generativity</strong> appears under individual factors, which is the Erikson stage from
              Lecture 2 (contribution to society and younger generations).
            </p>
          </Added>
        </>
      )
    },
    {
      id: '9e',
      title: 'Age Does Not Equal Wisdom',
      subtitle: 'The most quotable line in the lecture',
      images: [{ src: IMG + 'L9_s07.jpg', alt: 'Age gives opportunities for experience slide', caption: 'Baltes & Staudinger (2000)' }],
      content: (
        <>
          <Callout kind="danger" title="From the slide — quote this">
            <strong>"Age gives us opportunities for experience. It does not automatically give us wisdom."</strong>
            <p className="mt-2">
              In reality, attaining wisdom depends on an individual’s ability to <strong>integrate experiences and
              utilize these experiences in a reflective manner</strong> (see Baltes &amp; Staudinger, 2000).
            </p>
          </Callout>
          <Callout kind="tip" title="The mechanism is reflection, not time">
            Experience is the <em>raw material</em>; reflection is the <em>process</em> that converts it into wisdom.
            Two people can live the same 80 years and only one becomes wise. This is the single most likely short-answer
            prompt from this lecture.
          </Callout>
          <Added title="Why this matters for the course as a whole">
            <p>
              This claim cuts both ways on ageism (Lecture 3). It rejects the <em>negative</em> stereotype that older
              adults are out of touch — but it equally rejects the <em>positive</em> stereotype that older adults are
              automatically wise and all-knowing, which the ASA guide named
              <strong> benevolent ageism</strong>. Research generally finds wisdom scores rise into middle adulthood
              and then plateau rather than climbing with every added year.
            </p>
          </Added>
        </>
      )
    },
    {
      id: '9f',
      title: 'Wisdom & Emotion',
      subtitle: 'The emotional, not just cognitive, side of wisdom',
      images: [{ src: IMG + 'L9_s08.jpg', alt: 'Wisdom and emotion slide', caption: 'What wise individuals are considered to be' }],
      content: (
        <>
          <p>Wise individuals are considered to be more…</p>
          <div className="grid sm:grid-cols-3 gap-2 my-3">
            {['Empathetic', 'More accurate in their perceptions', 'More considerate of the welfare of others'].map((t) => (
              <div key={t} className="border-2 border-emerald-300 bg-emerald-50 rounded px-3 py-2 text-sm font-semibold text-emerald-900 text-center">{t}</div>
            ))}
          </div>
          <Callout kind="danger" title="The claim to remember">
            <strong>Some researchers have even argued that empathy and understanding are more closely related to
            wisdom than age or experience.</strong>
          </Callout>
          <Callout kind="tip" title="How this closes the lecture">
            Put blocks 9e and 9f together and you get the lecture’s whole argument: wisdom is <strong>not</strong>
            a function of age, and it is <strong>not</strong> purely cognitive. It depends on reflection and on
            emotional capacities — empathy, accurate perception of others, and concern for their welfare.
          </Callout>
          <Added title="Connecting to earlier lectures">
            This fits the course’s larger pattern. <strong>Socioemotional selectivity theory</strong> (Lecture 1) says
            older adults prioritize emotionally meaningful goals; the Big Five trends (Lecture 2) show
            <strong> agreeableness rising</strong> and <strong>neuroticism falling</strong> — i.e., people become more
            cooperative, compassionate and emotionally stable on average. Those same shifts are the emotional
            ingredients this slide attributes to wise individuals.
          </Added>
        </>
      )
    }
  ],

  keyReview: {
    vocab: [
      { term: 'Self-expression & identity', tag: 'core', def: 'Self-expression can provide a way to MAINTAIN, EXPLORE, or RECONSTRUCT identity as circumstances change — career transitions, retirement, loss, physical changes, changing priorities, changing environments.' },
      { term: 'Wisdom (framing)', tag: 'core', def: 'Can be thought of as the synthesis of intelligence and creativity.' },
      { term: 'Wisdom (APA Dictionary)', tag: 'definition', tagColor: 'sky', def: 'The ability to make sound decisions, find good answers to difficult and important life questions, and give advice about the complex problems of everyday life and interpersonal relationships.' },
      { term: 'Wisdom (Merriam-Webster)', tag: 'definition', tagColor: 'sky', def: 'Ability to discern inner qualities and relationships; good sense; judgment; accumulated philosophical or scientific learning; a wise attitude, belief, or course of action.' },
      { term: 'Baltes et al. (1992)', tag: 'expertise', tagColor: 'violet', def: 'Expert level knowledge and judgment in the fundamental pragmatics of life, including factual knowledge, procedural knowledge, knowledge of life’s contexts, relativism, and uncertainty.' },
      { term: 'Erikson et al. (1986)', tag: 'death', tagColor: 'violet', def: 'An informed and detached concern with life itself in the face of death itself. (Links to Ego Integrity vs. Despair.)' },
      { term: 'Meacham (1990)', tag: 'fallibility', tagColor: 'violet', def: 'A balance between confidence in knowledge and understanding that knowledge is fallible.' },
      { term: 'Labouvie-Vief (2003)', tag: 'growth', tagColor: 'violet', def: 'A link between personal growth and cognitive processes.' },
      { term: 'Age ≠ wisdom', tag: 'key line', tagColor: 'red', def: '"Age gives us opportunities for experience. It does not automatically give us wisdom." Attaining wisdom depends on integrating experiences and using them REFLECTIVELY (Baltes & Staudinger, 2000).' },
      { term: 'Wisdom & emotion', tag: 'core', def: 'Wise individuals are more empathetic, more accurate in their perceptions, and more considerate of the welfare of others. Some researchers argue empathy & understanding are more closely related to wisdom than age or experience.' },
      { term: 'Wise reasoning', tag: 'figure', tagColor: 'amber', def: 'Intellectual humility · recognizing uncertainty and change · seeking others’ perspectives · integrating different perspectives.' },
      { term: 'Three sources of wisdom', tag: 'figure', tagColor: 'amber', def: 'Individual factors (cognition, social/emotional intelligence, personality, motivational dispositions) · Experiential factors (life experience, acculturated knowledge, social skills) · Facilitative contexts (mentorship, self-reflection, social interaction).' }
    ],
    laws: [
      { name: 'The lecture’s argument in one line', desc: 'Self-expression sustains identity through change; wisdom is the synthesis of intelligence and creativity; and wisdom comes from reflecting on experience, not from accumulating years.' },
      { name: 'Baltes’ five components', desc: 'Factual knowledge · procedural knowledge · knowledge of life’s contexts · relativism · uncertainty.' },
      { name: 'Wisdom & emotion', desc: 'More empathetic · more accurate in perceptions · more considerate of others’ welfare. Empathy and understanding may matter more than age or experience.' }
    ],
    methods: [
      { name: 'Four theorists, four keywords', expand: 'Matching shortcut', desc: 'Baltes = EXPERTISE (5-part list). Erikson = DEATH. Meacham = FALLIBILITY. Labouvie-Vief = GROWTH.' },
      { name: 'Three verbs of self-expression', expand: 'Identity work', desc: 'Maintain · explore · reconstruct.' },
      { name: 'What every wisdom model shares', expand: 'Humility + perspective', added: true, desc: 'Intellectual humility and taking others’ perspectives appear in all three panels of the figure — and match Meacham (fallibility) and Baltes (relativism, uncertainty).' }
    ]
  },

  questions: [
    { q: 'According to the slide, self-expression can provide a way to do which three things to identity as circumstances change?', type: 'mcq', difficulty: 'E',
      choices: ['Protect, hide, or deny', 'Maintain, explore, or reconstruct', 'Replace, forget, or simplify', 'Measure, test, or score'],
      correct: 1,
      explanation: 'Maintain, explore, or reconstruct. The circumstances listed are career transitions, retirement, loss, physical changes, changing priorities, and changing environments.' },
    { q: 'Wisdom was framed in class as the synthesis of which two things?', type: 'mcq', difficulty: 'E',
      choices: ['Memory and attention', 'Intelligence and creativity', 'Experience and age', 'Empathy and humility'],
      correct: 1,
      explanation: '"Wisdom can be thought of as the synthesis of intelligence and creativity" — which is why it follows the creativity lecture.' },
    { q: 'Match the definition to its source: "an informed and detached concern with life itself in the face of death itself."', type: 'mcq', difficulty: 'M',
      choices: ['Baltes et al. (1992)', 'Erikson et al. (1986)', 'Meacham (1990)', 'Labouvie-Vief (2003)'],
      correct: 1,
      explanation: 'Erikson — the keyword is DEATH. This connects to his Ego Integrity vs. Despair stage from Lecture 2.' },
    { q: 'Which definition belongs to Meacham (1990)?', type: 'mcq', difficulty: 'M',
      choices: [
        'Expert level knowledge and judgment in the fundamental pragmatics of life',
        'A balance between confidence in knowledge and understanding that knowledge is fallible',
        'A link between personal growth and cognitive processes',
        'An informed and detached concern with life in the face of death'],
      correct: 1,
      explanation: 'Meacham = FALLIBILITY. Baltes = expertise; Labouvie-Vief = personal growth and cognitive processes; Erikson = death.' },
    { q: 'List the five components in Baltes et al.’s (1992) definition of wisdom.', type: 'saq', difficulty: 'H',
      sampleAnswer: 'Baltes and colleagues (1992) defined wisdom as expert level knowledge and judgment in the fundamental pragmatics of life. It includes five components: factual knowledge, procedural knowledge, knowledge of life’s contexts, relativism, and uncertainty. In other words, a wise person knows about how life and relationships work, knows strategies for handling problems and giving advice, understands that life spans many changing domains, recognizes that people hold different values, and accepts that the future cannot be fully known.',
      keyPoints: ['Expert level knowledge and judgment in the fundamental pragmatics of life', 'Factual knowledge', 'Procedural knowledge', 'Knowledge of life’s contexts', 'Relativism', 'Uncertainty'],
      explanation: 'The five-item list is on the slide verbatim — the most memorizable thing in the lecture.' },
    { q: 'Explain the claim "Age gives us opportunities for experience. It does not automatically give us wisdom."', type: 'saq', difficulty: 'M',
      sampleAnswer: 'The claim is that growing older provides more experiences, but experience alone does not produce wisdom. According to Baltes and Staudinger (2000), attaining wisdom depends on an individual’s ability to integrate those experiences and use them in a reflective manner. Experience is the raw material and reflection is the process that converts it into wisdom, so two people of the same age can differ greatly in wisdom. This also pushes back on the stereotype that older adults are automatically wise — a form of benevolent ageism from Lecture 3.',
      keyPoints: ['Age provides opportunities for experience, not wisdom itself', 'Wisdom requires INTEGRATING experiences and using them REFLECTIVELY', 'Cites Baltes & Staudinger (2000)', 'Bonus: rejects the "older = automatically wise" stereotype'],
      explanation: 'Her strongest and most quotable line in this lecture.' },
    { q: 'According to the slide, wise individuals are considered to be more empathetic, more accurate in their perceptions, and more considerate of others’ welfare. What stronger claim did some researchers make?', type: 'mcq', difficulty: 'M',
      choices: [
        'That wisdom cannot be measured',
        'That empathy and understanding are more closely related to wisdom than age or experience',
        'That wisdom declines after age 70',
        'That only formal education produces wisdom'],
      correct: 1,
      explanation: 'Some researchers have argued empathy and understanding are more closely related to wisdom than age or experience — reinforcing that wisdom is not simply a product of getting older.' },
    { q: 'The wisdom figure shows "wise reasoning" as four components. Name at least three.', type: 'saq', difficulty: 'M', added: true,
      sampleAnswer: 'The four components of wise reasoning in the figure are intellectual humility, recognizing uncertainty and change, seeking others’ perspectives, and integrating different perspectives. A related panel in the same figure shows wisdom as the intersection of intellectual humility, recognition of uncertainty and change, others’ perspectives and broader contexts, and compromise. Across both, the recurring ideas are humility about the limits of one’s own knowledge and the ability to take and combine other people’s points of view.',
      keyPoints: ['Intellectual humility', 'Recognizing uncertainty and change', 'Seeking others’ perspectives', 'Integrating different perspectives'],
      explanation: 'The figure had no slide text, so these labels are transcribed from the image itself.' },
    { q: 'True or False: Research shows wisdom increases steadily with each additional year of age.', type: 'tf', difficulty: 'E',
      correct: 1,
      explanation: 'FALSE. Age gives opportunities for experience but does not automatically give wisdom — it depends on integrating experience reflectively.' }
  ]
};
