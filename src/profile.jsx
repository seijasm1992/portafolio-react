import React from 'react';
import './output.css';
function Profile() {
    return (
        <div className='flex flex-col items-center justify-center p-8 gap-4'>
            <div>
                <img src="image-amy.webp" alt="" className=' my-4 rounded-full'/>
            </div>
            <div >
            <h1 className='text-3xl font-bold text-black'>I'm Amy, and I'd love to work on your next project</h1>
            <p className='text-[#79726A] text-center text-1xl font-semibold mt-4'>I love working with others to create beautiful design solutions. I've designed everything from brand illustrations to complete mobile apps. I'm also handy with a camera! </p>
            </div>
            <button className='bg-[#EA7564] text-white px-4 py-4 rounded-full flex items-center hover:bg-[#755CDE]'>Free Consultation</button>
        </div>
    )
}

export default Profile;