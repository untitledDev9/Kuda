import React, { useState } from 'react'
import { TbCaretDownFilled } from "react-icons/tb";

const Help = () => {
  const [drop, setDrop] = useState(false)
  return (
    <div
      onMouseEnter={() => setDrop(true)}
      onMouseLeave={() => setDrop(false)}
    >
      <div className=' flex items-center justify-center gap-1 font-[500] text-[#40196D] z-40 h-18 relative'>
        <p>Help</p>
        <TbCaretDownFilled />

      </div>


      {drop && (
        <>
          <div className="fixed inset-0 bg-[#5d026f22] " onMouseEnter={() => setDrop(false)}></div>
          <div className='absolute bg-white py-5 px-7 flex flex-col gap-5 text-[#333] rounded-[5px] shadow-[0_4px_12px_rgba(0,0,0,0.2)] top-14 z-20 transition-all duration-300 ease-in-out'>
            <p>Get Help</p>
            <p>Scam Awareness</p>
            <p>FAQs</p>
            <p>Security</p>
            <p>Contact Us</p>
            <p>Self Help</p>
          </div>

        </>
      )}
    </div>
  )
}

export default Help