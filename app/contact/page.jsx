import { Inter } from 'next/font/google'
import React from 'react'
const font = Inter({
  subsets: ["latin"]
})
const Contact = () => {
  return (
    <div className={`min-h-screen ${font.className}`}>
      <div className="text-conent mt-20">
        <div className="heading text-4xl md:text-[50px] font-bold">
          <span className=" font-bold text-[#808080]">Let's </span>Get In Touch
        </div>
        <p className='text font-semibold text-[#808080da]'>BY EMAIL OR ON MY SOCIAL NETWORKS.</p>
      </div>
      <div className="mail max-w-[800px] mx-auto bg-[#F6F6F6] mt-[58px] rounded-lg">
        <div className="header flex items-center justify-between p-4 border-b-2 border-[#808080]">
          <div className="logo flex gap-1">
            <div className="p-1 rounded-full bg-[#F63636]"></div>
            <div className="p-1 rounded-full bg-[#F6C136]"></div>
            <div className="p-1 rounded-full bg-[#68F636]"></div>
          </div>
          <p>New Post</p>
          <p></p>
        </div>

        <form action="" className='inputs p-5 px-10 border-b border-[#80808070] shadow-2xl'>
          
            <div className="email-box flex gap-3 border-b py-3 border-[#80808070]">
              <p>Email:</p>
              <input type="email" placeholder='Enter your email address...' className='outline-0 w-full ml-4' />
            </div>
            <div className="email-box flex gap-3 border-b py-3 border-[#80808070]">
              <p>Name:</p>
              <input type="text" placeholder='Enter your Good Name...' className='outline-0 w-full ml-3' />
            </div>
            <div className="email-box flex gap-3  py-3 ">
              <p>Subject:</p>
              <input type="text" placeholder='Enter the Subject..' className='outline-0 w-full' />
            </div>
            <textarea name="" placeholder='Enter your message' className='w-full resize-none rounded-xl p-10 mt-20 outline-0 bg-[#ebe8e8] text-[#808080] min-h-[400px]' id=""></textarea>
            <div className="btn text-right mt-3">
            <button className='w-[140px] h-[50px] bg-[#0D0D0D] text-[#F0F0F0] rounded-xl mr-0 text-[20px]' type='submit'>Send</button>

            </div>
        </form>

      </div>
    </div>
  )
}

export default Contact
