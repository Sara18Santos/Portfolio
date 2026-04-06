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
    <section className="max-w-3xl mx-auto py-12 md:py-16 px-4 sm:px-6" id="experience">
      <h3 className="text-xs md:text-sm font-semibold text-gray-600 tracking-widest mb-2 dark:text-white uppercase">Experience</h3>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-black dark:text-white">Where I've Worked</h2>

      <div className="space-y-8 md:space-y-10">
        {experience.map((exp) => (
          <div key={exp.title} className="flex flex-col md:flex-row md:gap-8">
            <div className="w-full md:w-40 md:min-w-32 text-gray-500 md:text-gray-400 text-sm md:text-base font-semibold md:font-normal mb-2 md:mb-0">
              {exp.period}
            </div>
            <div className="flex-1 border-l-2 md:border-l-2 border-green-900 pl-4 md:pl-6">
              <div className="font-bold text-lg md:text-xl text-black dark:text-white">
                {exp.title}
              </div>
              <div className="text-green-800 dark:text-green-400 text-sm md:text-base font-semibold">
                {exp.company}
              </div>
              <div className="mb-3 text-gray-700 dark:text-gray-400 text-sm md:text-base leading-relaxed">
                {exp.description}
              </div>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`inline-flex items-center gap-1 text-[10px] md:text-[11px] font-semibold px-2 md:px-1.5 py-1 md:py-0.5 rounded dark:bg-green-800 dark:text-zinc-300 bg-gray-200 text-gray-800`}
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
