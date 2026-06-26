import { useReveal } from '../hooks/useReveal'

const skillGroups = [
  {
    category: 'Frontend',
    tags: ['React', 'HTML', 'CSS', 'JavaScript', 'Vite', 'Tailwind CSS'],
  },
  {
    category: 'Languages',
    tags: ['Java', 'Python', 'C', 'SQL'],
  },
  {
    category: 'Tools',
    tags: ['Git', 'VS Code', 'npm', 'GitHub', 'Figma'],
  },
  {
    category: 'Exploring',
    tags: ['TypeScript', 'Game Dev', 'Pixel Art', 'Unity', 'Node.js'],
  },
]

export default function Skills() {
  const ref = useReveal()

  return (
    <section className="section" id="skills" ref={ref}>
      <div className="section__inner">
        <p className="section__label reveal">Skills</p>
        <h2 className="section__title reveal reveal-delay-1">
          What I work with.
        </h2>

        <div className="skills__groups">
          {skillGroups.map((group, i) => (
            <div key={group.category} className={`reveal reveal-delay-${i + 1}`}>
              <p className="skills__group-label">{group.category}</p>
              <div className="skills__tags">
                {group.tags.map((tag) => (
                  <span className="skill-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
