// Lecture modules, in course order.
// Each lecture exports: { id, quiz, lectureNo, date, title, subtitle, blocks[], keyReview{}, questions[] }
// Optional: sourceNote (string) and addedLegend (true) to explain "Added — not in slides" boxes.
//
// TO ADD A NEW LECTURE (e.g. for Quiz 3):
//   1. Create src/chapters/L6_<slug>.jsx following the same shape.
//   2. Import it below and add it to the array.
//   3. Set its `quiz` field (e.g. quiz: 3) - the sidebar groups by that automatically.
//   4. Add a practice exam in src/data/exam_quiz3.js and register it in src/data/exams.js.
//   5. Flip `ready: true` (and add `focus`) for that quiz in src/data/quizzes.js.

import L1 from '../chapters/L1_adult_development.jsx';
import L2 from '../chapters/L2_personality.jsx';
import L3 from '../chapters/L3_ageism_media.jsx';
import L4 from '../chapters/L4_national_policy.jsx';
import L5 from '../chapters/L5_state_global_policy.jsx';

export const chapters = [L1, L2, L3, L4, L5];
