import imageSara from '@/public/images/sara.jpg';
import Image from "next/image";

export default function Intro() {
    return (
        <section className="flex flex-col-reverse items-center gap-x-10 gap-y-4 md:flex-row md:items-center">
            <div className='mt-2 flex-1 md:mt-0'>
                <h1 className='title no-underline'>Hi, I'm Sara Ataíde Santos</h1>
                <p className='mt-3 font-light text-muted-foreground'>
                    Junior Software Engineer passionate about building impactful digital solutions.<br />
                    <span className="block mt-2">MSc Computer Engineering student @ ISCTE · BSc Information Systems Management @ IPS</span>
                    <span className="block mt-2">Experience in web development (React, Next.js, Node.js), data & BI (Power BI, SQL, Python), and machine learning (NLP, text mining).</span>
                    <span className="block mt-2">3 internships · 4+ real-world projects · Young Talent @ Valtech</span>
                </p>
            </div>
            <div className='relative'>
                <Image className="flex-1 rounded-lg grayscale"
                src={imageSara} alt="Sara Santos" width={200} height={200} priority />
            </div>
        </section>
    )
}