export default function Hero() {
  return (
    <section className="fl-hero">
      <div className="fl-hero-bg-num">PR</div>
      <p className="fl-hero-eyebrow">Progressive Overload Tracker — Arabic First</p>
      <h1 className="fl-hero-headline">
        EITHER YOU<br />
        <span className="fl-lime">PROGRESS</span><br />
        OR YOU LIE.
      </h1>
      <div className="fl-hero-sub-row">
        <p className="fl-hero-sub">
          FLUX doesn't motivate you. It <span className="fl-lime">documents you.</span><br />
          Every set. Every rep. Every kg you failed to add.<br />
          The gym doesn't lie. Neither does <span className="fl-lime">FLUX</span>.
        </p>
        <div className="fl-hero-actions">
          <a href="#fl-cta" className="fl-btn-primary">GET EARLY ACCESS</a>
        </div>
      </div>
    </section>
  )
}
