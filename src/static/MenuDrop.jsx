import React, { useState } from 'react'
import Button from '../resueable/Button'
import { BiSolidRightArrow } from "react-icons/bi";
import { BiSolidLeftArrow } from "react-icons/bi";
import { TbXboxX } from "react-icons/tb";
import PersonalDropDown from '../resueable/PersonalDropDown';


const MenuDrop = () => {
  const [personal, setPersonal] = useState(false)
  // const [business, setBusiness] = useState(false)
  // const [company, setCompany] = useState(false)
  // const [contact, setContact] = useState(false)
  // const [help, setHelp] = useState(false)
  return (
    <div>
      <div className=' ml-36 py-4 flex gap-4
      max-mobile:ml-0 max-mobile:px-7
      '>
        <Button
          text="Join Kuda"
          bgColor="#40196D"
          color="#fff"
        />
        <Button
          text="Sign In"
          color="#40196D"
          bgColor="#DFE3FF"
        />
      </div>

      <div className=' px-7 flex flex-col gap-5 mt-10'>

        <div onClick={() => setPersonal(true)} className=' border-b border-[#a3a3a35d] pb-7 flex justify-between items-center text-[#40196D] font-[600] text-[16px]'>
          <p>Personal</p>
          <BiSolidRightArrow size={10} />
        </div>

        <div onClick={() => setBusiness(true)} className=' border-b border-[#a3a3a35d] pb-7  flex justify-between items-center text-[#40196D] font-[600] text-[16px]'>
          <p>Buiness</p>
          <BiSolidRightArrow size={10} />
        </div>

        <div onClick={() => setCompany(true)} className='  border-b border-[#a3a3a35d] pb-7  flex justify-between items-center text-[#40196D] font-[600] text-[16px]'>
          <p>Company</p>
          <BiSolidRightArrow size={10} />
        </div>

        <div className='  border-b border-[#a3a3a35d] pb-7  flex justify-between items-center text-[#40196D] font-[600] text-[16px]'>
          <p>Developers</p>
        </div>

        <div onClick={() => setContact(true)} className='  border-b border-[#a3a3a35d] pb-7  flex justify-between items-center text-[#40196D] font-[600] text-[16px]'>
          <p>Contact Us</p>
          <BiSolidRightArrow size={10} />
        </div>

        <div onClick={() => setHelp(true)} className='   pb-7  flex justify-between items-center text-[#40196D] font-[600] text-[16px]'>
          <p>Help</p>
          <BiSolidRightArrow size={10} />
        </div>

      </div>


      <section>
        {personal && (
          <div className="fixed inset-0 bg-white overflow-auto">
            <div className="fixed top-0 left-0 right-0 bg-white px-5 py-5 flex items-center justify-between z-50">              <div onClick={() => setPersonal(false)} className=' flex items-center text-[#40196D] gap-2 text-[10px]'>
              <BiSolidLeftArrow />
              Back
            </div>
              <div onClick={() => setPersonal(false)}>
                <TbXboxX size={25} color='#40196D' />
              </div>
            </div>



            <div className=' mt-20'>
              <PersonalDropDown />
            </div>



          </div>
        )}
      </section>
    </div>
  )
}

export default MenuDrop