// Hero.tsx
// Main hero section for homepage
import Image from "next/image";


export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center gap-3 md:gap-4 max-w-xl mx-auto text-center px-4 sm:px-6">
      <Image
        src="/images/sara.jpg"
        alt="Sara Ataíde Santos"
        width={154}
        height={154}
        className="w-32 h-32 md:w-[154px] md:h-[154px] border-2 border-green-200 shadow-md mb-1 md:mb-2 object-cover rounded-full"
        priority
      />
      <span className="px-3 py-1 md:px-4 md:py-1 rounded-full bg-green-100 text-green-900 font-semibold text-xs md:text-sm tracking-wide mb-1 md:mb-2">
        OPEN TO OPPORTUNITIES
      </span>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight text-black dark:text-white">
        Sara Ataíde Santos
      </h1>
      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-700 dark:text-gray-200 leading-snug">
        MSc Computer Engineering student (ISCTE) · BSc Information Systems Management (IPS) · Trainee Web Developer (Valtech)
      </h3>
      <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 max-w-lg mx-auto">
        Passionate about web development, data science, and building real-world products.
      </p>
      <div className="flex gap-6 justify-center">
       {/*  <a
          href="/docs/SaraSantos_CV_english.pdf"
          download
          className="text-base font-semibold underline underline-offset-4 hover:text-green-800 dark:hover:text-green-400 transition-colors"
        >
          Download CV
        </a> */}
      </div>
    </section>
  );
}
