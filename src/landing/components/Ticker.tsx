import { TICKER_ITEMS } from '../data/content'

export default function Ticker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS]
  return (
    <div className="fl-ticker">
      <div className="fl-ticker-inner">
        {doubled.map((item, i) => (
          <span key={i} className="fl-ticker-item">
            <span className="fl-dot">◆</span>{item}
          </span>
        ))}
      </div>
    </div>
  )
}
