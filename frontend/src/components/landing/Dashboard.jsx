import React from "react";
import { motion } from "framer-motion";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar } from "recharts";
import { LayoutDashboard, TrendingUp } from "lucide-react";
import { SectionLabel } from "@/components/landing/MusicGenerator";

const STREAM_DATA = [
  { d: "Mon", streams: 4200, earnings: 12 },
  { d: "Tue", streams: 5100, earnings: 18 },
  { d: "Wed", streams: 6900, earnings: 24 },
  { d: "Thu", streams: 8200, earnings: 31 },
  { d: "Fri", streams: 11500, earnings: 44 },
  { d: "Sat", streams: 14300, earnings: 58 },
  { d: "Sun", streams: 16800, earnings: 71 },
];

const PLATFORM_DATA = [
  { name: "Spotify", v: 42 },
  { name: "Apple", v: 22 },
  { name: "YouTube", v: 18 },
  { name: "TikTok", v: 11 },
  { name: "Amazon", v: 7 },
];

const RELEASES = [
  { title: "Neon Avenue", status: "Live", streams: "184K", change: "+12.4%" },
  { title: "Midnight Drive", status: "Live", streams: "92K", change: "+8.1%" },
  { title: "Echoes", status: "Pending", streams: "—", change: "—" },
];

export default function Dashboard() {
  return (
    <section className="relative py-28 sm:py-36 bg-gradient-to-b from-[#050505] via-[#070708] to-[#050505]" data-testid="dashboard-section">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto">
          <SectionLabel icon={<LayoutDashboard className="w-3.5 h-3.5" />} label="CREATOR DASHBOARD" />
          <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Your entire career, <span className="text-gradient-brand">in one view</span>.
          </h2>
          <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
            Streams, earnings, audience, releases and AI usage — beautifully unified.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="mt-14 rounded-3xl border border-white/10 bg-zinc-950 overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
          data-testid="dashboard-mock"
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 sm:px-7 py-4 border-b border-white/5 bg-white/[0.02]">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-blue-600 to-purple-600" />
              <div className="text-sm font-semibold tracking-tight">SunoDistro · Dashboard</div>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-zinc-500">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.9)]" />
              Live · synced 2s ago
            </div>
          </div>

          <div className="grid grid-cols-12 gap-px bg-white/5">
            {/* KPIs */}
            <div className="col-span-12 lg:col-span-4 bg-zinc-950 p-6 sm:p-7">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { k: "Total Streams", v: "1.42M", c: "+18.2%" },
                  { k: "Earnings", v: "$3,284", c: "+24.6%" },
                  { k: "Listeners", v: "284K", c: "+9.1%" },
                  { k: "Saves", v: "62.1K", c: "+11.5%" },
                ].map(({ k, v, c }) => (
                  <div key={k} className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                    <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">{k}</div>
                    <div className="mt-1.5 text-xl font-semibold tabular-nums">{v}</div>
                    <div className="text-[11px] mt-1 inline-flex items-center gap-1 text-emerald-400">
                      <TrendingUp className="w-3 h-3" /> {c}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-500 mb-3">Platform Split</div>
                <div className="space-y-2">
                  {PLATFORM_DATA.map((p) => (
                    <div key={p.name} className="flex items-center gap-3 text-xs">
                      <span className="w-20 text-zinc-400">{p.name}</span>
                      <div className="flex-1 h-1.5 rounded-full bg-white/5 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-400 to-purple-500"
                          style={{ width: `${p.v * 2}%` }}
                        />
                      </div>
                      <span className="tabular-nums text-zinc-300 w-8 text-right">{p.v}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Streams chart */}
            <div className="col-span-12 lg:col-span-8 bg-zinc-950 p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">Streams · 7 days</div>
                  <div className="text-2xl font-semibold tabular-nums mt-1">67,012</div>
                </div>
                <div className="flex gap-1.5 text-[11px]">
                  {["7d", "30d", "90d", "1y"].map((r, i) => (
                    <span key={r} className={`px-2.5 py-1 rounded-full border ${i === 0 ? "bg-cyan-500/10 border-cyan-400/40 text-cyan-200" : "border-white/5 text-zinc-500"}`}>{r}</span>
                  ))}
                </div>
              </div>
              <div className="h-56 mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={STREAM_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#06b6d4" stopOpacity={0.5} />
                        <stop offset="100%" stopColor="#06b6d4" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                    <XAxis dataKey="d" stroke="#52525b" fontSize={11} tickLine={false} axisLine={false} />
                    <YAxis stroke="#52525b" fontSize={11} tickLine={false} axisLine={false} />
                    <Tooltip
                      contentStyle={{
                        background: "#0a0a0a",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: 12,
                        fontSize: 12,
                      }}
                    />
                    <Area type="monotone" dataKey="streams" stroke="#06b6d4" strokeWidth={2} fill="url(#g1)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Earnings bar */}
            <div className="col-span-12 lg:col-span-5 bg-zinc-950 p-6 sm:p-7">
              <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">Earnings · This Week</div>
              <div className="text-2xl font-semibold tabular-nums mt-1">$258.40</div>
              <div className="h-44 mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={STREAM_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                    <XAxis dataKey="d" stroke="#52525b" fontSize={11} tickLine={false} axisLine={false} />
                    <YAxis stroke="#52525b" fontSize={11} tickLine={false} axisLine={false} />
                    <Tooltip
                      contentStyle={{
                        background: "#0a0a0a",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: 12,
                        fontSize: 12,
                      }}
                      cursor={{ fill: "rgba(255,255,255,0.03)" }}
                    />
                    <Bar dataKey="earnings" fill="#8b5cf6" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Releases list */}
            <div className="col-span-12 lg:col-span-7 bg-zinc-950 p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">Releases</div>
                <span className="text-[11px] text-zinc-500">3 active</span>
              </div>
              <div className="mt-4 divide-y divide-white/5 border border-white/5 rounded-xl overflow-hidden">
                {RELEASES.map((r, i) => (
                  <div key={i} className="flex items-center gap-4 px-4 py-3.5 hover:bg-white/[0.02] transition">
                    <div className="w-9 h-9 rounded-md bg-gradient-to-tr from-blue-700 via-purple-600 to-cyan-400 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate">{r.title}</div>
                      <div className="text-[11px] text-zinc-500">{r.status}</div>
                    </div>
                    <div className="text-sm tabular-nums">{r.streams}</div>
                    <div className={`text-xs tabular-nums w-14 text-right ${r.change.startsWith("+") ? "text-emerald-400" : "text-zinc-500"}`}>{r.change}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
