import ProjectsCards from "@/components/projects-cards";
export default function Projects() {
  return (
    <section className="pb-16 md:pb-24 pt-24 sm:pt-28 md:pt-40 max-w-3xl mx-auto" id="projects">
      <div className="px-4 sm:px-6">
        <h2 className="text-xs md:text-sm text-primary font-semibold tracking-widest mb-2 uppercase">Featured Projects</h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-6 md:mb-8 text-gray-900 dark:text-white">My Work</h3>
      </div>
      <ProjectsCards />
    </section>
  );
}
