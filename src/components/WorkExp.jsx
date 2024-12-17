import { FaRegClock, FaBriefcase } from 'react-icons/fa';

const WorkExperience = () => {
    const experiences = [
        {
            title: 'Software Developer Intern',
            company: 'Aero2Astro Technologies',
            duration: 'Apr 2024 - Jul 2024',
            description: [
                "Built and deployed the responsive web app for hiring and shortlisting Drone pilots, boosting user engagement by 30% and achieving 250+ registrations within a month, ranking among the top three on Google.",
                "Enhanced the company website, applying SEO techniques, which improved speed by 70% and reduced load time by 50%.",
                "Designed key algorithms for drone data analytics software, developed RESTful APIs, and 3D visualization components using Three.js.",
            ],
        },
    ];

    return (
        <div className="bg-white dark:bg-black shadow-lg rounded-lg py-8 px-4 border-t-2 border-violet-600">
            <h2 className="text-xl px-4 font-semibold opacity-95">WORK EXPERIENCE</h2>
            <div className="mt-3 mx-auto py-3 px-2">

                <ol className="border-l-2 border-stone-600 pl-3 relative">

                    {experiences.map((experience, index) => (

                        <li key={index} className="text-sm mb-4 font-medium">
                            <div className="w-4 h-4 rounded-full absolute bg-violet-600 left-[-9px] "></div>
                            <div className="text-xs font-medium opacity-70 pl-6 mt-2">{experience.duration}</div>
                            <div className="flex gap-2 items-center">
                                <FaBriefcase className="text-lg text-violet-900" />
                                <div>

                                    <div className="font-semibold text-xl">{experience.title}</div>
                                    <div className='opacity-80'>{experience.company}</div>
                                </div>
                            </div>

                            {/* Description List */}
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                {experience.description.map((desc, idx) => (
                                    <li key={idx} className="text-xs md:text-sm font-normal text-gray-600 dark:text-gray-300">{desc}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default WorkExperience;
