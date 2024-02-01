import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between bg-gray-900 items-center h-24   mx-auto px-4 text-white  clr'>
      <h1 className='w-full text-3xl font-bold text-orange-500 sm:hidden md:block'>SAMEER KHAN</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
       
        <li className='p-4'>Projects</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-gray-900 bg-gray-900 ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-orange-500  m-4'>SAMEER KHAN</h1>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Projects</li>
          <li className='p-4 border-b border-gray-600'>Contact</li>
          <li className='p-4 border-b border-gray-600'>About</li>
     
      </ul>
    </div>
  );
};

export default Navbar;