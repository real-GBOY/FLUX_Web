import { STATS } from '../data/content'

export default function Stats() {
  return (
    <section className="fl-stats">
      {STATS.map((s, i) => (
        <div key={i} className="fl-stat reveal">
          <span className="fl-stat-num">{s.num}</span>
          <span className="fl-stat-label">{s.label}</span>
        </div>
      ))}
    </section>
  )
}
