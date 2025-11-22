import Footer from '@/components/Footer'
import React from 'react'

const About = () => {
  return (
   <div className={`    `}>
      <div className="content mt-20 flex items-center">
        <div className="text-conent">
          <div className="heading  text-[60px] font-bold">
            <span className="text-[60px] font-bold text-[#808080]">About </span>Me
          </div>
         <div className="sub-heading font-bold text-3xl md:w-[70%] mt-10">
            I’m a Full-Stack Developer specializing in Next.js, React.js, Express.js, MongoDB, and Tailwind CSS.
         </div>
         <p className="description text-[#808080] md:w-[80%] mt-10 text-lg font-semibold font-sans">
            I build fast, scalable, and user-focused applications—from crafting clean, responsive UIs to developing secure and optimized back-end systems. My experience includes building REST APIs, session & cookie-based authentication, performance optimization, and turning Figma designs into fully functional products.
         </p>
         <p className="description text-[#808080] md:w-[80%] mt-10 text-lg font-semibold font-sans">
            With two years of hands-on development across full-stack and front-end projects, I combine technical precision with creative problem-solving to deliver products that not only work perfectly but also feel great to use.
         </p>

        </div>
      
      </div>
            <hr className="mt-50 text-[#808080]" />

<Footer/>
    </div>
  )
}

export default About
