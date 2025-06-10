import React from 'react';
import './output.css';
function Hero() {
    return (
        <div className='flex flex-col items-center justify-center px-4  gap-8 container mx-auto'>
            <div>
            <h1 className='text-3xl font-bold text-black sm:text-3xl md:text-4xl lg:text-5xl'>Desing solutions made easy</h1>
            </div>
            <div>
            <p className='text-[#79726A] text-center text-1xl font-semibold mt-4 sm:text-1xl md:text-2xl lg:text-3xl'>With over ten years of experience in various design disciplines, I'm your one-stop shop for your design needs.</p>
            </div>
          </div>
    )
}
export default Hero;