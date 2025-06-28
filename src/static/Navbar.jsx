import React, { useState } from 'react'
import Logo from "../assets/Kuda_Bank_Logo.png"
import Personal from '../components/Personal'
import Business from '../components/Business'
import Company from '../components/Company'
import Help from '../components/Help'
import Nigeria from "../assets/nigeria.png"
import { IoMdMenu } from "react-icons/io";
import { TbXboxX } from "react-icons/tb";
import MenuDrop from './MenuDrop'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const toggleOpen = () => {
    setOpen(!open)
  }
  return (
    <div className='shadow-[0_4px_12px_rgba(0,0,0,0.2)] z-50'>
      <div className=' flex justify-between items-center max-w-[1440px] px-12  mx-auto h-18
    max-Laptop:py-2
    max-tablet:py-4
    '>
        <div className=' flex gap-32 items-center
      max-Laptop:gap-22
      '>
          <div className=' w-24
        max-Laptop:w-18
        max-tablet:w-20
        '>
            <img src={Logo} alt="" />
          </div>
          <div className=' flex items-center gap-18 text-[14px] cursor-pointer
        max-Laptop:text-[12px] max-Laptop:gap-12
        max-tablet:hidden
        '>
            <Personal />
            <Business />
            <Company />
            <Help />
          </div>
        </div>
        <div className=' flex items-center text-[14px] gap-6 cursor-pointer text-[#40196D]
      max-Laptop:text-[12px] max-Laptop:font-[500] max-Laptop:gap-9
      max-tablet:gap-4
      '>
          <p className='max-tablet:hidden'>Sign in</p>
          <button className=' bg-[#40196D] py-3 px-5 rounded-[10px] text-[14px] text-white
        max-Laptop:px-6 max-Laptop:text-[13px]
        max-tablet:hidden
        '>
            Join Kuda
          </button>
          <div className=' w-9 rounded-xl bg-[#16821643] p-2
        max-tablet:w-8
        '>
            <img src={Nigeria} alt="" />
          </div>
          <div onClick={toggleOpen} className=' hidden max-tablet:block'>
            <IoMdMenu size={25} />
          </div>
        </div>
      </div>

      {open && (
        <>
          <div className=' bg-white fixed inset-0 overflow-auto '>
            <div className=' flex justify-between items-center px-7 py-5'>
              <div className=' w-22 '>
                <img src={Logo} alt="" />
              </div>
              <div onClick={() => setOpen(false)}>
                <TbXboxX size={25} color='#40196D'/>
              </div>
            </div>
            <div>
              <MenuDrop />
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Navbar