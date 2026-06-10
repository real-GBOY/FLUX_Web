import { LOG_ENTRIES } from '../data/content'

export default function LogWidget() {
  return (
    <div className="fl-log-widget">
      <div className="fl-log-header">
        <span className="fl-log-title">Session — Tuesday / Push</span>
        <span className="fl-log-status">● Live</span>
      </div>
      {LOG_ENTRIES.map((entry, i) => (
        <div key={i} className="fl-log-entry">
          <span className="fl-log-exercise">{entry.exercise}</span>
          <div className="fl-log-sets">
            {entry.sets.map((s, j) => (
              <span key={j} className={`fl-log-set${s.pr ? ' pr' : ''}`}>{s.label}</span>
            ))}
          </div>
          <span className={`fl-log-delta${entry.neg ? ' neg' : ''}`}>{entry.delta}</span>
        </div>
      ))}
      <div className="fl-log-footer">
        <span>Total volume: 4,820 kg</span>
        <span>vs last week: +340 kg ↑</span>
      </div>
    </div>
  )
}
