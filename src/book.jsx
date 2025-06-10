import React from 'react';
function Book() {
    return(
        <section className='flex flex-col items-center justify-center p-8 bg-black text-white m-4 rounded-lg gap-8'>
            <h2 className='text-2xl font-bold text-white'>Book a call with me</h2>
            <p className='text-center text-1xl font-semibold'>I’d love to have a chat to see how I can help you. The best way to contact me is on through these platforms.</p>
            <button className="bg-[#EB7565] text-white px-8 py-4 rounded-full flex items-center hover:bg-[#755CDE]">Free Consultation</button>
        </section>
    )
}

export default Book;