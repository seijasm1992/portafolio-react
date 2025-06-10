import React, { useState, useEffect } from 'react';
import './output.css';

const slides = [
    '/image-slide-1.jpg',
    '/image-slide-2.jpg',
    '/image-slide-3.jpg',
    '/image-slide-4.jpg',
    '/image-slide-5.jpg'
];

function Slides() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const handleNext = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }
    const handlePrev = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            handleNext();
        }, 5000);
        return () => clearTimeout(timer);
    }, [currentSlide]);
    return(
        <section className='flex flex-col items-center justify-center p-8'>
            <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
            <div className='flex items-center justify-center gap-4 pt-4'>    
                <button onClick={handlePrev} className='w-12 h-12 p-4 rounded-full bg-black text-white flex items-center justify-center'><img src="/icon-arrow-left.svg" alt="Previous" /></button>
                <button onClick={handleNext} className='w-12 h-12 p-4 rounded-full bg-black text-white flex items-center justify-center'><img src="/icon-arrow-right.svg" alt="Next" /></button>
            </div>
        </section>
    )
}

export default Slides;