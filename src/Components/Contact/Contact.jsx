import React from 'react';

const Contact = () => {
  return (
    <section id='contact' data-aos='fade-up' data-aos-delay='300' className='mb-10 ml-10 mr-10 overflow-hidden items-center relative'>
      <div className='py-8 sm:min-h-[400px] sm:grid sm:place-items-center'>
        <div className='mb-6'>
        <h1 className='text-center text-amber-400 font-bold text-4xl'>Contact <span className='text-white'>Us</span></h1>
        </div>
        <div>
        <form action="https://formspree.io/f/xpwrjzwv" 
  method="POST" className='space-y-4'>
          <input type='text' name='name' id='name' placeholder='Your name' icon='person' className='w-full px-4 py-2 text-white bg-gray-500 rounded-lg focus:outline-none' />
           <input  type='email' name='email' id='email' placeholder='Your email' icon='mail' className='w-full px-4 py-2 text-white bg-gray-500 rounded-lg focus:outline-none'/>
           <textarea name='message' id='message' placeholder='Your message' icon='mail' className='w-full px-4 py-2 text-white bg-gray-500 rounded-lg focus:outline-none'/>
           <button className='w-full text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#FFC300] hover:text-black hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-lg'>
            Send Message
           </button>
        </form>
          </div>
          </div>
    </section>
  );
};

export default Contact;