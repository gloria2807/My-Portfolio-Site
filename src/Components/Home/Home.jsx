import React from 'react';
import { 
    FaLinkedin,
    FaGithub,
    FaTwitter,
} from 'react-icons/fa6';
import Typical from 'react-typical';

const Home = () => {
  return (
    <section id='home'>
        <div className="container py-17.5 lg:ml-30 flex items-center justify-center" data-aos='fade-up' data-aos-delay='500'>
            <div className="parent flex items-center text-shadow-violet-50">
                <div className="details">
                    <div className="colz">
                        <div className="colz-icon flex items-center justify-center py-1">
                                            <a href='#'>
                                                <FaGithub className='bg-transparent w-4 h-4 rounded-full shadow-custom-inset hover:scale-110 transition-all duration-300 text-2xl text-white cursor-pointer' />
                                            </a>
                                            <a href='#'>
                                                <FaTwitter className='bg-transparent w-4 h-4 rounded-full shadow-custom-inset hover:scale-110 transition-all duration-300 text-2xl text-white cursor-pointer'/>
                                            </a>
                                            <a href='#'>
                                                <FaLinkedin className='bg-transparent w-4 h-4 rounded-full shadow-custom-inset hover:scale-110 transition-all duration-300 text-2xl text-white cursor-pointer'/>
                                            </a>
                                            </div>
                </div>

                <div className="name text-2xl flex items-center justify-center">
                    <span className='text-gray-200'>
                        {" "}Hello, I'm 
                        <span className='text-white'> Gloria</span>
                    </span>
                </div>
                <div className='flex items-center justify-center'>
                    <p className='tagline text-gray-200 ml-10 mr-10 font-poppins'>
                            Shaping smart, user-centric experiences
                        </p>
                </div>
                
                <div className="role h-[60px] overflow-hidden flex flex-col items-center justify-center px-10">
                    <span className='text-gray-200'>
                        {" "}
                        <h1 className='text-xl font-cursive flex items-center justify-center'>
                            {" "}
                            <Typical
                            loop={Infinity} 
                            steps={[
                            "Sleek interfaces w/ ReactJS 🔴",
                            2000,
                            "Responsive designs w/ TailwindCSS💻",
                            2000,
                            "Clean code w/ HTML & CSS3😎",
                            2000,
                            "MySQL database w/ PHP🔷",
                            2000,
                            "Figma Designs📱",
                            2000,
                            ]}
                            />
                        </h1>
                    </span>
                </div>
                <div className='flex items-center justify-center'>
                <div className="options gap-3"> 
                    <button className='btn primary-btn'>
                       <a href='#contact'>
                            Hire Me</a>
                    </button>
                        <button className='btn secondary-btn'>
                            <a href='Enyi.docx' download="EnyiGloriaResume.docx">
                            Get Resume</a>
                        </button> 
                </div>
                </div>
            </div>
            
            <div className="picture flex items-center justify-center shadow-[0_1px_0_0_white]">
                <div className="background"></div>
            </div>
            <div className='h-[300px] w-[300px] bg-[#FFD700] rounded-full
            absolute top-0 left-0 opacity-50 blur-3xl animated-wrapper'></div>
        </div>
    </div>
    
    </section>
  );
};

export default Home;