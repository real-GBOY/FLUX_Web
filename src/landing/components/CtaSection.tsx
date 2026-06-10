import { useState } from 'react'

export default function CtaSection() {
  const [email, setEmail] = useState('')
  const [locked, setLocked] = useState(false)
  const [emailErr, setEmailErr] = useState(false)

  function handleSignup() {
    if (!email || !email.includes('@')) {
      setEmailErr(true)
      setTimeout(() => setEmailErr(false), 1000)
      return
    }
    setLocked(true)
    // TODO: hook up to your actual API / waitlist endpoint
  }

  return (
    <section className="fl-cta-section" id="fl-cta">
      <div className="fl-cta-bg" />
      <p className="fl-cta-eyebrow reveal">/ Early Access</p>
      <h2 className="fl-cta-headline reveal">
        STOP<br />
        <span className="fl-lime">PLANNING</span><br />
        TO LIFT.
      </h2>
      <p className="fl-cta-sub reveal">
        FLUX launches soon. Get notified first. No noise — just the drop date and your login.
      </p>
      <div className="fl-email-row reveal">
        <input
          className={`fl-email-input${emailErr ? ' error' : ''}`}
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={locked}
        />
        <button
          className={`fl-email-btn${locked ? ' locked' : ''}`}
          onClick={handleSignup}
          disabled={locked}
        >
          {locked ? 'LOCKED IN ✓' : 'LOCK IN'}
        </button>
      </div>
    </section>
  )
}
