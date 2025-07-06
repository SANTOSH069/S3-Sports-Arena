import React from 'react'
import { motion } from 'framer-motion'
const OurTeam = () => {
    const Heroline  = "Our Team of Coaches";
    const words = Heroline.split(" ");
  return (
    
    <div className='flex flex-row items-center justify-center min-h-screen bg-neutral-50 px-4 py-8'>
      {words.map((word, index) => (
        <motion.h1 
          key={index} 
          initial={{opacity: 0, y: 12}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5 , delay: 0.1*index}}
          className={`text-4xl font-bold tracking-tight text-blue-900 mb-4 inline-block mr-1.5 `}
        >
          {word}
        </motion.h1>
      ))}
    </div>
  )
}

export default OurTeam
