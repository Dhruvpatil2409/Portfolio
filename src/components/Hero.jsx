export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Signature element — ghost name as page watermark */}
      <div className="hero__watermark" aria-hidden="true">DHRUV</div>

      <div className="hero__content">
        <span className="hero__eyebrow">Computer Engineering Student</span>

        <h1 className="hero__headline">
          Curious by nature,<br />
          <em>building</em> by choice.
        </h1>

        <p className="hero__sub">
          I'm Dhruv — a developer and student from India with a love for
          clean interfaces, thoughtful design, and the occasional existential question.
        </p>

        <div className="hero__actions">
          <a href="#contact" className="btn btn--primary">
            Get in touch
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#about" className="btn btn--ghost">About me ↓</a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero__scroll-hint" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Scroll
      </div>
    </section>
  )
}
