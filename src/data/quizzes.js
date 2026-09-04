// Quiz structure for PSY 395, taken from the syllabus tentative schedule.
// Lectures are grouped under a quiz via each lecture's `quiz` field in src/chapters/.
//
// `ready: true`  → the quiz has lecture content built and appears as a live section.
// `ready: false` → shown greyed-out in the sidebar as a placeholder for future content.
//
// Six quizzes are given; the highest five count. Each quiz is worth 10 points.
// Quizzes + final exam = 36% of the course grade.

export const quizzes = [
  {
    id: 1,
    label: 'Quiz 1',
    date: 'Fri, Sep 4',
    ready: true,
    topics: 'Adult Development · Personality · Ageism & Media',
    focus: [
      'Definitions and perspectives on aging',
      'Ways of measuring age',
      'Major contributors to theories of adult development and personality',
      'Ageism and its different forms'
    ]
  },
  { id: 2, label: 'Quiz 2', date: 'Mon, Sep 21', ready: false, topics: 'Laws, Policies & Efforts · Cognition Changes' },
  { id: 3, label: 'Quiz 3', date: 'Wed, Sep 30', ready: false, topics: 'Creativity, Wisdom & Self-Expression' },
  { id: 4, label: 'Quiz 4', date: 'Mon, Oct 19', ready: false, topics: 'Friendships & Relationships · Mental Health in Older Adulthood' },
  { id: 5, label: 'Quiz 5', date: 'Mon, Oct 26', ready: false, topics: 'Longevity, Health & Functioning' },
  { id: 6, label: 'Quiz 6', date: 'Fri, Oct 30', ready: false, topics: 'Leisure & Retirement · Death & Dying' },
  { id: 'final', label: 'Final Exam', date: 'Thu, Dec 10 · 11 AM', ready: false, topics: 'Cumulative and comprehensive · 100 points' }
];

export const courseInfo = {
  code: 'PSY 395 / 395L',
  name: 'Psychology of Aging with Lab',
  instructor: 'Dr. Lindsey Held',
  term: 'Fall 2026',
  quizFormat:
    'Multiple choice and short answer or essay. Questions evaluate the ability to APPLY the material learned, not just recall it.'
};
