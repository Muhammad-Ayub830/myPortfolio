'use client'
import { Inter, Open_Sans } from 'next/font/google';
import Link from 'next/link';
import React from 'react'
import { FaFileWaveform, FaGithub } from 'react-icons/fa6';
import { SiLabview, SiLivechat, SiLivejournal } from 'react-icons/si';
const inter = Open_Sans({
  subsets: ["latin"]
})
const Projects = () => {
  return (
    <div className={`min-h-screen ${inter.className}    `}>
      <div className="content mt-20 ">
        <div className="text-conent">
          <div className="heading  text-[50px] font-bold">
            <span className="text-[60px] font-bold text-[#808080]">My </span>Projects
          </div>
          <p className='text font-semibold text-[#808080da]'>BUSINESS PROJECTS, PERSONAL PROJECTS, WORKS AND CREATIONS.</p>
        </div>
        <div className="projects text-white ">
          {/* first project that showcase my nextjs Dashboard */}
       
         <div className="  project mb-20  mt-20 w-full rounded-[46px]   bg-[url(/dashboard.png)] bg-center bg-cover bg-no-repeat">
            <div className=" project-bg p-3 md:p-10 w-full h-full rounded-[46px] flex items-center justify-center opacity-90 hover:opacity-100 transition duration-500 ">
              <div className="cont">
                <h1 className='text-md sm:text-xl md:text-4xl mb-5 mt-50 text-center font-bold'>Multi Pages Dashboard Using Next.Js & Tailwind</h1>
                <p className='text-sm'>Built an E-commerce Dashboard using Next.js, Tailwind, and ReCharts.
                  Includes charts and tables for clear business insights.</p>
                  <div className="feature mt-5  sm:mt-15   justify-center">
                  <div className="tech-stack flex gap-3 items-center justify-center  ">
                    <p className='font-bold'>Tech-Stack</p>
                    <p>Next.js</p>
                    <p>Re-Charts</p>
                    <p>Tailwind</p>
                  </div>
                  <div className="feature mt-5 flex md:flex-row flex-col gap-3 items-center justify-center  ">
                    <p className='font-bold'>Features</p>
                    <p>Role-based dashboard</p>
                    <p>Responsive UI from Figma</p>
                  </div>
                  </div>
 <div className="links flex items-center flex-col md:flex-row  justify-center mb-20 gap-1 md:gap-10 mt-5">
          
             <button className="md:w-[160px] w-[140px] h-[50px] text-[#000000] bg-[#f0f0f0] h-[40px] md:h-[50px] inset-shadow-xl  p-3 text-[14px] font-semibold rounded-xl md:mt-5    cursor-pointer flex items-center justify-center gap-3"><SiLabview className='text-lg'/><Link href={`https://dashobards-using-next.vercel.app/dashboard`}>Live View</Link></button>
             <button className="md:w-[160px] w-[140px] h-[50px] text-[#000000] bg-[#f0f0f0] h-[40px] md:h-[50px] inset-shadow-xl  p-3 text-[14px] font-semibold rounded-xl md:mt-5    cursor-pointer flex items-center justify-center gap-3"><FaGithub/><Link href={`https://github.com/Muhammad-Ayub830/DashobardsUsingNext.git`}>Github Repo</Link></button>
             <button className="md:w-[160px] w-[140px] h-[50px] text-[#000000] bg-[#f0f0f0] h-[40px] md:h-[50px]  p-3 text-[14px] font-semibold rounded-xl md:mt-5 cursor-pointer">Pictures</button>

                  </div>
              </div>

            </div>

          </div>
           
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default Projects
