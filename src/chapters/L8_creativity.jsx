import React from 'react';
import { Callout, Table, Card, Added } from '../components/Visual.jsx';

const IMG = 'L8/';

export default {
  id: 8,
  quiz: 3,
  lectureNo: 8,
  date: 'Mon, Sep 28',
  title: 'Creativity & Imagination',
  subtitle: 'Lecture 8 — Defining creativity, how it is measured, and how it changes (not declines) in later life',
  sourceNote: 'Annotated slides, “Quiz 3 Lecture Slides.pdf” → Day 3 (pp. 26–31). Two slides per page. Her note on p. 29 reads “Stopped here 9/28/26,” so the final slides may have been covered on 9/30.',
  addedLegend: true,

  blocks: [
    {
      id: '8a',
      title: 'Defining Creativity & Imagination',
      subtitle: 'Her handwritten definitions — the opening slide had no text at all',
      images: [{ src: IMG + 'L8_s01_p26.jpg', alt: 'What is creativity slide with handwritten definitions, plus the CREATIVITY slide', caption: 'Top: her written definitions. Bottom: the CREATIVITY slide with alternate-uses answers.' }],
      content: (
        <>
          <p>The slide said only <strong>"What is creativity? Define it."</strong> Everything below is her handwriting:</p>
          <Callout kind="info" title="Definitions from the board">
            <p><strong>Imagination</strong> → mentalizing with concepts <strong>impossible or probable but not yet realized</strong>.</p>
            <p className="mt-2"><strong>Creativity</strong> is the <strong>process harnessing imagination in which these are made</strong>.</p>
          </Callout>
          <Callout kind="tip" title="The relationship in one line">
            <strong>Imagination is thinking it; creativity is making it.</strong> Imagination is the mental act of
            holding something that does not yet exist; creativity is the process that turns that into something real.
            If a question asks how the two differ, that is the distinction.
          </Callout>
        </>
      )
    },
    {
      id: '8b',
      title: 'Measuring Creativity: Divergent Thinking & Alternate Uses',
      subtitle: 'Childhood predictors and the standard proxy measure',
      images: [{ src: IMG + 'L8_s01_p26.jpg', alt: 'CREATIVITY slide with divergent thinking and alternate uses answers', caption: 'Annotated: “highly associated,” “predictive of higher,” “thinking outside the box,” and the class’s alternate uses for a vase' }],
      content: (
        <>
          <Card title="From the slide (with her annotations)">
            <ul className="list-disc ml-5 space-y-1 text-sm">
              <li><strong>Pretend play in childhood → later creativity.</strong> Her note: <em>"highly associated."</em></li>
              <li><strong>Reinforcement of creativity in childhood → creative potential later in life.</strong> Her note: <em>"predictive of higher."</em></li>
              <li><strong>Divergent thinking</strong> is typically assessed as a <strong>proxy of creativity</strong> using the <strong>"Alternate Uses Task"</strong> in childhood and adulthood. Her note: <em>"thinking outside the box."</em></li>
              <li><strong>Problem solving tasks used too.</strong></li>
            </ul>
          </Card>
          <p className="mt-3">
            The class ran an Alternate Uses Task on a glass vase. Her recorded answers:
            <em> vase, packaging, stand, sculpture, pipe, toothbrush [holder], figure, bench, barricade, cage/pen,
            garbage disposal</em> — and "many things."
          </p>
          <Added title="What divergent thinking is, and how the task is scored">
            <p>
              <strong>Divergent thinking</strong> = generating many different possible answers to an open-ended prompt
              (the opposite of <em>convergent</em> thinking, which narrows to one correct answer). The Alternate Uses
              Task is usually scored on four dimensions:
            </p>
            <Table
              headers={['Dimension', 'What it counts', 'Vase example']}
              rows={[
                ['Fluency', 'How MANY uses you generate', 'The raw count of items on her list'],
                ['Flexibility', 'How many different CATEGORIES', 'Container vs. furniture vs. weapon vs. art — the list spans several'],
                ['Originality', 'How UNUSUAL compared with others', '"Barricade" is more original than "vase"'],
                ['Elaboration', 'How much DETAIL you add', 'Describing exactly how it becomes a cage or pen']
              ]}
            />
            <p>
              Keep this in mind for block 8d: fluency is essentially <em>how fast and how many</em> — which makes the
              task partly a speed test, and that is the core criticism of using it with older adults.
            </p>
          </Added>
        </>
      )
    },
    {
      id: '8c',
      title: 'Creativity in Later Life: Stable, But It Changes Form',
      subtitle: 'The headline claim of the lecture',
      images: [{ src: IMG + 'L8_s02_p27.jpg', alt: 'Creativity remains stable in later life slide, plus the fluid intelligence slide', caption: 'Annotated: “changes form however”; expertise → “crystallized intelligence”; divergent thinking “wanes”' }],
      content: (
        <>
          <Callout kind="info" title="From the slide">
            <p><strong>Research suggests that creativity remains stable in later life</strong> — her annotation adds: <em>"changes form however."</em></p>
            <p className="mt-2">Older adults have <strong>accumulated wisdom</strong>, <strong>expertise</strong> and <strong>experiences</strong> — she bracketed expertise and labeled it <strong>crystallized intelligence</strong>.</p>
            <p className="mt-2"><strong>Divergent thinking performance <span className="underline">wanes</span></strong> — and her note: <em>"not the best measure of creativity in older adulthood."</em></p>
          </Callout>
          <p>
            The slide repeats the Lecture 6 declines/holds table right next to this, which is the whole argument:
            divergent thinking leans on the <strong>declining</strong> column (speed, fluid intelligence), while
            wisdom and expertise sit in the <strong>holding</strong> column (crystallized intelligence).
          </p>
          <Callout kind="warn" title="The nuance that will be tested">
            Do not write "creativity declines with age." The claim is that creativity <strong>remains stable but
            changes form</strong>, and that <strong>the measure</strong> (divergent thinking) declines — which is not
            the same thing as creativity declining.
          </Callout>
        </>
      )
    },
    {
      id: '8d',
      title: 'The Influence of Fluid Intelligence',
      subtitle: 'Why our measures may be penalizing older adults',
      images: [{ src: IMG + 'L8_s02_p27.jpg', alt: 'The influence of fluid intelligence diagram', caption: 'Annotated: “over-relied on in our measures/tasks → penalizing older adults”' }],
      content: (
        <>
          <p>
            The diagram links <strong>fluid intelligence ↔ processing speed</strong> (both with red down-arrows), which
            together drive performance on <strong>intelligence tests, cognitive tests and divergent thinking
            tasks</strong>. The slide’s conclusion: <strong>"Change the way we think about creativity."</strong>
          </p>
          <Callout kind="tip" title="Her annotations">
            <ul className="list-disc ml-5 space-y-1">
              <li>Fluid intelligence = <em>"ability to solve problems with logic &amp; reasoning."</em></li>
              <li><em>"Over-relied on in our measures/tasks → penalizing older adults."</em></li>
              <li><em>"Think about how we changed to Stroop for Nancy"</em> — a direct reference to adapting the lab assessment for her interview participant.</li>
            </ul>
          </Callout>
          <Added title="The methodological point, spelled out">
            <p>
              This is a <strong>measurement validity</strong> argument. If a test of creativity is timed and requires
              rapid novel generation, it measures fluid intelligence and processing speed as much as creativity. Older
              adults score lower — but the conclusion "older adults are less creative" may be an artifact of the tool,
              not a fact about them. The fix is to measure the forms of creativity that do not depend on speed:
              everyday creativity, problem solving in real contexts, and the creative process itself (block 8f).
            </p>
            <p>
              This mirrors the Lecture 3 point about ageism being built into systems, and the Lecture 1 point that
              chronological-age-based measures predict poorly.
            </p>
          </Added>
        </>
      )
    },
    {
      id: '8e',
      title: 'Problem Solving & Creativity Domains in Youth',
      subtitle: 'The egg-drop task and the five youth domains',
      images: [{ src: IMG + 'L8_s03_p28.jpg', alt: 'Egg drop problem and creativity domains in youth', caption: 'The egg-drop challenge with the class’s solutions, and the five youth creativity domains' }],
      content: (
        <>
          <Card title="The problem-solving task">
            <p className="text-sm italic">"Ensure that a chicken’s egg dropped from a height of 30 ft does not break."</p>
            <p className="text-sm mt-2">Solutions recorded in her notes: a jar of Nutella (egg wrapped in styrofoam first, then Nutella, then placed in wrapped styrofoam), bubble wrap and water, a balloon cushion to soften impact, and a parachute.</p>
          </Card>
          <p className="mt-3"><strong>Creativity domains — YOUTH</strong> (the word "youth" is highlighted, so expect the older-adult contrast in block 8f):</p>
          <Table
            headers={['Domain', 'Her annotation']}
            rows={[
              ['Artistic', '—'],
              ['Scholarly', '—'],
              ['Self / Everyday', 'Solving conflict'],
              ['Scientific / Mechanical', 'Experiment'],
              ['Performance', 'Making songs']
            ]}
          />
          <Added title="Why an egg-drop task belongs in a creativity lecture">
            It is a <strong>problem-solving</strong> measure rather than a divergent-thinking one — the slide noted
            "problem solving tasks used too." There is a real constraint and a real outcome, but many valid solutions.
            That makes it a fairer test across ages than a timed idea-generation task, and it previews
            <strong> creative proactivity</strong> (block 8g), where solving a real-life problem <em>is</em> the
            creativity.
          </Added>
        </>
      )
    },
    {
      id: '8f',
      title: 'Creativity in Older Adulthood: Four Types',
      subtitle: 'The core framework of the lecture, with her peak-age annotations',
      images: [{ src: IMG + 'L8_s04_p29.jpg', alt: 'Creativity in older adulthood — four types, and creative proactivity', caption: 'Annotated with definitions for each type and peak ages' }],
      content: (
        <>
          <Table
            headers={['Type', 'Her definition']}
            rows={[
              [<strong key="a">Eminent Creativity</strong>, 'Major contributions to society'],
              [<strong key="b">Creative Potential and Processes</strong>, 'Flexibility in thinking'],
              [<strong key="c">Everyday Creativity</strong>, 'Hobbies, crafts, storytelling, gardening'],
              [<strong key="d">Creative Proactivity</strong>, 'Finding new ways to navigate aging-related issues; to handle new changes that come with aging']
            ]}
          />
          <Callout kind="danger" title="Her key line — likely a short answer">
            <strong>"The process of creating is more important than producing a novel product."</strong> This is the
            central shift in how creativity is defined for older adults.
          </Callout>
          <Callout kind="tip" title="Peak ages (her annotations)">
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>Creativity peaks in the 40s on average</strong>, but this splits by field:</li>
              <li><strong>Scientists:</strong> later and longer production.</li>
              <li><strong>Artists:</strong> earlier peaks, with a decline in their 70s.</li>
            </ul>
          </Callout>
          <Added title="Holding the four types apart">
            Think of them as a scale from rare and public to common and personal:
            <strong> Eminent</strong> (society-level contributions — rare) → <strong>Creative potential/processes</strong>
            (the underlying flexible thinking) → <strong>Everyday</strong> (hobbies, crafts — common) →
            <strong> Creative proactivity</strong> (using creativity to solve the practical problems aging brings).
            Only the first requires a famous product; the other three are about process and daily life — which is
            exactly her point that process matters more than product.
          </Added>
        </>
      )
    },
    {
      id: '8g',
      title: 'Creative Proactivity',
      subtitle: 'Problem solving as a measure of creativity',
      images: [{ src: IMG + 'L8_s04_p29.jpg', alt: 'Creative proactivity scenario slide', caption: 'Annotated: “problem-solving as a measure of creativity”; “Stopped here 9/28/26”' }],
      content: (
        <>
          <Card title="The scenario on the slide">
            <p className="text-sm">
              Imagine an older adult having difficulty getting an appointment nearby with a medical specialist to
              diagnose or address their ongoing health problem. They research the availability of physicians in another
              city and find a couple of doctors who treat the specific condition and are in-network. They find a new
              transportation option (e.g., a bus route) to get to the city, and they book and attend the appointment —
              <strong> demonstrating successful problem solving.</strong>
            </p>
          </Card>
          <Callout kind="tip" title="Her annotation">
            <strong>"Problem-solving as a measure of creativity."</strong> This scenario is the answer to the
            measurement problem in block 8d: rather than timing how many uses someone invents for a vase, look at
            whether they can creatively solve a real obstacle in their own life.
          </Callout>
          <Callout kind="warn" title="“Stopped here 9/28/26”">
            Her note marks where Monday’s class ended. The remaining blocks (8h–8i) were likely covered on
            <strong> Wednesday 9/30</strong> — check whether they are included on the quiz.
          </Callout>
          <Added title="Why this counts as creativity">
            The person generated options nobody handed them, crossed a category boundary (the doctor does not have to
            be local), and assembled a novel combination of resources to reach a goal. Nothing was "created" as an
            object — the <strong>process</strong> was the creative act. It also connects to Lecture 1’s
            <strong> SOC</strong>: selecting a goal, optimizing resources, and compensating with a new means
            (the bus route).
          </Added>
        </>
      )
    },
    {
      id: '8h',
      title: 'Intelligence & Creativity',
      subtitle: 'Why creativity holds up even though fluid intelligence does not',
      images: [{ src: IMG + 'L8_s05_p30.jpg', alt: 'Intelligence and creativity slide, plus creativity changes in the literature', caption: 'The explanation slide and the youth vs. older adulthood comparison' }],
      content: (
        <>
          <Callout kind="info" title="From the slide">
            <strong>Creativity remains stable in older adulthood because while it does rely on fluid intelligence to a
            degree, it also draws on crystallized intelligence, wisdom, expertise, and life experience, which are
            maintained and increase across adulthood.</strong>
          </Callout>
          <p>
            This is the resolution of the apparent contradiction in this lecture: fluid intelligence declines
            (Lecture 6), divergent thinking performance wanes — yet creativity holds, because creativity draws on
            <strong> both</strong> intelligences and the crystallized side keeps growing.
          </p>
          <Added title="A clean way to say it in a short answer">
            Creativity is not one ability. It needs raw generative speed (fluid, declining) <em>and</em> a deep store
            of knowledge, technique and judgment to work from (crystallized, growing). In later life the balance
            shifts from the first to the second — so output changes form (less rapid novelty, more depth, synthesis and
            everyday application) without the underlying capacity disappearing.
          </Added>
        </>
      )
    },
    {
      id: '8i',
      title: 'How Creativity Is Defined Differently by Age',
      subtitle: 'Youth/adulthood vs. older adulthood in the literature',
      images: [{ src: IMG + 'L8_s05_p30.jpg', alt: 'Creativity changes in the literature comparison table', caption: '“Creativity changes* in the literature”' }],
      content: (
        <>
          <Table
            headers={['Youth, Adulthood', 'Older Adulthood']}
            rows={[
              [<span key="a"><strong>Novel and original thoughts, products, processes</strong><br /><span className="text-xs">• In comparison to others</span></span>,
               <span key="b"><strong>Valued activities in which older adults participate without a product</strong><br /><span className="text-xs">• Emphasis on self</span></span>],
              [<strong key="c">Personal attribute</strong>, '']
            ]}
          />
          <Callout kind="danger" title="The two contrasts to memorize">
            <p><strong>1. Product vs. no product.</strong> Youth creativity is judged by novel outputs; older-adult creativity is about valued participation <em>without</em> a product.</p>
            <p className="mt-1"><strong>2. Compared to others vs. emphasis on self.</strong> Youth creativity is benchmarked against other people; older-adult creativity is judged relative to the person themselves.</p>
          </Callout>
          <Added title="Why the definition shifts">
            If you keep the youth definition, older adults look less creative by construction — you are scoring them on
            novel products generated quickly against a comparison group. Redefining creativity around valued
            participation and self-referenced growth captures what is actually happening (the everyday creativity and
            creative proactivity of block 8f) rather than what the old yardstick happens to measure. Same argument as
            block 8d.
          </Added>
        </>
      )
    },
    {
      id: '8j',
      title: 'Barriers & Facilitators to Creativity in Older Adulthood',
      subtitle: 'What blocks and what enables creative participation',
      images: [{ src: IMG + 'L8_s06_p31.jpg', alt: 'Barriers and facilitators to creativity in older adulthood', caption: 'The closing slide' }],
      content: (
        <>
          <div className="grid md:grid-cols-2 gap-3 my-3">
            <div className="border-2 border-red-300 bg-red-50 rounded-lg p-3">
              <div className="font-bold text-red-900">Barriers</div>
              <ul className="list-disc ml-5 text-sm text-red-950 mt-1 space-y-0.5">
                <li>Health limitations and lack of environmental resources</li>
                <li>Prejudice
                  <ul className="list-[circle] ml-5"><li>Age segregation and lack of interest in older adults’ perspectives</li></ul>
                </li>
              </ul>
            </div>
            <div className="border-2 border-emerald-300 bg-emerald-50 rounded-lg p-3">
              <div className="font-bold text-emerald-900">Facilitators</div>
              <ul className="list-disc ml-5 text-sm text-emerald-950 mt-1 space-y-0.5">
                <li>More time</li>
                <li>Opportunities to share</li>
              </ul>
            </div>
          </div>
          <Callout kind="tip" title="Connect it back to Lecture 3">
            The barrier listed is literally <strong>prejudice</strong> — age segregation and lack of interest in older
            adults’ perspectives. That is <strong>ageism</strong> operating as a barrier to creative participation, and
            the facilitator "opportunities to share" is its remedy: intergenerational contact and audiences.
          </Callout>
          <Added title="Rounding out the list">
            Other commonly cited barriers: <strong>cost</strong> of materials and classes, <strong>transportation</strong>
            (Lecture 5 — car-dependent Florida), sensory limits (vision, hearing, arthritis) and the internalized belief
            that "I am not creative" or that it is too late to start. Facilitators: accessible community programs,
            adaptive tools, and age-friendly venues (Lecture 4’s seating specifications are a literal example of an
            environmental resource).
          </Added>
        </>
      )
    }
  ],

  keyReview: {
    vocab: [
      { term: 'Imagination', tag: 'her definition', tagColor: 'violet', def: 'Mentalizing with concepts impossible or probable but not yet realized.' },
      { term: 'Creativity', tag: 'her definition', tagColor: 'violet', def: 'The process harnessing imagination in which these are made. (Imagination = thinking it; creativity = making it.)' },
      { term: 'Divergent thinking', tag: 'measure', tagColor: 'sky', def: 'Typically assessed as a proxy of creativity using the "Alternate Uses Task" in childhood and adulthood. Her note: "thinking outside the box." Performance WANES with age — and is not the best measure of creativity in older adulthood.' },
      { term: 'Alternate Uses Task', tag: 'measure', tagColor: 'sky', def: 'List as many uses as possible for an object (the class used a glass vase). Scored on fluency, flexibility, originality and elaboration (added).' },
      { term: 'Pretend play', tag: 'childhood', tagColor: 'amber', def: 'Pretend play in childhood is highly associated with later creativity; reinforcement of creativity in childhood is predictive of higher creative potential later in life.' },
      { term: 'Eminent creativity', tag: '4 types', tagColor: 'green', def: 'Major contributions to society.' },
      { term: 'Creative potential and processes', tag: '4 types', tagColor: 'green', def: 'Flexibility in thinking.' },
      { term: 'Everyday creativity', tag: '4 types', tagColor: 'green', def: 'Hobbies, crafts, storytelling, gardening.' },
      { term: 'Creative proactivity', tag: '4 types', tagColor: 'green', def: 'Finding new ways to navigate aging-related issues and handle new changes that come with aging. Problem-solving as a measure of creativity.' },
      { term: 'Creativity peak ages', tag: 'annotation', tagColor: 'amber', def: 'Peaks in the 40s on average. Scientists: later and longer production. Artists: earlier peaks with decline in their 70s.' },
      { term: 'Youth creativity domains', tag: 'domains', tagColor: 'sky', def: 'Artistic · Scholarly · Self/Everyday (solving conflict) · Scientific/Mechanical (experiment) · Performance (making songs).' },
      { term: 'Fluid intelligence over-reliance', tag: 'critique', tagColor: 'red', def: 'Her note: fluid intelligence and processing speed are over-relied on in our measures/tasks, penalizing older adults. Conclusion on the slide: "change the way we think about creativity."' }
    ],
    laws: [
      { name: 'The headline claim', desc: 'Creativity REMAINS STABLE in later life — but it CHANGES FORM. Divergent thinking performance wanes, which is a problem with the measure, not proof that creativity declines.' },
      { name: 'Why creativity holds up', desc: 'It relies on fluid intelligence to a degree, but also draws on crystallized intelligence, wisdom, expertise and life experience — which are maintained and increase across adulthood.' },
      { name: 'Process over product', desc: '"The process of creating is more important than producing a novel product."' },
      { name: 'Definition by age (literature)', desc: 'Youth/adulthood: novel and original thoughts, products, processes — in comparison to others; a personal attribute. Older adulthood: valued activities in which older adults participate WITHOUT a product — emphasis on self.' },
      { name: 'Barriers and facilitators', desc: 'Barriers: health limitations and lack of environmental resources; prejudice (age segregation, lack of interest in older adults’ perspectives). Facilitators: more time, opportunities to share.' }
    ],
    methods: [
      { name: 'Imagination vs. creativity', expand: 'Think it vs. make it', desc: 'Imagination = mentalizing the not-yet-realized. Creativity = the process that makes it real.' },
      { name: 'Scoring divergent thinking', expand: 'Fluency, flexibility, originality, elaboration', added: true, desc: 'How many · how many categories · how unusual · how detailed. Fluency is partly a speed measure — the root of the age-fairness problem.' },
      { name: 'The four types, ordered', expand: 'Rare/public → common/personal', added: true, desc: 'Eminent (society) → Potential/processes (flexible thinking) → Everyday (hobbies, crafts) → Creative proactivity (solving aging-related problems).' },
      { name: 'Youth vs. older adulthood', expand: 'Product & others vs. no product & self', desc: 'Two contrasts: product vs. no product, and compared-to-others vs. emphasis-on-self.' }
    ]
  },

  questions: [
    { q: 'How did Dr. Held define imagination and creativity, and how do they differ?', type: 'saq', difficulty: 'M',
      sampleAnswer: 'She defined imagination as mentalizing with concepts that are impossible or probable but not yet realized — in other words, holding in mind something that does not exist yet. She defined creativity as the process harnessing imagination in which these things are made. The difference is that imagination is the mental act of conceiving something unrealized, while creativity is the process that actually brings it into being. Imagination is thinking it; creativity is making it.',
      keyPoints: ['Imagination = mentalizing concepts impossible or probable but NOT YET REALIZED', 'Creativity = the PROCESS harnessing imagination in which these are made', 'The difference: conceiving vs. producing/realizing'],
      explanation: 'The slide had no text — both definitions come from her handwriting, so they are very likely to be tested.' },
    { q: 'Divergent thinking is typically assessed as a proxy of creativity using which task?', type: 'mcq', difficulty: 'E',
      choices: ['The Stroop Task', 'The Alternate Uses Task', 'The Mini-Mental State Examination', 'The Go/No-go Task'],
      correct: 1,
      explanation: 'The Alternate Uses Task, used in childhood and adulthood. Her annotation: divergent thinking = "thinking outside the box." Problem solving tasks are used too.' },
    { q: 'Which statement best represents the lecture’s claim about creativity in later life?', type: 'mcq', difficulty: 'M',
      choices: [
        'Creativity declines steadily after age 40',
        'Creativity remains stable but changes form, though divergent thinking performance wanes',
        'Creativity increases in every domain with age',
        'Creativity is unrelated to intelligence'],
      correct: 1,
      explanation: 'Research suggests creativity remains stable in later life — her annotation adds "changes form however." Divergent thinking performance wanes, but she noted it is "not the best measure of creativity in older adulthood."' },
    { q: 'Why does Dr. Held argue that divergent thinking tasks may be unfair measures of creativity in older adults?', type: 'saq', difficulty: 'H',
      sampleAnswer: 'Divergent thinking tasks depend heavily on fluid intelligence — the ability to solve newly encountered problems with logic and reasoning — and on processing speed. Both of those decline with age. Her annotation says these are over-relied on in our measures and tasks, which penalizes older adults. So when older adults score lower on the Alternate Uses Task, that may reflect the tool measuring speed and fluid reasoning rather than a real loss of creativity. That is why the slide concludes we should change the way we think about creativity, and why measures like real-world problem solving and creative proactivity are better suited to older adults.',
      keyPoints: [
        'Divergent thinking relies on fluid intelligence and processing speed, both of which decline',
        'Her note: over-relied on in our measures/tasks → penalizing older adults',
        'Low scores may be an artifact of the measure, not less creativity',
        'Conclusion: change the way we think about / measure creativity (e.g., problem solving, creative proactivity)'],
      explanation: 'This is the methodological heart of the lecture and connects directly to Lecture 6’s fluid vs. crystallized distinction.' },
    { q: 'Match the type: an 82-year-old figures out a new bus route and an out-of-town in-network specialist to finally get her condition treated. This is:',
      type: 'mcq', difficulty: 'M',
      choices: ['Eminent creativity', 'Everyday creativity', 'Creative proactivity', 'Creative potential and processes'],
      correct: 2,
      explanation: 'Creative proactivity — finding new ways to navigate aging-related issues and handle new changes that come with aging. This is the exact scenario on her slide, annotated "problem-solving as a measure of creativity."' },
    { q: 'Name the four types of creativity in older adulthood and define each.', type: 'saq', difficulty: 'H',
      sampleAnswer: 'Eminent creativity — major contributions to society. Creative potential and processes — flexibility in thinking. Everyday creativity — hobbies, crafts, storytelling and gardening. Creative proactivity — finding new ways to navigate aging-related issues and handle new changes that come with aging. An important related point is that the process of creating is more important than producing a novel product.',
      keyPoints: ['Eminent creativity = major contributions to society', 'Creative potential and processes = flexibility in thinking', 'Everyday creativity = hobbies, crafts, storytelling, gardening', 'Creative proactivity = new ways to navigate aging-related issues', 'Bonus: process of creating > producing a novel product'],
      explanation: 'All four definitions come from her handwritten annotations on the slide.' },
    { q: 'According to her annotations, creativity peaks on average in which decade — and how does this differ by field?', type: 'mcq', difficulty: 'H',
      choices: [
        'The 20s; scientists and artists peak identically',
        'The 40s; scientists peak later with longer production, artists peak earlier with decline in their 70s',
        'The 60s; artists peak later than scientists',
        'The 40s; artists sustain production longest'],
      correct: 1,
      explanation: 'Her notes: "Peak in 40s on average," with scientists showing later and longer production and artists showing earlier peaks with decline in their 70s.' },
    { q: 'In the literature, how is creativity defined differently for older adults compared with youth?', type: 'mcq', difficulty: 'M',
      choices: [
        'Older adulthood: novel products compared to others; Youth: valued activities without a product',
        'Older adulthood: valued activities participated in without a product, with emphasis on self; Youth: novel and original thoughts, products and processes, in comparison to others',
        'Both are defined by novel products',
        'Older adulthood emphasizes eminent creativity only'],
      correct: 1,
      explanation: 'Two contrasts: product vs. no product, and comparison-to-others vs. emphasis-on-self. Youth creativity is also framed as a personal attribute.' },
    { q: 'Why does creativity remain stable in older adulthood despite declines in fluid intelligence?', type: 'mcq', difficulty: 'M',
      choices: [
        'Because fluid intelligence does not actually decline',
        'Because creativity also draws on crystallized intelligence, wisdom, expertise and life experience, which are maintained and increase across adulthood',
        'Because older adults take creativity tests more slowly',
        'Because creativity is purely genetic'],
      correct: 1,
      explanation: 'Straight from the slide. Creativity relies on fluid intelligence to a degree, but crystallized intelligence, wisdom, expertise and life experience keep growing.' },
    { q: 'What barrier to creativity in older adulthood does the slide list alongside health limitations, and how does it connect to earlier material?', type: 'saq', difficulty: 'M',
      sampleAnswer: 'The slide lists prejudice as a barrier — specifically age segregation and a lack of interest in older adults’ perspectives — alongside health limitations and lack of environmental resources. The facilitators listed are more time and opportunities to share. Prejudice here is ageism, from Lecture 3: negative attitudes and the assumption that older adults have nothing valuable to contribute keep them out of creative spaces and audiences. The facilitator "opportunities to share" is the direct remedy, since it means intergenerational contact and an audience for older adults’ work.',
      keyPoints: ['Barrier: prejudice — age segregation and lack of interest in older adults’ perspectives', 'Also: health limitations and lack of environmental resources', 'Facilitators: more time, opportunities to share', 'Connection: this is ageism (Lecture 3)'],
      explanation: 'The barriers/facilitators list is short on the slide, so a strong answer links it to the ageism material.' },
    { q: 'True or False: Pretend play in childhood is highly associated with later creativity.', type: 'tf', difficulty: 'E',
      correct: 0,
      explanation: 'TRUE. The slide states pretend play in childhood → later creativity, and her annotation reads "highly associated." Reinforcement of creativity in childhood is also predictive of higher creative potential later in life.' }
  ]
};
