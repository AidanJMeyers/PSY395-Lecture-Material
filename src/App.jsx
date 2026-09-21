import React, { useEffect, useState } from 'react';
import ChapterView from './components/ChapterView.jsx';
import ExamView from './components/ExamView.jsx';
import ReviewLaterView from './components/ReviewLaterView.jsx';
import { chapters } from './data/chapters.js';
import { examSets, examFor } from './data/exams.js';
import { quizzes, courseInfo } from './data/quizzes.js';
import { storage, resetAll } from './storage';

const readyQuizzes = quizzes.filter((q) => q.ready);
// The "current" quiz is the most recent one with content — featured on the overview.
const currentQuiz = readyQuizzes[readyQuizzes.length - 1] || quizzes[0];

const examLinks = examSets.map((e) => ({ ...e, link: `exam-${e.quizId}` }));

function ProgressBar({ pct }) {
  return (
    <div className="w-full h-1.5 bg-slate-700/60 rounded overflow-hidden mt-1">
      <div className="h-full bg-gradient-to-r from-sky-400 to-emerald-400 transition-all" style={{ width: `${pct}%` }} />
    </div>
  );
}

function initialTab() {
  let t = null;
  try { t = localStorage.getItem('studyguide:activeTab'); } catch {}
  if (t === 'exam') return 'exam-1'; // tab name used before per-quiz exams existed
  return t || 'home';
}

function initialCollapsed() {
  try { return JSON.parse(localStorage.getItem('studyguide:collapsedQuizzes') || '{}'); } catch { return {}; }
}

export default function App() {
  const [active, setActive] = useState(initialTab);
  const [progress, setProgress] = useState({});
  const [noteCount, setNoteCount] = useState(0);
  const [showReset, setShowReset] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(initialCollapsed);

  useEffect(() => { try { localStorage.setItem('studyguide:activeTab', active); } catch {} }, [active]);
  useEffect(() => { try { localStorage.setItem('studyguide:collapsedQuizzes', JSON.stringify(collapsed)); } catch {} }, [collapsed]);

  const refreshProgress = async () => {
    const p = {};
    await Promise.all(chapters.map(async (ch) => {
      const reviewed = await Promise.all(ch.blocks.map((b) =>
        storage.get(`studyguide:ch${ch.id}:block${b.id}:reviewed`)
      ));
      p[`ch${ch.id}`] = { reviewed: reviewed.filter(Boolean).length, total: ch.blocks.length };
    }));
    await Promise.all(examSets.map(async (e) => {
      const ans = await Promise.all(e.questions.map((_, i) => storage.get(`${e.prefix}:q${i}`)));
      p[`exam-${e.quizId}`] = { reviewed: ans.filter((s) => s && s.submitted).length, total: e.questions.length };
    }));
    setProgress(p);

    const allKeys = await storage.keys();
    const commentKeys = allKeys.filter((k) => k.endsWith(':comment'));
    const count = (await Promise.all(commentKeys.map((k) => storage.get(k))))
      .filter((v) => v && String(v).trim()).length;
    setNoteCount(count);
  };

  useEffect(() => {
    refreshProgress();
    const interval = setInterval(refreshProgress, 1500);
    return () => clearInterval(interval);
  }, []);

  const currentChapter = chapters.find((c) => `ch${c.id}` === active);
  const activeExamQuizId = active.startsWith('exam-') ? Number(active.slice(5)) : null;
  const activeExam = activeExamQuizId != null ? examFor(activeExamQuizId) : null;
  const activeExamQuiz = activeExam ? quizzes.find((q) => q.id === activeExam.quizId) : null;

  const navigate = (target, anchor) => {
    setActive(target);
    setMobileOpen(false);
    if (anchor) {
      setTimeout(() => {
        const el = document.getElementById(`block-${anchor}`);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
    }
  };

  const go = (t) => { setActive(t); setMobileOpen(false); window.scrollTo({ top: 0 }); };

  const totalBlocks = chapters.reduce((n, c) => n + c.blocks.length, 0);
  const totalReviewed = chapters.reduce((n, c) => n + (progress[`ch${c.id}`]?.reviewed || 0), 0);
  const overallPct = totalBlocks ? Math.round((totalReviewed / totalBlocks) * 100) : 0;

  const NavBody = (
    <>
      <div className="p-5 border-b border-slate-800">
        <div className="text-xs uppercase tracking-wider text-sky-400 font-bold">{courseInfo.code}</div>
        <div className="text-lg font-bold text-white mt-1 leading-tight">{courseInfo.name}</div>
        <div className="text-xs text-slate-400 mt-1">{courseInfo.instructor} · {courseInfo.term}</div>
        <div className="mt-3">
          <div className="flex justify-between text-[11px] text-slate-400">
            <span>Overall review progress</span><span>{totalReviewed}/{totalBlocks}</span>
          </div>
          <ProgressBar pct={overallPct} />
        </div>
      </div>

      <nav className="flex-1 p-3 space-y-1">
        <button
          onClick={() => go('home')}
          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition flex items-center gap-3 ${
            active === 'home' ? 'bg-slate-700 text-white' : 'text-slate-300 hover:bg-slate-800'
          }`}
        >
          <span>🏠</span><span className="font-semibold">Overview</span>
        </button>

        {quizzes.map((qz) => {
          const lectures = chapters.filter((c) => c.quiz === qz.id);
          const ex = examFor(qz.id);
          const isCollapsed = !!collapsed[qz.id];
          const isCurrent = qz.id === currentQuiz.id;
          return (
            <div key={qz.id} className="pt-3">
              <button
                onClick={() => qz.ready && setCollapsed((c) => ({ ...c, [qz.id]: !c[qz.id] }))}
                className={`w-full px-3 pb-1 flex items-baseline justify-between ${qz.ready ? 'cursor-pointer' : 'cursor-default'}`}
              >
                <span className={`text-[11px] font-bold uppercase tracking-wider ${qz.ready ? 'text-sky-400' : 'text-slate-600'}`}>
                  {qz.ready && <span className="inline-block w-3 text-slate-500">{isCollapsed ? '▸' : '▾'}</span>}
                  {qz.label}
                  {isCurrent && <span className="ml-1.5 text-[9px] bg-amber-400 text-slate-900 px-1 py-px rounded normal-case tracking-normal">current</span>}
                </span>
                <span className="text-[10px] text-slate-500">{qz.date}</span>
              </button>

              {qz.ready ? (
                !isCollapsed && (
                  <>
                    {lectures.map((ch) => {
                      const p = progress[`ch${ch.id}`] || { reviewed: 0, total: ch.blocks.length };
                      const isActive = active === `ch${ch.id}`;
                      const pct = p.total ? Math.round((p.reviewed / p.total) * 100) : 0;
                      return (
                        <button
                          key={ch.id}
                          onClick={() => go(`ch${ch.id}`)}
                          className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition flex items-start gap-3 ${
                            isActive ? 'bg-sky-600 text-white shadow' : 'text-slate-300 hover:bg-slate-800'
                          }`}
                        >
                          <span className={`text-xs font-bold mt-0.5 ${isActive ? 'text-sky-100' : 'text-slate-500'}`}>
                            L{ch.lectureNo}
                          </span>
                          <span className="flex-1 min-w-0">
                            <div className="font-semibold leading-tight">{ch.title}</div>
                            <div className={`text-[10px] mt-0.5 ${isActive ? 'text-sky-100' : 'text-slate-500'}`}>
                              {ch.date} · {p.reviewed}/{p.total} reviewed
                            </div>
                            <ProgressBar pct={pct} />
                          </span>
                        </button>
                      );
                    })}
                    {ex && (
                      <button
                        onClick={() => go(`exam-${qz.id}`)}
                        className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition flex items-start gap-3 ${
                          active === `exam-${qz.id}` ? 'bg-emerald-600 text-white shadow' : 'text-slate-300 hover:bg-slate-800'
                        }`}
                      >
                        <span className="text-base">🎯</span>
                        <span className="flex-1">
                          <div className="font-semibold">{qz.label} Practice Quiz</div>
                          <div className={`text-[10px] mt-0.5 ${active === `exam-${qz.id}` ? 'text-emerald-100' : 'text-slate-500'}`}>
                            {progress[`exam-${qz.id}`]?.reviewed || 0}/{ex.questions.length} answered · answer key included
                          </div>
                        </span>
                      </button>
                    )}
                  </>
                )
              ) : (
                <div className="px-3 py-2 rounded-lg bg-slate-800/40 border border-dashed border-slate-700">
                  <div className="text-[11px] text-slate-500 leading-snug">{qz.topics}</div>
                  <div className="text-[10px] text-slate-600 mt-1 italic">Content not added yet</div>
                </div>
              )}
            </div>
          );
        })}

        <div className="my-3 border-t border-slate-800" />
        <button
          onClick={() => go('review')}
          className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition flex items-start gap-3 ${
            active === 'review' ? 'bg-amber-500 text-white shadow' : 'text-slate-300 hover:bg-slate-800'
          }`}
        >
          <span className="text-base">📝</span>
          <span className="flex-1">
            <div className="font-semibold">Review Later</div>
            <div className={`text-[10px] mt-0.5 ${active === 'review' ? 'text-amber-100' : 'text-slate-500'}`}>
              {noteCount} note{noteCount === 1 ? '' : 's'}
            </div>
          </span>
        </button>
      </nav>

      <div className="p-3 border-t border-slate-800">
        <button
          onClick={() => setShowReset(true)}
          className="w-full px-3 py-2 text-xs font-semibold bg-red-900/40 text-red-300 rounded hover:bg-red-900/70"
        >
          Reset All Progress
        </button>
      </div>
    </>
  );

  return (
    <div className="min-h-screen flex bg-slate-50 print:bg-white">
      <aside className="hidden md:flex print:hidden flex-col w-72 bg-slate-900 text-slate-200 min-h-screen sticky top-0 max-h-screen overflow-y-auto scrollbar-thin">
        {NavBody}
      </aside>

      <div className="md:hidden print:hidden fixed top-0 inset-x-0 z-30 bg-slate-900 text-white flex items-center justify-between px-4 py-3 border-b border-slate-800">
        <button onClick={() => setMobileOpen(!mobileOpen)} className="flex items-center gap-2 font-semibold text-sm">
          <span className="text-lg">{mobileOpen ? '✕' : '☰'}</span>
          <span>{courseInfo.code}</span>
        </button>
        <span className="text-xs text-slate-400">{totalReviewed}/{totalBlocks} reviewed</span>
      </div>
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-20 pt-14 bg-slate-900 text-slate-200 overflow-y-auto flex flex-col">
          {NavBody}
        </div>
      )}

      <main className="flex-1 min-w-0 md:pt-0 pt-14 print:pt-0">
        {active === 'home' ? (
          <HomeView onNavigate={go} progress={progress} overallPct={overallPct} />
        ) : activeExam ? (
          <ExamView
            exam={activeExam.questions}
            config={activeExam.config}
            storagePrefix={activeExam.prefix}
            title={activeExam.title}
            subtitle={activeExamQuiz ? `${activeExamQuiz.date} · ${activeExamQuiz.topics}` : undefined}
            focus={activeExamQuiz?.focus}
          />
        ) : active === 'review' ? (
          <ReviewLaterView chapters={chapters} exams={examLinks} onNavigate={navigate} />
        ) : currentChapter ? (
          <ChapterView chapter={currentChapter} />
        ) : (
          <HomeView onNavigate={go} progress={progress} overallPct={overallPct} />
        )}
        <footer className="max-w-5xl mx-auto px-4 py-10 text-center text-xs text-slate-400 print:hidden">
          {courseInfo.code} study dashboard · progress saves automatically in this browser
        </footer>
      </main>

      {showReset && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Reset all progress?</h3>
            <p className="text-sm text-slate-600 mb-5">
              This clears every review checkbox, confidence rating, note, practice answer and exam answer for every quiz.
              This cannot be undone.
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowReset(false)}
                className="px-4 py-2 text-sm font-semibold bg-slate-200 text-slate-700 rounded hover:bg-slate-300"
              >
                Cancel
              </button>
              <button
                onClick={async () => { await resetAll(); setShowReset(false); window.location.reload(); }}
                className="px-4 py-2 text-sm font-semibold bg-red-600 text-white rounded hover:bg-red-700"
              >
                Reset Everything
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function HomeView({ onNavigate, progress, overallPct }) {
  const q = currentQuiz;
  const lectures = chapters.filter((c) => c.quiz === q.id);
  const ex = examFor(q.id);
  const totalQuestions = chapters.reduce((n, c) => n + c.questions.length, 0) + examSets.reduce((n, e) => n + e.questions.length, 0);
  const earlier = readyQuizzes.filter((x) => x.id !== q.id);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-sky-700 to-emerald-600 text-white rounded-2xl p-7 shadow">
        <div className="text-xs uppercase tracking-widest text-sky-100 font-bold">{courseInfo.term} · {courseInfo.instructor}</div>
        <h1 className="text-3xl font-bold mt-1">{courseInfo.name}</h1>
        <p className="text-sky-50 mt-2 text-sm max-w-2xl">
          Interactive study dashboard built from the lecture slides and in-class annotations. Everything you mark as
          reviewed, every confidence rating and every note is saved in this browser.
        </p>
        <div className="flex flex-wrap gap-6 mt-5">
          <div><div className="text-2xl font-bold">{overallPct}%</div><div className="text-xs text-sky-100">reviewed</div></div>
          <div><div className="text-2xl font-bold">{chapters.length}</div><div className="text-xs text-sky-100">lectures</div></div>
          <div><div className="text-2xl font-bold">{readyQuizzes.length}</div><div className="text-xs text-sky-100">quizzes built</div></div>
          <div><div className="text-2xl font-bold">{totalQuestions}</div><div className="text-xs text-sky-100">practice questions</div></div>
        </div>
      </div>

      <div className="mt-6 bg-white border-2 border-amber-300 rounded-xl p-5 shadow-sm">
        <div className="flex items-baseline justify-between flex-wrap gap-2">
          <h2 className="text-xl font-bold text-slate-900">⭐ {q.label} — {q.date}</h2>
          <span className="text-sm text-slate-500">{q.topics}</span>
        </div>
        {q.focus && (
          <>
            <p className="text-sm text-slate-700 mt-3 font-semibold">What Dr. Held told you to expect:</p>
            <ul className="mt-2 grid sm:grid-cols-2 gap-2">
              {q.focus.map((f, i) => (
                <li key={i} className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded p-2.5 text-sm text-amber-900">
                  <span className="font-bold">{i + 1}.</span><span>{f}</span>
                </li>
              ))}
            </ul>
          </>
        )}
        <div className="mt-4 text-sm text-slate-700 bg-slate-50 border-l-4 border-slate-300 p-3 rounded-r">
          <strong>Format:</strong> {courseInfo.quizFormat}
        </div>
        {q.note && <p className="mt-2 text-xs text-slate-500">ℹ️ {q.note}</p>}
      </div>

      <div className={`mt-6 grid gap-4 ${lectures.length >= 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
        {lectures.map((ch) => {
          const p = progress[`ch${ch.id}`] || { reviewed: 0, total: ch.blocks.length };
          return (
            <button
              key={ch.id}
              onClick={() => onNavigate(`ch${ch.id}`)}
              className="text-left bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-sky-300 transition"
            >
              <div className="text-xs font-bold text-sky-600">LECTURE {ch.lectureNo} · {ch.date}</div>
              <div className="font-bold text-slate-900 mt-1 leading-tight">{ch.title}</div>
              <div className="text-xs text-slate-500 mt-2">{ch.blocks.length} blocks · {ch.questions.length} questions</div>
              <div className="text-xs text-slate-500 mt-0.5">{p.reviewed}/{p.total} reviewed</div>
            </button>
          );
        })}
      </div>

      <div className="mt-4 grid sm:grid-cols-2 gap-4">
        {ex && (
          <button
            onClick={() => onNavigate(`exam-${q.id}`)}
            className="text-left bg-emerald-600 text-white rounded-xl p-4 shadow-sm hover:bg-emerald-700 transition"
          >
            <div className="text-lg font-bold">🎯 {ex.title}</div>
            <div className="text-sm text-emerald-50 mt-1">
              {ex.questions.length} questions built on her outline — multiple choice plus short answers with sample
              answers. Includes a printable answer key.
            </div>
          </button>
        )}
        <button
          onClick={() => onNavigate('review')}
          className="text-left bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md transition"
        >
          <div className="text-lg font-bold text-slate-900">📝 Review Later</div>
          <div className="text-sm text-slate-600 mt-1">Every note you leave on a block or question collects here, grouped by lecture.</div>
        </button>
      </div>

      {earlier.length > 0 && (
        <div className="mt-6 bg-white border border-slate-200 rounded-xl p-5">
          <h3 className="font-bold text-slate-900">Earlier quizzes (also useful for the cumulative final)</h3>
          <div className="mt-3 space-y-2">
            {earlier.map((eq) => {
              const ls = chapters.filter((c) => c.quiz === eq.id);
              const eex = examFor(eq.id);
              return (
                <div key={eq.id} className="flex flex-wrap items-center gap-2 text-sm border-b border-slate-100 pb-2">
                  <span className="font-semibold text-slate-700 w-20 shrink-0">{eq.label}</span>
                  {ls.map((c) => (
                    <button key={c.id} onClick={() => onNavigate(`ch${c.id}`)} className="text-xs px-2 py-1 rounded bg-slate-100 hover:bg-sky-100 text-slate-700">
                      L{c.lectureNo} · {c.title}
                    </button>
                  ))}
                  {eex && (
                    <button onClick={() => onNavigate(`exam-${eq.id}`)} className="text-xs px-2 py-1 rounded bg-emerald-50 hover:bg-emerald-100 text-emerald-800">
                      🎯 Practice exam
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="mt-6 bg-white border border-slate-200 rounded-xl p-5">
        <h3 className="font-bold text-slate-900">Coming up this semester</h3>
        <p className="text-xs text-slate-500 mt-0.5">
          Six quizzes are given; your highest five count. Quizzes and the final are 36% of the grade.
        </p>
        <div className="mt-3 space-y-1.5">
          {quizzes.filter((x) => !x.ready).map((qz) => (
            <div key={qz.id} className="flex items-baseline gap-3 text-sm border-b border-slate-100 pb-1.5">
              <span className="font-semibold text-slate-700 w-24 shrink-0">{qz.label}</span>
              <span className="text-slate-500 w-32 shrink-0 text-xs">{qz.date}</span>
              <span className="text-slate-600 text-xs">{qz.topics}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
