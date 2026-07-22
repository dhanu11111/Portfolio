import React from "react";
import { motion } from "framer-motion";

import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiBootstrap,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";


const skills = [
  {
    name: "React",
    icon: <FaReact />,
    color: "text-cyan-400",
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
    color: "text-yellow-400",
  },
  {
    name: "HTML",
    icon: <FaHtml5 />,
    color: "text-orange-500",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
    color: "text-blue-500",
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
    color: "text-cyan-300",
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap />,
    color: "text-purple-500",
  },
  {
    name: "Node JS",
    icon: <FaNodeJs />,
    color: "text-green-500",
  },
  {
    name: "Express",
    icon: <SiExpress />,
    color: "text-gray-300",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "text-green-400",
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
    color: "text-blue-400",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    color: "text-red-500",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    color: "text-white",
  },
 {
  name: "VS Code",
  icon: <VscCode />,
  color: "text-blue-400",
},
  {
    name: "Postman",
    icon: <SiPostman />,
    color: "text-orange-400",
  },
];


export default function OrbitSkills() {

  const rings = [
    {
      size: 260,
      duration: 18,
      skills: skills.slice(0,4),
    },
    {
      size: 390,
      duration: 25,
      skills: skills.slice(4,9),
    },
    {
      size: 520,
      duration: 35,
      skills: skills.slice(9,14),
    },
  ];


  return (
    <div className="relative flex items-center justify-center w-full h-[650px] overflow-hidden">

      {/* Glow Background */}
      <div className="
        absolute 
        w-[300px] 
        h-[300px]
        rounded-full
        bg-cyan-500/20
        blur-[120px]
      "/>


      {/* Center Planet */}
      <motion.div
        animate={{
          scale:[1,1.05,1],
        }}
        transition={{
          duration:4,
          repeat:Infinity,
        }}
        className="
          absolute
          z-20
          w-36
          h-36
          rounded-full
          bg-gradient-to-br
          from-cyan-400
          via-blue-500
          to-purple-600
          shadow-[0_0_60px_#22d3ee]
          flex
          items-center
          justify-center
          text-white
          text-xl
          font-bold
        "
      >
        SKILLS
      </motion.div>



      {/* Orbit Rings */}
      {
        rings.map((ring,index)=>(
          <motion.div

            key={index}

            animate={{
              rotate:360
            }}

            transition={{
              duration:ring.duration,
              repeat:Infinity,
              ease:"linear"
            }}

            className="
              absolute
              rounded-full
              border
              border-white/20
            "

            style={{
              width:ring.size,
              height:ring.size,
            }}

          >


            {
              ring.skills.map((skill,i)=>{

                const angle =
                (360 / ring.skills.length) * i;


                return (

                  <div

                    key={skill.name}

                    className="absolute"

                    style={{
                      top:"50%",
                      left:"50%",
                      transform:
                      `
                      rotate(${angle}deg)
                      translate(${ring.size/2}px)
                      `
                    }}

                  >

                    {/*
                      This inner element spins in the opposite
                      direction of the ring, at the same speed,
                      so the icon itself always stays upright
                      no matter where it is in the orbit.
                    */}
                    <motion.div

                      initial={{
                        rotate: -angle,
                      }}

                      animate={{
                        rotate: -angle - 360,
                      }}

                      transition={{
                        duration: ring.duration,
                        repeat: Infinity,
                        ease: "linear",
                      }}

                      style={{
                        x: "-50%",
                        y: "-50%",
                      }}

                      className="
                        w-16
                        h-16
                        rounded-xl
                        bg-white/10
                        backdrop-blur-lg
                        border
                        border-white/20
                        flex
                        flex-col
                        items-center
                        justify-center
                        text-xs
                        text-white
                        shadow-lg
                      "

                    >

                      <div className={`text-2xl ${skill.color}`}>
                        {skill.icon}
                      </div>

                      <span>
                        {skill.name}
                      </span>

                    </motion.div>

                  </div>

                )

              })
            }


          </motion.div>
        ))
      }
{/* Extra floating glow particles */}

<div className="absolute inset-0 pointer-events-none">

  {[...Array(25)].map((_, index) => (

    <motion.span
      key={index}

      className="
        absolute
        w-1
        h-1
        bg-cyan-300
        rounded-full
        opacity-70
      "

      initial={{
        x: Math.random() * 600 - 300,
        y: Math.random() * 600 - 300,
      }}

      animate={{
        y:[
          Math.random() * 600 - 300,
          Math.random() * 600 - 300,
        ],

        x:[
          Math.random() * 600 - 300,
          Math.random() * 600 - 300,
        ],

        opacity:[
          0.3,
          1,
          0.3
        ]
      }}

      transition={{
        duration:
        Math.random()*5 + 5,

        repeat:Infinity,

        ease:"linear"
      }}

    />

  ))}

</div>


{/* Bottom Text */}

<motion.div

  initial={{
    opacity:0,
    y:30
  }}

  whileInView={{
    opacity:1,
    y:0
  }}

  transition={{
    duration:1
  }}

  className="
    absolute
    bottom-8
    text-center
    text-gray-400
    text-sm
    max-w-md
  "

>

  <p>
    Technologies I use to build modern,
    scalable and interactive web applications.
  </p>

</motion.div>
    </div>
  );
}