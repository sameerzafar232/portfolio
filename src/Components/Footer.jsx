import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
  } from 'react-icons/fa';
const Footer = () => {
  return (
  <>
     <div className='max-w-[1600px] mx-auto py-16 px-4  lg:grid-cols-3 gap-8 text-gray-300 bg-gray-900 flex justify-center'>
      <div>
        <h1 className='w-full text-3xl font-bold text-orange-500 text-center'>SAMEER KHAN</h1>
        <span className='mt-2  flex text-center border'>
          
< a  href="mailto:s7585503@gmail.com">s7585503@gmail.com</a> 

</span>
  <div className='flex justify-center gap-4 mt-2'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
            </div>
        </div>
 
      </div>



  </>
  )
}

export default Footer