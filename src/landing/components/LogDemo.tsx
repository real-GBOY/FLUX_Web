import LogWidget from './LogWidget'

export default function LogDemo() {
  return (
    <section className="fl-demo" id="fl-log">
      <div className="fl-demo-text reveal">
        <span className="fl-section-label">/ The Log</span>
        <h2>THIS IS WHAT ACCOUNTABILITY LOOKS LIKE.</h2>
        <p>
          Not a pie chart of your macros. Not a streak badge.{' '}
          <strong>Raw session data</strong> — what you lifted, what you improved, what you didn't.
          Green means you grew. Red means you have work to do.
        </p>
      </div>
      <div className="reveal">
        <LogWidget />
      </div>
    </section>
  )
}
