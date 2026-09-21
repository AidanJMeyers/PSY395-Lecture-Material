import React, { useEffect, useState } from 'react';
import QuestionItem from './QuestionItem.jsx';
import { AddedTag } from './Visual.jsx';
import { storage } from '../storage';

/**
 * Practice exam for one quiz.
 * - storagePrefix keeps each quiz's answers separate (quiz 1 = 'studyguide:exam',
 *   later quizzes = 'studyguide:exam2', ...).
 * - Two modes: "Take the quiz" (interactive) and "Answer key" (every answer, sample answer
 *   and explanation on one printable page, grouped by topic).
 */
export default function ExamView({ exam, config, storagePrefix = 'studyguide:exam', title = 'Practice Exam', subtitle, focus }) {
  const passThreshold = config?.passThreshold ?? 70;
  const timed = config?.timed ?? false;
  const timeLimitMin = config?.timeLimitMin ?? 60;

  const [mode, setMode] = useState('take');
  const [state, setState] = useState({});
  const [tick, setTick] = useState(0);
  const [timeLeft, setTimeLeft] = useState(timeLimitMin * 60);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => { setMode('take'); }, [storagePrefix]);

  useEffect(() => {
    (async () => {
      const s = {};
      await Promise.all(exam.map(async (_, i) => {
        s[i] = await storage.get(`${storagePrefix}:q${i}`);
      }));
      setState(s);
    })();
  }, [tick, exam, storagePrefix]);

  useEffect(() => {
    if (!timerRunning || !timed) return;
    if (timeLeft <= 0) { setTimerRunning(false); return; }
    const id = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(id);
  }, [timerRunning, timed, timeLeft]);

  const answered = Object.values(state).filter((s) => s && s.submitted);
  const correct = answered.filter((s) => s.correct).length;
  const total = exam.length;
  const done = total > 0 && answered.length === total;
  const runningPct = answered.length ? Math.round((correct / answered.length) * 100) : 0;
  const passed = done && (correct / total) * 100 >= passThreshold;
  const mcqCount = exam.filter((q) => q.type !== 'saq').length;
  const saqCount = total - mcqCount;

  const groupKey = (q) => q.topic || q.chapter || 'Other';
  const byGroup = {};
  exam.forEach((q, i) => {
    const s = state[i];
    if (!s || !s.submitted) return;
    const g = groupKey(q);
    byGroup[g] = byGroup[g] || { correct: 0, total: 0 };
    byGroup[g].total++;
    if (s.correct) byGroup[g].correct++;
  });

  const fmt = (sec) => {
    const m = Math.floor(sec / 60).toString().padStart(2, '0');
    const s = (sec % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  // Group questions by topic for the answer key, preserving original numbering.
  const groups = [];
  exam.forEach((q, i) => {
    const g = groupKey(q);
    let entry = groups.find((x) => x.name === g);
    if (!entry) { entry = { name: g, items: [] }; groups.push(entry); }
    entry.items.push({ q, i });
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <div className="bg-gradient-to-r from-indigo-700 via-sky-700 to-emerald-700 text-white rounded-xl p-6 mb-4 shadow-lg print:bg-none print:text-black print:shadow-none print:border print:border-slate-300">
        <h1 className="text-3xl font-bold">{title}{mode === 'key' ? ' — Answer Key' : ''}</h1>
        <p className="text-indigo-100 mt-1 print:text-slate-600">
          {subtitle ? `${subtitle} · ` : ''}{total} questions ({mcqCount} multiple choice{saqCount ? `, ${saqCount} short answer` : ''})
          {mode === 'take' && ` · Pass: ${passThreshold}%`}
        </p>
        {focus?.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {focus.map((f, i) => (
              <span key={i} className="text-xs bg-white/15 border border-white/25 rounded px-2 py-0.5 print:border-slate-300">{i + 1}. {f}</span>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-6 print:hidden">
        <div className="inline-flex rounded-lg border border-slate-200 bg-white p-1 shadow-sm">
          {[['take', '✍️ Take the quiz'], ['key', '📄 Answer key']].map(([m, label]) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`px-4 py-1.5 text-sm font-semibold rounded-md transition ${mode === m ? 'bg-sky-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
            >
              {label}
            </button>
          ))}
        </div>
        {mode === 'key' && (
          <button onClick={() => window.print()} className="px-4 py-2 text-sm font-semibold bg-white border border-slate-200 rounded-lg shadow-sm hover:bg-slate-50">
            🖨️ Print / save as PDF
          </button>
        )}
        {mode === 'key' && (
          <span className="text-xs text-slate-500">Try the quiz first — the key gives everything away.</span>
        )}
      </div>

      {mode === 'key' ? (
        <div className="space-y-8">
          {groups.map((g) => (
            <section key={g.name}>
              <h2 className="text-lg font-bold text-slate-900 border-b-2 border-slate-200 pb-1 mb-3">{g.name}</h2>
              <div className="space-y-4">
                {g.items.map(({ q, i }) => <KeyItem key={i} q={q} n={i + 1} />)}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <>
          <div className="sticky top-0 md:top-0 z-10 bg-white border border-slate-200 rounded-xl p-4 mb-6 shadow-sm flex flex-wrap gap-4 items-center justify-between">
            <div className="flex gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">{correct}</div>
                <div className="text-xs text-slate-500">Correct</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">{answered.length}/{total}</div>
                <div className="text-xs text-slate-500">Answered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sky-600">{runningPct}%</div>
                <div className="text-xs text-slate-500">Running</div>
              </div>
              {timed && (
                <div className="text-center">
                  <div className={`text-3xl font-bold ${timeLeft < 60 ? 'text-red-600' : 'text-slate-900'}`}>{fmt(timeLeft)}</div>
                  <div className="text-xs text-slate-500">
                    <button onClick={() => setTimerRunning(!timerRunning)} className="underline hover:text-sky-600">
                      {timerRunning ? 'Pause' : 'Start timer'}
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="flex-1 min-w-[200px]">
              <div className="text-xs text-slate-500 mb-1">Progress {saqCount > 0 && '· short answers count once you self-grade'}</div>
              <div className="w-full h-2 bg-slate-100 rounded overflow-hidden">
                <div className="h-full bg-gradient-to-r from-indigo-500 to-emerald-500" style={{ width: `${total ? (answered.length / total) * 100 : 0}%` }} />
              </div>
            </div>
          </div>

          {done && (
            <div className={`bg-white border-2 ${passed ? 'border-emerald-400' : 'border-amber-400'} rounded-xl p-5 mb-6 shadow`}>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Complete — {correct}/{total} ({Math.round((correct / total) * 100)}%) {passed ? '🎉 PASSED' : '— below pass threshold'}
              </h2>
              <h3 className="text-sm font-semibold text-slate-700 mb-2 mt-4">Breakdown by topic</h3>
              <ul className="space-y-1">
                {Object.entries(byGroup).map(([g, v]) => {
                  const pct = v.total ? Math.round((v.correct / v.total) * 100) : 0;
                  return (
                    <li key={g} className="flex items-center gap-3">
                      <span className="w-56 text-sm text-slate-700">{g}</span>
                      <div className="flex-1 h-2 bg-slate-100 rounded overflow-hidden">
                        <div className={`h-full ${pct >= 80 ? 'bg-emerald-500' : pct >= 60 ? 'bg-yellow-400' : 'bg-red-500'}`} style={{ width: `${pct}%` }} />
                      </div>
                      <span className="text-sm font-semibold text-slate-700 w-20 text-right">{v.correct}/{v.total} · {pct}%</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {exam.map((q, i) => (
            <QuestionItem
              key={`${storagePrefix}-${i}`}
              storageKey={`${storagePrefix}:q${i}`}
              q={q}
              index={i}
              onAnswered={() => setTick((t) => t + 1)}
            />
          ))}
        </>
      )}
    </div>
  );
}

function KeyItem({ q, n }) {
  const type = q.type || 'mcq';
  const choices = type === 'tf' ? ['True', 'False'] : q.choices;
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-4 break-inside-avoid">
      <div className="flex flex-wrap items-center gap-1.5 mb-1">
        {type === 'saq' && <span className="text-[10px] font-bold uppercase tracking-wider bg-sky-100 text-sky-800 px-1.5 py-0.5 rounded">Short answer</span>}
        {q.added && <AddedTag label="Uses added content" />}
      </div>
      <div className="font-semibold text-slate-900"><span className="text-slate-500 mr-2">Q{n}.</span>{q.q}</div>

      {choices && (
        <ul className="mt-2 space-y-1">
          {choices.map((c, i) => (
            <li key={i} className={`text-sm px-2 py-1 rounded ${i === q.correct ? 'bg-emerald-50 border border-emerald-300 font-semibold text-emerald-900' : 'text-slate-600'}`}>
              {String.fromCharCode(65 + i)}. {c} {i === q.correct && '✓'}
            </li>
          ))}
        </ul>
      )}

      {type === 'short' && (
        <div className="mt-2 text-sm"><span className="font-semibold">Answer:</span> {Array.isArray(q.correct) ? q.correct[0] : q.correct}</div>
      )}

      {type === 'saq' && (
        <div className="mt-2 space-y-2">
          <div className="p-3 rounded bg-emerald-50 border border-emerald-200">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">Sample answer</div>
            <div className="text-sm text-emerald-950 leading-relaxed whitespace-pre-line">{q.sampleAnswer}</div>
          </div>
          {q.keyPoints?.length > 0 && (
            <div className="text-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Must-hit key points</div>
              <ul className="list-disc ml-5 space-y-0.5 text-slate-800">
                {q.keyPoints.map((k, i) => <li key={i}>{k}</li>)}
              </ul>
            </div>
          )}
        </div>
      )}

      {q.explanation && (
        <div className="mt-2 text-sm text-slate-700 bg-slate-50 rounded p-2">
          <span className="font-semibold">Why: </span>{q.explanation}
        </div>
      )}
    </div>
  );
}
