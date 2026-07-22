import React from 'react'
// import ParticlesBackground from '../components/ParticlesBackground'
import { motion } from 'framer-motion'
import react from 'react'
import { useState } from 'react'
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import D from "../assets/D.png";

const socials = [
// {Icon :FaXTwitter, label : "X" , href:"https://twitter.com/yourprofile"},
{Icon :FaLinkedin, label : "LinkedIn" , href : "https://www.linkedin.com/in/dhanashree-shinde-601265408/"},
{Icon :FaGithub , label : "GitHub" , href:"https://github.com/dhanu11111"},
]

const glowVariants ={
  initial : {scale :1 , y: 0 , filter : "drop-shadow(0 0 0 rgba(0,0,0,0))"},
  hover : { scale : 1.2 , y : -3,
    filter : "drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 18px rgba(16,185,129,0.8))",
transition : {type : "spring", stiffness :300, damping : 15 }
 
},
  tap: {scale : 0.95, y:0, transition: {duration : 0.08}}
}

export default function Home() {
 


  return (
    <section
      id="home" className="w-full min-h-screen bg-[#08111f] relative overflow-hidden">
       

 
  {/* <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-4 grid-cols-1 lg:grid-cols-2"> */}
<div className="relative z-10 min-h-screen max-w-7xl mx-auto px-6
grid lg:grid-cols-2 items-center gap-16">
<div className="flex flex-col justify-center  h-full text-center lg:text-left relative">
  <div className="w-full lg:pr-24 mx-auto max-w-[48rem]" >


<motion.p
  className="mb-4 text-lg sm:text-xl font-semibold uppercase tracking-[3px] text-blue-400"
  initial={{ opacity: 0, y: 12 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2, duration: 0.6 }}
>
  Java Full Stack Developer
</motion.p>
<motion.h1
className="
text-white
font-bold
text-1xl
sm:text-3xl
lg:text-3xl
leading-tight from-[#302b63] via-[#00bf8f] to-[#1cd8d2] drop-shadow-lg"
initial={{ opacity: 0, y: 40 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
>
  Hello, I'm 
  <br/>
  <span className="text-blue-500 font-bold text-4xl sm:text-4xl md:text-4xl lg:text-5xl lg:whitespace-nowrap">Dhanashree Shinde</span>
</motion.h1>
<motion.p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto lg:mx-0"
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: 0.6, duration: 0.6 }}
>
  I'm a passionate developer who loves creating clean, responsive, and user-friendly websites. Currently exploring Full-Stack Development with React and Java, I'm dedicated to continuous learning and building projects that make a real impact.</motion.p>

<motion.div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6"
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ delay: 0.8 , duration: 0.8 }}
>
  <a href="#projects" className="px-6 py-3 rounded-full font-medium text-lg text-white bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] shadow-lg hover:scale-105 transition-all ">
    View My Work
  </a>
  <a href="/Resume.pdf"
  download
  className="px-6 py-3 rounded-full text-lg font-medium text-black bg-white hover:bg-gray-200 shadow-lg hover:scale-105 transition-all">My Resume
  </a>
</motion.div>
<div className="mt-10 flex gap-5 text-2xl md:text-3xl justify-center lg:justify-start">
  {socials.map(({ Icon, label, href }) => (
    <motion.a
      key={label}
      href={href}
      target="_blank"
      aria-label={label}
      rel="noopener noreferrer"
      className="text-gray-300"
      variants={glowVariants}
  initial="initial"
  whileHover="hover"
  whileTap="tap"
  className="text-gray-300"
    >
      <Icon />
    </motion.a>
  ))}
</div>



</div>

</div>
<div className="hidden lg:flex justify-center items-center">

  <div className="relative">

    <div
      className="
      w-[420px]
      h-[420px]
      rounded-full
      border-4
      border-blue-500
      overflow-hidden
      shadow-2xl"
    >

      <img
        src={ D }
        alt="Dhanashree"
        className="w-full h-full object-cover"
      />

    </div>

  </div>

</div>
</div>
</section>
  )
  };
