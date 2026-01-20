'use client'
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const main_font = Inter({
  subsets: ["latin"],

})
export default function Home() {
  return (
    <div className={` ${main_font.className}  relative    `}>
    
      <div className="content mt-15 md:mt-20 flex justify-between  items-center lg:pr-20 lg:flex-row flex-col  ">
        <div className="text-conent">
          <div className="heading text-4xl md:text-[60px] font-bold mt-5">
            <span className="font-bold text-[#808080]">Hi, </span>I'm Muhammad Ayub
          </div>
          <div className="caption text-[#808080] text-[15px] lg:w-[70%] mt-15 md:mt-20">
            Leveraging the power of Next.js and React.js for dynamic front-ends and Express.js with MongoDB for resilient back-ends, I build complete, scalable, and modern digital products that prioritize exceptional user experience.      </div>
          <div className="btns-hero mt-5 flex items-center justify-between gap-6 w-fit">
         <Link href='/projects'><button className="w-[160px] text-[#F0F0F0] h-[50px] bg-[#0D0D0D] p-3 text-[12px] rounded-xl mt-5    cursor-pointer">View Projects</button></Link>   
          <Link href="/Muhammad_Ayub.pdf" download><button className="w-[160px] text-[#0D0D0D] h-[50px] bg-[#F0F0F0] p-3 text-[12px] rounded-xl mt-5  cursor-pointer">Download Resume</button></Link>  
          </div>
        </div>
        <div className="img-logo mt-20 lg:mt-0 ">
          <Image src={'/prog.png'}
            width={440}
            height={440}
          />
        </div>
      </div>
      <hr className="mt-50 text-[#808080]" />
      <Footer />
      
    </div>
  );
}
