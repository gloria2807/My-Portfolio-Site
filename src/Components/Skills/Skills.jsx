import React from 'react';
import { FaCode, FaDatabase } from 'react-icons/fa6';
import { LuBrainCircuit } from 'react-icons/lu';

const skillsData = [
    {
        name: "Frontend Development",
        icon: (
            <FaCode className="text-5xl duration-300" />
        ),
        description: "I build clean, user-focused interfaces using ReactJS, TailwindCSS, HTML5, and CSS3. I pay attention to structure, responsiveness, and user flow; always aiming for smooth performance and modern design.",
        aosDelay: "300",
    },
    {
        name: "Database Management",
        icon: (
            <FaDatabase className="text-5xl duration-300" />
        ),
        description: "I work with MySQL in Laravel and PHP environments to manage, structure, and query data. I handle everything from schema design to data handling via phpMyAdmin and ensure efficient, secure data flow across projects.",
        aosDelay: "500",
    },
    {
        name: "Problem Solving & Technical Thinking",
        icon: (
            <LuBrainCircuit className="text-5xl duration-300" />
        ),
        description: "I integrate RESTful APIs, implement authentication systems, and manage version control with Git. I think in terms of systems debugging, optimizing, and learning on the go to ship reliable, maintainable solutions.",
        aosDelay: "700",
    },
];

const Skills = () => {
  return (
    <main className='p-4' data-aos='fade-up' data-aos-delay='500'>
    <section id='skills'>
    <div className="container px-8 py-14 lg:ml-30 lg:py-14 sm:min-h-[600px]">
        <div>
            <h1 data-aos='fade-up'
            className='text-3xl font-semibold text-center
            sm:text-4xl mb-8 text-white'>
                My Experience And Skills
            </h1>
            <p data-aos='fade-up' data-aos-delay='100' className='text-gray-200 mt-2 sm:mt-4 text-sm sm:text-base'>
                With four years of hands-on experience, I’ve built user interfaces, managed databases, integrated systems, and written code that solves real problems while constantly refining my approach to every challenge.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4">
                {skillsData.map((data, index) => (
                    <div key={index} data-aos='fade-up' data-aos-delay={data.aosDelay} className="text-center group space-y-3 sm:space-y-6 p-4 sm:py-10 bg-gradient-to-b from-amber-300 to-black
                    hover:bg-gradient-to-r
                    hover:shadow-[0_0_40px_#FFC300] text-white
                    rounded-lg duration-300">
                        <div className="grid place-items-center text-white"> {data.icon} </div>
                        <h1 className='text-2xl'>{data.name}</h1>
                        <p>{data.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
    </section>
    </main>
  );
};

export default Skills;