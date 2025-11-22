import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin, FaLinkedinIn, FaMailchimp, FaMessage } from 'react-icons/fa6'
import { SiLinkedin, SiMailgun } from 'react-icons/si'
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className='flex items-center justify-between p-10 relative'>
      <div className="logo text-8xl font-bold line-through p-10">
        [AKS]
      </div>
      <div className="links grid grid-cols-2 gap-20">
        <div className="left-links flex items-center justify-between flex-col gap-6">
          <Link href='#' className='font-bold' >Facebook</Link>
          <Link href='#' >Facebook</Link>
          <Link href='#' >Facebook</Link>
          <Link href='#' >Facebook</Link>
        </div>

        <div className="left-links flex items-center justify-between flex-col  min-w-[100px]">
          <Link href='#' className='font-bold w-full'>Contacts</Link>
          <Link href='#' className='flex items-center gap-2 w-full' ><FaLinkedin /> LinkedIn</Link>
          <Link href='#' className='flex items-center gap-2 w-full' ><FaGithub /> Github</Link>
          <Link href='#' className='flex items-center gap-2 w-full' ><IoMdMail /> Mail</Link>
        </div>

      </div>

    </div>
  )
}

export default Footer
