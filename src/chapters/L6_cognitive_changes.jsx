import React from 'react';
import { Callout, Table, Card, Added } from '../components/Visual.jsx';

const IMG = 'L6/';

export default {
  id: 6,
  quiz: 3,
  lectureNo: 6,
  date: 'Mon, Sep 21',
  title: 'Cognitive Changes',
  subtitle: 'Lecture 6 — What changes in the aging brain, what declines, what holds, and how cognition is measured',
  sourceNote: 'Annotated slides, “Quiz 3 Lecture Slides.pdf” → Day 1 (pp. 2–14).',
  addedLegend: true,

  blocks: [
    {
      id: '6a',
      title: 'Normative Age-Related Cognitive Changes',
      subtitle: 'What is normal — and the contrast that matters for Lecture 7',
      images: [{ src: IMG + 'L6_s01_p02.jpg', alt: 'Normative age-related cognitive changes', caption: 'Examples of normal cognitive aging' }],
      content: (
        <>
          <p>These are the examples of <strong>normal</strong> cognitive aging on the slide:</p>
          <ul className="list-disc ml-6 space-y-0.5 text-sm">
            <li>Sometimes forgetting names or appointments <strong>but remembering them later</strong>.</li>
            <li>Making a bad decision or mistake <strong>once in a while</strong>.</li>
            <li>Occasionally needing help to use a microwave setting or record a television show.</li>
            <li>Getting confused about the day of the week <strong>but figuring it out later</strong>.</li>
            <li>Developing very specific ways of doing things and becoming irritable when a routine is disrupted.</li>
            <li>Misplacing things from time to time and <strong>retracing steps to find them</strong>.</li>
            <li>Sometimes having trouble finding the right word.</li>
            <li>Making <strong>occasional</strong> errors managing finances or household bills.</li>
          </ul>
          <Callout kind="tip" title="The pattern that makes these “normal”">
            Notice the qualifiers: <em>sometimes, occasionally, once in a while</em> — and above all,
            <strong> the person recovers</strong> (remembers later, figures it out, retraces steps). Normal aging
            slows and occasionally interrupts cognition; it does not take the ability away.
          </Callout>
          <Added title="The dementia contrast (this list is half of a pair)">
            <p>
              This slide is adapted from the Alzheimer’s Association’s comparison of normal aging vs. warning signs.
              Each item has a dementia counterpart that <em>does</em> interfere with daily functioning:
            </p>
            <Table
              headers={['Normal aging (slide)', 'Warning sign of dementia']}
              rows={[
                ['Forgetting names/appointments but remembering later', 'Forgetting recently learned information and not recalling it later; asking the same question repeatedly'],
                ['A bad decision once in a while', 'Frequent poor judgment — e.g., giving large sums to telemarketers'],
                ['Needing help with a new device setting', 'Being unable to manage familiar tasks, like driving to a known place'],
                ['Confused about the day but figuring it out', 'Losing track of seasons or the passage of time entirely'],
                ['Misplacing things and retracing steps', 'Putting things in unusual places and being unable to retrace; accusing others of stealing'],
                ['Trouble finding a word', 'Stopping mid-conversation, repeating, or calling things by the wrong name']
              ]}
            />
            <p>Recall from Lecture 1: normal change = <strong>primary aging</strong>; disease-driven change = <strong>secondary aging</strong>.</p>
          </Added>
        </>
      )
    },
    {
      id: '6b',
      title: 'Cognition and the Aging Brain',
      subtitle: 'Brain aging happens even without disease',
      images: [{ src: IMG + 'L6_s02_p03.jpg', alt: 'Cognition slide with young vs age-related brain diagram', caption: 'Young brain vs. age-related changes' }],
      content: (
        <>
          <Callout kind="info" title="From the slide">
            <strong>Even without the presence of a disease or disorder, brain aging involves cognitive, structural,
            neuronal, and chemical changes.</strong>
          </Callout>
          <p>Those four words are the organizing idea — memorize them as a set.</p>
          <Added title="What the diagram is showing, and what each change means">
            <Table
              headers={['Type of change', 'What happens', 'Why it matters']}
              rows={[
                ['Structural', 'Enlarged ventricles, widened sulci (grooves), shrinking gyri (ridges) — overall brain volume loss', 'Loss is uneven: the prefrontal cortex (executive functioning) and hippocampus (episodic memory) shrink most — which predicts exactly which abilities decline'],
                ['Neuronal', 'Damaged and dying neurons, fewer synaptic connections, broken or incomplete myelin sheaths', 'Myelin is the insulation on axons; degraded myelin slows signal transmission — the physical basis of slower processing speed'],
                ['Chemical', 'Less dopamine, acetylcholine and serotonin', 'Dopamine loss affects speed, motivation and working memory; acetylcholine loss affects memory (this is what Alzheimer’s drugs target — Lecture 7)'],
                ['Cognitive', 'The behavioral result: slower processing, weaker episodic memory and executive function', 'What the rest of this lecture measures']
              ]}
            />
            <p>
              <strong>The brain compensates.</strong> Older adults often recruit both hemispheres for tasks that young
              adults do with one, and use frontal regions more — the brain works differently to reach a similar result.
            </p>
          </Added>
        </>
      )
    },
    {
      id: '6c',
      title: 'What Declines vs. What Holds Up',
      subtitle: 'The single most testable table in this lecture',
      images: [{ src: IMG + 'L6_s03_p04.jpg', alt: 'Declines vs stable table and long-term memory taxonomy', caption: 'Declines vs. stable/improves, with the long-term memory tree' }],
      content: (
        <>
          <Table
            headers={['Usually DECLINES with age', 'Remains STABLE or IMPROVES']}
            rows={[
              [<strong key="a">Processing speed</strong>, <strong key="b">Semantic memory</strong>],
              [<strong key="c">Episodic memory</strong>, <strong key="d">Vocabulary</strong>],
              [<span key="e"><strong>Executive functioning</strong><br />– working memory<br />– inhibition<br />– attention</span>, <strong key="f">Procedural memory</strong>],
              [<strong key="g">Fluid intelligence</strong>, <strong key="h">Crystallized intelligence</strong>]
            ]}
          />
          <Callout kind="tip" title="The rule behind the table">
            <strong>What you DO declines; what you KNOW holds.</strong> Speed, juggling, and on-the-spot problem solving
            fade. Stored knowledge — words, facts, skills — does not, and often grows. This is the Lecture 1 idea of
            <strong> optimal aging</strong> in cognitive form.
          </Callout>
          <p>The diagram breaks <strong>long-term memory</strong> into two branches:</p>
          <Table
            headers={['Branch', 'Subtype', 'What it is', 'With age']}
            rows={[
              [<strong key="1">Explicit (declarative)</strong>, 'Episodic', 'Experienced events', <span key="1a" className="text-red-700 font-semibold">Declines</span>],
              ['', 'Semantic', 'Knowledge and concepts', <span key="2a" className="text-emerald-700 font-semibold">Stable/improves</span>],
              [<strong key="3">Implicit (non-declarative)</strong>, 'Procedural', 'Skills and actions', <span key="3a" className="text-emerald-700 font-semibold">Stable</span>],
              ['', 'Emotional conditioning', 'Learned emotional responses', <span key="4a" className="text-slate-600">Largely preserved</span>]
            ]}
          />
          <Added title="Explicit vs. implicit, in one line each">
            <strong>Explicit/declarative</strong> = things you can consciously <em>declare</em> ("I had eggs on
            Tuesday," "Tallahassee is the capital"). <strong>Implicit/non-declarative</strong> = things your body or
            reflexes know without words (riding a bike, typing, flinching at a sound). The explicit/episodic branch is
            the vulnerable one — which is why "What did I have for breakfast?" is harder for an older adult than
            "What is the capital of Florida?" or actually riding the bike.
          </Added>
        </>
      )
    },
    {
      id: '6d',
      title: 'Crystallized vs. Fluid Intelligence',
      subtitle: 'The distinction that drives the whole declines/holds pattern',
      images: [{ src: IMG + 'L6_s04_p05.jpg', alt: 'Crystallized vs fluid intelligence infographic', caption: 'Definitions and examples from the slide' }],
      content: (
        <>
          <div className="grid md:grid-cols-2 gap-3 my-3">
            <div className="border-2 border-emerald-300 bg-emerald-50 rounded-lg p-3">
              <div className="font-bold text-emerald-900">Crystallized intelligence <span className="text-xs font-normal">— holds / improves</span></div>
              <div className="text-sm text-emerald-950 mt-1">
                Recalling facts and information <strong>from a stored base of knowledge</strong>, applied to new
                situations.
                <div className="mt-1"><strong>Slide example:</strong> Jasmine has cooked for decades and no longer needs cookbooks — she has memorized so many recipes.</div>
              </div>
            </div>
            <div className="border-2 border-red-300 bg-red-50 rounded-lg p-3">
              <div className="font-bold text-red-900">Fluid intelligence <span className="text-xs font-normal">— declines</span></div>
              <div className="text-sm text-red-950 mt-1">
                The ability to solve <strong>newly encountered</strong> problems based on <strong>logic and
                reasoning</strong>.
                <div className="mt-1"><strong>Slide example:</strong> Susan and her friends go to murder-mystery dinners and try to solve the crime before anyone else.</div>
              </div>
            </div>
          </div>
          <Callout kind="tip" title="Memory hook">
            <strong>Crystallized = crystallized in place</strong> — knowledge already formed and stored.
            <strong> Fluid = flows to fit a new problem</strong> — reasoning in the moment, with no stored answer.
          </Callout>
          <Added title="Why this matters later">
            Fluid intelligence is closely tied to processing speed, so measures that are <em>timed</em> or
            <em> novel</em> tend to make older adults look worse. Lecture 8 makes this exact criticism about creativity
            testing. Crystallized intelligence is also what "wisdom" and "expertise" are built from.
          </Added>
        </>
      )
    },
    {
      id: '6e',
      title: 'Processing Speed & Its Two Hypotheses',
      subtitle: 'Her typed notes give both definitions — highest-yield item in the lecture',
      images: [{ src: IMG + 'L6_s05_p06.jpg', alt: 'Processing speed slide with both hypotheses typed underneath', caption: 'Simple vs. choice reaction time, plus the two hypotheses she typed in' }],
      content: (
        <>
          <p>
            Researchers use <strong>processing speed as an indicator of the integrity of the central nervous
            system</strong>. It is measured with <strong>reaction time</strong>, in two flavors:
          </p>
          <Table
            headers={['Task type', 'Instruction on the slide', 'What it adds']}
            rows={[
              [<strong key="a">Simple reaction time</strong>, '"Click when you see a red ball"', 'One stimulus, one response — pure speed'],
              [<strong key="b">Choice reaction time</strong>, '"Click ‘J’ when you see a red ball and click ‘F’ when you see a blue ball"', 'Adds a decision — speed plus complexity']
            ]}
          />
          <div className="grid md:grid-cols-2 gap-3 my-4">
            <div className="border-2 border-sky-400 bg-sky-50 rounded-lg p-3">
              <div className="font-bold text-sky-900">General Slowing Hypothesis</div>
              <div className="text-sm text-sky-950 mt-1">
                Slower reaction times in older adults due to a <strong>general decline of information processing
                speed</strong>.
              </div>
            </div>
            <div className="border-2 border-violet-400 bg-violet-50 rounded-lg p-3">
              <div className="font-bold text-violet-900">Age Complexity Hypothesis</div>
              <div className="text-sm text-violet-950 mt-1">
                Older adults perform <strong>progressively more poorly</strong> as a task gets more complex, since
                their <strong>processing resources are stretched to the limit</strong>.
              </div>
            </div>
          </div>
          <Callout kind="warn" title="How to tell them apart">
            <strong>General slowing = everything is slower by roughly the same factor</strong>, no matter the task.
            <strong> Age complexity = the age gap GROWS as the task gets harder.</strong> So on a simple RT task the
            two older/younger lines are close; on choice RT they spread apart. If a question emphasizes
            <em> complexity making the gap bigger</em>, it is age complexity.
          </Callout>
          <Added title="Why processing speed gets so much attention">
            Processing speed is often treated as the "master variable" of cognitive aging: when researchers
            statistically control for it, much of the age difference in memory and reasoning shrinks. The biological
            story from block 6b is myelin degradation slowing signal transmission. It also has real-world stakes —
            driving, fall prevention and medication management all depend on reacting quickly.
          </Added>
        </>
      )
    },
    {
      id: '6f',
      title: 'Episodic Memory',
      subtitle: 'Long-term memory for events — the memory type that declines',
      images: [{ src: IMG + 'L6_s07_p08.jpg', alt: 'Episodic memory slide', caption: '“Episodic memory is long-term memory for events”' }],
      content: (
        <>
          <Callout kind="info" title="From the slide">
            <strong>Episodic memory is long-term memory for events.</strong>
          </Callout>
          <p>
            The pictures illustrate an episode: going to a particular store, at a particular time, and what happened
            there — the "store name here" prompt is asking you to recall a specific detail of a specific event.
          </p>
          <Added title="What actually changes with age">
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>Encoding and retrieval, not storage.</strong> Older adults have more trouble getting information in (with divided attention) and pulling it back out — the memory is often there.</li>
              <li><strong>Recall vs. recognition:</strong> free recall ("name everything on the list") declines much more than recognition ("was <em>milk</em> on the list?"), because recognition supplies the retrieval cue.</li>
              <li><strong>Source memory</strong> — remembering <em>where</em> you learned something — declines more than the fact itself.</li>
              <li><strong>Prospective memory</strong> — remembering to do something later — is vulnerable, though older adults often compensate well with calendars, pillboxes and routines (Lecture 1: SOC compensation).</li>
            </ul>
          </Added>
        </>
      )
    },
    {
      id: '6g',
      title: 'Executive Functioning',
      subtitle: 'Working memory, inhibition, attention',
      images: [{ src: IMG + 'L6_s08_p09.jpg', alt: 'Executive functioning slide', caption: 'EF and its three listed components' }],
      content: (
        <>
          <Callout kind="info" title="From the slide">
            <strong>Executive functioning (EF)</strong> involves <strong>high-order cognitive skills to plan, make
            decisions, and allocate mental resources.</strong>
          </Callout>
          <Table
            headers={['Component', 'Definition (slide)', 'Everyday example']}
            rows={[
              [<strong key="a">Working memory</strong>, 'Keeps information temporarily available and active in consciousness', 'Holding a phone number in mind while you find a pen'],
              [<strong key="b">Inhibition</strong>, 'Restraining or inhibiting behaviors or thoughts (self-restraint)', 'Not blurting out an irrelevant comment; ignoring a TV while reading'],
              [<strong key="c">Attention</strong>, 'Focus and concentration', 'Following one conversation in a noisy restaurant']
            ]}
          />
          <Added title="Why EF is the front-line casualty of brain aging">
            EF depends heavily on the <strong>prefrontal cortex</strong>, which is among the first regions to shrink
            (block 6b) — sometimes called the <em>frontal lobe hypothesis</em> of cognitive aging. The
            <strong> inhibitory deficit</strong> account adds that when inhibition weakens, irrelevant information
            crowds working memory, which then looks like a memory problem. That is exactly what the Stroop and
            go/no-go tasks in block 6i are built to expose.
          </Added>
        </>
      )
    },
    {
      id: '6h',
      title: 'Bedside & Screening Assessments',
      subtitle: 'The tools you use in lab — and what each one measures',
      images: [
        { src: IMG + 'L6_s09_p10.jpg', alt: 'Word Memory and Clock Test instructions', caption: 'Word memory + clock drawing, with the 4-point system' },
        { src: IMG + 'L6_s12_p13.jpg', alt: 'Two other tasks: animal naming and months backward', caption: 'Animal naming and months backward' },
        { src: IMG + 'L6_s13_p14.jpg', alt: 'Mini-Mental State Examination form', caption: 'The MMSE (30 points)' }
      ],
      content: (
        <>
          <Card title="Word Memory and Clock Test (slide procedure)">
            <ol className="list-decimal ml-5 space-y-1 text-sm">
              <li>Identify <strong>3 objects</strong> (e.g., a bookshelf, a fish tank, the TV) and ask the older adult to repeat them back.</li>
              <li>Ask them to <strong>draw a clock</strong> with hands pointing to the correct time. Point system: <strong>1 pt</strong> closed circle · <strong>1 pt</strong> all 12 numbers · <strong>1 pt</strong> numbers in the right place · <strong>1 pt</strong> hands pointing the right direction.</li>
              <li>Then ask them to <strong>repeat the three objects back</strong>.</li>
            </ol>
          </Card>
          <Card title="Two other tasks" className="mt-3">
            <ul className="list-disc ml-5 space-y-1 text-sm">
              <li><strong>Animal naming:</strong> list as many animals as possible in <strong>60 seconds</strong>.</li>
              <li><strong>Months backward:</strong> say the months of the year backward, starting with December.</li>
            </ul>
          </Card>
          <p className="mt-3">
            The <strong>Mini-Mental State Examination (MMSE)</strong> is a <strong>30-point</strong> screener covering
            orientation to time and place, registration and recall of three objects, attention (serial 7s or spelling
            WORLD backward), naming, repetition, a 3-stage command, reading, writing and copying intersecting pentagons.
          </p>
          <Added title="What each task is actually measuring">
            <Table
              headers={['Task', 'Targets']}
              rows={[
                ['3 objects → delayed recall', 'Episodic memory (encoding + delayed retrieval) — the classic early Alzheimer’s signal'],
                ['Clock drawing', 'Executive functioning + visuospatial ability + planning. Sensitive because it needs several abilities at once — and it is quick'],
                ['Animal naming (60s)', 'Semantic fluency — access to stored knowledge plus executive search strategy'],
                ['Months backward', 'Working memory + inhibition (you must suppress the overlearned forward sequence)'],
                ['MMSE (/30)', 'Global cognitive screening across several domains']
              ]}
            />
            <p>
              <strong>Important caveat:</strong> these are <em>screening</em> tools, not diagnoses. Scores are affected
              by education, language and sensory impairment — an older adult with hearing loss or limited English can
              score low without having dementia (connects to the Florida language-access point in Lecture 5).
            </p>
          </Added>
        </>
      )
    },
    {
      id: '6i',
      title: 'Experimental Tasks: Mental Speed, Stroop & Go/No-Go',
      subtitle: 'The computer tasks and what each isolates',
      images: [
        { src: IMG + 'L6_s06_p07.jpg', alt: 'PsychTests Mental Speed Test', caption: 'Mental Speed Test — “on your own, not used in lab”' },
        { src: IMG + 'L6_s10_p11.jpg', alt: 'Stroop task description', caption: 'Stroop task' },
        { src: IMG + 'L6_s11_p12.jpg', alt: 'Go/No-go task with trial data', caption: 'Go/No-go task with sample trial data' }
      ],
      content: (
        <>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Mental Speed Test (PsychTests).</strong> Marked on the slide <em>"On your own, not used in
              lab."</em> Word/image pairs and simple equations judged "correct"/"incorrect," with an "Opposite" prompt
              that reverses your answer.
            </li>
            <li>
              <strong>Stroop task.</strong> Named after <strong>John Ridley Stroop</strong>. The effect: it is hard to
              name the ink color of a color word when the word and ink mismatch (the word GREEN printed in red ink).
              The slide’s bottom line: <strong>"The Stroop test measures processing speed alongside cognitive
              inhibition and selective attention."</strong>
            </li>
            <li>
              <strong>Go/No-go task.</strong> Response speed and accuracy are measured, and the capacity
              <strong> NOT to respond</strong> is tested — participants respond on "go" trials and withhold on "no-go"
              trials. Great for measuring <strong>impulsiveness</strong>. In the sample data, "go" trials show real
              reaction times (e.g., 1212, 787, 688 ms) while "nogo" trials read <strong>2000</strong> — the timeout
              value marking a correctly withheld response.
            </li>
          </ul>
          <Added title="Why these three, and how they map onto the lecture">
            <Table
              headers={['Task', 'Isolates', 'Maps to']}
              rows={[
                ['Mental Speed Test', 'Speed of simple decisions', 'Processing speed (6e)'],
                ['Stroop', 'Inhibition + selective attention under speed pressure', 'Executive functioning (6g)'],
                ['Go/No-go', 'Response inhibition / impulse control', 'Executive functioning — inhibition (6g)']
              ]}
            />
            <p>
              A predictable age pattern: older adults are slower overall (general slowing) and show a
              <strong> larger Stroop interference effect</strong> — the extra time on mismatched trials — which is the
              age complexity hypothesis in action.
            </p>
          </Added>
        </>
      )
    }
  ],

  keyReview: {
    vocab: [
      { term: 'Normative age-related cognitive change', tag: 'core', def: 'Occasional forgetting, word-finding trouble, misplacing things — with recovery (remembering later, retracing steps). Does not interfere with daily functioning.' },
      { term: 'Brain aging (4 changes)', tag: 'core', def: 'Even without disease, brain aging involves cognitive, structural, neuronal, and chemical changes.' },
      { term: 'Declines with age', tag: 'table', tagColor: 'red', def: 'Processing speed · episodic memory · executive functioning (working memory, inhibition, attention) · fluid intelligence.' },
      { term: 'Stable or improves', tag: 'table', tagColor: 'green', def: 'Semantic memory · vocabulary · procedural memory · crystallized intelligence.' },
      { term: 'Explicit (declarative) memory', tag: 'memory', tagColor: 'sky', def: 'Episodic (experienced events) and semantic (knowledge and concepts).' },
      { term: 'Implicit (non-declarative) memory', tag: 'memory', tagColor: 'sky', def: 'Procedural (skills and actions) and emotional conditioning.' },
      { term: 'Crystallized intelligence', tag: 'holds', tagColor: 'green', def: 'Recalling facts/information from a stored base of knowledge and applying it to new situations (Jasmine cooking without cookbooks).' },
      { term: 'Fluid intelligence', tag: 'declines', tagColor: 'red', def: 'Ability to solve newly encountered problems based on logic and reason (Susan solving murder-mystery dinners).' },
      { term: 'Processing speed', tag: 'core', def: 'Used as an indicator of the integrity of the central nervous system; measured by reaction time (simple vs. choice).' },
      { term: 'General Slowing Hypothesis', tag: 'hypothesis', tagColor: 'violet', def: 'Slower reaction times in older adults due to a general decline of information processing speed.' },
      { term: 'Age Complexity Hypothesis', tag: 'hypothesis', tagColor: 'violet', def: 'Older adults perform progressively more poorly as tasks get more complex, since their processing resources are stretched to the limit.' },
      { term: 'Episodic memory', tag: 'declines', tagColor: 'red', def: 'Long-term memory for events.' },
      { term: 'Executive functioning', tag: 'declines', tagColor: 'red', def: 'High-order cognitive skills to plan, make decisions, and allocate mental resources. Components: working memory, inhibition, attention.' },
      { term: 'Working memory', tag: 'EF', tagColor: 'amber', def: 'Keeps information temporarily available and active in consciousness.' },
      { term: 'Inhibition', tag: 'EF', tagColor: 'amber', def: 'Restraining or inhibiting behaviors or thoughts (self-restraint).' },
      { term: 'Attention', tag: 'EF', tagColor: 'amber', def: 'Focus and concentration.' },
      { term: 'Stroop task', tag: 'measure', tagColor: 'sky', def: 'Named for John Ridley Stroop. Hard to name ink color when word and color mismatch. Measures processing speed alongside cognitive inhibition and selective attention.' },
      { term: 'Go/No-go task', tag: 'measure', tagColor: 'sky', def: 'Measures response speed/accuracy and the capacity NOT to respond; good for measuring impulsiveness.' },
      { term: 'Clock drawing test', tag: 'measure', tagColor: 'sky', def: '4 points: closed circle, all 12 numbers, numbers in right place, hands pointing right direction. Paired with 3-object recall.' },
      { term: 'MMSE', tag: 'measure', tagColor: 'sky', def: 'Mini-Mental State Examination — a 30-point global cognitive screener.' }
    ],
    laws: [
      { name: 'The declines/holds rule', desc: 'What you DO (speed, juggling, novel problem solving) declines. What you KNOW (vocabulary, facts, skills) holds or improves.' },
      { name: 'General slowing vs. age complexity', desc: 'General slowing = uniformly slower. Age complexity = the age gap GROWS as complexity increases. Simple RT → small gap; choice RT → bigger gap.' },
      { name: 'Four brain changes', desc: 'Cognitive, structural, neuronal, chemical — and they occur even without disease.' }
    ],
    methods: [
      { name: 'What each lab task measures', expand: 'Screening vs. experimental', added: true, desc: '3 objects = episodic memory · clock = executive + visuospatial · animal naming = semantic fluency · months backward = working memory + inhibition · MMSE = global screen · Stroop = inhibition/selective attention · go/no-go = response inhibition.' },
      { name: 'Crystallized vs. fluid', expand: 'Stored vs. on-the-spot', desc: 'Crystallized = crystallized in place (stored knowledge). Fluid = flows to fit a new problem (reasoning now).' },
      { name: 'Explicit vs. implicit', expand: 'Declare it vs. do it', added: true, desc: 'Explicit = you can state it (episodic, semantic). Implicit = your body knows it (procedural, emotional conditioning).' }
    ]
  },

  questions: [
    { q: 'Which set of abilities USUALLY DECLINES with age?', type: 'mcq', difficulty: 'E',
      choices: ['Vocabulary, semantic memory, procedural memory', 'Processing speed, episodic memory, executive functioning, fluid intelligence', 'Crystallized intelligence and vocabulary', 'Emotional conditioning and procedural memory'],
      correct: 1,
      explanation: 'Declines: processing speed, episodic memory, executive functioning (working memory, inhibition, attention), fluid intelligence. Stable/improves: semantic memory, vocabulary, procedural memory, crystallized intelligence.' },
    { q: 'An 80-year-old still plays piano beautifully but cannot recall what she ate yesterday. Which memory types does this contrast?', type: 'mcq', difficulty: 'M',
      choices: ['Semantic preserved, procedural impaired', 'Procedural preserved, episodic impaired', 'Episodic preserved, implicit impaired', 'Working memory preserved, semantic impaired'],
      correct: 1,
      explanation: 'Piano = procedural (implicit/non-declarative), which stays stable. Yesterday’s meal = episodic (explicit/declarative), which declines.' },
    { q: 'Define the General Slowing Hypothesis and the Age Complexity Hypothesis, and explain how you would tell them apart from data.', type: 'saq', difficulty: 'H',
      sampleAnswer: 'The General Slowing Hypothesis says older adults have slower reaction times because of a general decline in information processing speed — slowing across the board. The Age Complexity Hypothesis says older adults perform progressively more poorly as a task becomes more complex, because their processing resources are stretched to the limit.\n\nYou tell them apart by whether the age gap grows with difficulty. Under general slowing, older adults are slower by about the same amount on a simple reaction time task and a choice reaction time task. Under age complexity, the two groups are close on the simple task but the gap widens sharply as complexity increases.',
      keyPoints: ['General slowing = overall decline in processing speed', 'Age complexity = progressively worse as complexity rises; resources stretched to the limit', 'Discriminator: whether the age gap GROWS with task difficulty', 'Bonus: simple vs. choice reaction time as the comparison'],
      explanation: 'Both definitions were typed onto the slide — know them verbatim.' },
    { q: 'Researchers use processing speed as an indicator of:', type: 'mcq', difficulty: 'M',
      choices: ['Crystallized intelligence', 'The integrity of the central nervous system', 'Semantic memory capacity', 'Educational attainment'],
      correct: 1,
      explanation: 'Processing speed is used as an indicator of the integrity of the central nervous system, measured via reaction time.' },
    { q: '"Click ‘J’ when you see a red ball and ‘F’ when you see a blue ball" is an example of:', type: 'mcq', difficulty: 'E',
      choices: ['Simple reaction time', 'Choice reaction time', 'The Stroop task', 'Semantic fluency'],
      correct: 1,
      explanation: 'Two stimuli mapped to two responses = choice reaction time. Simple RT is "click when you see a red ball."' },
    { q: 'The Stroop test measures which combination?', type: 'mcq', difficulty: 'M',
      choices: ['Episodic memory and semantic memory', 'Processing speed alongside cognitive inhibition and selective attention', 'Procedural memory and motor skill', 'Crystallized intelligence only'],
      correct: 1,
      explanation: 'Exactly as the slide states. The classic effect: naming the ink color of GREEN printed in red is slow because you must inhibit reading the word.' },
    { q: 'In the Go/No-go data, "nogo" trials all show a value of 2000. What does that most likely represent?', type: 'mcq', difficulty: 'H', added: true,
      choices: ['The participant responded in 2000 ms', 'The trial timeout — the participant correctly withheld a response', 'An error code for equipment failure', 'The number of trials completed'],
      correct: 1,
      explanation: 'Added context: on no-go trials the correct behavior is to NOT respond, so the recorded time is the full trial window (2000 ms). The task tests the capacity not to respond and is good for measuring impulsiveness.' },
    { q: 'Name the three components of executive functioning and define each.', type: 'saq', difficulty: 'M',
      sampleAnswer: 'Executive functioning involves high-order cognitive skills used to plan, make decisions, and allocate mental resources. Its three components are: working memory, which keeps information temporarily available and active in consciousness; inhibition, which is restraining or inhibiting behaviors or thoughts (self-restraint); and attention, which is focus and concentration. All three tend to decline with age.',
      keyPoints: ['Working memory — holds info temporarily active', 'Inhibition — restraining behaviors/thoughts (self-restraint)', 'Attention — focus and concentration', 'EF overall = planning, decisions, allocating mental resources'],
      explanation: 'Straight from the slide; worth memorizing word for word.' },
    { q: 'On the clock drawing test, how many points are possible and what earns them?', type: 'mcq', difficulty: 'M',
      choices: ['3 points: circle, numbers, hands', '4 points: closed circle, all 12 numbers, numbers in right place, hands pointing the right direction', '5 points including the date', '30 points, like the MMSE'],
      correct: 1,
      explanation: '4 points total, 1 each. It is paired with identifying 3 objects, then recalling them after the drawing.' },
    { q: 'Asking an older adult to say the months of the year backward primarily taxes:', type: 'mcq', difficulty: 'H', added: true,
      choices: ['Semantic memory only', 'Working memory and inhibition', 'Procedural memory', 'Crystallized intelligence'],
      correct: 1,
      explanation: 'Added context: you must hold the sequence in mind and manipulate it (working memory) while suppressing the overlearned forward order (inhibition).' },
    { q: 'Which is an example of NORMAL age-related cognitive change rather than a dementia warning sign?', type: 'mcq', difficulty: 'M',
      choices: ['Putting keys in the freezer and accusing family of stealing them', 'Misplacing things from time to time and retracing steps to find them', 'Being unable to drive to a familiar location', 'Losing track of the season entirely'],
      correct: 1,
      explanation: 'The hallmark of normal aging on this slide is recovery — retracing steps, remembering later, figuring it out. The other options involve loss of the ability itself.' },
    { q: 'True or False: Brain aging only produces cognitive changes when a disease such as Alzheimer’s is present.', type: 'tf', difficulty: 'E',
      correct: 1,
      explanation: 'FALSE. "Even without the presence of a disease or disorder, brain aging involves cognitive, structural, neuronal, and chemical changes."' }
  ]
};
