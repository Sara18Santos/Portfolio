// Skills.tsx
// Skills section for homepage
export default function Skills() {
	return (
		<section className="max-w-3xl mx-auto py-12 md:py-16 px-4 sm:px-6" id="skills">
			<h2 className="text-xs md:text-sm font-semibold tracking-widest text-gray-500 mb-2 uppercase">Skills</h2>
			<h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-6 md:mb-8 text-black dark:text-white">What I work with</h3>

			<div className="flex flex-col md:flex-row gap-8 md:gap-12">
				{/* Technical Skills */}
				<div className="flex-1">
					<h4 className="text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 md:mb-4 uppercase tracking-wide">Technical</h4>
					<ul className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2 text-sm sm:text-base text-black dark:text-white">
						<li>Python</li>
						<li>JavaScript</li>
						<li>React</li>
						<li>Next.js</li>
						<li>Node.js</li>
						<li>SQL</li>
						<li>MongoDB</li>
						<li>Power BI</li>
						<li>Git</li>
						<li>SAP</li>
						<li>Playwright</li>
					</ul>
				</div>

				{/* Methodologies & Soft Skills */}
				<div className="flex-1">
					<h4 className="text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 md:mb-4 uppercase tracking-wide">Methodologies & Soft Skills</h4>
					<ul className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2 text-sm sm:text-base text-black dark:text-white">
						<li>Scrum / Agile</li>
						<li>SDLC</li>
						<li>BPMN</li>
						<li>Machine Learning</li>
						<li>Text Mining</li>
						<li>Teamwork</li>
						<li>Leadership</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
