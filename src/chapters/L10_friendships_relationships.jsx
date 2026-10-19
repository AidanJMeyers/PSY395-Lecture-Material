import React from 'react';
import { Callout, Table, Card, Added } from '../components/Visual.jsx';

const IMG = 'L10/';

export default {
  id: 10,
  quiz: 4,
  lectureNo: 10,
  date: 'Fri, Oct 9 & Wed, Oct 14',
  title: 'Friendships & Relationships',
  subtitle: 'Lecture 10 — Friendship and health, weak ties, grandparenting, marriage, gray divorce, and intimacy in later life',
  sourceNote: 'Student deck “Friendships & Relationships” (20 slides). Several slides are a citation or a figure with no explanation, and one ends mid-sentence — those gaps are filled below from the cited sources.',
  addedLegend: true,

  blocks: [
    {
      id: '10a',
      title: 'Where Do Social Relationships Come From?',
      subtitle: 'The opening slide — and the question mark at the end',
      images: [{ src: IMG + 'L10_s01.jpg', alt: 'Social relationships slide', caption: 'Childhood → adulthood → ?' }],
      content: (
        <>
          <p>The slide traces where friendships are formed across life:</p>
          <Table
            headers={['Life stage', 'Where friendships form']}
            rows={[
              ['Childhood / adolescence', 'School, classroom, after-care programs, sports, dance, etc.'],
              ['Adulthood', 'Work, gym, etc.'],
              [<strong key="q">Older adulthood</strong>, <strong key="q2">?</strong>]
            ]}
          />
          <Callout kind="tip" title="The point of the question mark">
            Every earlier source of friendship is an <strong>institution you are enrolled in</strong> — school, a team,
            a workplace. Those provide repeated, unplanned contact with the same people, which is how friendships
            form. In later life, retirement and reduced mobility remove them, and nothing automatically replaces
            them. That is the structural problem the whole lecture is responding to.
          </Callout>
          <Added title="Why institutions matter for friendship">
            Sociologists generally argue friendship needs three ingredients: <strong>repeated unplanned
            interaction</strong>, <strong>physical proximity</strong>, and <strong>a setting that encourages people to
            let their guard down</strong>. Schools and workplaces supply all three for free. After retirement an older
            adult usually has to <em>deliberately construct</em> what used to happen automatically — which is why
            senior centers, faith communities, volunteering, classes and programs like the one at Westminster matter
            so much.
          </Added>
        </>
      )
    },
    {
      id: '10b',
      title: 'Friendships: Quantity Declines, Quality Persists',
      subtitle: 'The confidant effect — and why family did not show the same benefit',
      images: [{ src: IMG + 'L10_s02.jpg', alt: 'Friendships slide with three cited benefits', caption: 'Powdthavee 2008 · E. D. Hall et al. 2020 · Sharifian et al. 2020' }],
      content: (
        <>
          <Callout kind="info" title="The headline">
            <strong>Quantity of social networks declines, but quality persists</strong> — explained by
            <strong> Socioemotional Selectivity Theory</strong> (Lecture 1): as time feels limited, people prune their
            networks to the most emotionally meaningful relationships. A smaller network is not a failing network.
          </Callout>
          <p>
            Having friends in older adulthood — <strong>especially having a confidant</strong> — positively impacts:
          </p>
          <Table
            headers={['Outcome', 'Citation']}
            rows={[
              ['Life satisfaction', 'Powdthavee (2008)'],
              ['Mental health', 'E. D. Hall et al. (2020)'],
              ['Episodic memory preservation', 'Sharifian et al. (2020)']
            ]}
          />
          <Callout kind="danger" title="Her discussion question">
            <strong>"The same was not found when assessing relationships with family members. Why?"</strong>
          </Callout>
          <Added title="Answering the family question">
            <p>The usual explanations, any of which would earn credit:</p>
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>Friendships are chosen; family is not.</strong> You select friends for compatibility and can leave relationships that stop working. Family ties are obligatory and persist regardless of quality.</li>
              <li><strong>Friendship is voluntary and reciprocal</strong>, so time with a friend signals being valued for who you are rather than out of duty.</li>
              <li><strong>Family relationships carry obligation and conflict</strong> — caregiving demands, old grievances, financial entanglement, and worry about being a burden — which can offset the benefits.</li>
              <li><strong>Friends are usually age peers</strong>, so they share the same cohort experiences and current challenges (Lecture 1: cohort).</li>
              <li><strong>SST implication:</strong> because older adults prune deliberately, the friends who remain were actively chosen for emotional reward — a selected, high-quality group.</li>
            </ul>
            <p>
              The <strong>episodic memory</strong> finding is worth flagging: episodic memory is the memory type that
              declines with age (Lecture 6), so friendship is being linked to protection against a specific cognitive
              vulnerability — which fits the "remaining socially active" protective factor in Lecture 7.
            </p>
          </Added>
        </>
      )
    },
    {
      id: '10c',
      title: 'Friendships & Health',
      subtitle: 'The mortality finding and the two protective mechanisms',
      images: [{ src: IMG + 'L10_s03.jpg', alt: 'Friendships and health slide', caption: 'Holt-Lunstad et al. 2010 · Holt-Lunstad et al. 2007 · Kamarck et al. 1990' }],
      content: (
        <>
          <Callout kind="danger" title="The headline statistic">
            Research has tied having <strong>no friends or poor-quality friendships to 2× premature death risk</strong>
            (<strong>Holt-Lunstad et al., 2010</strong>) — based on <strong>308,849 participants</strong>.
          </Callout>
          <p><strong>Our friendships are protective:</strong></p>
          <Table
            headers={['Protective effect', 'Citation']}
            rows={[
              ['Lower blood pressure when talking to a friend', 'Holt-Lunstad et al. (2007)'],
              ['Less heart rate reactivity with a friend present while completing a tough task', 'Kamarck et al. (1990)']
            ]}
          />
          <Callout kind="tip" title="Note the structure of the evidence">
            The slide pairs a <strong>population-level outcome</strong> (mortality across 308,849 people) with two
            <strong> physiological mechanisms</strong> (blood pressure, heart rate reactivity). That is a strong answer
            structure: social connection is not just pleasant — it measurably changes cardiovascular stress responses,
            which plausibly explains the mortality difference.
          </Callout>
          <Added title="Context for the numbers">
            <p>
              Holt-Lunstad and colleagues’ 2010 paper was a <strong>meta-analysis</strong> — it pooled 148 studies
              covering those 308,849 people rather than running one study. Its widely cited conclusion is that strong
              social relationships raise the odds of survival by roughly 50%, an effect comparable to quitting smoking
              and larger than that of obesity or physical inactivity.
            </p>
            <p>
              The Kamarck finding describes <strong>social buffering</strong>: the presence of a supportive friend
              during a stressful task dampens the cardiovascular stress response. Chronic stress reactivity contributes
              to hypertension and cardiovascular disease, which are themselves dementia risk factors (Lecture 7) — so
              friendship, heart health and brain health form one chain.
            </p>
          </Added>
        </>
      )
    },
    {
      id: '10d',
      title: 'Friendship Norms: The Violation Scenarios Study',
      subtitle: 'Her seven scenarios and the results table, explained',
      images: [
        { src: IMG + 'L10_s04.jpg', alt: 'Seven hypothetical friendship violation scenarios', caption: 'The seven vignettes' },
        { src: IMG + 'L10_s05.jpg', alt: 'Means for appropriateness of a friend’s behavior table', caption: 'Results by respondent gender, friend’s gender, and age' }
      ],
      content: (
        <>
          <p>Participants rated how <strong>appropriate</strong> a friend’s behavior was across seven scenarios:</p>
          <Table
            headers={['#', 'Scenario', 'The friendship rule being tested']}
            rows={[
              ['1', 'Tells secret — told someone else something you shared in confidence', 'Confidentiality / trust'],
              ['2', 'Cancels plans for a date — cancels your movie plans for his girlfriend', 'Prioritizing the friendship'],
              ['3', 'Asks to stay over — needs a place for two days while his place is painted', 'Imposition / help-seeking'],
              ['4', 'Surprise visit — stops by without calling while you have guests', 'Boundaries / notice'],
              ['5', 'Kiss on cheek — greets you with a big kiss after a long time', 'Physical affection'],
              ['6', 'Won’t confide — clearly upset for weeks but says "nothing" is wrong', 'Self-disclosure / reciprocity'],
              ['7', 'Didn’t stand up — failed to defend you when someone criticized you', 'Loyalty / defense']
            ]}
          />

          <Added title="What study this is, and how to read the table" source="Felmlee & Muraco (2009), “Gender and Friendship Norms Among Older Adults,” Research on Aging 31(3), 318–344">
            <p>
              The table comes from <strong>Felmlee &amp; Muraco (2009)</strong>, a study of friendship norms among
              older adults. The sample was <strong>135 adults</strong> (62 men, 73 women — the n row at the bottom of
              her table) with a <strong>mean age of about 73</strong>. Behavior was rated on a
              <strong> 7-point appropriateness scale</strong>, so <strong>higher = more appropriate/acceptable</strong>
              and <strong>lower = more of a violation</strong>. The two right-hand columns are F ratios testing whether
              ratings differed by <strong>respondent gender</strong> and by the <strong>gender of the friend</strong> in
              the vignette (* and ** mark significance).
            </p>
          </Added>

          <Table
            headers={['Scenario', 'Male friend (M resp / F resp)', 'Female friend (M resp / F resp)', 'Respondent gender F', 'Friend gender F']}
            rows={[
              [<strong key="a">Told secret</strong>, '2.31 / 1.55', '2.51 / 1.86', <strong key="a1">6.32**</strong>, '0.82'],
              ['Cancels plans', '4.17 / 3.47', '4.30 / 4.11', '2.03', '1.07'],
              ['Asks to stay over', '4.62 / 4.55', '5.18 / 4.97', '0.21', <strong key="c1">2.66*</strong>],
              [<strong key="d">Surprise visit</strong>, '3.79 / 3.17', '3.70 / 3.16', <strong key="d1">5.11**</strong>, '0.01'],
              ['Kiss on cheek', '3.93 / 4.85', '5.03 / 5.08', '2.60', <strong key="e1">5.28**</strong>],
              [<strong key="f">Won’t confide</strong>, '4.31 / 4.77', '3.83 / 4.75', <strong key="f1">7.15**</strong>, '1.16'],
              ['Didn’t stand up', '3.48 / 3.30', '3.60 / 2.94', <strong key="g1">2.94*</strong>, '0.06']
            ]}
          />

          <Callout kind="tip" title="What the numbers actually say">
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>Telling a secret is the worst violation by far</strong> — means of 1.55–2.51, the lowest on the table. Confidentiality is the strongest friendship norm.</li>
              <li><strong>Women judge violations more harshly.</strong> On telling a secret, surprise visits and failing to stand up for you, women gave significantly lower appropriateness ratings than men.</li>
              <li><strong>The friend’s gender matters for physical and intrusive behaviors.</strong> A kiss on the cheek from a <em>male</em> friend was rated least appropriate (3.93 from male respondents), and asking to stay over was rated more acceptable from a female friend.</li>
              <li><strong>Men were more bothered when a friend would not confide</strong> — men rated a female friend’s refusal to confide lowest (3.83).</li>
              <li><strong>Cancelling plans was not significant</strong> on either dimension.</li>
            </ul>
          </Callout>
          <Added title="The age finding (the table’s title mentions age but shows no age column)">
            Felmlee and Muraco reported that friendship norms were <strong>largely shared across a wide age range</strong>
            and across genders — most norms centered on <strong>trust, commitment and respect</strong>, and gender
            effects, while statistically significant in places, were modest. The takeaway is that what people expect
            from a friend is remarkably stable across the lifespan; it is the <em>gendered</em> expectations
            (especially around physical affection and emotional disclosure) that vary.
          </Added>
        </>
      )
    },
    {
      id: '10e',
      title: 'Do Friends Become Alike, or Start Alike?',
      subtitle: 'Her question slide and the study that answers it',
      images: [{ src: IMG + 'L10_s06.jpg', alt: 'Question slide linking to Nature Human Behaviour article', caption: 'The slide poses the question and links to the paper' }],
      content: (
        <>
          <Callout kind="info" title="The question on the slide">
            <strong>"Do we become friends with people who respond to the environment similar to us, or do we come to
            respond to the world similarly to our friends?"</strong> — i.e., <em>selection</em> vs.
            <em> socialization</em>. The slide links to a paper but does not summarize it.
          </Callout>
          <Added title="The study and its answer" source="Shen et al. (2025), Nature Human Behaviour — “neural similarity predicts whether strangers become friends”">
            <p>
              <strong>The answer the paper supports is selection.</strong> Earlier research had shown that friends have
              strikingly similar brain responses when watching the same videos, but those studies were
              <em> cross-sectional</em> — they could not tell whether similarity caused the friendship or resulted from
              it.
            </p>
            <p>
              This study solved that by scanning <strong>incoming MBA students while they were still strangers</strong>,
              recording their neural responses to a set of video clips, and then mapping who actually became friends
              <strong> 2 and 8 months later</strong>. Pre-existing neural similarity <strong>predicted future
              friendship</strong> and changes in social distance — and reportedly did so better than demographics or
              self-reported interests.
            </p>
            <p>
              <strong>Caveats worth knowing:</strong> the imaging sample was small (about 41 people), and the broadest
              friends-vs-non-friends comparison was not significant, so the result is best treated as preliminary. It
              also does not rule out socialization — friends may well converge <em>further</em> after meeting. What the
              design shows is that at least some of the similarity is there <em>before</em> the friendship starts.
            </p>
            <p>
              <strong>Why it fits this lecture:</strong> if friendship depends on finding people who already see the
              world as you do, then the shrinking pool of new contacts in later life (block 10a) matters even more —
              you need enough exposure to new people to find the ones who match.
            </p>
          </Added>
        </>
      )
    },
    {
      id: '10f',
      title: 'Weak Ties / Consequential Strangers',
      subtitle: 'The low-intimacy relationships that matter more than you would expect',
      images: [
        { src: IMG + 'L10_s07.jpg', alt: 'Peripheral ties / weak ties / consequential strangers', caption: 'Definition and examples' },
        { src: IMG + 'L10_s08.jpg', alt: 'Weak ties and happiness slide', caption: 'Sandstrom & Dunn (2014)' }
      ],
      content: (
        <>
          <Callout kind="info" title="Definition (slide)">
            <strong>Peripheral ties / "weak ties" / consequential strangers</strong> are connections that are
            <strong> amicable and cordial</strong> — <strong>"low intimacy."</strong> Examples: <strong>neighbors,
            friends of friends, coworkers, people you see at the gym.</strong>
          </Callout>
          <p>
            Importantly, a weak tie <strong>can progress to close friendship over time</strong>, or it can be
            <strong> the new status of a once-close friendship</strong> — the category is a stage, not a fixed type.
          </p>
          <Callout kind="danger" title="The finding">
            <strong>People with more weak-tie interactions are happier (Sandstrom &amp; Dunn, 2014).</strong> Weak ties
            contribute to our social and emotional well-being.
            <p className="mt-2 italic">
              "You’re in the same place at the same time as the other person, so there’s always something in common."
              — Dr. Sandstrom
            </p>
          </Callout>
          <Added title="Why weak ties matter especially in later life">
            <ul className="list-disc ml-5 space-y-1">
              <li>They are <strong>low-cost and low-risk</strong> — a chat with a neighbor requires no emotional labor or long history.</li>
              <li>They provide <strong>novelty and information</strong> that close ties cannot, because close friends already know what you know.</li>
              <li>They are the <strong>raw material of new close friendships</strong> — the pipeline for replacing ties lost to death, relocation or declining health.</li>
              <li>They fill the gap left when school and work disappear (block 10a), which is why a neighborhood, a regular class or a coffee shop can matter so much to an older adult living alone.</li>
            </ul>
            <p>
              Note the tension with <strong>socioemotional selectivity theory</strong>: SST says older adults prune
              peripheral contacts to focus on close ones. This literature says those peripheral ties still carry
              real well-being value — a nuance worth raising in a short answer.
            </p>
          </Added>
        </>
      )
    },
    {
      id: '10g',
      title: 'Family Social Roles: Grandparenting',
      subtitle: 'The slide’s poll findings are missing — filled in here',
      images: [
        { src: IMG + 'L10_s09.jpg', alt: 'Family social roles slide with grandparent statistics', caption: 'The slide ends at "and found:" with nothing after it' },
        { src: IMG + 'L10_s10.jpg', alt: 'Western grandparent categorization — Neugarten & Weinstein 1964', caption: 'Five grandparent types' }
      ],
      content: (
        <>
          <Card title="From the slide">
            <ul className="list-disc ml-5 space-y-1 text-sm">
              <li><strong>63.5 to 67 million grandparents</strong> in the U.S.</li>
              <li><strong>1.5 billion</strong> worldwide.</li>
              <li>The <strong>National Poll on Healthy Aging (University of Michigan, 2024)</strong> surveyed <strong>3,486 adults ages 50–94</strong> and found: <em>[the slide stops here]</em></li>
            </ul>
          </Card>
          <Added title="What that poll actually found" source="University of Michigan National Poll on Healthy Aging, fielded August 2024, released November 2024 (n = 3,486 adults 50–94)">
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>~60%</strong> of adults 50+ have at least one grandchild; <strong>27%</strong> have five or more.</li>
              <li>Adults <strong>over 65</strong> were far more likely to have grandchildren than those in their 50s/early 60s — <strong>76% vs. 46%</strong>.</li>
              <li><strong>Isolation:</strong> <strong>72%</strong> of people with grandchildren say they hardly ever feel isolated, vs. <strong>62%</strong> of those without.</li>
              <li><strong>Mental health:</strong> people <em>without</em> grandchildren were more likely to rate their mental health fair or poor — <strong>13% vs. 9%</strong>.</li>
              <li><strong>Contact frequency matters:</strong> grandparents who see grandchildren daily or nearly daily report less isolation (<strong>78%</strong>) than those who see them every few months or less (<strong>65%</strong>).</li>
              <li><strong>Caregiving:</strong> about <strong>half (49%)</strong> of grandparents provide care for grandchildren under 18 at least once every few months — grandparents are the most common child-care providers in the U.S.</li>
            </ul>
            <p>
              <strong>Important caveat the researchers themselves give:</strong> this is a poll, so these are
              <em> associations, not causal effects</em>. Having grandchildren is correlated with less isolation; it
              has not been shown to cause it.
            </p>
          </Added>

          <p className="mt-4">
            <strong>Neugarten &amp; Weinstein (1964)</strong> categorized grandparents into <strong>5 types</strong>
            (labeled on the slide as <em>Western</em> grandparent categorization):
          </p>
          <Table
            headers={['Type', 'What it looks like']}
            rows={[
              [<strong key="a">Formal grandparent</strong>, 'Clearly separates the grandparent role from the parent role; interested and indulgent but leaves parenting to the parents'],
              [<strong key="b">Fun-seeker</strong>, 'Informal and playful; the relationship is centered on mutual enjoyment and leisure'],
              [<strong key="c">Surrogate parent</strong>, 'Takes on actual caregiving responsibility, often when parents work or cannot care for the child'],
              [<strong key="d">Reservoir of family wisdom</strong>, 'A dispenser of skills, resources and family knowledge; authority flows from the grandparent'],
              [<strong key="e">Distant figure</strong>, 'Benevolent but infrequent contact — appears on holidays and special occasions']
            ]}
          />
          <Callout kind="warn" title="Note the date and the label">
            This typology is from <strong>1964</strong> and the slide explicitly calls it <strong>Western</strong>.
            Both matter: grandparent roles differ substantially across cultures (in many, multigenerational
            co-residence and surrogate parenting are the norm rather than one of five styles), and family structures
            have changed a great deal since 1964. Expect a question about why the label "Western" is there.
          </Callout>
        </>
      )
    },
    {
      id: '10h',
      title: 'Romantic Relationships & Marriage',
      subtitle: 'Marriage as a legal institution — and the happiness data',
      images: [
        { src: IMG + 'L10_s11.jpg', alt: 'Romantic relationships slide', caption: 'Marriage defined as a legally sanctioned union' },
        { src: IMG + 'L10_s12.jpg', alt: 'Two charts on marital status and well-being', caption: 'Life satisfaction by age and marital status; share "thriving" by marital status' }
      ],
      content: (
        <>
          <Callout kind="info" title="From the slide">
            As a social institution, <strong>marriage is defined as a legally sanctioned union.</strong> It carries
            concrete legal and financial benefits:
            <ul className="list-disc ml-5 mt-1">
              <li>Joint income tax returns</li>
              <li>Healthcare and housing benefits</li>
              <li>Entitlement to retirement, death, and health insurance benefits, as well as <strong>the entire portion of the estate when one partner dies</strong></li>
            </ul>
          </Callout>
          <Added title="The two charts (figures with no slide text)">
            <p><strong>Left — "Married people are happier, especially in middle age"</strong> (UK data, Grover &amp; Helliwell, via Washington Post):</p>
            <ul className="list-disc ml-5 space-y-1">
              <li>Self-reported life satisfaction (0–10) is plotted by age for married/partnered vs. unmarried people.</li>
              <li>Both curves are <strong>U-shaped</strong> — satisfaction dips to its lowest around the late 40s/early 50s and rises again after about 60. (This is the same U-shaped curve you saw from the despair side in Lecture 2’s midlife-crisis chart.)</li>
              <li>The married/partnered line is <strong>higher at every age</strong>, and <strong>the gap is widest in midlife</strong> — the dip is far shallower for married people.</li>
            </ul>
            <p className="mt-2"><strong>Right — share of U.S. adults who say they are "thriving," by marital status</strong> (surveys of 795k+ adults, 2009–2023):</p>
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>Married 61%</strong> · <strong>Domestic partnership 48%</strong> · <strong>Never married 45%</strong> · <strong>Divorced 45%</strong>.</li>
              <li>The married line is consistently highest across the whole period, with a sharp dip for all groups around 2020.</li>
            </ul>
            <p>
              <strong>Interpret carefully:</strong> this is correlational. Marriage may provide support, income and
              health monitoring — but happier, healthier and wealthier people are also more likely to marry and stay
              married (a selection effect). Marriage quality matters too; an unhappy marriage does not confer these
              benefits.
            </p>
          </Added>
        </>
      )
    },
    {
      id: '10i',
      title: 'Legal Protections & LGBTQ+ Relationships',
      subtitle: 'What decades without legal recognition meant in practice',
      images: [{ src: IMG + 'L10_s13.jpg', alt: 'Legal protections and LGBTQ+ relationships slide', caption: 'Four historical consequences' }],
      content: (
        <>
          <p>
            <strong>Many older couples lived for decades without legal protections that were afforded to heterosexual
            couples.</strong> Historically, that lack of protection had concrete consequences:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>The ability to <strong>make medical decisions</strong> without power of attorney or an advance directive</li>
            <li><strong>Exclusion from hospital rooms</strong> or being barred from critical health conversations</li>
            <li>Many <strong>Social Security and pension benefits are based on marital status and length of marriage</strong></li>
            <li><strong>Inheritance laws can favor biological relatives</strong> over surviving partners unless proper legal documents have been prepared</li>
          </ul>
          <Callout kind="tip" title="Connect this to Quiz 2">
            Every item is a policy mechanism you already studied. <strong>Social Security survivor benefits</strong> and
            <strong> length-of-marriage rules</strong> come from Lecture 4; <strong>power of attorney and health care
            surrogates</strong> are the "less restrictive alternatives" to guardianship from Lecture 5. The
            <strong> length-of-marriage</strong> point is subtle and important: even after marriage equality, couples
            who could not legally marry until later in life may not meet duration requirements for some benefits.
          </Callout>
          <Added title="Why this belongs in a relationships lecture">
            It shows that a romantic relationship’s <em>legal</em> status determines access to healthcare, housing,
            income and inheritance in later life — so for this cohort of older adults, relationship history and policy
            history are inseparable. It is also an instance of <strong>intersectionality</strong> from Lecture 3:
            being both older and LGBTQ+ compounds disadvantage (multiple jeopardy), and many in this cohort are also
            less likely to have adult children to serve as caregivers or guardians.
          </Added>
        </>
      )
    },
    {
      id: '10j',
      title: 'Living Apart Together (LAT)',
      subtitle: 'Committed partners who keep separate homes',
      images: [{ src: IMG + 'L10_s14.jpg', alt: 'Living apart together slide', caption: 'LAT definition and discussion prompts' }],
      content: (
        <>
          <Callout kind="info" title="Definition (slide)">
            <strong>LAT — committed romantic partners living in separate residences.</strong>
            <ul className="list-disc ml-5 mt-1">
              <li><strong>3.89 million married Americans</strong></li>
              <li>Couples who meet later in life and decide against living together <strong>can experience mental health benefits</strong>.</li>
            </ul>
          </Callout>
          <p className="italic text-slate-600">
            Her discussion prompts: how might this work for different age ranges (20–30, 40–50, 65–75)? What may be
            unique challenges or helpful contexts in these ranges? <strong>Consider diverging care needs.</strong>
          </p>
          <Added title="Working through her discussion prompt">
            <Table
              headers={['Age range', 'Why LAT happens', 'Challenges']}
              rows={[
                ['20–30', 'Career mobility, school, cost of housing, not ready to merge lives', 'Often seen as a temporary stage rather than a choice; financial strain of two residences'],
                ['40–50', 'Children from prior relationships, established careers and homes, protecting kids from disruption', 'Coordinating blended families; others may read it as a lack of commitment'],
                ['65–75', 'Protecting independence, keeping a long-held home, preserving an estate for children, avoiding remarriage penalties for pensions or Social Security, and avoiding becoming a full-time caregiver', 'Diverging care needs — if one partner’s health declines, the other has no legal standing and living apart complicates caregiving']
              ]}
            />
            <p>
              <strong>Her "diverging care needs" hint is the key for the older range.</strong> LAT preserves autonomy,
              but it collides with illness: a LAT partner may not be able to make medical decisions, may be excluded
              from hospital conversations, and may face the same problems listed in block 10i — unless they prepare a
              power of attorney or health care surrogate. The mental-health benefit and the legal vulnerability are two
              sides of the same arrangement.
            </p>
          </Added>
        </>
      )
    },
    {
      id: '10k',
      title: 'Gray Divorce',
      subtitle: 'Divorce in older adulthood and why it is rising',
      images: [{ src: IMG + 'L10_s15.jpg', alt: 'Divorce in older adulthood slide with "On the Rise" chart', caption: 'Chart source: “The Gray Divorce Revolution,” Brown & Lin, Bowling Green State University' }],
      content: (
        <>
          <Card title="From the slide">
            <ul className="list-disc ml-5 space-y-1 text-sm">
              <li><strong>Gray divorce</strong> has become increasingly common — driven by <strong>greater acceptability of divorce and longer life expectancy</strong>.</li>
              <li><strong>Major life transitions can unmask incompatibilities:</strong> the <strong>empty nest</strong> and <strong>retirement</strong>.</li>
              <li><strong>Second marriages have a greater likelihood of divorce than first marriages</strong> — <strong>"divorce proneness."</strong></li>
            </ul>
          </Card>
          <Callout kind="tip" title="The chart">
            "On the Rise" plots the number of divorces per year among U.S. adults <strong>ages 50+</strong>: roughly
            <strong> 200,000 in 1990</strong>, about <strong>600,000 in 2009</strong>, and a projected
            <strong> 800,000 by 2030</strong> — roughly a quadrupling over four decades.
          </Callout>
          <Added title="Unpacking the mechanisms">
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>Why transitions unmask incompatibility:</strong> children and work supply shared projects and structure. When the last child leaves or both partners retire, a couple suddenly faces far more unstructured time together and fewer shared tasks — and a marriage sustained by logistics rather than companionship becomes visible as such.</li>
              <li><strong>Longer life expectancy</strong> changes the arithmetic: at 60, an unhappy marriage may still have 25+ years to run (Lecture 1).</li>
              <li><strong>"Divorce proneness"</strong> describes the finding that people who have divorced once are more likely to divorce again — plausibly because divorce is already a known, acceptable option to them, and because remarriages often carry added complexity (stepchildren, merged finances).</li>
              <li><strong>Consequences skew by gender:</strong> gray divorce tends to hit women harder financially (lower lifetime earnings and pension accrual) and men harder socially (men are more likely to have relied on a spouse to maintain social ties — which loops back to block 10b).</li>
            </ul>
          </Added>
        </>
      )
    },
    {
      id: '10l',
      title: 'Dating in Older Adulthood',
      subtitle: 'Two in-class video slides',
      images: [
        { src: IMG + 'L10_s16.jpg', alt: 'Dating in older adulthood video still', caption: 'In-class video (ABC Localish)' },
        { src: IMG + 'L10_s18.jpg', alt: 'Video still: “It’s different now”', caption: 'In-class video still — “IT’S DIFFERENT NOW…”' }
      ],
      content: (
        <>
          <p>
            Two video slides with no accompanying text. They sit between gray divorce and the physical-changes slide,
            so the arc is: relationships end → people re-enter dating → what is physically and socially different.
          </p>
          <Added title="What typically changes about dating in later life">
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>A different goal set:</strong> companionship, shared activity and emotional closeness often outrank building a household or raising children — consistent with socioemotional selectivity theory.</li>
              <li><strong>Online dating is now common</strong> among older adults, and is often how people meet once work and school are gone (block 10a) — which also raises exposure to <strong>romance scams</strong>, a real risk for this age group (your Elder Scams Infographic assignment).</li>
              <li><strong>Practical considerations are front-loaded:</strong> existing adult children, estates and inheritance, caregiving obligations, and whether to marry at all given pension and Social Security consequences — which is exactly why LAT (block 10j) appeals to this group.</li>
              <li><strong>Health and intimacy</strong> are negotiated earlier and more openly than in younger dating (blocks 10m–10n).</li>
            </ul>
            <p className="text-xs text-slate-600">
              I could not identify the specific clips, so this is general context rather than a summary of what she
              showed — add a note if you remember the content.
            </p>
          </Added>
        </>
      )
    },
    {
      id: '10m',
      title: 'Physical Changes Affecting Intimacy',
      subtitle: 'Both the slide’s point and its framing',
      images: [{ src: IMG + 'L10_s17.jpg', alt: 'Physical changes affecting intimacy slide', caption: 'Men and women' }],
      content: (
        <>
          <div className="grid md:grid-cols-2 gap-3 my-3">
            <div className="border-2 border-sky-300 bg-sky-50 rounded-lg p-3">
              <div className="font-bold text-sky-900">Men</div>
              <div className="text-sm text-sky-950 mt-1">
                <strong>Erectile dysfunction (ED) is common and is influenced by many physical health conditions, not
                simply psychological factors.</strong>
                <div className="mt-1"><strong>Contributing factors:</strong> cardiovascular disease, Type 2 diabetes, high blood pressure, high cholesterol, sleep disorders, prostate conditions.</div>
                <div className="mt-1"><strong>Treatments:</strong> medications, lifestyle interventions, and in some, HRT.</div>
              </div>
            </div>
            <div className="border-2 border-rose-300 bg-rose-50 rounded-lg p-3">
              <div className="font-bold text-rose-900">Women</div>
              <div className="text-sm text-rose-950 mt-1">
                <strong>Menopause can lead to vaginal dryness, pain during intercourse, and changes in libido.</strong>
                <div className="mt-1">These changes can affect comfort and satisfaction but are <strong>often manageable with medical and behavioral interventions.</strong></div>
              </div>
            </div>
          </div>
          <Callout kind="tip" title="Notice the framing — it is the testable part">
            Both halves make the same two moves: the changes are <strong>physiological, not just psychological</strong>,
            and they are <strong>manageable</strong>. That is a deliberate push against the ageist assumption that
            sexuality simply ends with age (Lecture 3 — recall that only 9.5% of film characters 50+ were shown as
            having a sexual partner).
          </Callout>
          <Added title="Why the ED factor list is mostly cardiovascular">
            Erection depends on healthy blood vessels and nerve signaling, so ED is often an <strong>early warning sign
            of cardiovascular disease</strong> — the vascular problems that affect the heart show up there first. That
            is why the listed contributors are the same conditions that appear as dementia risk factors in Lecture 7
            (hypertension, diabetes, cholesterol). One more case of "what is good for the heart is good for everything
            else."
          </Added>
        </>
      )
    },
    {
      id: '10n',
      title: 'Physical Intimacy & Rising STI Rates',
      subtitle: 'Her four reasons, and the study behind them',
      images: [
        { src: IMG + 'L10_s19.jpg', alt: 'Physical intimacy in older adulthood slide', caption: '40% of adults 65–80 are sexually active; STI rates doubled' },
        { src: IMG + 'L10_s20.jpg', alt: 'Chlamydia rate increase by state table', caption: 'CDC surveillance 2010–2019, via HelpAdvisor' }
      ],
      content: (
        <>
          <Callout kind="danger" title="The two statistics">
            <strong>Approximately 40% of adults ages 65–80 are sexually active</strong>, and many express continued
            interest in sex. <strong>AND, STI rates are increasing substantially (doubled in the last decade).</strong>
          </Callout>
          <p>Her four reasons why:</p>
          <Table
            headers={['#', 'Reason', 'What is behind it']}
            rows={[
              ['1', 'Low condom use', 'Pregnancy is no longer a concern after menopause, so the main perceived reason to use condoms disappears'],
              ['2', 'Lack of STI education', 'Sex education was aimed at this cohort decades ago, before HIV, and prevention campaigns target young people'],
              ['3', 'Healthcare providers may not discuss sexual health', 'Providers often assume older patients are not sexually active and do not screen or ask'],
              ['4', 'Unique stage of life considerations', 'Re-entering dating after divorce or widowhood; new partners later in life; congregate living settings']
            ]}
          />
          <Added title="The study she linked under “Lack of STI education”" source="Smith, Bergeron, Goltz, Coffey & Boolani (2020), “Sexually Transmitted Infection Knowledge among Older Adults: Psychometrics and Test–Retest Reliability,” Int. J. Environmental Research and Public Health 17(7), 2462">
            <p>
              The link on reason #2 goes to a study testing whether the <strong>27-item STD Knowledge Questionnaire
              (STD-KQ)</strong>, designed for younger adults, works for older adults. <strong>43 adults aged 65–94</strong>
              (mean age 76) took it twice, about two weeks apart.
            </p>
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>Knowledge was consistently low:</strong> about <strong>11.5 of 27</strong> correct on both administrations. Items on <strong>HPV and HIV</strong> drew the most "don’t know" responses.</li>
              <li>The questionnaire itself was <strong>reliable</strong> for this age group (Cronbach’s α ≈ 0.91; test–retest r = 0.88) — so the low scores reflect a real knowledge gap, not a broken instrument.</li>
              <li>The authors note the tool <strong>omits later-life topics</strong> such as intimacy and consent, and lacks a validated cut-point.</li>
            </ul>
            <p>The same paper supplies evidence for her other reasons, citing CDC data:</p>
            <ul className="list-disc ml-5 space-y-1">
              <li>STIs among U.S. adults 65+ <strong>more than doubled in ten years</strong> — matching her slide.</li>
              <li><strong>Syphilis</strong> (primary & secondary): 91 cases (2007) → <strong>349</strong> (2017).</li>
              <li><strong>Chlamydia</strong>: 809 → <strong>2,178</strong>. <strong>Gonorrhea</strong>: 707 → <strong>2,063</strong>.</li>
              <li>On condom use, it cites Schick et al. (2010): <strong>fewer than one quarter</strong> of Americans over 50 reported using condoms.</li>
              <li>On providers: older adults report <strong>few opportunities to discuss sexual health</strong> with their providers.</li>
            </ul>
          </Added>
          <Callout kind="info" title="The state-level figure">
            The final slide shows the <strong>10 states with the highest rate increase of chlamydia in adults 55+ from
            2010 to 2019</strong> (CDC surveillance data): Rhode Island <strong>+525.3%</strong>, Oklahoma +518.8%,
            Virginia +386.1%, West Virginia +353.3%, Missouri +337.2%, Pennsylvania +332.1%,
            <strong> Florida +313.4%</strong> (7th), South Dakota +291.2%, Idaho +286.5%, Washington +282.2%. Her note
            adds: <strong>current aggregate stats put D.C., Nevada, and North Dakota highest for STI infections among
            older adults.</strong>
          </Callout>
          <Callout kind="tip" title="Read the percentages correctly">
            These are <strong>percent increases, not prevalence</strong> — a state can top the list by starting from a
            very small number. The point of the figure is the <em>trend</em>, not that Rhode Island has the most cases.
            Florida’s appearance at #7 is worth remembering given the state’s older population (Lecture 5).
          </Callout>
        </>
      )
    }
  ],

  keyReview: {
    vocab: [
      { term: 'Quantity vs. quality', tag: 'core', def: 'Quantity of social networks declines but quality persists — explained by Socioemotional Selectivity Theory.' },
      { term: 'Confidant', tag: 'core', def: 'Having a confidant in older adulthood positively impacts life satisfaction (Powdthavee, 2008), mental health (E. D. Hall et al., 2020), and episodic memory preservation (Sharifian et al., 2020). The same was NOT found for family relationships.' },
      { term: 'Holt-Lunstad et al. (2010)', tag: 'mortality', tagColor: 'red', def: 'No friends or poor-quality friendships tied to 2× premature death risk; 308,849 participants.' },
      { term: 'Friendship as protective', tag: 'mechanism', tagColor: 'green', def: 'Lower blood pressure when talking to a friend (Holt-Lunstad et al., 2007); less heart rate reactivity with a friend during a tough task (Kamarck et al., 1990).' },
      { term: 'Friendship violation scenarios', tag: 'study', tagColor: 'violet', def: 'Seven vignettes: tells secret, cancels plans for a date, asks to stay over, surprise visit, kiss on cheek, won’t confide, didn’t stand up. Rated for appropriateness (7-point scale; higher = more appropriate).' },
      { term: 'Felmlee & Muraco (2009)', tag: 'added', tagColor: 'violet', added: true, def: 'The source of the table: 135 older adults (62 men, 73 women), mean age ~73. Telling a secret was the worst violation; women judged violations more harshly; friend’s gender mattered for kiss on cheek and asking to stay over; norms largely shared across ages, centered on trust, commitment and respect.' },
      { term: 'Weak ties / consequential strangers', tag: 'core', def: 'Peripheral ties that are amicable and cordial — "low intimacy": neighbors, friends of friends, coworkers, people at the gym. Can progress to close friendship, or be the new status of a once-close friendship.' },
      { term: 'Sandstrom & Dunn (2014)', tag: 'study', tagColor: 'sky', def: 'People with more weak-tie interactions are happier; weak ties contribute to social and emotional well-being.' },
      { term: 'Grandparent statistics', tag: 'numbers', tagColor: 'amber', def: '63.5–67 million grandparents in the U.S.; 1.5 billion worldwide. National Poll on Healthy Aging (U. Michigan, 2024) surveyed 3,486 adults ages 50–94.' },
      { term: 'Neugarten & Weinstein (1964)', tag: '5 types', tagColor: 'green', def: 'Western grandparent categorization: formal grandparent, fun-seeker, surrogate parent, reservoir of family wisdom, distant figure.' },
      { term: 'Marriage', tag: 'core', def: 'As a social institution, a legally sanctioned union: joint income tax returns, healthcare and housing benefits, retirement/death/health insurance benefits, and the entire portion of the estate when one partner dies.' },
      { term: 'LAT (Living Apart Together)', tag: 'core', def: 'Committed romantic partners living in separate residences; 3.89 million married Americans. Couples who meet later in life and decide against living together can experience mental health benefits.' },
      { term: 'Gray divorce', tag: 'core', def: 'Divorce in older adulthood — increasingly common due to greater acceptability of divorce and longer life expectancy. Empty nest and retirement can unmask incompatibilities. Second marriages are more divorce-prone ("divorce proneness").' },
      { term: 'Physical intimacy statistics', tag: 'numbers', tagColor: 'amber', def: '~40% of adults 65–80 are sexually active; STI rates have doubled in the last decade.' },
      { term: 'Four reasons STIs are rising', tag: 'core', def: '1) Low condom use 2) Lack of STI education 3) Healthcare providers may not discuss sexual health 4) Unique stage of life considerations.' }
    ],
    laws: [
      { name: 'Why friendships and not family?', added: true, desc: 'Friendships are chosen and voluntary; family ties are obligatory and can carry conflict and caregiving burden. Friends are usually age peers, and under SST the friends who remain were actively selected for emotional reward.' },
      { name: 'Shen et al. (2025) — selection vs. socialization', added: true, desc: 'Scanned MBA students as strangers, then tracked friendships at 2 and 8 months. Pre-existing neural similarity predicted future friendship — supporting SELECTION. Caveat: small imaging sample (~41), preliminary.' },
      { name: 'U. Michigan poll findings (2024)', added: true, desc: '~60% of adults 50+ have a grandchild; 76% of those 65+ vs. 46% of 50s–early 60s. 72% with grandchildren hardly ever feel isolated vs. 62% without. 49% of grandparents provide care at least every few months. Associations, not causation.' },
      { name: 'LGBTQ+ legal consequences', desc: 'Medical decisions without POA/advance directive; exclusion from hospital rooms; SS and pension benefits based on marital status and length of marriage; inheritance laws favoring biological relatives.' },
      { name: 'Smith et al. (2020) STI knowledge study', added: true, desc: '43 adults 65–94 scored ~11.5/27 on the STD Knowledge Questionnaire; HPV and HIV items drew the most "don’t know." CDC: STIs in 65+ more than doubled in ten years; syphilis 91→349, chlamydia 809→2,178, gonorrhea 707→2,063 (2007–2017).' }
    ],
    methods: [
      { name: 'Reading the friendship-norms table', expand: '7-point appropriateness', added: true, desc: 'Higher = more appropriate. Lowest means = worst violation (telling a secret, 1.55–2.51). Two F-ratio columns test respondent gender and friend’s gender.' },
      { name: 'The five grandparent types', expand: 'Neugarten & Weinstein 1964', desc: 'Formal · fun-seeker · surrogate parent · reservoir of family wisdom · distant figure. Labeled "Western" — roles differ by culture, and the typology is from 1964.' },
      { name: 'Marital status & thriving', expand: 'Chart numbers', added: true, desc: 'Married 61% · domestic partnership 48% · never married 45% · divorced 45%. Life satisfaction is U-shaped by age for both married and unmarried, with the married line higher at every age and the gap widest in midlife.' },
      { name: 'Gray divorce trend', expand: 'Brown & Lin chart', desc: 'Divorces per year among adults 50+: ~200k (1990) → ~600k (2009) → ~800k projected (2030).' }
    ]
  },

  questions: [
    { q: 'Which statement best captures what happens to social networks in older adulthood?', type: 'mcq', difficulty: 'E',
      choices: ['Both quantity and quality decline', 'Quantity declines but quality persists', 'Quantity increases while quality declines', 'Neither changes'],
      correct: 1,
      explanation: 'Quantity of social networks declines but quality persists — explained by Socioemotional Selectivity Theory, which says people prune toward emotionally meaningful ties as time feels limited.' },
    { q: 'Having a confidant in older adulthood was linked to all of the following EXCEPT:', type: 'mcq', difficulty: 'M',
      choices: ['Life satisfaction (Powdthavee, 2008)', 'Mental health (E. D. Hall et al., 2020)', 'Episodic memory preservation (Sharifian et al., 2020)', 'Increased household income'],
      correct: 3,
      explanation: 'The three benefits listed are life satisfaction, mental health and episodic memory preservation. Notably, the same benefits were NOT found for relationships with family members.' },
    { q: 'Why might friendships, but not family relationships, show these benefits?', type: 'saq', difficulty: 'H', added: true,
      sampleAnswer: 'The most common explanation is that friendships are chosen while family relationships are not. People select friends for compatibility and can exit friendships that stop working, so the friends who remain in later life were actively chosen because the relationship is rewarding. Family ties are obligatory and persist regardless of quality, and they often carry conflict, caregiving demands, financial entanglement, and worry about being a burden, which can offset the benefits. Friends are also usually age peers who share the same cohort experiences and current life challenges. Socioemotional selectivity theory fits this: as older adults prune their networks, the remaining friendships are a deliberately selected, high-quality group.',
      keyPoints: ['Friendships are chosen/voluntary; family is obligatory', 'Friends can be exited if unrewarding; family cannot', 'Family carries conflict, caregiving burden, obligation', 'Friends are typically age peers / same cohort', 'Links to SST and deliberate pruning'],
      explanation: 'She posed this as an open question on the slide, so any well-reasoned version of these points should earn credit.' },
    { q: 'Holt-Lunstad et al. (2010) found that having no friends or poor-quality friendships is tied to what, and in how large a sample?', type: 'mcq', difficulty: 'M',
      choices: ['1.5× premature death risk; 30,849 participants', '2× premature death risk; 308,849 participants', '3× premature death risk; 108,000 participants', 'No change in mortality; 308,849 participants'],
      correct: 1,
      explanation: '2× premature death risk across 308,849 participants. (Added context: it was a meta-analysis pooling 148 studies, with an effect comparable to smoking cessation.)' },
    { q: 'Which two physiological findings were given as evidence that friendships are protective?', type: 'mcq', difficulty: 'M',
      choices: [
        'Lower cortisol and higher dopamine',
        'Lower blood pressure when talking to a friend; less heart rate reactivity with a friend during a tough task',
        'Improved sleep quality and lower BMI',
        'Faster reaction time and better recall'],
      correct: 1,
      explanation: 'Holt-Lunstad et al. (2007) for blood pressure and Kamarck et al. (1990) for heart rate reactivity — the "social buffering" of cardiovascular stress responses.' },
    { q: 'In the friendship-norms table, which scenario received the LOWEST appropriateness ratings — meaning it was seen as the worst violation?', type: 'mcq', difficulty: 'M',
      choices: ['Cancels plans for a date', 'Asks to stay over', 'Tells secret', 'Kiss on cheek'],
      correct: 2,
      explanation: 'Telling a secret had means of 1.55–2.51 on the 7-point scale, by far the lowest. Confidentiality is the strongest friendship norm in the data.' },
    { q: 'In that table, women rated which behaviors significantly LESS appropriate than men did?', type: 'mcq', difficulty: 'H', added: true,
      choices: [
        'Kiss on cheek and asking to stay over',
        'Telling a secret, surprise visits, and not standing up for you',
        'Only cancelling plans',
        'None — there were no significant gender effects'],
      correct: 1,
      explanation: 'Significant respondent-gender effects appeared for telling a secret (6.32**), surprise visit (5.11**) and didn’t stand up (2.94*) — women judged these more harshly. The friend’s gender mattered instead for kiss on cheek (5.28**) and asking to stay over (2.66*).' },
    { q: 'Her slide asks whether we become friends with people who already respond to the world like us, or come to respond like our friends. What does the study she linked find?', type: 'mcq', difficulty: 'H', added: true,
      choices: [
        'Friends gradually converge; there is no pre-existing similarity',
        'Pre-existing neural similarity among strangers predicted who became friends months later, supporting selection',
        'Neural similarity is unrelated to friendship',
        'Only demographic similarity predicts friendship'],
      correct: 1,
      explanation: 'Shen et al. (2025, Nature Human Behaviour) scanned MBA students while they were still strangers and tracked friendships at 2 and 8 months. Pre-existing similarity predicted future friendship — selection. Caveat: small imaging sample (~41), so treat as preliminary; it does not rule out further convergence afterward.' },
    { q: 'Define "weak ties"/consequential strangers and explain why they matter.', type: 'saq', difficulty: 'M',
      sampleAnswer: 'Weak ties, also called peripheral ties or consequential strangers, are connections that are amicable and cordial but low in intimacy — neighbors, friends of friends, coworkers, and people you see at the gym. They are not a fixed category: a weak tie can progress into a close friendship over time, or it can be the new status of a friendship that used to be close.\n\nThey matter because people with more weak-tie interactions are happier (Sandstrom & Dunn, 2014), and weak ties contribute to social and emotional well-being. As Dr. Sandstrom put it, "You’re in the same place at the same time as the other person, so there’s always something in common." For older adults specifically, weak ties are low-cost, provide novelty, and are the pool from which new close friendships can form once school and work no longer supply them.',
      keyPoints: ['Amicable and cordial, "low intimacy"', 'Examples: neighbors, friends of friends, coworkers, gym', 'Can become close friendship or be a former close friendship', 'Sandstrom & Dunn (2014): more weak-tie interaction = happier'],
      explanation: 'Definition and citation are on the slides; the "why it matters for older adults" reasoning is added.' },
    { q: 'Name the five grandparent types from Neugarten & Weinstein (1964).', type: 'saq', difficulty: 'M',
      sampleAnswer: 'Neugarten and Weinstein (1964) categorized grandparents into five types: the formal grandparent, who is interested and indulgent but leaves parenting to the parents; the fun-seeker, whose relationship with grandchildren is informal and centered on mutual enjoyment; the surrogate parent, who takes on actual caregiving responsibility; the reservoir of family wisdom, who dispenses skills, resources and family knowledge; and the distant figure, who is benevolent but has infrequent contact, appearing mainly on holidays and special occasions. The slide labels this a Western categorization, and it dates from 1964 — grandparent roles differ substantially across cultures and family structures have changed since.',
      keyPoints: ['Formal grandparent', 'Fun-seeker', 'Surrogate parent', 'Reservoir of family wisdom', 'Distant figure'],
      explanation: 'Names are on the slide; the descriptions and the cultural caveat are added.' },
    { q: 'What is LAT, how many married Americans does it describe, and what did the slide say about its effects?', type: 'mcq', difficulty: 'M',
      choices: [
        'Long-term assisted treatment; 389,000 Americans; improves physical health',
        'Living Apart Together — committed romantic partners living in separate residences; 3.89 million married Americans; couples who meet later in life and decide against living together can experience mental health benefits',
        'Late Adulthood Transition; 3.89 million; predicts divorce',
        'Living Alone Temporarily; 38.9 million; increases isolation'],
      correct: 1,
      explanation: 'LAT = Living Apart Together. Her discussion prompt asked how this plays out at ages 20–30, 40–50 and 65–75, and to "consider diverging care needs" — the key tension for the oldest group.' },
    { q: 'Explain gray divorce: why it is rising, what unmasks incompatibilities, and what "divorce proneness" means.', type: 'saq', difficulty: 'H',
      sampleAnswer: 'Gray divorce refers to divorce in older adulthood, and it has become increasingly common because of greater acceptability of divorce and longer life expectancy — at 60, an unhappy marriage may still have decades left to run. Major life transitions can unmask incompatibilities, specifically the empty nest and retirement: when children leave and both partners stop working, the shared projects and structure that held the marriage together disappear and the couple faces far more unstructured time together. "Divorce proneness" refers to the finding that second marriages have a greater likelihood of divorce than first marriages. The chart on the slide shows divorces among adults 50+ rising from roughly 200,000 per year in 1990 to about 600,000 in 2009, with 800,000 projected by 2030.',
      keyPoints: ['Greater acceptability of divorce + longer life expectancy', 'Empty nest and retirement unmask incompatibilities', 'Second marriages more likely to divorce — "divorce proneness"', 'Bonus: the rising trend from the chart'],
      explanation: 'All four elements are on the slide; the mechanism behind why transitions unmask incompatibility is added.' },
    { q: 'Approximately what percentage of adults ages 65–80 are sexually active, and what has happened to STI rates in this group?', type: 'mcq', difficulty: 'M',
      choices: ['About 15%; rates are falling', 'About 40%; rates have doubled in the last decade', 'About 70%; rates are stable', 'About 40%; rates have halved'],
      correct: 1,
      explanation: 'Approximately 40% of adults 65–80 are sexually active and many express continued interest in sex, while STI rates have doubled over the last decade.' },
    { q: 'Give the four reasons STI rates are rising among older adults, and explain why each contributes.', type: 'saq', difficulty: 'H',
      sampleAnswer: 'The slide gives four reasons. First, low condom use — after menopause pregnancy is no longer a concern, so the main perceived reason to use condoms disappears; one cited study found fewer than a quarter of Americans over 50 reported using condoms. Second, lack of STI education — this cohort received sex education decades ago, before HIV, and prevention campaigns are aimed at young people; a study of adults 65–94 found they answered only about 11.5 of 27 items correctly on an STI knowledge questionnaire, with HPV and HIV drawing the most "don’t know" responses. Third, healthcare providers may not discuss sexual health, often assuming older patients are not sexually active, so screening and conversation do not happen. Fourth, unique stage of life considerations, such as re-entering dating after divorce or widowhood, new partners later in life, and congregate living settings.',
      keyPoints: ['Low condom use', 'Lack of STI education', 'Providers may not discuss sexual health', 'Unique stage of life considerations', 'Bonus: a supporting statistic for at least one reason'],
      explanation: 'The four reasons are on the slide; the supporting evidence comes from the study she linked (Smith et al., 2020).' },
    { q: 'What do the percentages on the final slide’s state table represent?', type: 'mcq', difficulty: 'H', added: true,
      choices: [
        'The percentage of older adults in each state who have chlamydia',
        'The percent INCREASE in chlamydia rates among adults 55+ from 2010 to 2019',
        'The percentage of STI cases that are chlamydia',
        'The percentage of older adults who use condoms'],
      correct: 1,
      explanation: 'They are percent increases (CDC surveillance 2010–2019) — Rhode Island +525.3% down to Washington +282.2%, with Florida 7th at +313.4%. A state can rank high by starting from a very small base, so the figure shows a trend, not prevalence. Her note adds that D.C., Nevada and North Dakota currently lead in aggregate STI infections among older adults.' },
    { q: 'List three legal consequences older same-sex couples historically faced from lacking marriage recognition.', type: 'saq', difficulty: 'M',
      sampleAnswer: 'First, they could not make medical decisions for a partner without a power of attorney or advance directive. Second, they were excluded from hospital rooms or barred from critical health conversations. Third, many Social Security and pension benefits are based on marital status and length of marriage, so partners were ineligible. Fourth, inheritance laws can favor biological relatives over a surviving partner unless proper legal documents have been prepared. These matter in later life because they determine access to healthcare decisions, income and housing exactly when they are most needed.',
      keyPoints: ['Medical decisions require POA or advance directive', 'Exclusion from hospital rooms / health conversations', 'SS and pension benefits tied to marital status and length of marriage', 'Inheritance favors biological relatives without documents'],
      explanation: 'All four are on the slide. The "length of marriage" point still bites today for couples who could not legally marry until later in life.' }
  ]
};
