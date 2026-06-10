export default function Nav() {
  return (
    <nav className="fl-nav">
      <span className="fl-nav-logo">FLUX</span>
      <ul className="fl-nav-links">
        <li><a href="#fl-features">Features</a></li>
        <li><a href="#fl-log">The Log</a></li>
        <li><a href="#fl-manifesto">Why</a></li>
      </ul>
      <a href="#fl-cta" className="fl-nav-cta">Early Access</a>
    </nav>
  )
}
