// Lecture modules, in course order.
// Each lecture exports: { id, quiz, lectureNo, date, title, subtitle, blocks[], keyReview{}, questions[] }
//
// TO ADD A NEW LECTURE (e.g. for Quiz 2):
//   1. Create src/chapters/L4_<slug>.jsx following the same shape.
//   2. Import it below and add it to the array.
//   3. Set its `quiz` field (e.g. quiz: 2) - the sidebar groups by that automatically.
//   4. Add any exam questions to src/data/exam.js with `quiz: 2`.
//   5. Flip `ready: true` for that quiz in src/data/quizzes.js.
// Nothing else needs to change.

import L1 from '../chapters/L1_adult_development.jsx';
import L2 from '../chapters/L2_personality.jsx';
import L3 from '../chapters/L3_ageism_media.jsx';

export const chapters = [L1, L2, L3];
