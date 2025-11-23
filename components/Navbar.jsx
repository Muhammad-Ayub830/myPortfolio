'use client'
import { Inter, Open_Sans } from 'next/font/google';
import Link from 'next/link'
import React, { useState } from 'react'
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { SiLinkedin } from "react-icons/si";

const nav_font = Open_Sans({
  subsets:["latin"]
})
import { RiMenuFoldFill } from "react-icons/ri";
import Sidebar from './sidebar';

const Navbar = () => {
  const [ischeck,setCheck] = useState(false);
  return (
    <div className={`flex font-bold items-center ${nav_font.className}  text-[#0D0D0D]  justify-between  p-3 px-8 text-xl rounded-full  nav relative  `}>
     <Link href={`/`}> <div className="logo  font-bold  ">[<span className='line-through'>Aks</span>]</div></Link>
      <div className="links text-[15px] font-bold items-center justify-between gap-6 hidden md:flex">
        <Link href='/' className='' >Home</Link>
        <Link href='/about' >About</Link>
        <Link href='/skills' >Skills</Link>
        {/* <Link href='#'  >Experience</Link> */}
        <Link href='/projects' >Projects</Link>
        <Link href='/contact' >Contact</Link>
      </div>
      <div className="links hidden md:flex text-[22px]  items-center justify-between gap-6">
      <Link href='https://www.linkedin.com/in/muhammad-ayub-47373a345/'><SiLinkedin/></Link>  
        <FaXTwitter />
       <Link  href='https://github.com/Muhammad-Ayub830'><FaGithub/></Link> 
       
      </div>
      <RiMenuFoldFill className='block md:hidden text-2xl font-bold' onClick={()=>setCheck(prev=>!prev)}/>
  
      <Sidebar status={ischeck} setCheck={setCheck} />
    </div>
  )
}

export default Navbar
