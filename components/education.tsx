
export default function Education() {
    return (
        <section className="max-w-3xl mx-auto py-16">
            <h2 className="text-sm font-semibold text-gray-600 tracking-widest mb-2 dark:text-white">Education</h2>
            <h3 className="text-3xl font-black mb-8 text-black dark:text-white">Academic background</h3>

            <div className="space-y-10">
                {/* MSc */}
                <div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                        <h4 className="text-lg font-bold text-black dark:text-white">MSc Computer Engineering</h4>
                        <span className="text-md text-gray-600 dark:text-gray-400 mt-1 md:mt-0">2024 – Present</span>
                    </div>
                    <div className="text-green-700 dark:text-green-300 font-medium mb-1">
                        ISCTE – Instituto Universitário de Lisboa
                    </div>
                    <div className="text-md text-gray-700 dark:text-gray-300">
                        Text Mining · Intro to Machine Learning · Network &amp; Security · Computational Language Processing. Student Athlete in futsal.
                    </div>
                </div>

                {/* BSc */}
                <div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                        <h4 className="text-lg font-bold text-black dark:text-white">BSc Information Systems Management (GSI)</h4>
                        <span className="text-md text-gray-600 dark:text-gray-400 mt-1 md:mt-0">2021 – 2024</span>
                    </div>
                    <div className="text-green-700 dark:text-green-300 font-medium mb-1">
                        Instituto Politécnico de Setúbal
                    </div>
                    <div className="text-sm text-gray-700 dark:text-gray-300">
                        Database Management Systems · Information Security · Application Development · Business Intelligence. Average: 15. Internship: 18.
                    </div>
                </div>
            </div>
        </section>
    );
}