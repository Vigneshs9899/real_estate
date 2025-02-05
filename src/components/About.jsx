import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'
import { useState,useEffect } from 'react'

const About = () => {



    
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);
      
    useEffect(() => {
        if (count1 < 10) {
            const interval = setInterval(() => {
              setCount1((prevCount1) => prevCount1 + 3);
            }, 500); // Adjust speed (500ms = 0.5s)
      
            return () => clearInterval(interval); // Cleanup on unmount
          }
        }, [count1]);
    
    useEffect(() => {
        if (count2 < 10) {
            const interval = setInterval(() => {
              setCount2((prevCount2) => prevCount2 + 8);
            }, 500); // Adjust speed (500ms = 0.5s)
      
            return () => clearInterval(interval); // Cleanup on unmount
          }
        }, [count2]);

    useEffect(() => {
        if (count3 < 20) {
            const interval = setInterval(() => {
              setCount3((prevCount3) => prevCount3 + 5);
            }, 500); // Adjust speed (500ms = 0.5s)
      
            return () => clearInterval(interval); // Cleanup on unmount
          }
        }, [count3]);

    useEffect(() => {
        if (count4 < 30) {
            const interval = setInterval(() => {
              setCount4((prevCount4) => prevCount4 + 7);
            }, 500); // Adjust speed (500ms = 0.5s)
      
            return () => clearInterval(interval); // Cleanup on unmount
          }
        }, [count4]);



  return (
    <motion.div 

        initial={{opacity:0, x:200}}
        transition={{duration:1}}
        whileInView={{opacity:1, x:0}}
        viewport={{once:true}}
    
            className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>

        <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light'>Our Brand</span></h1>
        <p className='text-gray-500 max-w-80 text-center mb-8'>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>

        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>

            <img src={assets.brand_img} className='w-full sm:w-1/2 max-w-lg' alt="" />

            <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
                
                <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>

                    <div>
                        <p className='text-4xl font-medium text-gray-800'>{count1}+</p>
                        <p className=''>Years of Excellence</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>{count2}+</p>
                        <p className=''>Projects Completed</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>{count3}+</p>
                        <p className=''>Min sq. ft. delivered</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>{count4}+</p>
                        <p className=''>Ongoing projects</p>
                    </div>

                
                </div>

                <p className='my-10 max-w-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, accusamus? Suscipit quia beatae nisi praesentium Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, sed!</p>

                <button className='bg-blue-600 text-white px-8 py-2 rounded'>Learn more</button>


            </div>

        </div>

    </motion.div>
  )
}

export default About