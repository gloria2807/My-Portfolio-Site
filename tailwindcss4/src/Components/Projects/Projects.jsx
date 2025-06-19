import React from 'react';
import pro1 from './a.png';
import pro2 from './b.jpeg';
import pro3 from './c.png';
import pro4 from './d.jpeg';
import pro5 from './e.jpeg';
import pro6 from './f.jpeg';

const ProjectCard = ({ image, title, description, link }) => {
  return (
        <article className='relative max-w-sm bg-gray-800 rounded overflow-hidden shadow-lg group'>
            <div className="absolute z-0 w-40 h-60 sm:w-60 sm:h-60 bg-[#FFC300] rounded-full blur-3xl opacity-50 -top-5 left-10"></div>
            <div className="relative z-10">
                <figure className='relative'>
                    <img src={image} alt={title} className='w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110' />
                    <a href={link} target='_blank' rel='noopener noreferrer' className='absolute h-[202px] inset-0 flex items-center justify-center bg-amber-300 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <button className='bg-white font-medium text-black py-2 px-4 rounded-3xl shadow hover:text-white hover:bg-black'>
                            Live Preview
                        </button>
                    </a>
                </figure>
                <div className="px-6 py-4">
                    <header>
                        <h3 className='text-white font-bold text-xl mb-2'>{title}</h3>
                    </header>
                    <p className='text-gray-200 text-base'>{description}</p>
                </div>
            </div>
        </article>
  );
};

export default function Projects(){
const projectList = [
    {
        image:pro1,
        title: 'Metaverse Website',
        description: 'An immersive landing page for a metaverse concept, built with ReactJS and TailwindCSS. Sleek animations and a modern UI bring futuristic themes to life while staying responsive.',
        link: ' '
    },
    {
        image:pro2,
        title: 'Yardsale Website',
        description: 'A custom ecommerce site for the resale of fire-damaged items. Built with PHP, it includes inventory display, live search features, and a directory to chat with the administrator.',
        link: 'https://cornerstoneyardsale.oceoonline.org'
    },
    {
        image:pro3,
        title: 'Ecommerce Website',
        description: 'A PHP-based platform for listing and managing inventory. It allows the administrator to post and manage items within a clean, simple layout.',
        link: ' '
    },
    {
        image:pro4,
        title: 'Venture Studio Website',
        description: 'A clean, static website built with HTML, CSS, and TypeScript. Designed to showcase a modern venture studio with a focus on simplicity and performance.',
        link: 'https://gloria2807.github.io/WordFund-Project---Alpha-Team'
    },
    {
        image:pro5,
        title: 'Chat Bot',
        description: 'A functional AI chatbot interface created with ReactJS. Lightweight, interactive, and ideal for testing conversational logic in a clean UI.',
        link: 'https://glow-pi.vercel.app'
    },
    {
        image:pro6,
        title: 'Education Website',
        description: 'A Laravel-based school portal featuring courses, exam resources, and student account management. Built for structure, security, and academic efficiency.',
        link: 'https://islt.org'
    },
    ];
    return(
        <main className='p-4' data-aos='fade-up' data-aos-delay='500'>
            <section id='projects'>
                <header className='text-center'>
                    <h1 className='text-3xl text-white sm:text-4xl font-bold mb-6'>
                        My <span className='text-amber-400'>Projects</span>
                    </h1>
                </header>
            </section>
            <section className='flex flex-wrap gap-4 justify-center mt-6'>
                {projectList.map((project,index)=>(
                    <ProjectCard
                    key={index}
                    image={project.image}
                    title={project.title}
                    description={project.description}
                    link={project.link} />
                ))}
            </section>
        </main>
    );
};