'use client'
import { Inter, Open_Sans } from 'next/font/google';
import React from 'react'
const inter = Open_Sans({
  subsets:["latin"]
})
const Projects = () => {
   return (
    <div className={`h-screen ${inter.className}    `}>
      <div className="content mt-20 flex items-center">
        <div className="text-conent">
          <div className="heading  text-[50px] font-bold">
            <span className="text-[60px] font-bold text-[#808080]">My </span>Projects
          </div>
         <p className='text font-semibold text-[#808080da]'>BUSINESS PROJECTS, PERSONAL PROJECTS, WORKS AND CREATIONS.</p>
        </div>
      
      </div>
{/* <Footer/> */}
    </div>
  );
}

export default Projects
