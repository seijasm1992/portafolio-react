import React from 'react';
function Book() {
    return(
        <section className='flex flex-col items-center justify-center p-8 bg-black text-white m-4 rounded-lg gap-8 container mx-auto'>
            <h2 className='text-2xl font-bold text-white sm:text-2xl md:text-3xl lg:text-4xl'>Book a call with me</h2>
            <p className='text-center text-1xl font-semibold sm:text-1xl md:text-2xl lg:text-2xl'>I’d love to have a chat to see how I can help you. The best way to contact me is on through these platforms.</p>
            <button className="bg-[#EB7565] text-white px-8 py-4 rounded-full flex items-center hover:bg-[#755CDE] duration-300 ease-in-out">Free Consultation</button>
        </section>
    )
}

export default Book;