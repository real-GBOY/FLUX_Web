export type LogSet = {
  label: string
  pr?: boolean
}

export type LogEntry = {
  exercise: string
  sets: LogSet[]
  delta: string
  neg: boolean
}

export const TICKER_ITEMS = [
  'PROGRESSIVE OVERLOAD', 'ARABIC VOICE LOGGING', 'NO EXCUSES',
  'PR DETECTION', 'BRUTAL HONESTY', 'STRENGTH CURVES',
  'WEEKLY REPORTS', 'BUILT IN EGYPT', 'TRACK OR STAY WEAK',
] as const

export const STATS = [
  { num: '28',   label: 'Database Tables' },
  { num: '100%', label: 'Arabic-First UX' },
  { num: '0',    label: 'Excuses Accepted' },
  { num: '∞',    label: 'PRs to Break' },
] as const

export const FEATURES = [
  { num: '01', tag: 'Core',          title: 'PROGRESSIVE OVERLOAD LOG',  desc: 'Every set logged against your last session. FLUX tells you if you improved, held, or regressed. No interpretation needed.' },
  { num: '02', tag: 'Differentiator',title: 'ARABIC VOICE LOGGING',      desc: 'Say "بنش بريس، ٨٠ كيلو، ٥ تكرارات" and FLUX logs it. Egyptian dialect. No typing between sets.' },
  { num: '03', tag: 'Analytics',     title: 'STRENGTH CURVES',           desc: 'Visual progression per exercise over time. See exactly when you plateaued, broke through, or went backwards.' },
  { num: '04', tag: 'Smart',         title: 'PR DETECTION',              desc: 'Automatically flags personal records — by weight, reps, or estimated 1RM. No manual marking. It knows.' },
  { num: '05', tag: 'Planning',      title: 'WORKOUT TEMPLATES',         desc: 'Build your program once. FLUX auto-fills your last performance so you always know what to beat.' },
  { num: '06', tag: 'Insight',       title: 'WEEKLY BRUTALITY REPORT',   desc: 'Every Sunday: volume moved, PRs hit, sessions missed. Honest. No sugarcoating.' },
] as const

export const LOG_ENTRIES: LogEntry[] = [
  { exercise: 'Bench Press', sets: [{ label: '80×5' }, { label: '80×5' }, { label: '85×4 PR', pr: true }], delta: '+5 kg',   neg: false },
  { exercise: 'OHP',         sets: [{ label: '52.5×6' }, { label: '52.5×5' }, { label: '52.5×4' }],       delta: '→ 0',     neg: false },
  { exercise: 'Incline DB',  sets: [{ label: '30×10' }, { label: '30×9' }, { label: '30×8' }],             delta: '−1 rep',  neg: true  },
  { exercise: 'Tricep Ext',  sets: [{ label: '40×12 PR', pr: true }, { label: '40×10' }, { label: '40×9' }], delta: '+2 reps', neg: false },
]
