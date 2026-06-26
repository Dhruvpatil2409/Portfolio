import { useReveal } from '../hooks/useReveal'

const facts = [
  { label: 'Location',   value: 'India 🇮🇳' },
  { label: 'Status',     value: 'Diploma Student' },
  { label: 'Studying',   value: 'Computer Engineering' },
  { label: 'Building',   value: 'Web apps & indie games' },
  { label: 'Interests',  value: 'React, Game Dev, Philosophy' },
  { label: 'Currently',  value: 'Open to collaborations' },
]

export default function About() {
  const ref = useReveal()

  return (
    <section className="section about" id="about" ref={ref}>
      <div className="section__inner">
        <div className="about__grid">
          {/* Bio */}
          <div>
            <p className="section__label reveal">About me</p>
            <h2 className="section__title reveal reveal-delay-1">
              Developer, student,<br />chronic overthinker.
            </h2>
            <div className="about__bio">
              <p className="reveal reveal-delay-2">
                I'm <strong>Dhruv</strong>, a Computer Engineering student with a passion for
                building things on the web. I started with the basics — HTML, CSS, Java — and
                gradually fell in love with React and the craft of clean UI.
              </p>
              <p className="reveal reveal-delay-3">
                Beyond code, I'm fascinated by game design, philosophy of mind, and the
                question of why some things just <em>feel</em> right. I believe the best
                software is built with the same care as good writing — every detail intentional,
                nothing wasted.
              </p>
              <p className="reveal reveal-delay-4">
                I'm currently looking for opportunities to collaborate, contribute, and grow.
                If something here resonates with you, let's talk.
              </p>
            </div>
          </div>

          {/* Quick facts */}
          <div className="reveal reveal-delay-2">
            <div className="about__facts">
              {facts.map((fact) => (
                <div className="about__fact" key={fact.label}>
                  <span className="about__fact-label">{fact.label}</span>
                  <span className="about__fact-value">{fact.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
