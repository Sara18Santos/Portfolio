// experience for about page

const experience = [
  {
    period: "Dec 2025 - May 2026",
    title: "Young Talent Program - Valtech",
    company: "Valtech",
    description:
      "Developed 2 projects over 6 months using React + Next.js, Javascript and Node.js with Express.js",
    tags: ["React", "Next.js", "Node.js", "Express.js", "JavaScript"],
  },
  {
    period: "Jul – Sep 2025",
    title: "Summer Internship",
    company: "Caixa Mágica Software",
    description:
      "Built a MERN stack web app to monitor product prices, developed in pairs.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Github"],
  },
  {
    period: "May – Sep 2024",
    title: "Curricular Internship",
    company: "Volkswagen Autoeuropa",
    description:
      "Assembly area project in Microsoft Power BI focusing on defect volume analysis during vehicle manufacturing.",
    tags: ["Power BI", "Power Query"],
  },
];

export default function Experience() {
  return (
    <section className="max-w-3xl mx-auto py-16" id="experience">
      <h3 className="text-sm font-semibold text-gray-600 tracking-widest mb-2 dark:text-white">Experience</h3>
      <h2 className="text-3xl font-bold mb-10 text-black dark:text-white">Where I've Worked</h2>

      <div>
        {experience.map((exp) => (
          <div key={exp.title} className="flex gap-8">
            <div className="w-40 min-w-32 text-gray-400">{exp.period}</div>
            <div className="flex-1 border-1-2 border-green-900 pl-6">
              <div className="font-bold text-lg text-black dark:text-white">
                {exp.title}
              </div>
              <div className="text-green-800 dark:text-green-400">
                {exp.company}
              </div>
              <div className="mb-2 text-gray-800 dark:text-gray-400">
                {exp.description}
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`inline-flex items-center gap-1 text-[11px] font-semibold px-1.5 py-0.5 rounded dark:bg-green-800 dark:text-zinc-300 bg-gray-200 text-gray-800`}
                  >
                    {tag}
                 
                  </span>
                ))}
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
}
