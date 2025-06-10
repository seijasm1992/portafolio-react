import React from 'react';
import './output.css';
function Header() {
    return (
       <header className="w-full p-4 flex justify-between items-center">
        <div className='flex justify-between items-center'>
            <img src="logo.svg" alt="logo" className="h-12 w-auto" />
        </div>
        <button className="bg-black text-white px-4 py-4 rounded-full flex items-center hover:bg-[#755CDE]">
           Free Consultation
        </button>
       </header>
    )
}

export default Header;