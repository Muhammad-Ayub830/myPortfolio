import Image from 'next/image'
import React from 'react'

const Skills = () => {
    return (
        <div>
            <h2 className='text-6xl text-center font-bold mt-20'>
                <span className=" text-[#808080]">Tech </span> Stack</h2>
            <h1 className='text-5xl font-bold flex mb-10 items-center gap-5 mt-20'>
                 <div className='w-6 h-6 rounded-full shadow circlee '></div>
                 Front<span className=" text-[#808080]">End</span></h1>
            <div className="tools grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 gap-5 p-5 ">
                <div className="tool  bg-[rgb(255,255,255,.25)] rounded-lg p-10 h-75">
                    <div className="img w-full h-[180px] relative">
                        <Image src='/Next.js.svg' fill />
                    </div>
                    <div className="memo flex items-center mt-5 justify-between">
                        <p className='text-[#0D0D0D] font-bold'>Next.Js</p>
                        <p className='text-[#808080] font-light'>Code</p>
                    </div>
                </div>
                <div className="tool  bg-[rgb(255,255,255,.25)] rounded-lg p-10 h-75">
                    <div className="img w-full h-[180px] relative">
                        <Image src='/react-svgrepo-com.svg' fill />
                    </div>
                    <div className="memo flex items-center mt-5 justify-between">
                        <p className='text-[#0D0D0D] font-bold'>React.Js</p>
                        <p className='text-[#808080] font-light'>Code</p>
                    </div>
                </div>
                <div className="tool  bg-[rgb(255,255,255,.25)] rounded-lg p-10 h-75">
                    <div className="img w-full h-[180px] relative">
                        <Image src='/javascript-logo-svgrepo-com.svg' fill />
                    </div>
                    <div className="memo flex items-center mt-5 justify-between">
                        <p className='text-[#0D0D0D] font-bold'>JavaScript</p>
                        <p className='text-[#808080] font-light'>Code</p>
                    </div>
                </div>
                <div className="tool  bg-[rgb(255,255,255,.25)] rounded-lg p-10 h-75">
                    <div className="img w-full h-[180px] relative">
                        <Image src='/tailwind-svgrepo-com.svg' fill />
                    </div>
                    <div className="memo flex items-center mt-5 justify-between">
                        <p className='text-[#0D0D0D] font-bold'>Tailwind CSS</p>
                        <p className='text-[#808080] font-light'>Desgin</p>
                    </div>
                </div>
                <div className="tool  bg-[rgb(255,255,255,.25)] rounded-lg p-10 h-75">
                    <div className="img w-full h-[180px] relative">
                        <Image src='/bootstrap-4-logo-svgrepo-com.svg' fill />
                    </div>
                    <div className="memo flex items-center mt-5 justify-between">
                        <p className='text-[#0D0D0D] font-bold'>Bootstrap</p>
                        <p className='text-[#808080] font-light'>Desgin</p>
                    </div>
                </div>

{/* row 1 ended  */}
            </div>
            <h1 className='text-5xl font-bold flex mb-10 items-center mt-20'>
                 <div className='w-6 h-6 rounded-full shadow circlee mr-4 '></div>
                 Back<span className=" text-[#808080]">End</span></h1>
            <div className="tools grid grid-cols-1 md:grid-cols-3  gap-5 p-5 ">
                <div className="tool  bg-[rgb(255,255,255,.25)] rounded-lg p-10 h-75">
                    <div className="img w-full h-[180px] relative">
                        <Image src='/nodejs-ar21.svg' fill />
                    </div>
                    <div className="memo flex items-center mt-5 justify-between">
                        <p className='text-[#0D0D0D] font-bold'>Node.Js</p>
                        <p className='text-[#808080] font-light'>Code</p>
                    </div>
                </div>
                <div className="tool  bg-[rgb(255,255,255,.25)] rounded-lg p-10 h-75">
                    <div className="img w-full h-[180px] relative">
                        <Image src='/expressjs-ar21.svg' fill />
                    </div>
                    <div className="memo flex items-center mt-5 justify-between">
                        <p className='text-[#0D0D0D] font-bold'>Express.Js</p>
                        <p className='text-[#808080] font-light'>Code</p>
                    </div>
                </div>
                <div className="tool  bg-[rgb(255,255,255,.25)] rounded-lg p-10 h-75">
                    <div className="img w-full h-[180px] relative">
                        <Image src='/mongodb-ar21.svg' fill />
                    </div>
                    <div className="memo flex items-center mt-5 justify-between">
                        <p className='text-[#0D0D0D] font-bold'>MongoDb</p>
                        <p className='text-[#808080] font-light'>Databse</p>
                    </div>
                </div>
                <div className="tool  bg-[rgb(255,255,255,.25)] rounded-lg p-10 h-75">
                    <div className="img w-full h-[180px] relative">
                        <Image src='/firebase-ar21.svg' fill />
                    </div>
                    <div className="memo flex items-center mt-5 justify-between">
                        <p className='text-[#0D0D0D] font-bold'>Firebase</p>
                        <p className='text-[#808080] font-light'>Databse</p>
                    </div>
                </div>
                {/* <div className="tool  bg-[rgb(255,255,255,.25)] rounded-lg p-10 h-75">
                    <div className="img w-full h-[180px] relative">
                        <Image src='/bootstrap-4-logo-svgrepo-com.svg' fill />
                    </div>
                    <div className="memo flex items-center mt-5 justify-between">
                        <p className='text-[#0D0D0D] font-bold'>Bootstrap</p>
                        <p className='text-[#808080] font-light'>Desgin</p>
                    </div>
                </div> */}


            </div>
            {/* row 3  */}
             <h1 className='text-5xl font-bold flex mb-10 items-center mt-20'>
                 <div className='w-6 h-6 rounded-full shadow circlee mr-4 '></div>
                 Tools & <span className="ml-2 text-[#808080]"> Platforms:</span></h1>
            <div className="tools grid grid-cols-1 md:grid-cols-3   gap-5 p-5 ">
                <div className="tool  bg-[rgb(255,255,255,.25)] rounded-lg p-10 h-75">
                    <div className="img w-full h-[180px] relative">
                        <Image src='/git-scm-icon.svg' fill />
                    </div>
                    <div className="memo flex items-center mt-5 justify-between">
                        <p className='text-[#0D0D0D] font-bold'>Git</p>
                        <p className='text-[#808080] font-light'>Tool</p>
                    </div>
                </div>
                <div className="tool  bg-[rgb(255,255,255,.25)] rounded-lg p-10 h-75">
                    <div className="img w-full h-[180px] relative">
                        <Image src='/github.svg' fill />
                    </div>
                    <div className="memo flex items-center mt-5 justify-between">
                        <p className='text-[#0D0D0D] font-bold'>Github</p>
                        <p className='text-[#808080] font-light'>Tool</p>
                    </div>
                </div>
                <div className="tool  bg-[rgb(255,255,255,.25)] rounded-lg p-10 h-75">
                    <div className="img w-full h-[180px] relative">
                        <Image src='/getpostman-icon.svg' width={160} height={160} className=' m-auto' />
                    </div>
                    <div className="memo flex items-center mt-5 justify-between">
                        <p className='text-[#0D0D0D] font-bold'>Postman</p>
                        <p className='text-[#808080] font-light'>Tool</p>
                    </div>
                </div>
                <div className="tool  bg-[rgb(255,255,255,.25)] rounded-lg p-10 h-75">
                    <div className="img w-full h-[180px] relative">
                        <Image src='/Vercel_logo_0.svg' fill />
                    </div>
                    <div className="memo flex items-center mt-5 justify-between">
                        <p className='text-[#0D0D0D] font-bold'>Vercel</p>
                        <p className='text-[#808080] font-light'>Hosting Plateform</p>
                    </div>
                </div>
                {/* <div className="tool  bg-[rgb(255,255,255,.25)] rounded-lg p-10 h-75">
                    <div className="img w-full h-[180px] relative">
                        <Image src='/bootstrap-4-logo-svgrepo-com.svg' fill />
                    </div>
                    <div className="memo flex items-center mt-5 justify-between">
                        <p className='text-[#0D0D0D] font-bold'>Bootstrap</p>
                        <p className='text-[#808080] font-light'>Desgin</p>
                    </div>
                </div> */}


            </div>

        </div>
    )
}

export default Skills
