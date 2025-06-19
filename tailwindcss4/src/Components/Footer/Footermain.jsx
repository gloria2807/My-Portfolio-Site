import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa';
import { FaGithub, FaLocationDot, FaTwitter } from 'react-icons/fa6';


const FooterLinks = [
   { id: 1, name: 'Home', link: '#home' },
        { id: 2, name: 'About', link: '#about' },
        { id: 3, name: 'Skills', link: '#skills' },
        { id: 4, name: 'My Projects', link: '#projects' },
];

const Footermain = () => {
  return (
    <section data-aos='fade-up' data-aos-delay='300'>
    <div className="bg-transparent rounded-t-3xl text-white">
        <div className="container">
            <div className="grid md:grid-cols-2">
                <div className="px-12">
                    <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3'>
                        My Portfolio
                    </h1>
                    <p className='text-sm'>A showcase of what I've built, learned and keep getting better at.</p>
                    <br />
                    <div>
                        <div className="flex items-center gap-3">
                            <FaLocationArrow />
                            <p>Worldwide</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaMobileAlt />
                            <p>+234-812-692-7066</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 mt-6">
                    <a href='https://github.com/gloria2807'>
                        <FaGithub className='text-3xl hover:text-primary duration-300' />
                    </a>
                    <a href='#'>
                        <FaTwitter className='text-3xl hover:text-primary duration-300'/>
                    </a>
                    <a href='https://www.linkedin.com/in/gloria-enyi-bab16823a'>
                        <FaLinkedin className='text-3xl hover:text-primary duration-300'/>
                    </a>
                    </div>
                </div>
                <div className="px-12 grid grid-cols-1 sm:grid-cols-2 col-span-1 md:pl-10">
                    <div>
                        <div className="py-8 px-4">
                            <h1 className="text-xl font-bold mb-3">Quick Links</h1>
                                <ul className='space-y-3'>
                                    {FooterLinks.map(({id, name, link}) => {
                                        return(
                                        <li
                                        key={id}
                                        className='hover:translate-x-1 duration-300'
                                        >
                                            <a href={link}
                                            className='cursor-pointer hover:text-primary'
                                            >
                                                {name}
                                            </a>
                                        </li>
                                        );
                                    })
                                    }
                                </ul>
                        </div>
                    </div>
                    <div>
                         <div className="py-8 px-4">
                            <h1 className="text-xl font-bold mb-3 flex items-center"><FaLocationDot />Location</h1>
                               <p>Our services are rendered worldwide, remotely </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
  );
};

export default Footermain;