"use client";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { BoxReveal } from "@/components/magicui/box-reveal";
import {motion} from "framer-motion";
import Image from "next/image";
import s3AboutImage from "@/app/assets/s3AboutImage.jpg";
import Navbar from "./components/Navbar";
import Team from "./components/Team";
import  Footer  from "../components/footer";
import Founders from "./components/Founders";
export default function Home() {
  return (
  <main className="min-h-screen bg-neutral-50 mask-alpha flex flex-col ">
    <Navbar />
    <div className="mt-36 flex flex-col items-center text-center">
    <motion.div 
    initial={{filter: "blur(10px)", opacity: 0, y: 12}} 
    animate={{filter: "blur(0px)", opacity: 1, y: 0}} 
    transition={{duration: 0.5 , delay: 0.1}}
    className="mb-2 flex rounded-4xl bg-blue-200/25 p-2 pr-4 pl-4 text-center text-sm font-medium"><span className="pr-2 font-bold tracking-tighter text-blue-800">500+</span> Active Bookings everyday</motion.div>
    <motion.div 
    initial={{filter: "blur(10px)", opacity: 0, y: 12}} 
    animate={{filter: "blur(0px)", opacity: 1, y: 0}} 
    transition={{duration: 0.5 , delay: 0.1}} 
    className="text-4xl font-bold tracking-tight">Step into the World of Sports Andhra Pradeshs</motion.div>
    <motion.div 
    initial={{filter: "blur(10px)", opacity: 0, y: 12}} 
    animate={{filter: "blur(0px)", opacity: 1, y: 0}} 
    transition={{duration: 0.5 , delay: 0.2}}
    className="text-4xl font-bold tracking-tight">first centralised<span className="text-blue-800 ml-2">AC</span> badminton stadium</motion.div>
    <motion.div
    initial={{filter: "blur(10px)", opacity: 0, y: 12}} 
    animate={{filter: "blur(0px)", opacity: 1, y: 0}} 
    transition={{duration: 0.5 , delay: 0.3}}
    className="mt-4 flex flex-col items-center justify-center gap-4 md:flex-row">
      <button className="item-center transitin-all flex cursor-pointer rounded-sm hover:rounded-2xl bg-blue-400 hover:bg-blue-700  p-2 pl-4 pr-4 text-center font-medium transition-colors duration-150 ease-in-out hover:text-neutral-200">
        About Us</button>
      <button className="h cursor-pointer rounded-md border-black bg-black p-2 pr-4 font-medium text-white transition-all duration-150 ease-in-out hover:border-black hover:text-neutral-200">
        Get Started &rarr;</button>
    </motion.div>
  </div>
  <motion.div 
  
  initial={{filter: "blur(10px)", opacity: 0, y: 12}} 
  animate={{filter: "blur(0px)", opacity: 1, y: 0}} 
  transition={{duration: 0.5 , delay: 0.12}} 
  className="mt-6 flex w-full min-h-[200px] items-center justify-center">
      <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
        thumbnailAlt="Hero Video"
      />
  </motion.div>
  <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1, scale: 1.1 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="relative mt-20 flex w-full justify-center items-center bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 px-4 md:px-0 mask-alpha">
    <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20 bg-white/80 rounded-3xl shadow-xl p-8 md:p-16 border border-blue-100">
      <div className="flex-1 flex flex-col items-start justify-center">
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-blue-900 mb-4 flex items-center">
            About Us
            <span className="ml-2 text-[#5046e6] text-5xl md:text-6xl">.</span>
          </h2>
        </BoxReveal>
        <p className="text-lg md:text-xl font-medium tracking-tight text-gray-700 mb-6 leading-relaxed">
          S3 Sports Arena is a <span className="text-blue-700 font-semibold">premier badminton stadium</span> located in Andhra Pradesh, India.<br/>
          Our state-of-the-art facility features <span className="text-blue-700 font-semibold">10 international standard courts</span>, ensuring an exceptional playing experience for athletes of all levels.<br/>
          With a focus on promoting the sport and providing top-notch amenities, we are dedicated to fostering a vibrant badminton community in the region.
        </p>
        <ul className="mb-6 space-y-2 text-base md:text-lg text-gray-600">
          <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-blue-700 rounded-full"></span> International Standard Courts</li>
          <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-blue-700 rounded-full"></span> Centralized AC Facility</li>
          <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-blue-700 rounded-full"></span> Professional Coaching</li>
          <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-blue-700 rounded-full"></span> Spacious Parking & Modern Amenities</li>
        </ul>
        <button className="mt-2 rounded-lg bg-blue-700 px-6 py-2 text-white font-semibold shadow-md hover:bg-blue-800 transition">Learn More</button>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <motion.div 
        initial={{ filter: "blur(10px)", opacity: 0, y: 12}} 
        animate={{ filter: "blur(0px)", opacity: 1, y: 0}} 
        transition={{ duration: 0.5 , delay: 0.1}} 
        className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-lg border-4 border-blue-100 bg-white">
          <Image src={s3AboutImage} alt="S3 Sports Arena" fill style={{objectFit: 'cover'}} className="" />
        </motion.div>
      </div>
    
    </div>
  </motion.section>
    <div className="w-full flex justify-center items-center">
      <div className="max-w-5xl w-full flex flex-col items-center mb-70">
        <Team />
      </div>
    </div>
    <Founders/>
    <Footer/>
  </main>
  );
}
