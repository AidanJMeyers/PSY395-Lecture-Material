import React from 'react';
import { Callout, Table, Card } from '../components/Visual.jsx';

const IMG = 'L3/';

export default {
  id: 3,
  quiz: 1,
  lectureNo: 3,
  date: 'Wed, Sep 2',
  title: 'Ageism & Media',
  subtitle: 'Lecture 3 — What ageism is, why it happens, its four types, intersectionality, and how media reproduces it',

  blocks: [
    {
      id: '3a',
      title: 'What Is Ageism?',
      subtitle: 'Her stated focus area #4 — the definition and its everyday forms',
      images: [
        { src: IMG + 'L3_s01_p24.jpg', alt: 'Video still: Ageing shouldn’t make people feel invisible', caption: 'Opening video for Lecture 3' },
        { src: IMG + 'L3_s02_p25.jpg', alt: 'Slide: Ageism definition', caption: 'Annotated: chronological age = "# years"; TMT and modernization explained in her notes' }
      ],
      content: (
        <>
          <Callout kind="info" title="Definition (memorize exactly)">
            <strong>Ageism</strong> is <strong>prejudice and discrimination faced by someone due to their chronological
            age.</strong> Critically — <strong>it can be faced by someone of ANY age.</strong>
          </Callout>
          <p>
            Two details in that sentence are heavily testable. First, it is tied to
            <strong> chronological age</strong> specifically — your annotation glosses this as
            <em> "# years."</em> This is the direct payoff of Lecture 1: ageism is the practice of judging a person by
            the one measure of age that predicts their functioning <em>least</em> well. Second,
            <strong> ageism is not exclusive to older adults.</strong> A 24-year-old dismissed as too inexperienced to
            lead a project is experiencing ageism just as a 74-year-old dismissed as too old to learn new software is.
          </p>

          <Card title="What ageism looks like toward older adults (from the slide)">
            <ul className="list-disc ml-5 space-y-1 text-sm">
              <li><strong>Younger people reducing proximity to them</strong> — physically and socially distancing.</li>
              <li><strong>Being called "cute" or "with it"</strong> — infantilizing and backhanded praise.</li>
              <li><strong>Being treated as if they're invisible</strong> — talked over, spoken about in the third person while present, ignored by service staff.</li>
            </ul>
          </Card>

          <Callout kind="tip" title="The ASA guide's three-part structure (assigned reading)">
            The ASA Age-Friendly Communication Guide defines ageism as how we <strong>think (stereotypes)</strong>,
            <strong> feel (prejudice)</strong> and <strong>act (discrimination)</strong> toward people based on their
            age. That cognitive/affective/behavioral triad is the standard prejudice framework, and it maps cleanly
            onto the lecture's "prejudice and discrimination" phrasing. The guide adds: it happens when we behave
            <em> as if a person's age tells us enough about them to make a judgement.</em>
          </Callout>
        </>
      )
    },

    {
      id: '3b',
      title: 'Why Does Ageism Happen? Two Explanatory Theories',
      subtitle: 'Terror management theory · Modernization hypothesis',
      images: [{ src: IMG + 'L3_s02_p25.jpg', alt: 'Slide: Ageism — why does this happen?', caption: 'Both theories are defined entirely in her handwritten notes' }],
      content: (
        <>
          <p>
            The slide lists these two as bare bullets with no definitions — everything below comes from her in-class
            annotations. Given that she named ageism as a focus area, expect one of these to be tested.
          </p>

          <div className="space-y-3 my-4">
            <div className="border-2 border-violet-400 bg-violet-50 rounded-lg p-4">
              <div className="font-bold text-violet-900 text-lg">Terror Management Theory (TMT)</div>
              <div className="text-sm text-violet-900 mt-1">
                <strong>Your annotation:</strong> <em>people with dread about their own mortality avoid being close to
                older adults to protect from anxiety.</em>
                <p className="mt-2">
                  The psychological mechanism: humans are uniquely aware that they will die, which produces existential
                  anxiety. Older adults are an unavoidable <strong>reminder of mortality</strong> — of aging, decline
                  and death. To manage that terror, younger people <strong>distance themselves</strong> physically and
                  psychologically from older adults. This is an <em>individual, psychological</em> account of ageism.
                </p>
                <div className="mt-2 bg-white/70 rounded p-2 border border-violet-200">
                  <strong>This directly explains the "reducing proximity" behavior</strong> listed on the definition
                  slide — distancing is the observable output of mortality anxiety. It also explains why "anti-aging"
                  marketing is so effective: it sells the fantasy that aging is optional.
                </div>
              </div>
            </div>

            <div className="border-2 border-amber-400 bg-amber-50 rounded-lg p-4">
              <div className="font-bold text-amber-900 text-lg">Modernization Hypothesis</div>
              <div className="text-sm text-amber-900 mt-1">
                <strong>Your annotation:</strong> <em>↑ urbanization ⟹ older adults are seen as irrelevant and not able
                to help drive younger populations (devalued).</em>
                <p className="mt-2">
                  The mechanism here is <strong>societal and historical</strong>, not psychological. In
                  pre-industrial societies, older adults held high status because they controlled land, property and —
                  most importantly — <strong>knowledge</strong>, which could only be transmitted orally across
                  generations. Industrialization, urbanization, mass literacy and rapid technological change eroded all
                  three: knowledge became written and then digital, work moved off family land, and skills obsolesced
                  faster than a lifetime. Older adults' status <strong>declined as societies modernized.</strong>
                </p>
              </div>
            </div>
          </div>

          <Callout kind="warn" title="The discriminator">
            <strong>TMT is psychological and individual</strong> — it explains why <em>a person</em> feels
            uncomfortable around older adults (fear of death). <strong>Modernization is sociological and
            historical</strong> — it explains why <em>a society</em> devalues older adults (loss of status through
            industrialization/urbanization). If a question mentions death anxiety, mortality salience, or avoidance →
            TMT. If it mentions industrialization, urbanization, technology, or loss of status → modernization.
          </Callout>
        </>
      )
    },

    {
      id: '3c',
      title: 'The Four Types of Ageism (World Economic Forum)',
      subtitle: 'Personal · Institutional · Intentional · Unintentional',
      images: [{ src: IMG + 'L3_s03_p26.jpg', alt: 'Slide: WEF four types of ageism', caption: 'All four definitions come from her handwritten annotations' }],
      content: (
        <>
          <p>
            The <strong>World Economic Forum</strong> has identified <strong>4 types of ageism.</strong> Again, the
            slide gives only the four words — the definitions below are hers.
          </p>

          <Table
            headers={['Type', 'Her definition', 'Example']}
            rows={[
              [
                <span key="1" className="font-bold text-sky-800">Personal</span>,
                <span key="1d">Individuals hold <strong>prejudiced beliefs about aging</strong> (or lack of belief in older adults).</span>,
                'A manager privately assumes a 68-year-old employee will not be able to learn a new system.'
              ],
              [
                <span key="2" className="font-bold text-violet-800">Institutional</span>,
                <span key="2d"><strong>Discrimination through organizational policies and practices</strong> — e.g., excluding older adults from hires.</span>,
                'A company sets an unstated cutoff and does not interview applicants over 55; a clinical trial caps enrollment at 65.'
              ],
              [
                <span key="3" className="font-bold text-red-800">Intentional</span>,
                <span key="3d"><strong>Deliberate discrimination against an older adult.</strong></span>,
                'Knowingly passing someone over for promotion because of their age.'
              ],
              [
                <span key="4" className="font-bold text-amber-800">Unintentional</span>,
                <span key="4d"><strong>Unconscious biases exclude older adults.</strong></span>,
                'Designing a program with only an app-based signup, unthinkingly excluding those without smartphones; using "elderspeak" without noticing.'
              ]
            ]}
          />

          <Callout kind="tip" title="These are two crossed dimensions, not four separate boxes">
            <strong>Personal vs. Institutional</strong> answers <em>WHERE</em> the ageism lives — in a person's head, or
            in an organization's rules. <strong>Intentional vs. Unintentional</strong> answers <em>WHETHER IT WAS
            MEANT.</em> Any real instance has one value on each axis: an unintentional institutional policy, a
            deliberate personal slight, and so on. Seeing it as a 2×2 makes the four impossible to confuse.
          </Callout>
          <Callout kind="info" title="Why unintentional ageism matters most in practice">
            The ASA guide makes exactly this point: <em>"Despite our good intent, we've absorbed the culture around us
            and may be inadvertently promoting ageism."</em> Most ageism is not malicious — which is why the guide is
            built around noticing your own defaults rather than catching bad actors.
          </Callout>
        </>
      )
    },

    {
      id: '3d',
      title: 'Intersectionality with Ageism',
      subtitle: 'Multiple jeopardy vs. the two opposing viewpoints',
      images: [{ src: IMG + 'L3_s04_p27.jpg', alt: 'Slide: Intersectionality with ageism', caption: 'Annotated with definitions of age-as-a-leveler and the inoculation hypothesis' }],
      content: (
        <>
          <p>
            <strong>Ageism interacts with other marginalized identities</strong> to influence the discriminatory ways in
            which people are treated. The Venn diagram on the slide shows age overlapping with sexual orientation,
            politics, race, socioeconomic status, nationality, cognition, gender, belief and disability.
          </p>

          <div className="border-2 border-red-400 bg-red-50 rounded-lg p-4 my-3">
            <div className="font-bold text-red-900 text-lg">Multiple Jeopardy Hypothesis</div>
            <div className="text-xs text-red-700 mb-1">Deborah King</div>
            <div className="text-sm text-red-900">
              Describes how an individual with <strong>multiple marginalized identities experiences compounded
              disadvantages from the interaction of these identities.</strong>
              <p className="mt-2">
                The key word is <strong>interaction</strong> — the disadvantages do not simply add up, they
                <em> multiply</em>. An older Black woman does not experience racism, sexism and ageism as three
                separate streams; she experiences a distinct compounded form of discrimination that none of the three
                alone describes.
              </p>
            </div>
          </div>

          <p className="font-semibold mt-4">Opposing viewpoints — two arguments that disadvantages may NOT compound:</p>

          <div className="grid md:grid-cols-2 gap-3 my-3">
            <div className="border-2 border-sky-300 bg-sky-50 rounded-lg p-3">
              <div className="font-bold text-sky-900 mb-1">"Age-as-a-leveler"</div>
              <div className="text-sm text-sky-900">
                <strong>Your annotation:</strong> <em>social inequalities become less pronounced because aging people
                experience a similar process.</em>
                <p className="mt-1">
                  The claim: aging is universal, so as everyone experiences age-related change and shared age-based
                  treatment, pre-existing group differences <strong>narrow</strong>. Age becomes a great equalizer that
                  flattens earlier inequalities.
                </p>
              </div>
            </div>
            <div className="border-2 border-emerald-300 bg-emerald-50 rounded-lg p-3">
              <div className="font-bold text-emerald-900 mb-1">Inoculation hypothesis</div>
              <div className="text-sm text-emerald-900">
                <strong>Your annotation:</strong> <em>individuals with lifelong discrimination develop coping
                mechanisms so as not to be affected by ageism.</em>
                <p className="mt-1">
                  The claim: a lifetime of facing discrimination <strong>builds resilience and coping resources</strong>.
                  By the time ageism arrives, these individuals are already practiced at managing prejudice —
                  effectively "inoculated" against it.
                </p>
              </div>
            </div>
          </div>

          <Callout kind="warn" title="How to tell the two opposing views apart">
            Both oppose multiple jeopardy, but for <em>different reasons</em>.
            <strong> Age-as-a-leveler</strong> says the <em>disadvantage itself shrinks</em> — everyone gets treated
            similarly as they age, so the gap closes. <strong>Inoculation</strong> says the disadvantage may persist,
            but <em>the person is better equipped to handle it</em> because of prior experience. Leveler = the
            environment equalizes; inoculation = the individual is hardened.
          </Callout>
        </>
      )
    },

    {
      id: '3e',
      title: 'Ageism & Media: The Language Problem',
      subtitle: 'Ng (2021) and the 6:1 ratio',
      images: [{ src: IMG + 'L3_s05_p28.jpg', alt: 'Slide: Ageism and media', caption: 'Annotated with notes on specialized vs. non-specialized media roles' }],
      content: (
        <>
          <Callout kind="danger" title="The headline statistic — know the numbers">
            Research analyzing a <strong>1.1-billion-word media database</strong> in the <strong>US and UK</strong>
            found that <strong>negative descriptors of older adults outnumber positive or neutral ones by a ratio of
            6:1</strong> <em>(Ng, 2021)</em>.
          </Callout>
          <p>
            Four checkable details there: the corpus size (<strong>1.1 billion words</strong>), the countries
            (<strong>US and UK</strong>), the ratio (<strong>6:1</strong>), and the citation
            (<strong>Ng, 2021</strong>). Note the comparison class is "positive <em>or neutral</em>" combined — so it is
            not merely that negative outweighs positive, it outweighs everything else six to one.
          </p>

          <p>
            <strong>Major language style authorities</strong> — the <strong>American Medical Association</strong>, the
            <strong> Associated Press</strong>, and <strong>The New York Times</strong> — have taken efforts to
            <strong> phase out ageist terminology</strong>, specifically:
          </p>
          <ul className="list-disc ml-6 space-y-0.5">
            <li>"elderly"</li>
            <li>"senior citizens"</li>
            <li>"seniors"</li>
          </ul>

          <Callout kind="info" title="Her annotation on media roles">
            She noted a gendered pattern in who appears on screen: in <strong>specialized roles</strong> (e.g., news
            anchor) the pattern is <em>older men paired with younger women</em>; in
            <strong> non-specialized roles</strong> (e.g., field journalist/reporter) it skews to
            <em> younger men and women</em>. The takeaway: visible authority is granted to older men but withheld from
            older women — which is exactly what the Geena Davis study quantifies two blocks later.
          </Callout>
        </>
      )
    },

    {
      id: '3f',
      title: 'Language Is Important: "Anti-Aging" and Specificity',
      subtitle: 'Allure, the AP Stylebook, and a billion-dollar industry',
      images: [{ src: IMG + 'L3_s06_p29.jpg', alt: 'Slide: Language is important', caption: 'Annotated: "3.9 billion → 4.9 billion in one year"' }],
      content: (
        <>
          <p>
            <strong>Allure magazine stopped using the term "anti-aging" in 2017</strong> — a landmark moment because a
            mainstream beauty publication rejected the industry's central framing. The cover shown reads
            <em> "the end of anti-AGING: our call to the industry."</em>
          </p>
          <Callout kind="warn" title="Why the term is the problem">
            "Anti-aging" positions aging itself as a condition to be fought. The ASA guide is blunt about it:
            <em> "Don't use. Aging is something we all do and we need not be ashamed of it. It can imply that there is
            nothing good about aging."</em> Recall Jamie Lee Curtis from the Lecture 1 opener: "This word 'anti-aging'
            has to be struck."
          </Callout>
          <p>
            <strong>"Anti-aging" is a billion-dollar industry</strong> — and your annotation captures the growth
            trajectory: <strong>$3.9 billion → $4.9 billion in one year.</strong> That is roughly 25% growth in twelve
            months, which is the real reason the language persists despite style guides moving against it: there is
            enormous commercial incentive to keep aging framed as a problem with a purchasable solution.
          </p>

          <Card title="The AP Stylebook: aim for specificity when possible">
            <p className="text-sm mb-2">Rather than vague age labels, name the actual age range:</p>
            <ul className="list-disc ml-5 space-y-1 text-sm">
              <li>"new housing for <strong>people 65 and over</strong>"</li>
              <li>"an exercise program for <strong>women over 70</strong>"</li>
            </ul>
            <p className="text-sm mt-2 text-slate-600">
              Specificity works because it conveys the actual relevant information without importing a stereotype-laden
              category label.
            </p>
          </Card>
        </>
      )
    },

    {
      id: '3g',
      title: 'The ASA Age-Friendly Communication Guide',
      subtitle: 'Assigned reading before this class — stereotypes, words, and images',
      images: [{ src: IMG + 'L3_s07_p30.jpg', alt: 'Image comparison: technology alone vs. requiring assistance', caption: 'Her annotations: "technology online" / "assistance" / "assistance" / "technology alone" — the contrast between age-positive and ageist imagery' }],
      content: (
        <>
          <p>
            The syllabus assigned this guide as reading <em>before</em> the Sep 2 class, so it is fair game. It has
            three sections, and the image slide above is a direct application of the third: the same subject
            (an older adult with technology) framed either as <strong>competent and independent</strong> ("technology
            alone") or as <strong>needing help</strong> ("assistance").
          </p>

          <Card title="Section 1 — Themes that reinforce ageism (stereotype → reality)">
            <Table
              headers={['Stereotype', 'Reality']}
              rows={[
                ['Older adults are not in the workforce.', 'The number and percentage of older workers is increasing everywhere.'],
                ['Older or younger adults are adorable or clueless.', 'All adults deserve respect and dignity and not to be infantilized.'],
                ["Older adults can't learn new things / become incompetent with age.", 'Older adults can and do learn new skills, ideas and careers.'],
                ["Older adults can't use technology.", 'Older adults do use technology and have adapted to technological change throughout their lives.'],
                ['Framing successful aging as the absence of disability.', 'Lack of disability is not a sign of success. Avoid reinforcing ableism.'],
                ['Older adults are isolated, sad and withdrawn from life.', 'Adults of all ages are artists, athletes, travelers, workers and community leaders. Loneliness is not a natural attribute of aging.'],
                ['Older people need our protection ("taking care of our poor elderly").', <span key="ca"><strong>Compassionate ageism.</strong> Older people have agency and are not a separate group to be overseen or a burden to be managed.</span>],
                ['Older people are wise and all-knowing.', <span key="ba"><strong>Benevolent ageism.</strong> Older adults are diverse and do not have all the answers. Avoid positive stereotypes as well as negative.</span>],
                ['Age groups are in competition with one another.', 'We have more when we work together; pitting age groups against each other diminishes what we can accomplish.'],
                ['Successful aging means climbing a mountain or not "looking your age."', 'Extreme examples suggest people who cannot or do not want to do these things are less valuable. There is nothing wrong with looking older.']
              ]}
            />
          </Card>

          <Callout kind="danger" title="Two terms most likely to appear on the quiz">
            <strong>Compassionate ageism</strong> — treating older adults as needing protection ("our poor elderly").
            <strong> Benevolent ageism</strong> — positive stereotyping, e.g., assuming older adults are wise and
            all-knowing. Both are <em>still ageism</em>, because both substitute a group assumption for the individual.
            This is the guide's most counterintuitive and therefore most quizzable point:
            <strong> a "nice" stereotype is still a stereotype.</strong>
          </Callout>

          <Card title="Section 2 — Words matter (avoid → alternative)" className="mt-3">
            <Table
              headers={['Avoid', 'Why / alternative']}
              rows={[
                ['Senior, super senior, elderly, aged, old person', 'Use "older person" or "older adults," or descriptive language (e.g., age 60). Consider whether categorizing by age is necessary at all.'],
                ['Grandmother / grandfather', "Don't use unless the subject really is a grandparent and it is relevant in context."],
                ['Frail, helpless, vulnerable (as a group description)', 'Not a valid generalization — health concerns and disabilities affect people of all ages.'],
                ['Geriatric (describing a person)', 'This describes a healthcare field, not a person.'],
                ['Young lady/man, young at heart, "look good for your age," "60 is the new 40"', 'These imply that being old is bad and that people who look older are unattractive.'],
                ['"Still" — e.g., "She\'s still working."', 'Implies older people do not do the activity. Drop the word "still."'],
                ['Anti-aging', 'Aging is something we all do; implies there is nothing good about aging.'],
                ['Silver tsunami, gray wave, demographic cliff', 'Associate aging with catastrophe and disaster. Describe demographic change factually.'],
                ['Patronizing language, e.g., "our seniors"', 'Speak about older adults as you would other adults.'],
                ['Boomers, Millennials and other generational categories', 'Rely on over-generalization. Use common experiences like "mid-career" or "caregivers" instead.']
              ]}
            />
          </Card>

          <Card title="Section 3 — Pictures tell a story too (positive themes)" className="mt-3">
            <ul className="list-disc ml-5 space-y-1 text-sm">
              <li>Adults of all ages engage in a range of recreational and social activities — on a date, at a concert, shopping, exercising.</li>
              <li><strong>Technical competency is not limited by age</strong> — show all ages competently using technology.</li>
              <li>Adults of all ages contribute: working, starting businesses, volunteering, participating in community life <em>as equals</em>.</li>
              <li>People of the same age do not all dress or look alike.</li>
              <li>People with limited mobility are actively engaged in all aspects of life; show assistive devices in ordinary contexts.</li>
              <li>People from every race, sexual orientation, gender identity and background are aging.</li>
            </ul>
          </Card>

          <Callout kind="tip" title='Section 4 — "First person first": the quick self-check'>
            When in doubt, ask: <em>Is this a way I would like to be described? Am I talking about older adults as the
            "other"? Am I using stereotypes? Have I represented the full experience of people of any age? Are my images
            reinforcing stereotypes?</em>
            <p className="mt-1">
              And the practical fix: <strong>try speaking in first person</strong> — instead of "the elderly need," say
              <strong> "as we age, we need."</strong> If it feels demeaning to think of yourself the way you are
              describing others, reconsider how you are making your point.
            </p>
          </Callout>
        </>
      )
    },

    {
      id: '3h',
      title: 'The Disrupt Aging Collection',
      subtitle: 'AARP + Getty Images — changing the visual vocabulary of aging',
      images: [{ src: IMG + 'L3_s08_p31.jpg', alt: 'Slide: Disrupt Aging Collection', caption: 'A collaboration between AARP and Getty Images' }],
      content: (
        <>
          <p>
            The <strong>Disrupt Aging Collection</strong> is a <strong>collaboration between AARP and Getty
            Images</strong> featuring a library of <strong>thousands of stock photos designed to challenge ageist
            stereotypes and portray older adults in a vibrant, authentic, and active light.</strong>
          </p>
          <Callout kind="info" title="Why a stock photo library is a serious intervention">
            Stock imagery is the raw material of nearly every article, ad, brochure and website about aging. If the
            only available images show older adults as frail, passive or being assisted, then even well-intentioned
            organizations reproduce ageist imagery by default. Changing the supply of images changes the output
            downstream — this is <strong>Section 3 of the ASA guide operationalized at scale.</strong>
          </Callout>
          <p>
            The slide also lists <strong>free sources</strong>: <em>age-positive illustrations</em> and
            <em> age-positive images</em>.
          </p>
          <p className="text-sm text-slate-600">
            Know the two organizations by name — <strong>AARP</strong> and <strong>Getty Images</strong> — and the
            three descriptors: <strong>vibrant, authentic, active.</strong>
          </p>
        </>
      )
    },

    {
      id: '3i',
      title: 'Movies & TV: Geena Davis, GDIGM, and The Ageless Test',
      subtitle: 'The study design behind "Frail, Frumpy and Forgotten"',
      images: [{ src: IMG + 'L3_s09_p32.jpg', alt: 'Slide: Ageism and media — movies, TV', caption: 'Annotated with the Ageless Test criteria' }],
      content: (
        <>
          <p>
            <strong>Geena Davis</strong> set up the <strong><em>Institute on Gender in Media</em> (GDIGM)</strong> and
            conducted a <strong>global study on 30 top-grossing films in 2019</strong> from the
            <strong> US, UK, France and Germany.</strong>
          </p>
          <p>
            The study <strong>employed The Ageless Test</strong> and published its findings as
            <strong> <em>"Frail, frumpy and forgotten: A report on the movie roles of women of age."</em></strong>
          </p>

          <Callout kind="info" title="The Ageless Test — her annotated criteria">
            A film passes when it includes a non-stereotypical female character aged 50+ who is:
            <ul className="list-disc ml-5 mt-1 space-y-0.5">
              <li><strong>Essential to the plot</strong></li>
              <li><strong>Presented in human ways</strong></li>
            </ul>
            <p className="mt-2">
              Her framing beneath: <strong>older women as central characters — RATHER THAN passive, waiting
              characters.</strong>
            </p>
          </Callout>
          <Callout kind="tip" title="Study-design details worth memorizing">
            <strong>30</strong> top-grossing films · <strong>2019</strong> · <strong>4 countries</strong> (US, UK,
            France, Germany) · founded by <strong>Geena Davis</strong> · instrument = <strong>The Ageless
            Test</strong> · report title = <strong>"Frail, Frumpy and Forgotten."</strong> The Ageless Test is
            modeled on the same logic as the Bechdel Test — a simple pass/fail screen that exposes a systemic pattern.
          </Callout>
        </>
      )
    },

    {
      id: '3j',
      title: '"Frail, Frumpy and Forgotten": The Findings',
      subtitle: 'The numbers — this slide is dense with quizzable statistics',
      images: [
        { src: IMG + 'L3_s10_p33.jpg', alt: 'Slide: Frail frumpy forgotten statistics', caption: 'Annotated: "1 in 4 = 25%"' },
        { src: IMG + 'L3_s11_p34.jpg', alt: 'Slide: stereotype breakdown table', caption: 'Stereotypes by category with percentages' }
      ],
      content: (
        <>
          <Card title="Headline findings">
            <ul className="list-disc ml-5 space-y-1.5 text-sm">
              <li>
                Only <strong>1 in 4 films (25%)</strong> passed the <em>Ageless Test</em> by having a
                non-stereotypical female character age 50+.
              </li>
              <li>
                <strong>0% of females aged 50+</strong> in these films had <strong>leading roles.</strong>
                <span className="text-slate-600"> — the single most striking number on the slide.</span>
              </li>
            </ul>
          </Card>

          <p className="mt-3 font-semibold">Female characters 50+ compared with male characters 50+ were:</p>
          <Table
            headers={['Multiplier', 'More likely to be shown as']}
            rows={[
              [<span key="a" className="font-bold text-red-700">7×</span>, 'homebound'],
              [<span key="b" className="font-bold text-red-700">4×</span>, '"senile"'],
              [<span key="c" className="font-bold text-red-700">4×</span>, 'feeble'],
              [<span key="d" className="font-bold text-red-700">4×</span>, 'frumpy'],
              [<span key="e" className="font-bold text-red-700">2×</span>, 'unattractive']
            ]}
          />
          <Callout kind="tip" title="Memory hook for the multipliers">
            <strong>7× homebound</strong> is the largest and the outlier — remember it separately. Then
            <strong> three 4×'s: senile, feeble, frumpy</strong> (the "F" pair plus senile). Then
            <strong> 2× unattractive</strong>, the smallest. Notice the report's title encodes three of them:
            <em> Frail</em> (feeble), <em>Frumpy</em>, <em>Forgotten</em> (0% leading roles).
          </Callout>

          <p className="mt-4">
            <strong>Older adults were commonly depicted in stereotypical, degrading ways tied to age.</strong>
            Over half — <strong>56.9%</strong> — of characters 50+ were depicted with <strong>at least one
            stereotype</strong>, with <strong>two stereotypes presented on average.</strong>
          </p>

          <Table
            headers={['Mental', 'Emotional', 'Physical', 'Sexuality', 'Gender']}
            rows={[
              ['stubborn 32.8%', 'lonely 15.5%', 'physically inactive 12.8%', 'having a sexual partner 9.5% (vs. 16.6%)', 'non-gender conforming 0%'],
              ['cranky 31.9%', 'socially inactive 10.3%', 'sickly 6.9%', '', ''],
              ['bigoted 10.3%', 'depressed 5.2%', 'homebound 6.0%', '', ''],
              ['senile 6.9%', '', 'dependent on others 4.3%', '', ''],
              ['stingy 5.2%', '', '', '', '']
            ]}
          />
          <Callout kind="warn" title="What to actually take from the table">
            You will not be asked for all seventeen percentages. Know the <strong>structure</strong> (five stereotype
            categories: mental, emotional, physical, sexuality, gender), the <strong>two dominant stereotypes</strong>
            — <em>stubborn (32.8%)</em> and <em>cranky (31.9%)</em>, both mental and both around a third — and the
            <strong> summary figures: 56.9% with at least one stereotype, two on average.</strong> Also note the
            sexuality row: characters 50+ were shown as having a sexual partner only <strong>9.5%</strong> of the time
            versus <strong>16.6%</strong> for the comparison group, and <strong>0%</strong> were non-gender conforming
            — an absence rather than a distortion.
          </Callout>
        </>
      )
    },

    {
      id: '3k',
      title: '"Acting Your Age" Campaign — and Signs of Progress',
      subtitle: 'The BAFTA nominee age data, and the 2023 Oscars',
      images: [
        { src: IMG + 'L3_s12_p35.jpg', alt: 'Slide: Acting your age campaign with BAFTA charts', caption: 'Annotated: "women decreasing in age for nominees, much faster than males"' },
        { src: IMG + 'L3_s13_p36.jpg', alt: 'Slide: Progress — 2023 Oscar winners', caption: 'All four acting winners were 50+' }
      ],
      content: (
        <>
          <p>
            In <strong>2022, more than 100 British actors and public figures signed an open letter</strong> calling for
            an end to the entertainment industry's <strong>"entrenched" ageism against women older than age 45.</strong>
          </p>

          <Card title="The BAFTA nominee-age data on the slide">
            <ul className="list-disc ml-5 space-y-1 text-sm">
              <li>
                Over the last <strong>21 years</strong> of BAFTA leading TV actress awards, the average age of
                <strong> female</strong> nominees trended down from <strong>age 52 to age 32</strong> — a 20-year drop.
              </li>
              <li>
                Over the same period, the average age of <strong>male</strong> nominees fell only from
                <strong> 48 to 45</strong> — a 3-year drop.
              </li>
            </ul>
            <div className="mt-2 p-2 bg-amber-50 border border-amber-200 rounded text-sm">
              <strong>Your annotation:</strong> <em>"women decreasing in age for nominees, much faster than males."</em>
            </div>
          </Card>
          <Callout kind="danger" title="Why this comparison is the point">
            A 20-year decline for women against a 3-year decline for men is the quantitative signature of
            <strong> gendered ageism</strong>: the industry's window of viability for women is narrowing sharply while
            men's holds roughly steady. This is the same asymmetry as her news-anchor annotation (older men paired with
            younger women) and as the 0%-leading-roles finding.
          </Callout>

          <div className="border-2 border-emerald-400 bg-emerald-50 rounded-lg p-4 my-3">
            <div className="font-bold text-emerald-900 text-lg mb-1">Progress</div>
            <p className="text-sm text-emerald-900">
              <strong>The 2023 Oscar-winning Best Actor, Best Actress, Best Supporting Actor and Best Supporting
              Actress were all ages 50 and older.</strong> All four acting categories in a single year — the slide
              presents this as a genuine counter-trend.
            </p>
          </div>
        </>
      )
    },

    {
      id: '3l',
      title: 'Anti-Ageism Initiatives',
      subtitle: 'Named resources — know the list',
      images: [
        { src: IMG + 'L3_s14_p37.jpg', alt: 'Slide: Anti-ageism initiatives', caption: 'Four named initiatives' },
        { src: IMG + 'L3_s15_p38.jpg', alt: 'Slide: Ageism Toolkit link', caption: 'Closing resource link — the Ageism & Cinema Toolkit (ccaageism.ca)' }
      ],
      content: (
        <>
          <p>These are the four initiatives named on the slide. Be able to recognize them by name:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li><strong>Changing the Narrative</strong></li>
            <li><strong>Century Lives Podcast</strong></li>
            <li><strong>Abundant Aging Podcast</strong></li>
            <li><strong>[B]OLD AGE</strong> — substack newsletter and podcast</li>
          </ul>
          <p className="mt-3">
            The lecture closed with a link to the <strong>Ageism &amp; Cinema Toolkit</strong> from the Canadian
            Coalition Against Ageism (<span className="text-slate-600">ccaageism.ca</span>).
          </p>
          <Callout kind="tip" title="The through-line of the whole lecture">
            Notice the arc: <strong>ageism is defined</strong> → <strong>explained</strong> (TMT, modernization) →
            <strong> categorized</strong> (4 WEF types) → <strong>complicated</strong> (intersectionality) →
            <strong> traced through media</strong> (language, images, film) → <strong>countered</strong> (ASA guide,
            Disrupt Aging, Acting Your Age, these initiatives). If you get a broad essay prompt on ageism, that
            sequence is your outline.
          </Callout>
        </>
      )
    }
  ],

  keyReview: {
    vocab: [
      { term: 'Ageism', tag: 'core', def: 'Prejudice and discrimination faced by someone due to their chronological age. Can be faced by someone of ANY age. ASA framing: how we think (stereotypes), feel (prejudice) and act (discrimination) based on age.' },
      { term: 'Terror management theory', tag: 'why', tagColor: 'violet', def: 'People with dread about their own mortality avoid being close to older adults to protect themselves from anxiety. Older adults are a reminder of death. PSYCHOLOGICAL / individual explanation.' },
      { term: 'Modernization hypothesis', tag: 'why', tagColor: 'amber', def: 'Increased urbanization/industrialization means older adults are seen as irrelevant and unable to help drive younger populations — they become devalued. SOCIOLOGICAL / historical explanation.' },
      { term: 'Personal ageism', tag: 'WEF type', tagColor: 'sky', def: 'Individuals hold prejudiced beliefs about aging (or lack of belief in older adults).' },
      { term: 'Institutional ageism', tag: 'WEF type', tagColor: 'sky', def: 'Discrimination through organizational policies and practices — e.g., excluding older adults from hires.' },
      { term: 'Intentional ageism', tag: 'WEF type', tagColor: 'sky', def: 'Deliberate discrimination against an older adult.' },
      { term: 'Unintentional ageism', tag: 'WEF type', tagColor: 'sky', def: 'Unconscious biases that exclude older adults.' },
      { term: 'Multiple jeopardy hypothesis', tag: 'Deborah King', tagColor: 'red', def: 'An individual with multiple marginalized identities experiences COMPOUNDED disadvantages from the INTERACTION of those identities — they multiply rather than simply add.' },
      { term: 'Age-as-a-leveler', tag: 'opposing', tagColor: 'green', def: 'Social inequalities become LESS pronounced with age because aging people experience a similar process. The environment equalizes.' },
      { term: 'Inoculation hypothesis', tag: 'opposing', tagColor: 'green', def: 'Individuals with lifelong discrimination develop coping mechanisms so as not to be affected by ageism. The individual is hardened.' },
      { term: 'Compassionate ageism', tag: 'ASA guide', tagColor: 'amber', def: 'Treating older people as needing our protection — e.g., "taking care of our poor elderly." Older people have agency and are not a burden to be managed.' },
      { term: 'Benevolent ageism', tag: 'ASA guide', tagColor: 'amber', def: 'POSITIVE stereotyping — e.g., assuming older adults are wise and all-knowing. Still ageism: avoid positive stereotypes as well as negative ones.' },
      { term: 'The Ageless Test', tag: 'GDIGM', tagColor: 'violet', def: 'Instrument used by the Geena Davis Institute. A film passes with a non-stereotypical female character age 50+ who is essential to the plot and presented in human ways.' },
      { term: 'Disrupt Aging Collection', tag: 'initiative', tagColor: 'green', def: 'A collaboration between AARP and Getty Images — thousands of stock photos designed to challenge ageist stereotypes and portray older adults as vibrant, authentic and active.' },
      { term: 'GDIGM', tag: 'Geena Davis', tagColor: 'violet', def: 'The Institute on Gender in Media, founded by Geena Davis. Studied 30 top-grossing 2019 films from the US, UK, France and Germany.' }
    ],
    laws: [
      { name: 'Ng (2021) — the 6:1 ratio', desc: 'Analysis of a 1.1-BILLION-WORD media database in the US and UK found negative descriptors of older adults outnumber positive OR neutral ones by 6:1.' },
      { name: 'Style authorities phasing out ageist terms', desc: 'The American Medical Association, the Associated Press, and The New York Times are phasing out "elderly," "senior citizens," and "seniors." The AP Stylebook recommends specificity instead: "people 65 and over," "women over 70."' },
      { name: '"Frail, Frumpy and Forgotten" — headline findings', desc: 'Only 1 in 4 films (25%) passed the Ageless Test. 0% of females 50+ had leading roles. Women 50+ vs. men 50+: 7× homebound, 4× "senile," 4× feeble, 4× frumpy, 2× unattractive.' },
      { name: '"Frail, Frumpy and Forgotten" — stereotype prevalence', desc: '56.9% of characters 50+ were depicted with at least one stereotype, two on average. Top two: stubborn 32.8% and cranky 31.9%. Five categories: mental, emotional, physical, sexuality, gender.' },
      { name: '"Acting Your Age" campaign (2022)', desc: 'More than 100 British actors and public figures signed an open letter against the industry\'s "entrenched" ageism toward women older than 45. BAFTA data: average female nominee age fell 52 → 32 over 21 years; male fell only 48 → 45.' },
      { name: 'Progress (2023 Oscars)', desc: 'The 2023 Best Actor, Best Actress, Best Supporting Actor and Best Supporting Actress winners were ALL ages 50 and older.' }
    ],
    methods: [
      { name: 'TMT vs. Modernization', expand: 'Individual vs. society', desc: 'Death anxiety, mortality, avoidance/distancing → TERROR MANAGEMENT. Industrialization, urbanization, technology, loss of status → MODERNIZATION.' },
      { name: 'The 4 WEF types as a 2×2', expand: 'Where × Whether', desc: 'Personal vs. Institutional = WHERE the ageism lives (in a head vs. in policy). Intentional vs. Unintentional = WHETHER IT WAS MEANT. Every real case has one value on each axis.' },
      { name: 'Multiple jeopardy vs. its two opponents', expand: 'Compound / level / inoculate', desc: 'MULTIPLE JEOPARDY: disadvantages compound through interaction. AGE-AS-A-LEVELER: inequalities shrink because aging is universal. INOCULATION: the disadvantage persists but the person copes better from prior experience.' },
      { name: 'Compassionate vs. benevolent ageism', expand: 'Both are "nice" and both are ageism', desc: 'COMPASSIONATE = they need our protection ("our poor elderly"). BENEVOLENT = positive stereotype (wise, all-knowing). Both substitute a group assumption for the individual.' },
      { name: 'The Frail/Frumpy multipliers', expand: '7-4-4-4-2', desc: '7× homebound (outlier, largest) · 4× senile, feeble, frumpy · 2× unattractive. The report title encodes three: Frail (feeble), Frumpy, Forgotten (0% leading roles).' },
      { name: 'ASA quick self-check', expand: 'First person first', desc: 'Instead of "the elderly need," say "as we age, we need." If it feels demeaning to describe yourself that way, reconsider how you are making your point.' }
    ]
  },

  questions: [
    {
      q: 'Which is the most accurate definition of ageism as given in class?',
      type: 'mcq', difficulty: 'E',
      choices: [
        'Prejudice and discrimination faced by older adults due to their age',
        'Prejudice and discrimination faced by someone due to their chronological age; it can be faced by someone of any age',
        'The belief that older adults are wise and deserve respect',
        'The natural decline in social status that accompanies retirement'
      ],
      correct: 1,
      explanation: 'Two details matter: it is tied to CHRONOLOGICAL age specifically (your annotation: "# years"), and it can be faced by someone of ANY age — not only older adults. Option A is the common trap because it restricts ageism to older adults.'
    },
    {
      q: 'A 26-year-old is repeatedly excluded from client meetings because colleagues assume she is "too young to be taken seriously." Is this ageism?',
      type: 'mcq', difficulty: 'M',
      choices: [
        'No — ageism only applies to older adults',
        'Yes — ageism is prejudice and discrimination based on chronological age and can be faced by someone of any age',
        'No — this is only a workplace issue, not ageism',
        'Yes, but only if she is over 50'
      ],
      correct: 1,
      explanation: 'Yes. The definition explicitly states ageism can be faced by someone of ANY age. The ASA guide gives the parallel example directly: assuming an older person cannot use technology OR that a younger adult can.'
    },
    {
      q: 'A young nurse feels inexplicably uncomfortable on the geriatric ward and requests a transfer, later admitting the patients "remind me that I\'m going to get old and die." Which theory explains this?',
      type: 'mcq', difficulty: 'M',
      choices: ['Modernization hypothesis', 'Terror management theory', 'Multiple jeopardy hypothesis', 'Inoculation hypothesis'],
      correct: 1,
      explanation: 'Terror management theory. Your annotation: people with dread about their own mortality avoid being close to older adults to protect from anxiety. Older adults act as a reminder of mortality, and distancing is the defense — which also explains the "reducing proximity" behavior listed on the definition slide.'
    },
    {
      q: 'Explain the modernization hypothesis and how it differs from terror management theory.',
      type: 'short', difficulty: 'H',
      correct: ['urbanization older adults seen as irrelevant devalued', 'increased urbanization means older adults seen as irrelevant'],
      explanation: 'MODERNIZATION: increased urbanization/industrialization means older adults are seen as irrelevant and not able to help drive younger populations — they become devalued. In pre-industrial societies elders controlled land, property and orally transmitted knowledge; industrialization, mass literacy and rapid technological change eroded all three. DIFFERENCE: modernization is SOCIOLOGICAL/HISTORICAL (why a society devalues older adults), while TMT is PSYCHOLOGICAL/INDIVIDUAL (why a person avoids older adults — death anxiety).'
    },
    {
      q: 'A hospital\'s hiring software automatically filters out applicants who graduated more than 30 years ago. No one designed it with that intent. Using the WEF framework, this is best classified as:',
      type: 'mcq', difficulty: 'H',
      choices: [
        'Personal and intentional',
        'Institutional and unintentional',
        'Personal and unintentional',
        'Institutional and intentional'
      ],
      correct: 1,
      explanation: 'INSTITUTIONAL because it operates through organizational policies and practices (your annotation: excluding older adults from hires), and UNINTENTIONAL because unconscious bias — not deliberate intent — produced the exclusion. The four WEF types work as a 2×2: Personal/Institutional = WHERE the ageism lives; Intentional/Unintentional = WHETHER IT WAS MEANT.'
    },
    {
      q: 'Name the four types of ageism identified by the World Economic Forum.',
      type: 'short', difficulty: 'E',
      correct: ['personal institutional intentional unintentional', 'personal, institutional, intentional, unintentional'],
      explanation: 'Personal (individuals hold prejudiced beliefs about aging), Institutional (discrimination through organizational policies and practices), Intentional (deliberate discrimination against an older adult), and Unintentional (unconscious biases exclude older adults).'
    },
    {
      q: 'Who is associated with the multiple jeopardy hypothesis, and what does it claim?',
      type: 'mcq', difficulty: 'M',
      choices: [
        'Deborah King — individuals with multiple marginalized identities experience compounded disadvantages from the interaction of those identities',
        'Geena Davis — women over 50 are underrepresented in film',
        'Deborah King — aging equalizes social inequalities over time',
        'Ng — negative media descriptors outnumber positive ones 6:1'
      ],
      correct: 0,
      explanation: 'Deborah King. The key word is INTERACTION — disadvantages do not simply add, they compound. An older Black woman experiences a distinct compounded form of discrimination that racism, sexism or ageism alone does not describe.'
    },
    {
      q: 'Distinguish "age-as-a-leveler" from the "inoculation hypothesis." Both oppose multiple jeopardy — how do their reasons differ?',
      type: 'short', difficulty: 'H',
      correct: ['leveler inequalities shrink inoculation coping mechanisms', 'age as a leveler social inequalities become less pronounced; inoculation develops coping'],
      explanation: 'AGE-AS-A-LEVELER: social inequalities become LESS PRONOUNCED because aging people experience a similar process — the environment equalizes and the gap itself closes. INOCULATION: individuals with lifelong discrimination DEVELOP COPING MECHANISMS so as not to be affected by ageism — the disadvantage may persist, but the person is better equipped to handle it. Leveler = environment equalizes; inoculation = individual is hardened.'
    },
    {
      q: 'Ng (2021) analyzed a media database and found what ratio of negative to positive-or-neutral descriptors of older adults?',
      type: 'mcq', difficulty: 'M',
      choices: ['2:1', '4:1', '6:1', '10:1'],
      correct: 2,
      explanation: '6:1, from a 1.1-BILLION-WORD media database in the US and UK. Note the comparison class is "positive OR neutral" combined — negative descriptors outnumber everything else six to one.'
    },
    {
      q: 'Which three organizations were named as language style authorities phasing out ageist terminology, and which three terms are they retiring?',
      type: 'short', difficulty: 'M',
      correct: ['AMA AP New York Times elderly senior citizens seniors', 'american medical association associated press new york times'],
      explanation: 'The American Medical Association, the Associated Press, and The New York Times. The terms being phased out: "elderly," "senior citizens," and "seniors." The AP Stylebook recommends specificity instead — e.g., "new housing for people 65 and over," "an exercise program for women over 70."'
    },
    {
      q: 'A charity brochure reads: "Help us take care of our poor elderly, who are so wise and always know best." According to the ASA guide, this contains which two problems?',
      type: 'mcq', difficulty: 'H',
      choices: [
        'Only compassionate ageism',
        'Compassionate ageism and benevolent ageism',
        'Intentional ageism and institutional ageism',
        'Nothing problematic — both statements are positive'
      ],
      correct: 1,
      explanation: 'COMPASSIONATE AGEISM ("taking care of our poor elderly" — treating older people as needing protection, when they have agency and are not a burden to be managed) plus BENEVOLENT AGEISM (positive stereotyping as wise and all-knowing — older adults are diverse and do not have all the answers). The guide is explicit that you should avoid positive stereotypes as well as negative. It also flags "elderly" and the patronizing "our."'
    },
    {
      q: 'According to the ASA guide, why should you drop the word "still" in a sentence like "She\'s still working"?',
      type: 'mcq', difficulty: 'M',
      choices: [
        'It is grammatically incorrect',
        'It implies that older people do not do the activity',
        'It is too informal for professional writing',
        'It suggests the person should retire'
      ],
      correct: 1,
      explanation: 'The guide states plainly: "This implies that older people don\'t do the activity. Drop the word \'still.\'" The word smuggles in a background assumption that continuing to work is unexpected at that age.'
    },
    {
      q: 'The ASA guide advises against "silver tsunami," "gray wave," and "demographic cliff." Why?',
      type: 'mcq', difficulty: 'M',
      choices: [
        'They are outdated slang',
        'They associate aging with catastrophe and disaster; demographic change can be described factually',
        'They are too technical for general audiences',
        'They only apply to certain countries'
      ],
      correct: 1,
      explanation: 'These metaphors frame an aging population as a natural disaster bearing down on society. The guide says: "These terms associate aging with catastrophe and disaster. We can describe demographic change factually."'
    },
    {
      q: 'What is the Disrupt Aging Collection, and who created it?',
      type: 'mcq', difficulty: 'E',
      choices: [
        'A podcast series produced by AARP',
        'A collaboration between AARP and Getty Images — thousands of stock photos challenging ageist stereotypes and portraying older adults as vibrant, authentic and active',
        'A film-rating instrument used by the Geena Davis Institute',
        'A style guide published by the Associated Press'
      ],
      correct: 1,
      explanation: 'AARP + Getty Images. Know the three descriptors: vibrant, authentic, active. It matters because stock imagery is the default raw material for almost all media about aging — changing the supply changes the output downstream.'
    },
    {
      q: 'Describe the Geena Davis Institute study design: how many films, what year, which countries, and what instrument was used?',
      type: 'short', difficulty: 'M',
      correct: ['30 films 2019 US UK France Germany Ageless Test', '30 top grossing films 2019, ageless test'],
      explanation: 'Geena Davis set up the Institute on Gender in Media (GDIGM) and conducted a global study on 30 TOP-GROSSING FILMS in 2019 from the US, UK, FRANCE and GERMANY, employing THE AGELESS TEST. The findings were published as "Frail, frumpy and forgotten: A report on the movie roles of women of age."'
    },
    {
      q: 'What must a film contain to pass The Ageless Test?',
      type: 'mcq', difficulty: 'M',
      choices: [
        'Any female character over the age of 50',
        'A non-stereotypical female character age 50+ who is essential to the plot and presented in human ways',
        'Two women who speak to each other about something other than a man',
        'An older adult in a leading role'
      ],
      correct: 1,
      explanation: 'A non-stereotypical female character age 50+ — and per her annotations, that character must be ESSENTIAL TO THE PLOT and PRESENTED IN HUMAN WAYS, i.e., a central character rather than a passive, waiting one. Option C is the Bechdel Test, on which the Ageless Test is modeled.'
    },
    {
      q: 'In "Frail, Frumpy and Forgotten," what percentage of females aged 50+ in the studied films had leading roles?',
      type: 'mcq', difficulty: 'M',
      choices: ['25%', '12%', '5%', '0%'],
      correct: 3,
      explanation: '0% — the most striking number on the slide. Separately, only 1 in 4 films (25%) passed the Ageless Test at all. Do not confuse those two figures: 25% is the pass rate for films; 0% is the leading-role rate for women 50+.'
    },
    {
      q: 'Compared with male characters 50+, female characters 50+ were SEVEN times more likely to be depicted as:',
      type: 'mcq', difficulty: 'H',
      choices: ['Frumpy', 'Homebound', '"Senile"', 'Unattractive'],
      correct: 1,
      explanation: 'HOMEBOUND is the 7× outlier and the largest multiplier. The 4× group is "senile," feeble, and frumpy; unattractive is 2×. Memory hook: 7 homebound · three 4s · 2 unattractive.'
    },
    {
      q: 'What proportion of characters 50+ were depicted with at least one stereotype, and how many stereotypes were presented on average?',
      type: 'mcq', difficulty: 'M',
      choices: [
        '32.8% with at least one; one on average',
        '56.9% with at least one; two on average',
        '25% with at least one; three on average',
        '75% with at least one; two on average'
      ],
      correct: 1,
      explanation: 'Over half — 56.9% — of characters 50+ were depicted with at least one stereotype, with TWO stereotypes presented on average. The two most common were both mental stereotypes: stubborn (32.8%) and cranky (31.9%).'
    },
    {
      q: 'The BAFTA data show the average age of female leading TV actress nominees fell from 52 to 32 over 21 years, while male nominees fell only from 48 to 45. What does this comparison demonstrate?',
      type: 'mcq', difficulty: 'H',
      choices: [
        'Both genders face equal ageism in the industry',
        'Gendered ageism — the industry\'s window of viability is narrowing sharply for women (a 20-year drop) while holding roughly steady for men (a 3-year drop)',
        'Television is becoming more youth-oriented for everyone at the same rate',
        'Older actors are declining nominations'
      ],
      correct: 1,
      explanation: 'A 20-year decline for women against a 3-year decline for men is the quantitative signature of gendered ageism. Your annotation: "women decreasing in age for nominees, much faster than males." It is the same asymmetry as the news-anchor pattern (older men paired with younger women) and the 0% leading-roles finding.'
    },
    {
      q: 'The "Acting Your Age" campaign (2022) involved more than 100 British actors and public figures signing an open letter about ageism against women older than what age?',
      type: 'mcq', difficulty: 'M',
      choices: ['Age 40', 'Age 45', 'Age 50', 'Age 60'],
      correct: 1,
      explanation: 'Age 45. The letter called for an end to the entertainment industry\'s "entrenched" ageism against women older than 45. Note the slide follows this with Progress: the 2023 Oscar-winning Best Actor, Best Actress, Best Supporting Actor and Best Supporting Actress were ALL ages 50 and older.'
    },
    {
      q: 'True or False: Describing older adults as "wise and all-knowing" is not a form of ageism, because it is a positive characterization.',
      type: 'tf', difficulty: 'M',
      correct: 1,
      explanation: 'FALSE. This is BENEVOLENT AGEISM. The ASA guide is explicit: older adults are diverse like all other adults and do not have all the answers — "avoid positive stereotypes as well as negative." Any stereotype substitutes a group assumption for the individual, which is precisely what ageism is.'
    },
    {
      q: 'A university writes: "Our seniors are still active and young at heart!" Rewrite this using ASA guidance, and name three specific problems with the original.',
      type: 'short', difficulty: 'H',
      correct: ['seniors still young at heart', 'patronizing our seniors, still, young at heart'],
      explanation: 'Three problems: (1) "our seniors" is patronizing language and "seniors" is on the avoid list — use "older adults" or a specific age range; (2) "still" implies older people do not do the activity — drop it; (3) "young at heart" implies being old is bad. A rewrite following the guide\'s "first person first" principle: "Adults over 65 in our community are active in a range of programs." Note the guide also suggests asking whether categorizing by age is necessary at all.'
    }
  ]
};
