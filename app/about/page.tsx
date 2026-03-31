import Experience from '@/components/experience'
import Education from '@/components/education'
import Skills from '@/components/skills'

const cards = [
  {
    icon: '⌨',
    title: 'Languages & Frameworks',
    desc: 'Python · JavaScript · React · Next.js · Node.js · C# · SQL · HTML & CSS · MongoDB',
  },
  {
    icon: '🎓',
    title: 'Education',
    desc: 'MSc Computer Engineering — ISCTE (2024–present)\nBSc Information Systems Management — IPS (2021–2024, avg 15)',
  },
  {
    icon: '📁',
    title: 'Experience',
    desc: '3 internships across Volkswagen Autoeuropa, Caixa Mágica Software, and Valtech\'s Young Talent Program.',
  },
]

export default function About() {
  return (
    <>
      <section className="pb-24 pt-40 max-w-3xl mx-auto" id="about">
        <h1 className="text-primary font-semibold uppercase tracking-widest mb-2">About</h1>
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">A snapshot of my profile</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((c) => (
          <div
            key={c.title}
            className="bg-white dark:bg-zinc-900 rounded-xl shadow-md p-6 flex flex-col items-center text-center border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-all duration-200 hover:-translate-y-2"
          >
            <div className="text-4xl mb-3">{c.icon}</div>
            <p className="font-semibold text-lg mb-1 text-zinc-900 dark:text-zinc-100">{c.title}</p>
            <p className="text-zinc-600 dark:text-zinc-400 whitespace-pre-line text-sm">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <Experience />
    <Education />
    <Skills />
    </>
  )
}
