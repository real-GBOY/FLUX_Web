import { FEATURES } from '../data/content'

export default function Features() {
  return (
    <section className="fl-features" id="fl-features">
      <div className="fl-section-header reveal">
        <h2 className="fl-section-title">WHAT FLUX DOES</h2>
        <span className="fl-section-count">06 FEATURES</span>
      </div>
      <div className="fl-features-grid">
        {FEATURES.map((f, i) => (
          <div key={i} className="fl-feature-card reveal">
            <div className="fl-feature-num">{f.num}</div>
            <div className="fl-feature-tag">{f.tag}</div>
            <h3 className="fl-feature-title">{f.title}</h3>
            <p className="fl-feature-desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
