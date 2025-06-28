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
      <div className='  flex items-center justify-center gap-1 relative cursor-pointer font-[500] text-[#40196D]'>
        <p>Personnal</p>
        <TbCaretDownFilled size={12} />
      </div>

      {drop && (


        <PersonalDropDown />

      )}
    </div>
  )
}

export default Personal