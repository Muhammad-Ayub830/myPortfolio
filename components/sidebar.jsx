'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { RiMenuFold2Fill } from 'react-icons/ri'

const Sidebar = ({status,setCheck}) => {
   
  return (
   <div
  className={`
    fixed top-0 right-0 w-full h-screen
    transition-transform duration-500 z-10
    p-10 bg-[#d6ccccd7] backdrop-blur
    ${status ? "translate-x-0" : "-translate-x-full"}
  `}
>

        <RiMenuFold2Fill onClick={()=>setCheck(prev=>!prev)} className='text-xl p-3 rounded-xl ml-auto text-black  shadow w-14 h-14
        cursor-pointer'/>
      <ul className='p-5 flex flex-col font-semibold text-black'>
        <Link href='/' className='p-3 text-lg  border-b'>Home</Link>
        <Link href='/about' className='p-3 text-lg  border-b'>About</Link>
        <Link href='/skills' className='p-3 text-lg  border-b'>Skills</Link>
        <Link href='/projects' className='p-3 text-lg  border-b'>Projects</Link>
        <Link href='/contact' className='p-3 text-lg  border-b'>Contact</Link>
       
      </ul>
    </div>
  )
}

export default Sidebar
