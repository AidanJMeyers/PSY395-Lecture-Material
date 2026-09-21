// One practice exam per quiz. Each set keeps its answers under its own storage prefix,
// so progress on one quiz never overwrites another.
//
// TO ADD QUIZ 3: create src/data/exam_quiz3.js (same shape as exam_quiz2.js), import it,
// and append { quizId: 3, prefix: 'studyguide:exam3', ... } below.

import { exam, examConfig } from './exam.js';
import { exam2, exam2Config } from './exam_quiz2.js';

export const examSets = [
  { quizId: 1, label: 'Quiz 1', title: 'Quiz 1 Practice Exam', prefix: 'studyguide:exam', questions: exam, config: examConfig },
  { quizId: 2, label: 'Quiz 2', title: 'Quiz 2 Practice Quiz', prefix: 'studyguide:exam2', questions: exam2, config: exam2Config }
];

export const examFor = (quizId) => examSets.find((e) => e.quizId === quizId);
