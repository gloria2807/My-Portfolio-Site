import React, { useEffect } from 'react';
import Profile from './Components/Home/Profile';
import AOS from 'aos';
import 'aos/dist/aos.css';

  function App() {
    useEffect(()=>{
      AOS.init({
        duration: 1000,
      })
    },[])

return (
<div className="overflow-hidden">
  <div className='-bg-linear-230 from-[#D4AF37] to-[#000000]'>
  <Profile />
  </div>
  </div>
);
  };


export default App;
