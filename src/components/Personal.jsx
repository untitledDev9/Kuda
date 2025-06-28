import React, { useState } from 'react'
import { TbCaretDownFilled } from "react-icons/tb";
import PersonalDropDown from '../resueable/PersonalDropDown';

const Personal = () => {
  const [drop, setDrop] = useState(false)
  return (
    <div
      onMouseEnter={() => setDrop(true)}
      onMouseLeave={() => setDrop(false)}
    >
      <div className='  flex items-center justify-center gap-1 relative cursor-pointer font-[500] text-[#40196D] h-18 bg-[#eee0] z-40' >
        <p>Personnal</p>
        <TbCaretDownFilled size={12} />
      </div>

      {drop && (
        <>
          <div className="fixed inset-0 bg-[#5d026f22] " onMouseEnter={() => setDrop(false)}></div>
          <div className=' z-20 transition-all duration-300 ease-in-out'>

          <PersonalDropDown />
          </div>
        </>
      )}

      



    </div>
  )
}

export default Personal