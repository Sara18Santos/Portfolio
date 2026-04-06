import Image from "next/image";
import Link from "next/link";



const workData = [
  {
    title: 'Job Application',
    description: 'A TypeScript project for managing job applications, featuring modern UI and workflow automation.',
    link: 'https://github.com/Sara18Santos/Job-application',
    bgImage: "/images/job.png",
  },
  {
    title: 'BookStore',
    description: 'A JavaScript-based online bookstore app with CRUD operations and responsive design.',
    link: 'https://github.com/Sara18Santos/BookStore',
    bgImage: '/images/bookstore.png',
  },
  {
    title: 'Weather Application',
    description: 'A Python project that fetches and displays weather data for any city using an external API.',
    link: 'https://github.com/Sara18Santos/Weather-Application',
    bgImage: '/images/weather.png',
  },
  {
    title: 'todo-app',
    description: 'A TypeScript to-do list app with a clean interface and persistent storage.',
    link: 'https://github.com/Sara18Santos/todo-app',
    bgImage: '/images/todo.png',
  },
];

export default function ProjectsCards() {
  return (
    <section className="w-full max-w-3xl mx-auto px-4 sm:px-6">
      <h2 className="text-xs md:text-sm text-primary font-semibold tracking-widest mb-2 uppercase">Projects</h2>
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-6 md:mb-8 text-gray-900 dark:text-white">Featured Work</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {workData.map((project, idx) => (
          <div key={idx} className="bg-white dark:bg-zinc-900 rounded-lg shadow-md overflow-hidden flex flex-col transform transition-transform hover:scale-105">
            <div className="w-full h-40 sm:h-48 relative">
              <Image src={project.bgImage} alt={project.title} fill className="object-cover" />
            </div>
            <div className="p-4 sm:p-5 flex flex-col flex-1">
              <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1">{project.title}</h4>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3 line-clamp-2">{project.description}</p>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto text-green-600 dark:text-green-600 font-semibold text-sm sm:text-base underline underline-offset-4 hover:text-green-900 dark:hover:text-green-200 transition-colors"
              >
                View on GitHub
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
