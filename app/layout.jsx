import { Geist, Geist_Mono, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
 title: "Muhammad Ayub | Web Developer",
  description: "Muhammad Ayub is a professional web developer specializing in Next.js, React, and modern web development.",
  verification:{
    google:'cGKfxMe3_HQgYPw93pJ3Ll7cB3A2DbMY2ck6eekOo7Q'
  },
  keywords: [
    "Muhammad Ayub",
    "Muhammad Ayub Web Developer",
    "Next.js Developer Pakistan",
    "React Developer Muhammad Ayub"
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` bg-[#d5d5df] relative w-[100%] max-w-[1400px]  mx-auto  `} >
       
        <div className="lg:grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] h-full items-center px-30 pt-30 absolute w-full lg:h-28">
          <div className="yellow"></div>
          <div className="red mt-[400px] lg:mt-0"></div>
          <div className="blue mt-[900px] lg:mt-0"></div>
        </div>
        <div className=" hidden lg:grid  grid-cols-3 items-center px-30 pt-30 absolute w-[100%] top-220 left-0 ">
          <div className="yellow"></div>
          <div className="red"></div>
          <div className="blue"></div>
        </div>
        <div className="w-full p-2 sm:p-8 md:p-23 pt-15 bg-[#ffffff67] backdrop-blur-xl absolute top-0 left-0 ">
          <Navbar />

          {children}
        </div>
     

      </body>
    </html>
  );
}
