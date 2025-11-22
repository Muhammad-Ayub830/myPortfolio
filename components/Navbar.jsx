'use client'
import { Inter, Open_Sans } from 'next/font/google';
import Link from 'next/link'
import React from 'react'
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { SiLinkedin } from "react-icons/si";

const nav_font = Open_Sans({
  subsets:["latin"]
})

const Navbar = () => {
  return (
    <div className={`flex font-bold items-center ${nav_font.className}  text-[#0D0D0D]  justify-between  p-3 px-8 text-xl rounded-full  nav  `}>
     <Link href={`/`}> <div className="logo  font-bold  ">[<span className='line-through'>Aks</span>]</div></Link>
      <div className="links text-[15px] font-bold flex items-center justify-between gap-6">
        <Link href='/' className='' >Home</Link>
        <Link href='/about' >About</Link>
        <Link href='/skills' >Skills</Link>
        {/* <Link href='#'  >Experience</Link> */}
        <Link href='/projects' >Projects</Link>
        <Link href='#' >Contacts</Link>
      </div>
      <div className="links text-[22px] flex items-center justify-between gap-6">
      <Link href='https://www.linkedin.com/in/muhammad-ayub-47373a345/'><SiLinkedin/></Link>  
        <FaXTwitter />
       <Link  href='https://github.com/Muhammad-Ayub830'><FaGithub/></Link> 
        {/* <p className='font-normal'>|</p>
        <div className="border  w-12 rounded-full border-[#0D0D0D] ">
          <div className="rounded-full border-[#0D0D0D]  w-5 h-5 border transition ease-linear duration-300 left-0 relative hover:left-7"></div>
        </div> */}
      </div>
    </div>
  )
}

export default Navbar
