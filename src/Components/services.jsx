import React from 'react';
import pic2 from '../assets/html.png'
import pic3 from '../assets/css.png'
import pic4 from '../assets/java.png'
import pic5 from '../assets/react.png'
import pic6 from '../assets/next.png'
import pic7 from '../assets/mongo.jpeg'
import pic8 from '../assets/boot.png'
import pic9 from '../assets/css.png'
const Services = () => {
    return (


      <> <div className='flex justify-center '>
    
    <h2 className="text-4xl font-bold mb-6 ">My Coding Skills</h2>
        </div>
      <div className='flex justify-around p-4 gap-3 bg-gray-100 flex-col md:flex-row '>
    
       <section className="bg-  ">
      <div className="max-w-3xl mx-auto text-center">
       
        <div className="bg-white p-6 rounded-lg shadow-md  border-gray-800 border-2 transition duration-300 hover:border-orange-500 cursor-pointer">
          <img
            src={pic2}
            alt="Coding Language Logo"
            className="w-24 h-24 mx-auto "
          />
          <h3 className="text-xl font-bold mb-2">HTML</h3>
         
        </div>
      </div>
    </section>


    <section className="bg-gray-100 ">
      <div className="max-w-3xl mx-auto text-center">
       
        <div className="bg-white p-6 rounded-lg shadow-md  border-gray-800 border-2 transition duration-300 hover:border-orange-500 cursor-pointer">
          <img
            src={pic3}
            alt="Coding Language Logo"
            className="w-24 h-24 mx-auto "
          />
          <h3 className="text-xl font-bold mb-2">CSS</h3>
        
        </div>
      </div>
    </section>


    <section className="bg-gray-100 ">
      <div className="max-w-3xl mx-auto text-center">
       
        <div className="bg-white p-6 rounded-lg shadow-md  border-gray-800 border-2 transition duration-300 hover:border-orange-500 cursor-pointer">
          <img
            src={pic4}
            alt="Coding Language Logo"
            className="w-24 h-24 mx-auto "
          />
          <h3 className="text-xl font-bold mb-2">JAVA SCRIPT</h3>
         
        </div>
      </div>
    </section>


    <section className="bg-gray-100 ">
      <div className="max-w-3xl mx-auto text-center">
       
        <div className="bg-white p-6 rounded-lg shadow-md  border-gray-800 border-2 transition duration-300 hover:border-orange-500 cursor-pointer">
          <img
            src={pic5}
            alt="Coding Language Logo"
            className="w-24 h-24 mx-auto "
          />
          <h3 className="text-xl font-bold mb-2">REACT</h3>
         
        </div>
      </div>
    </section>


    <section className="bg-gray-100 ">
      <div className="max-w-3xl mx-auto text-center">
       
        <div className="bg-white p-6 rounded-lg shadow-md  border-gray-800 border-2 transition duration-300 hover:border-orange-500 cursor-pointer">
          <img
            src={pic6}
            alt="Coding Language Logo"
            className="w-24 h-24 mx-auto "
          />
          <h3 className="text-xl font-bold mb-2">NEXT</h3>
         
        </div>
      </div>
    </section>

    <section className="bg-gray-100 ">
      <div className="max-w-3xl mx-auto text-center">
       
        <div className="bg-white p-6 rounded-lg shadow-md  border-gray-800 border-2 transition duration-300 hover:border-orange-500 cursor-pointer">
          <img
            src={pic7}
            alt="Coding Language Logo"
            className="w-24 h-24 mx-auto "
          />
          <h3 className="text-xl font-bold mb-2">MONGO</h3>
         
        </div>
      </div>
    </section>



    <section className="bg-gray-100 ">
      <div className="max-w-3xl mx-auto text-center">
       
        <div className="bg-white p-6 rounded-lg shadow-md  border-gray-800 border-2 transition duration-300 hover:border-orange-500 cursor-pointer">
          <img
            src={pic8}
            alt="Coding Language Logo"
            className="w-24 h-24 mx-auto "
          />
          <h3 className="text-xl font-bold mb-2">BOOTSTRAP</h3>
         
        </div>
      </div>
    </section>



    <section className="bg-gray-100 ">
      <div className="max-w-3xl mx-auto text-center">
       
        <div className="bg-white p-6 rounded-lg shadow-md  border-gray-800 border-2 transition duration-300 hover:border-orange-500 cursor-pointer">
          <img
            src={pic9}
            alt="Coding Language Logo"
            className="w-24 h-24 mx-auto "
          />
          <h3 className="text-xl font-bold mb-2">TAILWIND CSS</h3>
         
        </div>
      </div>
    </section>
    </div>


    </>
    );
};

export default Services;