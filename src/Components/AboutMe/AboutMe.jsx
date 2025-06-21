import React from 'react';
import BannerImg from './imgabout2.jpg';
import { BiPlayCircle } from 'react-icons/bi';

const AboutMe = () => {
  return (
    <section id='about'>
    <div className='py-12 px-10 sm:py-0 relative bg-white'>
        <div className="container md:ml-30 min-h-[620px] flex items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8
            place-items-center">
                <div data-aos='fade-up' data-aos-once='false'>
                    <img src={BannerImg} alt='' 
                    className='relative w-full max-w-[400px] rounded-3xl'/>
                </div>
                <div className='lg:pr-10 relative'>
                    <div className='space-y-5 relative z-10'>
                                    <h1  data-aos='fade-up' data-aos-delay='300'
                                    className='text-4xl font-semibold text-center'>
                                        {" "}<span className='bg-clip-text text-transparent bg-gradient-to-r from-black to-[#D4AF37]'>
                                            THIS IS WHO I AM
                                            </span></h1>
                                    <p className='text-center' data-aos='fade-up' data-aos-delay='500'>
                                        With four years of hands-on experience, I’ve built user interfaces, managed databases, integrated systems, and written code that solves real problems while constantly refining my approach to every challenge.</p>
                                    </div>
                                    <div className='h-[300px] w-[300px]
                                    bg-[#D4AF37]
                                    rounded-full absolute bottom-[-50px] left-[300px]
                                    blur-3xl opacity-30'></div>
                                </div>
            </div>
        </div>
    </div>
    </section>
  );
};

export default AboutMe;