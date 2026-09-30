import React from 'react';
import { Callout, Table, Card, Added } from '../components/Visual.jsx';

const IMG = 'L7/';

export default {
  id: 7,
  quiz: 3,
  lectureNo: 7,
  date: 'Wed, Sep 23',
  title: 'Dementia',
  subtitle: 'Lecture 7 — Alzheimer’s disease, Parkinson’s, frontotemporal dementia, risk and protective factors',
  sourceNote: 'Annotated slides, “Quiz 3 Lecture Slides.pdf” → Day 2 (pp. 15–25). Handwritten notes on the Alzheimer’s, tests, symptoms and research slides.',
  addedLegend: true,

  blocks: [
    {
      id: '7a',
      title: 'Dementia vs. Alzheimer’s Disease',
      subtitle: 'The umbrella and the specific disease — plus her two annotations',
      images: [{ src: IMG + 'L7_s01_p15.jpg', alt: 'Dementia and Alzheimer’s disease slide with annotations', caption: 'Annotated: “we see these as early as two decades (22 yrs) before”; “Protective: sleep”' }],
      content: (
        <>
          <div className="grid md:grid-cols-2 gap-3 my-3">
            <div className="border-2 border-sky-300 bg-sky-50 rounded-lg p-3">
              <div className="font-bold text-sky-900">Dementia</div>
              <div className="text-sm text-sky-950 mt-1"><strong>Umbrella term</strong> for decline in cognitive abilities that <strong>interferes with daily functioning</strong>.</div>
            </div>
            <div className="border-2 border-violet-300 bg-violet-50 rounded-lg p-3">
              <div className="font-bold text-violet-900">Alzheimer’s disease</div>
              <div className="text-sm text-violet-950 mt-1">A <strong>specific degenerative brain disease</strong> — one cause of dementia.</div>
            </div>
          </div>
          <Callout kind="danger" title="Statistic to memorize">
            <strong>1 in 9 adults 65+ in America</strong> have been diagnosed with Alzheimer’s disease.
          </Callout>
          <Callout kind="info" title="Molecular and cellular changes (slide)">
            <ul className="list-disc ml-5 space-y-0.5">
              <li>Accumulation of the protein <strong>beta-amyloid OUTSIDE</strong> neurons</li>
              <li>Twisted strands of the protein <strong>tau INSIDE</strong> neurons</li>
              <li>Death of neurons and damage to brain tissue</li>
              <li>Inflammation and atrophy of brain tissue</li>
            </ul>
          </Callout>
          <Callout kind="tip" title="Her two handwritten notes — both highly quizzable">
            <p><strong>1. Timing:</strong> <em>"We see these as early as two decades (22 yrs) before"</em> — the molecular changes begin roughly 20+ years before symptoms appear. Alzheimer’s is not a sudden old-age event; it has a long silent phase.</p>
            <p className="mt-1"><strong>2. Protective:</strong> <em>sleep.</em> Sleep is protective against these changes.</p>
          </Callout>
          <Added title="Why the amyloid/tau positions matter — and why sleep is protective">
            <p>
              <strong>Outside vs. inside is the classic exam distinction:</strong> beta-amyloid forms
              <em> plaques between</em> neurons; tau forms <em>tangles inside</em> neurons. Mnemonic:
              <strong> "pl-A-ques = A-myloid, outside; T-angles = T-au, inside."</strong>
            </p>
            <p>
              Tau’s normal job is stabilizing microtubules — the internal transport tracks of the neuron (visible in the
              slide diagram). When tau detaches and twists into tangles, the microtubules disintegrate and the neuron
              starves and dies.
            </p>
            <p>
              <strong>Sleep:</strong> during deep sleep the brain’s glymphatic system clears metabolic waste, including
              beta-amyloid. Chronically poor sleep means less clearance and more accumulation — which is why poor sleep
              appears as a risk factor and good sleep as protective (block 7i).
            </p>
          </Added>
        </>
      )
    },
    {
      id: '7b',
      title: 'Alzheimer’s Symptoms',
      subtitle: 'The patient symptom list, plus her addition',
      images: [{ src: IMG + 'L7_s03_p17.jpg', alt: 'Alzheimer’s patient symptoms', caption: 'Annotated: “spatial components too”' }],
      content: (
        <>
          <p><strong>Patient symptoms (slide):</strong></p>
          <ul className="list-disc ml-6 space-y-0.5">
            <li>Loss of <strong>memory, language, problem-solving</strong></li>
            <li>Difficulty concentrating</li>
            <li>Struggling to understand and express thoughts</li>
            <li>Confusion</li>
            <li>Apathy</li>
            <li>Poor judgment and impulsive behavior</li>
          </ul>
          <Callout kind="tip" title="Her annotation">
            <strong>"Spatial components too"</strong> — add visuospatial problems to the list: getting lost in familiar
            places, misjudging distances, trouble with depth perception. This is why the <strong>clock drawing
            test</strong> (Lecture 6) is so sensitive — it taps the spatial and executive pieces together.
          </Callout>
          <Added title="Connecting symptoms back to Lecture 6">
            Notice that the symptom list is essentially the Lecture 6 "declines" column pushed past the point of
            interference: episodic memory, executive functioning (problem solving, judgment, inhibition → impulsive
            behavior) and attention. The difference between normal aging and Alzheimer’s is not <em>which</em> abilities
            are affected so much as <strong>how severely, how fast, and whether daily functioning breaks down.</strong>
          </Added>
        </>
      )
    },
    {
      id: '7c',
      title: 'Alzheimer’s Blood Tests',
      subtitle: 'Two plasma biomarker tests — a major recent change in diagnosis',
      images: [{ src: IMG + 'L7_s02_p16.jpg', alt: 'Alzheimer’s tests slide with annotations', caption: 'Annotated: “ratio”; “plasma test for tau protein”' }],
      content: (
        <>
          <Table
            headers={['Test', 'What it measures', 'Her note']}
            rows={[
              [<strong key="a">Lumipulse G pTau217/β-Amyloid 1-42 Plasma Ratio</strong>, 'The RATIO of phosphorylated tau 217 to beta-amyloid 1-42 in blood plasma', <em key="a2">"Ratio"</em>],
              [<strong key="b">Elecsys® pTau181</strong>, 'Phosphorylated tau 181 in plasma', <em key="b2">"Plasma test for tau protein"</em>]
            ]}
          />
          <Callout kind="tip" title="Note the pattern">
            Both tests measure the <strong>same two proteins from block 7a — tau and beta-amyloid — but in blood</strong>.
            The first is a <strong>ratio</strong> of the two; the second measures tau alone.
          </Callout>
          <Added title="Why blood tests are a big deal">
            Until recently, confirming Alzheimer’s pathology required a <strong>PET scan</strong> (expensive, limited
            availability) or a <strong>lumbar puncture</strong> (invasive spinal fluid draw). A simple blood draw makes
            detection far more accessible — and because the pathology starts ~20 years before symptoms (her annotation
            in 7a), earlier detection creates a window for risk-factor management and for treatments that work best
            early. Caveat: these tests detect <em>pathology</em>, not dementia itself — a person can have positive
            biomarkers and no symptoms, so results are interpreted alongside cognitive testing.
          </Added>
        </>
      )
    },
    {
      id: '7d',
      title: 'How Alzheimer’s Changes the Brain',
      subtitle: 'In-class video',
      images: [{ src: IMG + 'L7_s04_p18.jpg', alt: 'How Alzheimer’s Changes the Brain video', caption: 'In-class video (Alzheimer’s Association)' }],
      content: (
        <>
          <p>A video slide with no text of its own. The standard progression it depicts is added below.</p>
          <Added title="The progression the video shows">
            <ol className="list-decimal ml-5 space-y-1">
              <li><strong>Silent phase (~20 years):</strong> amyloid plaques and tau tangles accumulate with no symptoms — her "two decades before" note.</li>
              <li><strong>Hippocampus first:</strong> damage starts in memory structures, which is why the earliest symptom is trouble forming <em>new</em> episodic memories while old memories remain.</li>
              <li><strong>Spread through the cortex:</strong> as tangles spread, language, reasoning, judgment and spatial skills go.</li>
              <li><strong>Widespread atrophy:</strong> the brain shrinks markedly; ventricles enlarge. Late stages affect basic functions such as swallowing and walking.</li>
            </ol>
            <p>
              Alzheimer’s is ultimately <strong>fatal</strong> — it is a degenerative disease, not just memory loss.
              This links to <strong>tertiary aging</strong> from Lecture 1.
            </p>
          </Added>
        </>
      )
    },
    {
      id: '7e',
      title: 'Alzheimer’s Medication',
      subtitle: 'Two drug classes — and the honest caveat on the slide',
      images: [{ src: IMG + 'L7_s05_p19.jpg', alt: 'Alzheimer’s medication slide', caption: 'Acetylcholinesterase inhibitors and memantine' }],
      content: (
        <>
          <Table
            headers={['Drug class', 'Examples', 'Mechanism (slide)']}
            rows={[
              [<strong key="a">Acetylcholinesterase inhibitors</strong>, 'Donepezil, rivastigmine, galantamine', 'Slow the breakdown of acetylcholine, maintaining normal levels in the brain to slow memory loss'],
              [<strong key="b">Memantine</strong>, '—', 'Targets glutamate, an excitatory neurotransmitter that may overstimulate excitatory synapses and damage the neurons involved']
            ]}
          />
          <Callout kind="danger" title="The caveat — likely quizzed">
            <strong>"There is a lack of scientific efficacy for these medications and they are a treatment for
            symptoms rather than stopping disease progression."</strong> They may ease symptoms; they do not cure
            Alzheimer’s or halt it.
          </Callout>
          <Added title="Making the mechanisms concrete">
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>Acetylcholine</strong> is the neurotransmitter most involved in memory and learning, and Alzheimer’s destroys the neurons that make it. Acetylcholinesterase is the enzyme that breaks it down, so <em>inhibiting</em> that enzyme leaves more acetylcholine in the synapse. It is a workaround, not a repair — and it stops helping once too many neurons are gone.</li>
              <li><strong>Memantine</strong> blocks NMDA receptors. Too much glutamate causes <em>excitotoxicity</em> — neurons are overstimulated to death — so memantine turns the volume down.</li>
              <li><strong>Newer drugs:</strong> anti-amyloid antibodies (lecanemab, donanemab) actually clear amyloid plaques and modestly slow early-stage decline — the first disease-modifying option rather than symptom management. They carry risks of brain swelling and bleeding and require biomarker confirmation (block 7c). She did not cover these, but they are the reason blood tests matter clinically.</li>
            </ul>
          </Added>
        </>
      )
    },
    {
      id: '7f',
      title: 'Parkinson’s Disease',
      subtitle: 'What the slide says — and a full explanation of the disease',
      images: [{ src: IMG + 'L7_s06_p20.jpg', alt: 'Parkinson’s disease slide with symptom diagram', caption: 'PD symptoms diagram' }],
      content: (
        <>
          <Card title="From the slide">
            <ul className="list-disc ml-5 space-y-1 text-sm">
              <li><strong>Parkinson’s disease (PD)</strong> is a <strong>disorder of the nervous system that affects movement.</strong></li>
              <li>It occurs when <strong>brain cells stop making enough dopamine</strong>.</li>
              <li>By the time PD symptoms appear, most people have lost <strong>60 to 80% or more of the dopamine-producing cells</strong>.</li>
              <li>There is also damage to brain cells that make <strong>norepinephrine</strong> — which explains symptoms of <strong>being tired and blood pressure changes</strong>.</li>
              <li>The diagram labels: stooped posture, masked face, back rigidity, forward tilt of trunk, flexed elbows and wrists, reduced arm swing, hand tremor, tremors in the legs, slightly flexed hip and knees, shuffling short-stepped gait.</li>
            </ul>
          </Card>

          <Added title="What Parkinson’s actually is and how it works">
            <p>
              <strong>Where it happens.</strong> PD is caused by the death of dopamine-producing neurons in a small
              midbrain structure called the <strong>substantia nigra</strong> ("black substance," named for its dark
              pigment). These neurons feed dopamine to the <strong>basal ganglia</strong>, the circuit that selects and
              smooths voluntary movement.
            </p>
            <p>
              <strong>Why dopamine loss causes these symptoms.</strong> The basal ganglia work like a gate: dopamine
              helps release wanted movements and suppress unwanted ones. Starve that circuit and the gate sticks
              partly closed — movements become smaller, slower and harder to start. That single mechanism explains the
              whole diagram: reduced arm swing, shuffling steps, a "masked" expressionless face (the small facial
              muscles are affected too), and a stooped, forward-tilted posture.
            </p>
            <p>
              <strong>Why the 60–80% figure matters so much.</strong> The brain compensates for dopamine loss for
              years. By the time the first tremor appears, most of those cells are already gone — so PD, like
              Alzheimer’s, has a long silent phase and a diagnosis that arrives late. That parallel is a strong
              short-answer point.
            </p>
            <p><strong>The four cardinal motor symptoms — mnemonic TRAP:</strong></p>
            <Table
              headers={['Letter', 'Symptom', 'What it looks like']}
              rows={[
                [<strong key="t">T</strong>, 'Tremor at rest', 'Shaking when the limb is relaxed — often a "pill-rolling" motion of thumb and fingers; it lessens during movement'],
                [<strong key="r">R</strong>, 'Rigidity', 'Stiff, resistant muscles; back rigidity and flexed elbows on the diagram'],
                [<strong key="a">A</strong>, 'Akinesia / bradykinesia', 'Absence or slowness of movement — the core disabling feature: slow initiation, small steps, reduced arm swing, masked face'],
                [<strong key="p">P</strong>, 'Postural instability', 'Impaired balance — stooped posture, forward tilt, and a high fall risk']
              ]}
            />
            <p>
              <strong>Non-motor symptoms</strong> are often present and sometimes come first: loss of smell
              (which reappears as "olfactory impairment" in the risk factor list, block 7i), constipation, REM sleep
              behavior disorder (acting out dreams), depression and anxiety, fatigue and blood-pressure drops on
              standing (the norepinephrine piece on the slide), and — in many people later in the disease — cognitive
              impairment or <strong>Parkinson’s disease dementia</strong>.
            </p>
            <p>
              <strong>Treatment.</strong> The main drug is <strong>levodopa</strong>, a dopamine precursor the brain
              converts into dopamine (given with carbidopa so it is not broken down before reaching the brain). It
              treats symptoms well, especially early, but does not stop cell loss and loses reliability over years.
              Deep brain stimulation is an option for some. Exercise, especially large-amplitude movement training, has
              real evidence behind it.
            </p>
          </Added>

          <Added title="How PD relates to dementia (why it is in this lecture)">
            <p>
              PD starts as a <strong>movement</strong> disorder, but it is also a source of dementia. Both PD and
              <strong> Lewy body dementia</strong> involve the same abnormal protein deposits — <strong>Lewy bodies</strong>,
              made of misfolded alpha-synuclein. The conventional distinction is timing: if movement symptoms come
              first and cognitive problems appear later, it is called <em>Parkinson’s disease dementia</em>; if
              cognitive and visual-hallucination symptoms come first or together, it is called <em>dementia with Lewy
              bodies</em>.
            </p>
            <p><strong>Three diseases, three proteins</strong> — a clean way to hold the whole lecture:</p>
            <Table
              headers={['Disease', 'Protein(s)', 'First thing to go']}
              rows={[
                ['Alzheimer’s', 'Beta-amyloid (outside) + tau (inside)', 'Episodic memory'],
                ['Parkinson’s', 'Alpha-synuclein (Lewy bodies)', 'Movement'],
                ['Frontotemporal dementia', 'Tau and other abnormal proteins', 'Behavior, personality, language']
              ]}
            />
          </Added>
        </>
      )
    },
    {
      id: '7g',
      title: 'Frontotemporal Dementia (FTD)',
      subtitle: 'The dementia that does not start with memory',
      images: [{ src: IMG + 'L7_s08_p22.jpg', alt: 'Frontotemporal dementia slide', caption: 'FTD affects the frontal and temporal lobes' }],
      content: (
        <>
          <Card title="From the slide">
            <ul className="list-disc ml-5 space-y-1 text-sm">
              <li><strong>FTD</strong> refers to a <strong>group of brain disorders affecting the frontal and temporal lobes</strong>.</li>
              <li>Symptoms include changes in <strong>behavior, personality, and language</strong>, with <strong>memory loss less prominent</strong>. Because of this, <strong>it is frequently misdiagnosed as a psychiatric condition.</strong></li>
              <li>Causes: <strong>abnormal protein build-up like tau</strong> that damages neurons and causes brain tissue to shrink; <strong>10–30% of cases</strong> can be linked to genetic changes.</li>
            </ul>
          </Card>
          <Callout kind="tip" title="The exam contrast">
            <strong>Alzheimer’s starts with memory. FTD starts with behavior, personality and language</strong> — and
            hits the <strong>frontal and temporal lobes</strong> rather than the hippocampus. That is also why it gets
            mistaken for depression, bipolar disorder or a midlife crisis.
          </Callout>
          <Added title="Two things worth adding">
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>It strikes younger.</strong> FTD commonly begins between about 45 and 65, making it a leading cause of dementia in people under 65. Recall <strong>Wendy Williams from Quiz 2</strong> — placed under guardianship at 57 and later diagnosed with primary progressive aphasia and FTD. That case is a perfect illustration of why dementia is about <em>functional</em> rather than chronological age.</li>
              <li><strong>Main variants:</strong> a <em>behavioral variant</em> (disinhibition, apathy, loss of empathy, compulsive behavior, poor judgment) and <em>primary progressive aphasia</em> (language breaks down first — word-finding, naming, or comprehension).</li>
            </ul>
          </Added>
        </>
      )
    },
    {
      id: '7h',
      title: 'In-Class Video',
      subtitle: 'Unlabeled clip from Day 2',
      images: [{ src: IMG + 'L7_s07_p21.jpg', alt: 'Video still of two people talking outdoors', caption: 'Still from an in-class video (no slide text)' }],
      content: (
        <Callout kind="warn" title="Flagged for you">
          This video slide has no text or annotation, so I have not assigned it a topic. It sits between the
          Parkinson’s and frontotemporal dementia slides. If you remember what it covered, add a note below and it
          will appear in your Review Later tab.
        </Callout>
      )
    },
    {
      id: '7i',
      title: 'Dementia Risk & Protective Factors',
      subtitle: 'Modifiable vs. non-modifiable — the most actionable slide in the lecture',
      images: [
        { src: IMG + 'L7_s09_p23.jpg', alt: 'Factors that may impact risk of cognitive decline and dementia', caption: 'Non-modifiable vs. modifiable risk factors' },
        { src: IMG + 'L7_s10_p24.jpg', alt: 'Dementia risk and protective factors list', caption: 'Her risk / protective factor lists' }
      ],
      content: (
        <>
          <div className="grid md:grid-cols-2 gap-3 my-3">
            <div className="border-2 border-emerald-300 bg-emerald-50 rounded-lg p-3">
              <div className="font-bold text-emerald-900">Non-modifiable</div>
              <div className="text-sm text-emerald-950 mt-1">Age · Genes · Family history</div>
            </div>
            <div className="border-2 border-violet-300 bg-violet-50 rounded-lg p-3">
              <div className="font-bold text-violet-900">Modifiable</div>
              <div className="text-sm text-violet-950 mt-1">
                Traumatic brain injury · Smoking · Diet · Physical activity · Education · Cognitive/social engagement ·
                Hypertension · Cardiovascular health · Sleep · Sensory loss · Diabetes · Air pollution
                <div className="text-xs mt-1 italic">The infographic notes social determinants of health may impact some or all of these.</div>
              </div>
            </div>
          </div>
          <Table
            headers={['Risk factors (slide)', 'Protective factors (slide)']}
            rows={[
              ['Untreated or uncontrolled hypertension, smoking & diabetes', 'Healthy diet and exercise'],
              ['Lower early-life educational quality', 'Remaining socially and cognitively active'],
              ['Inadequate or poor sleep', <span key="cr">More years of formal education; <strong>“cognitive reserve”</strong></span>],
              ['Olfactory impairment', 'Cataract surgery'],
              ['Hearing loss', ''],
              ['Long time exposure to PM air pollution', ''],
              ['Urgent and emergency hospitalizations', '']
            ]}
          />
          <Callout kind="tip" title="Cognitive reserve — know this term">
            The idea that more education and lifelong mental engagement build a <strong>buffer</strong>: the brain can
            sustain more pathology before symptoms show. Two people can have the same plaques and tangles and only one
            shows dementia.
          </Callout>
          <Added title="Two patterns that make this list easy to remember">
            <p>
              <strong>1. What is good for the heart is good for the brain.</strong> Hypertension, smoking, diabetes,
              cardiovascular health, diet and exercise are all vascular — the brain depends on blood flow.
            </p>
            <p>
              <strong>2. Sensory loss and "use it or lose it."</strong> Hearing loss, olfactory impairment and cataracts
              appear because losing sensory input reduces cognitive and social stimulation and increases isolation —
              which is exactly why <strong>cataract surgery is protective</strong> (a striking, very quizzable item) and
              why hearing aids matter. Loss of smell is also an early sign of Parkinson’s (block 7f).
            </p>
            <p>
              Note that <strong>sleep appears on both lists</strong> — poor sleep as a risk factor, and her "protective:
              sleep" annotation in block 7a — for the amyloid-clearance reason.
            </p>
          </Added>
        </>
      )
    },
    {
      id: '7j',
      title: 'Interesting Research Findings',
      subtitle: 'Three studies, with her Super Agers annotation',
      images: [{ src: IMG + 'L7_s11_p25.jpg', alt: 'Interesting research findings slide', caption: 'Annotated: Super Agers = “80+ years old with no difference in ability from people 30+ years younger”' }],
      content: (
        <>
          <Table
            headers={['Study', 'Finding']}
            rows={[
              [<strong key="a">Sabatini et al. (2021)</strong>, <span key="a2"><strong>AARC (losses)</strong> correlated with greater symptoms of <strong>depression and anxiety</strong>.</span>],
              [<strong key="b">Mohammadi-Nejad (2025)</strong>, <span key="b2">Longitudinal brain scans from nearly a thousand healthy adults, before and after the pandemic, showed <strong>accelerated brain aging from people both infected AND <em>not infected</em> with COVID.</strong></span>],
              [<strong key="c">Cook Maher et al. (2017)</strong>, <span key="c2"><strong>Super Agers</strong> have <strong>higher quality social relationships</strong> and <strong>high levels of psychological well-being</strong>.</span>]
            ]}
          />
          <Callout kind="tip" title="Her Super Agers annotation">
            <strong>Super Agers = 80+ years old with no difference in ability from people 30+ years younger.</strong>
            And what distinguishes them in this study is <em>social</em> and <em>psychological</em>, not just biological.
          </Callout>
          <Added title="Two clarifications">
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>AARC</strong> = <em>Awareness of Age-Related Change</em> — how much a person notices changes in themselves as they age. It has a gains side and a losses side; it is the <strong>losses</strong> side that tracks with depression and anxiety. This connects to Lecture 3: internalized negative expectations about aging affect mental health.</li>
              <li><strong>The COVID finding’s punchline</strong> is the "not infected" part — brain aging accelerated even in people who never caught the virus, implicating the <em>pandemic experience itself</em> (isolation, stress, disrupted routines) rather than infection alone. In Lecture 1 terms, that is a <strong>normative history-graded influence</strong>.</li>
            </ul>
          </Added>
        </>
      )
    }
  ],

  keyReview: {
    vocab: [
      { term: 'Dementia', tag: 'core', def: 'Umbrella term for decline in cognitive abilities that interferes with daily functioning.' },
      { term: 'Alzheimer’s disease', tag: 'core', def: 'A specific degenerative brain disease. 1 in 9 adults 65+ in America have been diagnosed.' },
      { term: 'Beta-amyloid', tag: 'AD', tagColor: 'violet', def: 'Protein that accumulates OUTSIDE neurons (plaques).' },
      { term: 'Tau', tag: 'AD', tagColor: 'violet', def: 'Protein forming twisted strands INSIDE neurons (tangles); normally stabilizes microtubules.' },
      { term: '20-year lead time', tag: 'annotation', tagColor: 'amber', def: 'Her note: molecular changes are seen as early as two decades (~22 yrs) before symptoms.' },
      { term: 'Alzheimer’s blood tests', tag: 'AD', tagColor: 'violet', def: 'Lumipulse G pTau217/β-Amyloid 1-42 Plasma RATIO; Elecsys® pTau181 (plasma test for tau protein).' },
      { term: 'Acetylcholinesterase inhibitors', tag: 'drugs', tagColor: 'sky', def: 'Donepezil, rivastigmine, galantamine — slow the breakdown of acetylcholine to slow memory loss.' },
      { term: 'Memantine', tag: 'drugs', tagColor: 'sky', def: 'Targets glutamate, an excitatory neurotransmitter that may overstimulate synapses and damage neurons.' },
      { term: 'Medication caveat', tag: 'drugs', tagColor: 'red', def: 'Lack of scientific efficacy; they treat SYMPTOMS rather than stopping disease progression.' },
      { term: 'Parkinson’s disease', tag: 'PD', tagColor: 'green', def: 'Disorder of the nervous system that affects movement; occurs when brain cells stop making enough dopamine. By the time symptoms appear, 60–80%+ of dopamine-producing cells are lost. Norepinephrine damage explains fatigue and blood pressure changes.' },
      { term: 'TRAP', tag: 'added', tagColor: 'violet', added: true, def: 'Parkinson’s cardinal motor symptoms: Tremor at rest, Rigidity, Akinesia/bradykinesia, Postural instability.' },
      { term: 'Frontotemporal dementia', tag: 'FTD', tagColor: 'amber', def: 'Group of brain disorders affecting the frontal and temporal lobes. Behavior, personality and language change; memory loss less prominent; frequently misdiagnosed as a psychiatric condition. 10–30% linked to genetic changes.' },
      { term: 'Cognitive reserve', tag: 'protective', tagColor: 'green', def: 'More years of formal education builds a buffer against the expression of brain pathology.' },
      { term: 'AARC', tag: 'research', tagColor: 'sky', def: 'Awareness of Age-Related Change. The LOSSES side correlates with greater depression and anxiety (Sabatini et al., 2021).' },
      { term: 'Super Agers', tag: 'research', tagColor: 'sky', def: '80+ year olds with no difference in ability from people 30+ years younger. They have higher quality social relationships and high psychological well-being (Cook Maher et al., 2017).' }
    ],
    laws: [
      { name: 'Alzheimer’s molecular/cellular changes', desc: 'Beta-amyloid accumulates OUTSIDE neurons; tau forms twisted strands INSIDE neurons; neurons die and brain tissue is damaged; inflammation and atrophy. Seen up to two decades before symptoms. Sleep is protective.' },
      { name: 'Alzheimer’s symptoms', desc: 'Loss of memory, language, problem-solving; difficulty concentrating; struggling to understand/express thoughts; confusion; apathy; poor judgment and impulsive behavior — plus spatial components (her annotation).' },
      { name: 'Dementia risk factors', desc: 'Untreated hypertension, smoking & diabetes; lower early-life educational quality; poor sleep; olfactory impairment; hearing loss; long-term PM air pollution exposure; urgent/emergency hospitalizations.' },
      { name: 'Dementia protective factors', desc: 'Healthy diet and exercise; remaining socially and cognitively active; more years of formal education ("cognitive reserve"); cataract surgery.' },
      { name: 'Non-modifiable vs. modifiable', desc: 'Non-modifiable: age, genes, family history. Modifiable: TBI, smoking, diet, physical activity, education, cognitive/social engagement, hypertension, cardiovascular health, sleep, sensory loss, diabetes, air pollution.' }
    ],
    methods: [
      { name: 'Amyloid vs. tau', expand: 'Outside vs. inside', added: true, desc: 'plAques = Amyloid, outside the neuron. Tangles = Tau, inside the neuron.' },
      { name: 'Three diseases, three proteins', expand: 'AD / PD / FTD', added: true, desc: 'Alzheimer’s = amyloid + tau → memory first. Parkinson’s = alpha-synuclein (Lewy bodies) → movement first. FTD = tau and others → behavior, personality, language first.' },
      { name: 'Alzheimer’s vs. FTD', expand: 'Where and what first', desc: 'AD: hippocampus, memory first, older onset. FTD: frontal and temporal lobes, behavior/personality/language first, memory less prominent, younger onset, often misdiagnosed as psychiatric.' },
      { name: 'Heart = brain', expand: 'Risk factor pattern', added: true, desc: 'Most modifiable risk factors are vascular (hypertension, smoking, diabetes, cardiovascular health, diet, exercise). The rest cluster around sensory loss and engagement (hearing, smell, cataracts, education, social activity).' }
    ]
  },

  questions: [
    { q: 'Which statement correctly distinguishes dementia from Alzheimer’s disease?', type: 'mcq', difficulty: 'E',
      choices: ['They are two names for the same condition', 'Dementia is an umbrella term for cognitive decline that interferes with daily functioning; Alzheimer’s is a specific degenerative brain disease', 'Alzheimer’s is the umbrella term; dementia is one type', 'Dementia is reversible; Alzheimer’s is not'],
      correct: 1,
      explanation: 'Dementia = umbrella term for decline in cognitive abilities that interferes with daily functioning. Alzheimer’s = a specific degenerative brain disease.' },
    { q: 'In Alzheimer’s disease, where do beta-amyloid and tau accumulate?', type: 'mcq', difficulty: 'M',
      choices: ['Both inside neurons', 'Both outside neurons', 'Beta-amyloid outside neurons; tau inside neurons', 'Beta-amyloid inside neurons; tau outside neurons'],
      correct: 2,
      explanation: 'Beta-amyloid accumulates OUTSIDE neurons (plaques); twisted strands of tau form INSIDE neurons (tangles). Mnemonic: plAques = Amyloid outside; Tangles = Tau inside.' },
    { q: 'According to Dr. Held’s annotation, how early can the molecular and cellular changes of Alzheimer’s be seen?', type: 'mcq', difficulty: 'M',
      choices: ['About 2 years before symptoms', 'About 5 years before symptoms', 'As early as two decades (~22 years) before', 'Only after symptoms appear'],
      correct: 2,
      explanation: 'Her handwritten note: "we see these as early as two decades (22 yrs) before." She also noted sleep as protective.' },
    { q: 'Roughly what proportion of adults 65+ in America have been diagnosed with Alzheimer’s disease?', type: 'mcq', difficulty: 'E',
      choices: ['1 in 3', '1 in 9', '1 in 20', '1 in 50'],
      correct: 1,
      explanation: '1 in 9 adults 65+ in America have been diagnosed with Alzheimer’s disease.' },
    { q: 'What is the key limitation of acetylcholinesterase inhibitors and memantine, according to the slide?', type: 'mcq', difficulty: 'M',
      choices: ['They are too expensive for most patients', 'They lack scientific efficacy and treat symptoms rather than stopping disease progression', 'They can only be given intravenously', 'They reverse amyloid plaques'],
      correct: 1,
      explanation: 'The slide is explicit: there is a lack of scientific efficacy and they are a treatment for symptoms rather than stopping disease progression.' },
    { q: 'Explain what Parkinson’s disease is, what causes the symptoms, and why the 60–80% figure is significant.', type: 'saq', difficulty: 'H',
      sampleAnswer: 'Parkinson’s disease is a disorder of the nervous system that affects movement. It occurs when brain cells stop making enough dopamine — specifically, dopamine-producing neurons die in a midbrain region called the substantia nigra, which supplies dopamine to the basal ganglia, the circuit that selects and smooths voluntary movement. Without enough dopamine, movements become slow, small and hard to initiate, producing the symptoms on the slide: resting tremor, rigidity, stooped posture, reduced arm swing, masked face and a shuffling, short-stepped gait. There is also damage to cells that make norepinephrine, which explains fatigue and blood pressure changes.\n\nThe 60–80% figure matters because by the time symptoms first appear, most people have already lost that proportion of their dopamine-producing cells. The brain compensates for a long time, so like Alzheimer’s, Parkinson’s has a long silent phase and is diagnosed late — after substantial irreversible damage.',
      keyPoints: [
        'Nervous system disorder affecting movement',
        'Caused by loss of dopamine-producing cells (substantia nigra → basal ganglia)',
        'Names specific motor symptoms (tremor, rigidity, slowness, posture/gait)',
        'Norepinephrine damage → fatigue and blood pressure changes',
        '60–80%+ of dopamine cells already lost when symptoms appear → long silent phase, late diagnosis'
      ],
      explanation: 'The slide gives the definition, dopamine, the 60–80% figure and norepinephrine; the mechanism (substantia nigra, basal ganglia) is added context.' },
    { q: 'The Parkinson’s symptoms of fatigue and blood pressure changes are explained by damage to cells producing:', type: 'mcq', difficulty: 'M',
      choices: ['Dopamine', 'Acetylcholine', 'Norepinephrine', 'Glutamate'],
      correct: 2,
      explanation: 'The slide states there is also damage to brain cells that make norepinephrine, which explains being tired and blood pressure changes. Dopamine loss explains the movement symptoms.' },
    { q: 'A 58-year-old develops striking personality changes, socially inappropriate behavior and word-finding problems, while his memory remains relatively intact. He was initially treated for a psychiatric disorder. Most likely:', type: 'mcq', difficulty: 'H',
      choices: ['Alzheimer’s disease', 'Frontotemporal dementia', 'Parkinson’s disease', 'Normal age-related cognitive change'],
      correct: 1,
      explanation: 'FTD affects the frontal and temporal lobes, producing behavior, personality and language changes with memory loss less prominent — and it is frequently misdiagnosed as a psychiatric condition. It also strikes younger than Alzheimer’s (added: commonly 45–65 — like Wendy Williams from Quiz 2).' },
    { q: 'What percentage of frontotemporal dementia cases can be linked to genetic changes?', type: 'mcq', difficulty: 'M',
      choices: ['1–5%', '10–30%', '50–60%', '80–90%'],
      correct: 1,
      explanation: '10–30% of FTD cases can be linked to genetic changes; the cause is abnormal protein build-up like tau that damages neurons and shrinks brain tissue.' },
    { q: 'Which of these is listed as a PROTECTIVE factor for dementia?', type: 'mcq', difficulty: 'M',
      choices: ['Olfactory impairment', 'Urgent and emergency hospitalizations', 'Cataract surgery', 'Long-term PM air pollution exposure'],
      correct: 2,
      explanation: 'Protective factors: healthy diet and exercise, remaining socially and cognitively active, more years of formal education ("cognitive reserve"), and cataract surgery. The other three are risk factors.' },
    { q: 'List the three non-modifiable risk factors and any four modifiable ones.', type: 'saq', difficulty: 'M',
      sampleAnswer: 'The non-modifiable risk factors are age, genes, and family history. Modifiable risk factors include traumatic brain injury, smoking, diet, physical activity, education, cognitive and social engagement, hypertension, cardiovascular health, sleep, sensory loss, diabetes, and air pollution. The infographic also notes that social determinants of health may impact some or all of the modifiable factors.',
      keyPoints: ['Non-modifiable: age, genes, family history', 'Four or more correct modifiable factors', 'Bonus: social determinants of health affect the modifiable ones'],
      explanation: 'Straight from the infographic. The modifiable list is long — knowing the split matters more than reciting all twelve.' },
    { q: 'What did Mohammadi-Nejad (2025) find, and what makes the finding surprising?', type: 'mcq', difficulty: 'H',
      choices: ['COVID infection caused accelerated brain aging only in hospitalized patients', 'Brain scans showed accelerated brain aging in people both infected AND not infected with COVID', 'Vaccination reversed brain aging', 'There was no change in brain aging during the pandemic'],
      correct: 1,
      explanation: 'Longitudinal scans of nearly a thousand healthy adults before and after the pandemic showed accelerated brain aging in both infected and NOT infected people — implicating the pandemic experience itself, not just the virus. (Added: in Lecture 1 terms, a normative history-graded influence.)' },
    { q: 'What are "Super Agers," and what did Cook Maher et al. (2017) find distinguishes them?', type: 'saq', difficulty: 'M',
      sampleAnswer: 'Super Agers are adults aged 80 and older who show no difference in cognitive ability from people 30 or more years younger. Cook Maher and colleagues (2017) found that Super Agers have higher quality social relationships and high levels of psychological well-being. What stands out is that the distinguishing factors are social and psychological rather than purely biological, which fits the protective factors of remaining socially and cognitively active.',
      keyPoints: ['80+ with ability equal to people 30+ years younger', 'Higher quality social relationships', 'High levels of psychological well-being', 'Bonus: links to social engagement as a protective factor'],
      explanation: 'The definition comes from her handwritten annotation; the findings are on the slide.' }
  ]
};
