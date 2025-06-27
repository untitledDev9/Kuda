import React from 'react'
import Logo from "../assets/Kuda_Bank_Logo.png"
import Personal from '../components/Personal'
import Business from '../components/Business'
import Company from '../components/Company'
import Help from '../components/Help'
import Nigeria from "../assets/nigeria.png"

const Navbar = () => {
  return (
    <div className=' flex justify-between items-center max-w-[1024px] mx-auto px-12 py-3 font-[500] text-[#40196D]'>
      <div className=' flex gap-18'>
        <div className=' w-20'>
          <img src={Logo} alt="" />
        </div>
        <div className=' flex items-center gap-10 text-[12px]'>
          <Personal />
          <Business />
          <Company />
          <Help />
        </div>
      </div>
      <div className=' flex items-center text-[12px] gap-6'>
        <p>Sign in</p>
        <button className=' bg-[#40196D] py-3 px-5 rounded-[10px] text-[14px] text-white'>Join Kuda</button>
        <div className=' w-9 rounded-xl bg-[#16821643] p-2'>
          <img src={Nigeria} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Navbar