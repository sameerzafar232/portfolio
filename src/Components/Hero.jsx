import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import pic from '../assets/sam.png'
const Hero = () => {
  return (

<> 

<div className=" flex hero items-center">

        


<div className=" text-white py-20 ml-4">
      <div className="">
      <div class="mb-8">
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Hi I AM SAMEER KHAN',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Hi I AM SAMEER KHAN',
        1000,
        'Hi I AM SAMEER KHAN',
        1000,
        'Hi I AM SAMEER KHAN',
        1000
      ]}
      wrapper="span"
      speed={10}
      style={{ fontSize: '4em', display: 'inline-block', fontWeight:'bold', color:'white'}}
      repeat={Infinity}
    />


      <p class="mt-4  text-xl font-extrabold em">  A passionate Front-End React Developer.</p>
    </div>
     
      
        <div className="p-4  gap-8">
        <button className="bg-white text-gray-800 px-6 py-3 mr-2 hover:bg-orange-500  rounded font-semibold">About me</button>

        <button className="bg-white text-gray-800 px-6 py-3 mr-2 hover:bg-orange-500  rounded font-semibold">Project</button>
        </div>
      </div>
    </div>
    


  </div>


    </>

  )
}

export default Hero