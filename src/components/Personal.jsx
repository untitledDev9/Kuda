import React, { useState } from 'react'
import { TbCaretDownFilled } from "react-icons/tb";
import BigDropDown from '../resueable/BigDropDown';

const Personal = () => {
  const [drop, setDrop] = useState(false)
  return (
    <div 
    onMouseEnter={() => setDrop(true)}
    onMouseLeave={() => setDrop(false)}
    >
      <div className=' flex items-center justify-center gap-1 relative cursor-pointer'>
        <p>Personnal</p>
        <TbCaretDownFilled size={12} />
      </div>

      {drop && (
        <div className=' absolute'>
          <BigDropDown />
        </div>
      )}
    </div>
  )
}

export default Personal