import { useState } from "react";
import { TbCaretDownFilled } from "react-icons/tb";


import BusinessDropDown from "../resueable/BusinessDropDown";


const Business = () => {
  const [drop, setDrop] = useState(false)
  return (
    <div
      onMouseEnter={() => setDrop(true)}
      onMouseLeave={() => setDrop(false)}
    >
      <div className=' flex items-center relative justify-center gap-1 font-[500] text-[#40196D] h-18 z-40'>
        <p>Business</p>
        <TbCaretDownFilled />
      </div>

      {drop && (
        <>
        <div className="fixed inset-0 bg-[#5d026f22] " onMouseEnter={() => setDrop(false)}></div>
        <div className=' z-20 transition-all duration-300 ease-in-out'>
        <BusinessDropDown />
        </div>
      </>
      )}
    </div>
  )
}

export default Business