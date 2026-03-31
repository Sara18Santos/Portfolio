import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";

// You may want to move this data to a separate file or import it from your README/data file
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

export default function ProjectsCarousel() {
  return (
    <section className="w-full max-w-2xl mx-auto my-16">
      <h2 className="text-xs font-semibold tracking-widest text-gray-500 mb-2 uppercase">Projects</h2>
      <h3 className="text-3xl font-black mb-8 text-black dark:text-white">Featured Work</h3>
      <Carousel className="relative">
        <CarouselContent>
          {workData.map((project, idx) => (
            <CarouselItem key={idx} className="flex flex-col items-center justify-center p-6">
              <div className="w-full h-56 relative rounded-lg overflow-hidden shadow-md mb-4">
                <Image src={project.bgImage} alt={project.title} fill className="object-cover" />
              </div>
              <h4 className="text-xl font-bold text-black dark:text-white mb-1">{project.title}</h4>
              <p className="text-base text-gray-700 dark:text-gray-300">{project.description}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
