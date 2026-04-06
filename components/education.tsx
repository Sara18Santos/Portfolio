
export default function Education() {
    return (
        <section className="max-w-3xl mx-auto py-12 md:py-16 px-4 sm:px-6">
            <h2 className="text-xs md:text-sm font-semibold text-gray-600 tracking-widest mb-2 dark:text-white uppercase">Education</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-6 md:mb-8 text-black dark:text-white">Academic background</h3>

            <div className="space-y-8 md:space-y-10">
                {/* MSc */}
                <div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 md:gap-4">
                        <h4 className="text-base sm:text-lg md:text-xl font-bold text-black dark:text-white">MSc Computer Engineering</h4>
                        <span className="text-sm md:text-base text-gray-600 dark:text-gray-400 whitespace-nowrap">2024 – Present</span>
                    </div>
                    <div className="text-green-700 dark:text-green-300 font-medium mb-2 text-sm md:text-base">
                        ISCTE – Instituto Universitário de Lisboa
                    </div>
                    <div className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                        Text Mining · Intro to Machine Learning · Network &amp; Security · Computational Language Processing. Student Athlete in futsal.
                    </div>
                </div>

                {/* BSc */}
                <div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 md:gap-4">
                        <h4 className="text-base sm:text-lg md:text-xl font-bold text-black dark:text-white">BSc Information Systems Management (GSI)</h4>
                        <span className="text-sm md:text-base text-gray-600 dark:text-gray-400 whitespace-nowrap">2021 – 2024</span>
                    </div>
                    <div className="text-green-700 dark:text-green-300 font-medium mb-2 text-sm md:text-base">
                        Instituto Politécnico de Setúbal
                    </div>
                    <div className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                        Database Management Systems · Information Security · Application Development · Business Intelligence. Average: 15. Internship: 18.
                    </div>
                </div>
            </div>
        </section>
    );
}