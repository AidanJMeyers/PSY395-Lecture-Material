import React, { useEffect, useState } from 'react';
import { storage } from '../storage';
import CommentBox from './CommentBox.jsx';
import { DifficultyChip, AddedTag } from './Visual.jsx';

/**
 * QuestionItem supports multiple question types:
 * - mcq: standard multiple choice
 * - tf: true/false (correct: 0 = True, 1 = False)
 * - short: free-text short answer, auto-graded by keyword match against q.correct
 * - saq: short-answer / essay practice. Write an answer, reveal the model sample answer
 *        (q.sampleAnswer) and rubric key points (q.keyPoints), then self-grade.
 * - math, diagram, fillblank: kept from the template
 *
 * Optional fields: q.topic (chip), q.added (chip — question draws on content not in the slides).
 * Every question gets a comment box for "review later" notes.
 */
export default function QuestionItem({ storageKey, q, index, onAnswered }) {
  const type = q.type || 'mcq';
  const [selected, setSelected] = useState(null);
  const [freeText, setFreeText] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [correct, setCorrect] = useState(null);
  const [revealed, setRevealed] = useState(false);      // saq only
  const [selfGrade, setSelfGrade] = useState(null);     // saq only: 'full' | 'partial' | 'missed'
  const [checked, setChecked] = useState({});           // saq key-point checklist

  useEffect(() => {
    (async () => {
      const saved = await storage.get(storageKey);
      if (saved && typeof saved === 'object') {
        setSelected(saved.selected ?? null);
        setFreeText(saved.freeText ?? '');
        setSubmitted(!!saved.submitted);
        setCorrect(saved.correct ?? null);
        setRevealed(!!saved.revealed);
        setSelfGrade(saved.selfGrade ?? null);
        setChecked(saved.checked ?? {});
      }
    })();
  }, [storageKey]);

  const gradeShort = (answer, key) => {
    if (Array.isArray(key)) return key.some((k) => gradeShort(answer, k));
    const a = String(answer || '').trim().toLowerCase();
    const k = String(key || '').trim().toLowerCase();
    return a && (a === k || a.includes(k) || k.includes(a));
  };

  const gradeMath = (answer, key, tolerance = 0.01) => {
    const a = parseFloat(String(answer).replace(/[^0-9eE+\-.]/g, ''));
    const k = parseFloat(key);
    if (Number.isNaN(a) || Number.isNaN(k)) return false;
    return Math.abs(a - k) <= Math.abs(k * tolerance);
  };

  const submit = async () => {
    let isCorrect = false;
    if (type === 'mcq' || type === 'diagram' || type === 'tf') {
      if (selected == null) return;
      isCorrect = selected === q.correct;
    } else if (type === 'short' || type === 'fillblank') {
      if (!freeText.trim()) return;
      isCorrect = gradeShort(freeText, q.correct);
    } else if (type === 'math') {
      if (!freeText.trim()) return;
      isCorrect = gradeMath(freeText, q.correct, q.tolerance);
    }
    setSubmitted(true);
    setCorrect(isCorrect);
    await storage.set(storageKey, { selected, freeText, submitted: true, correct: isCorrect });
    onAnswered?.(isCorrect);
  };

  // ---- SAQ flow ----
  const reveal = async () => {
    setRevealed(true);
    await storage.set(storageKey, { freeText, revealed: true, submitted: false, correct: null, checked });
  };

  const toggleCheck = async (i) => {
    const next = { ...checked, [i]: !checked[i] };
    setChecked(next);
    await storage.set(storageKey, { freeText, revealed: true, submitted, correct, selfGrade, checked: next });
  };

  const grade = async (g) => {
    const isCorrect = g === 'full';
    setSelfGrade(g);
    setSubmitted(true);
    setCorrect(isCorrect);
    await storage.set(storageKey, { freeText, revealed: true, submitted: true, correct: isCorrect, selfGrade: g, checked });
    onAnswered?.(isCorrect);
  };

  const reset = async () => {
    setSelected(null);
    setFreeText('');
    setSubmitted(false);
    setCorrect(null);
    setRevealed(false);
    setSelfGrade(null);
    setChecked({});
    await storage.remove(storageKey);
    onAnswered?.(null, true);
  };

  const showMCQ = type === 'mcq' || type === 'diagram' || type === 'tf';
  const showText = type === 'short' || type === 'math' || type === 'fillblank';
  const isSAQ = type === 'saq';
  const choices = type === 'tf' ? ['True', 'False'] : q.choices;

  const verdict = isSAQ
    ? submitted && ({ full: ['Got it ✓', 'bg-emerald-100 text-emerald-700'], partial: ['Partial ~', 'bg-amber-100 text-amber-800'], missed: ['Missed ✗', 'bg-red-100 text-red-700'] }[selfGrade])
    : submitted && (correct ? ['Correct ✓', 'bg-emerald-100 text-emerald-700'] : ['Incorrect ✗', 'bg-red-100 text-red-700']);

  return (
    <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm mb-4 break-inside-avoid">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex-1">
          {(q.topic || isSAQ || q.added) && (
            <div className="flex flex-wrap gap-1.5 mb-1.5">
              {isSAQ && <span className="text-[10px] font-bold uppercase tracking-wider bg-sky-100 text-sky-800 px-1.5 py-0.5 rounded">Short answer</span>}
              {q.topic && <span className="text-[10px] font-semibold bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">{q.topic}</span>}
              {q.added && <AddedTag label="Uses added content" />}
            </div>
          )}
          <div className="font-semibold text-slate-800">
            <span className="text-slate-500 mr-2">Q{index + 1}.</span>{q.q}
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {q.difficulty && <DifficultyChip level={q.difficulty} />}
          {verdict && (
            <span className={`text-xs px-2 py-1 rounded font-semibold whitespace-nowrap ${verdict[1]}`}>{verdict[0]}</span>
          )}
        </div>
      </div>
      {q.visual && <div className="my-3">{q.visual}</div>}

      {showMCQ && (
        <div className="space-y-2">
          {choices.map((choice, i) => {
            const isSelected = selected === i;
            const isCorrectAnswer = submitted && i === q.correct;
            const isWrongSelected = submitted && isSelected && i !== q.correct;
            return (
              <label
                key={i}
                className={`flex items-start gap-3 p-2.5 rounded border cursor-pointer transition ${
                  isCorrectAnswer ? 'border-emerald-400 bg-emerald-50' :
                  isWrongSelected ? 'border-red-400 bg-red-50' :
                  isSelected ? 'border-sky-400 bg-sky-50' :
                  'border-slate-200 hover:bg-slate-50'
                } ${submitted ? 'cursor-default' : ''}`}
              >
                <input
                  type="radio"
                  name={storageKey}
                  disabled={submitted}
                  checked={isSelected}
                  onChange={() => setSelected(i)}
                  className="mt-1 accent-sky-600"
                />
                <div className="text-sm text-slate-800 flex-1">
                  <span className="font-semibold mr-2">{String.fromCharCode(65 + i)}.</span>
                  {choice}
                </div>
              </label>
            );
          })}
        </div>
      )}

      {showText && (
        <div>
          <textarea
            value={freeText}
            onChange={(e) => setFreeText(e.target.value)}
            disabled={submitted}
            placeholder={type === 'math' ? 'Numeric answer (e.g., 42 or 3.14)' : 'Your answer...'}
            rows={type === 'math' || type === 'fillblank' ? 1 : 3}
            className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          {submitted && (
            <div className="mt-2 text-sm text-slate-700">
              <span className="font-semibold">Accepted answer:</span> {Array.isArray(q.correct) ? q.correct.join(' / ') : q.correct}
            </div>
          )}
        </div>
      )}

      {isSAQ && (
        <div>
          <textarea
            value={freeText}
            onChange={(e) => setFreeText(e.target.value)}
            disabled={revealed}
            placeholder="Write your answer as you would on the quiz — then reveal the key and grade yourself."
            rows={5}
            className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-500 disabled:bg-slate-50"
          />
          {revealed && (
            <div className="mt-3 space-y-3">
              <div className="p-3 rounded-md bg-emerald-50 border border-emerald-200">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">Sample answer</div>
                <div className="text-sm text-emerald-950 leading-relaxed whitespace-pre-line">{q.sampleAnswer}</div>
              </div>
              {q.keyPoints?.length > 0 && (
                <div className="p-3 rounded-md bg-slate-50 border border-slate-200">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Key points — tick the ones your answer hit
                  </div>
                  <ul className="space-y-1.5">
                    {q.keyPoints.map((kp, i) => (
                      <li key={i}>
                        <label className="flex items-start gap-2 text-sm text-slate-800 cursor-pointer">
                          <input type="checkbox" checked={!!checked[i]} onChange={() => toggleCheck(i)} className="mt-0.5 w-4 h-4 accent-emerald-600" />
                          <span>{kp}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                  <div className="text-xs text-slate-500 mt-2">
                    {Object.values(checked).filter(Boolean).length}/{q.keyPoints.length} key points covered
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      <div className="mt-3 flex flex-wrap items-center gap-2">
        {isSAQ ? (
          !revealed ? (
            <button
              onClick={reveal}
              className="px-4 py-2 text-sm font-semibold bg-sky-600 text-white rounded hover:bg-sky-700"
            >
              {freeText.trim() ? 'Check my answer' : 'Show answer key'}
            </button>
          ) : (
            <>
              <span className="text-xs text-slate-500 mr-1">Grade yourself:</span>
              {[['full', 'Got it', 'bg-emerald-600 hover:bg-emerald-700'], ['partial', 'Partial', 'bg-amber-500 hover:bg-amber-600'], ['missed', 'Missed it', 'bg-red-600 hover:bg-red-700']].map(([g, label, cls]) => (
                <button
                  key={g}
                  onClick={() => grade(g)}
                  className={`px-3 py-1.5 text-sm font-semibold text-white rounded ${cls} ${selfGrade === g ? 'ring-2 ring-offset-1 ring-slate-400' : ''}`}
                >
                  {label}
                </button>
              ))}
              <button
                onClick={reset}
                className="ml-auto px-3 py-1.5 text-sm font-semibold bg-slate-200 text-slate-700 rounded hover:bg-slate-300"
              >
                Try Again
              </button>
            </>
          )
        ) : !submitted ? (
          <button
            onClick={submit}
            disabled={showMCQ ? selected == null : !freeText.trim()}
            className="px-4 py-2 text-sm font-semibold bg-sky-600 text-white rounded hover:bg-sky-700 disabled:bg-slate-300 disabled:cursor-not-allowed"
          >
            Submit
          </button>
        ) : (
          <button
            onClick={reset}
            className="px-4 py-2 text-sm font-semibold bg-slate-200 text-slate-700 rounded hover:bg-slate-300"
          >
            Try Again
          </button>
        )}
      </div>

      {((!isSAQ && submitted) || (isSAQ && revealed && q.explanation)) && (
        <div className={`mt-3 p-3 rounded-md text-sm leading-relaxed ${!isSAQ && !correct ? 'bg-amber-50 text-amber-900' : 'bg-sky-50 text-sky-950'}`}>
          <div className="font-semibold mb-1">{isSAQ ? 'Why this matters' : 'Explanation'}</div>
          <div>{q.explanation}</div>
        </div>
      )}

      <CommentBox storageKey={storageKey} label="Note" />
    </div>
  );
}
