import React from 'react'
import pic from '../assets/sam.png'
const About = () => {
    return (
        <>
            <div>

            <section className="bg-white text-black p-10">
      <div className="max-w-3xl mx-auto flex items-center justify-center flex-col">
        <img
          src={pic}
          alt="Profile Image"
          className="rounded-full w-32 h-32 mb-6 object-cover"
        />
        <h2 className="text-4xl font-bold mb-4">ABOUT</h2>
        <p className="text-lg mb-6 text-center">
          A certified front-end web developer passionate about crafting engaging and user-friendly interfaces. With expertise in HTML, CSS, JS, and modern frameworks like React and Next.js, I bring ideas to life through captivating digital experiences.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-orange-500 transition duration-300">
          Get in Touch
        </button>
      </div>
    </section>
            </div>

        </>
    )
}

export default About