import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PenLine, ChevronRight } from "lucide-react";
import { SectionLabel } from "@/components/landing/MusicGenerator";
import { LINKS } from "@/lib/links";

const VERSE_LINES = [
  "City lights blur into a quiet hum,",
  "Headlights paint the rain like a melody,",
  "I'm chasing every echo of who we'd become,",
  "Holding a chorus that won't let go of me.",
];
const HOOK_LINES = [
  "Tonight we burn like neon on the avenue,",
  "Every heartbeat plays the song that I made for you.",
];

function useTypewriter(lines, on, speed = 26) {
  const [out, setOut] = useState([]);
  useEffect(() => {
    if (!on) { setOut([]); return; }
    let cancelled = false;
    const run = async () => {
      const next = [];
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        let buf = "";
        for (let c = 0; c < line.length; c++) {
          if (cancelled) return;
          buf += line[c];
          next[i] = buf;
          setOut([...next]);
          await new Promise(r => setTimeout(r, speed));
        }
      }
    };
    run();
    return () => { cancelled = true; };
  }, [on, lines, speed]);
  return out;
}

export default function LyricsGenerator() {
  const [active, setActive] = useState(true);
  const verse = useTypewriter(VERSE_LINES, active, 22);
  const hook = useTypewriter(HOOK_LINES, active, 28);

  return (
    <section className="relative py-28 sm:py-36 bg-gradient-to-b from-[#050505] via-[#070708] to-[#050505]" data-testid="lyrics-section">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
            data-testid="lyrics-editor-mock"
          >
            <div className="absolute -inset-6 bg-purple-600/10 blur-3xl rounded-full" />
            <div className="relative rounded-2xl border border-white/10 bg-zinc-950 shadow-[0_30px_80px_rgba(0,0,0,0.6)] overflow-hidden">
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/5">
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <PenLine className="w-3.5 h-3.5 text-cyan-400" />
                  Lyric Studio · "Neon Avenue"
                </div>
                <button
                  onClick={() => setActive(v => !v)}
                  className="text-[11px] uppercase tracking-[0.18em] text-zinc-500 hover:text-white transition"
                  data-testid="lyrics-replay"
                >
                  {active ? "Pause" : "Replay"}
                </button>
              </div>

              <div className="grid grid-cols-[100px_1fr]">
                {/* Structure panel */}
                <div className="border-r border-white/5 p-4 bg-black/40">
                  {["Intro", "Verse 1", "Hook", "Verse 2", "Bridge", "Outro"].map((s, i) => (
                    <button
                      key={s}
                      className={`w-full flex items-center justify-between text-left px-2 py-2 rounded-md text-xs my-0.5 transition ${
                        i === 1 || i === 2 ? "bg-cyan-500/10 text-cyan-200" : "text-zinc-400 hover:text-white hover:bg-white/[0.03]"
                      }`}
                    >
                      {s}
                      <ChevronRight className="w-3 h-3 opacity-50" />
                    </button>
                  ))}
                </div>

                {/* Editor */}
                <div className="p-6 min-h-[420px] font-[Manrope]">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-zinc-600 mb-2">Verse 1</div>
                  {verse.map((line, i) => (
                    <p key={i} className="text-zinc-200 text-[15px] leading-7">
                      {line}
                      {i === verse.length - 1 && verse[i].length < VERSE_LINES[i].length && (
                        <span className="inline-block w-[2px] h-4 bg-cyan-400 align-middle ml-0.5 animate-pulse" />
                      )}
                    </p>
                  ))}

                  <div className="mt-6 text-[10px] uppercase tracking-[0.22em] text-zinc-600 mb-2">Hook</div>
                  {hook.map((line, i) => (
                    <p key={i} className="text-cyan-100/95 text-[15px] leading-7 italic">
                      {line}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between px-5 py-3 border-t border-white/5 text-[11px] uppercase tracking-[0.18em] text-zinc-500 bg-white/[0.02]">
                <span>Auto-rhyme · ON</span>
                <span>Language · English</span>
                <span>Syllables · 9 / 11</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <SectionLabel icon={<PenLine className="w-3.5 h-3.5" />} label="AI LYRICS GENERATOR" />
            <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Songs that <span className="text-gradient-brand">write themselves</span>.
            </h2>
            <p className="mt-6 text-zinc-400 text-lg max-w-lg leading-relaxed">
              Structured verses, hooks and bridges in any language. Live AI co-writing,
              rhyme-aware suggestions and syllable timing built in.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 max-w-md">
              {[
                { k: "Languages", v: "40+" },
                { k: "Rhyme Schemes", v: "AABB · ABAB" },
                { k: "Auto Structure", v: "Verse / Hook / Bridge" },
                { k: "Voice Sync", v: "Beat-locked" },
              ].map(({ k, v }) => (
                <div key={k} className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">{k}</div>
                  <div className="text-sm text-white mt-1 font-medium">{v}</div>
                </div>
              ))}
            </div>
            <a
              href={LINKS.register}
              className="inline-flex items-center gap-2 mt-10 px-6 py-3 rounded-full border border-white/10 bg-white/[0.03] text-white font-semibold text-sm hover:bg-white/[0.06] transition-colors"
              data-testid="lyrics-cta"
            >
              Write with AI
              <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
