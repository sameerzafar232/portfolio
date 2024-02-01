import React from 'react'
import project1 from '../assets/wise.png'
import project2 from '../assets/Capture111.png'
import project3 from '../assets/dash.png'

import { RiChromeLine } from "react-icons/ri";

const Projects = () => {
  return (
<>


<div className='flex justify-center mt-3 '>
    
    <h2 className="text-4xl font-bold mb-6 mt-4 ">MY PROJECTS</h2>
        </div>
<div className='flex justify-between m-7  flex-col md:flex-row gap-3'>
    
    <section className="bg-  ">
   <div className="max-w-7xl mx-auto text-center">
    
     <div className="bg-white p-6 rounded-lg shadow-md  border-gray-800 border-2 transition duration-300 hover:border-orange-500 cursor-pointer">
       <img
         src={project1}
         alt="Coding Language Logo"
         className="w-96 h-56 mx-auto mb-4 "
       />
        
<div className='flex justify-center'>

<button className="bg-black text-white px-6 py-3  flex rounded hover:bg-orange-500 transition duration-300">
<a href="https://next-ecommerce-psi-brown.vercel.app/" target="_blank" >
          Live Demo </a>
         <span className='mt-1 ml-2'> <RiChromeLine /></span>
        </button>

       
      
  
</div>
      
     </div>
   </div>
 </section>



 <section className="bg- ">
   <div className="max-w-7xl mx-auto text-center">
    
     <div className="bg-white p-6 rounded-lg shadow-md  border-gray-800 border-2 transition duration-300 hover:border-orange-500 cursor-pointer">
       <img
         src={project2}
         alt="Coding Language Logo"
         className="w-96 h-56 mx-auto mb-4"
       />
             
<div className='flex justify-center'>

<button className="bg-black text-white px-6 py-3  flex rounded hover:bg-orange-500 transition duration-300">
<a href=" https://new-website-sigma-eight.vercel.app" target="_blank" >
          Live Demo </a>
         <span className='mt-1 ml-2'> <RiChromeLine /></span>
        </button>

     
  
</div>

      
     </div>
   </div>
 </section>


 <section className="bg- ">
   <div className="max-w-7xl mx-auto text-center">

     <div className="bg-white p-6 rounded-lg shadow-md  border-gray-800 border-2 transition duration-300 hover:border-orange-500 cursor-pointer">
       <img
         src={project3}
         alt="Coding Language Logo"
         className="w-96 h-56 mx-auto mb-4"
       />
               
<div className='flex justify-center'>

<button className="bg-black text-white px-6 py-3  flex rounded hover:bg-orange-500 transition duration-300">
<a href="https://dash-board-neon.vercel.app/" target="_blank" >
          Live Demo </a>
         <span className='mt-1 ml-2'> <RiChromeLine /></span>
        </button>



      
  
</div>
      
      
     </div>
   </div>
 </section>
 </div>



 
</>
  )
}

export default Projects