import Image from "next/image";

const workData = [
  {
    title: 'Defect Volume Dashboard',
    description: 'Power BI · Volkswagen Autoeuropa',
    bgImage: '/work-1.png',
  },
  {
    title: 'Price Monitor Web App',
    description: 'MERN Stack · Caixa Mágica',
    bgImage: '/work-2.png',
  },
  {
    title: 'Valtech Project #1',
    description: 'React · Next.js · Node.js',
    bgImage: '/work-3.png',
  },
  {
    title: 'Valtech Project #2',
    description: 'JavaScript · Express.js',
    bgImage: '/work-4.png',
  },
];

export default function ProjectsCards() {
  return (
    <section className="w-full max-w-3xl mx-auto my-16">
      <h2 className="text-xs font-semibold tracking-widest text-gray-500 mb-2 uppercase">Projects</h2>
      <h3 className="text-3xl font-black mb-8 text-black dark:text-white">Featured Work</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {workData.map((project, idx) => (
          <div key={idx} className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden flex flex-col">
            <div className="relative h-48 w-full">
              <Image src={project.bgImage} alt={project.title} fill className="object-cover" />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h4 className="text-lg font-bold text-black dark:text-white mb-1">{project.title}</h4>
              <p className="text-base text-gray-700 dark:text-gray-300">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
