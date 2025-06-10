import React from 'react';
import './output.css';
function Main() {
    return (
        <div className="grid grid-cols-12 grid-rows-5  gap-4 pt-12 ">
      <div className="bg-[#755CDE]  rounded-lg col-start-2 col-end-12 row-start-1 row-end-2  flex flex-col">
        <img src="pattern-graphic-design.svg" alt="" className='w-2/5 self-end p-4' />
        <h2 className="text-[#FFFFF8] text-2xl font-bold self-start p-4 mt-auto">Graphic Design</h2>
      </div>

      <div className="bg-[#F5A560] rounded-lg col-start-2 col-end-7 row-start-2 row-end-3 flex flex-col">
        <img src="pattern-ui-ux.svg" alt="" className='w-3/5 self-end p-4' />
        <h2 className="text-[#FFFFF8] text-2xl font-bold self-start p-4 mt-auto">UI/UX</h2>
      </div>
      <div className="bg-[#F39D9E]  rounded-lg row-start-2 row-end-3 col-start-7 col-end-12 flex flex-col">
        <img src="pattern-apps.svg" alt="" className='w-3/5 self-end p-4' />
        <h2 className="text-[#FFFFF8] text-2xl font-bold self-start p-4 mt-auto">Graphic Design</h2>
      </div>
      <div className="bg-[#EA7564]  rounded-lg row-start-3 row-end-4 col-start-2 col-end-12 flex flex-col">
        <img src="pattern-illustrations.svg" alt="" className='w-2/5 self-end p-4' />
        <h2 className="text-[#FFFFF8] text-2xl font-bold self-start p-4 mt-auto">Graphic Design</h2>
      </div>
      <div className="bg-[#62C4B7]  rounded-lg row-start-4 row-end-5 col-start-2 col-end-12 flex flex-col">
        <img src="pattern-photography.svg" alt="" className='w-3/5 self-end p-4' />
        <h2 className="text-[#FFFFF8] text-2xl font-bold self-start p-4 mt-auto">Photography</h2>
      </div>
      <div className="bg-[#55204A]  rounded-lg row-start-5 row-end-6 col-start-2 col-end-12 flex flex-col">
        <img src="pattern-motion-graphics.svg" alt="" className='w-3/5 self-end p-4' />
        <h2 className="text-[#FFFFF8] text-2xl font-bold self-start p-4 mt-auto">Motion Graphics</h2>
      </div>
      
        </div>
    )
}
export default Main;