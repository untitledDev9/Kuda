import React, { useState } from 'react'
import { TbCaretDownFilled } from "react-icons/tb";
import PayBills from '../resueable/PayBills';

const Personal = () => {
  const [drop, setDrop] = useState(false)
  return (
    <div 
    onMouseEnter={() => setDrop(true)}
    onMouseLeave={() => setDrop(false)}
    >
      <div className=' flex items-center justify-center gap-1 relative cursor-pointer font-[500] text-[#40196D]'>
        <p>Personnal</p>
        <TbCaretDownFilled size={12} />
      </div>

      {drop && (
        <div className=' absolute '>
              {/* <div className=' flex bg-white w-[100%] '>
      <div className=' flex flex-col px-10 gap-5 py-7'>
        <PayBills 
        iconBg=""
        icon=""
        title=""
        />
        <PayBills />
        <PayBills />
        <PayBills />
        <PayBills />
      </div>
      <div className='  bg-[#8a8a8a5b] px-10 py-7 flex flex-col gap-5'>
        <h1 className=' text-[#505050]'>PAYMENTS</h1>
        <PayBills />
        <PayBills />
        <PayBills />
        <PayBills />
        <PayBills />
        <PayBills />
        <PayBills />
        <h1 className=' text-[#505050]'>CREDIT</h1>
        <PayBills />
        <PayBills />
      </div>
    </div> */}
        </div>
      )}
    </div>
  )
}

export default Personal