import { useState } from "react";
import { TbCaretDownFilled } from "react-icons/tb";

const Company = () => {
  const [drop, setDrop] = useState(false)
  return (
    <div
    onMouseEnter={() => setDrop(true)}
    onMouseLeave={() => setDrop(false)}
  >
    <div className=' flex items-center justify-center gap-1 font-[500] text-[#40196D] h-18 z-40 relative'>
            <p>Company</p>
            <TbCaretDownFilled />
          </div>


          {drop && (
        <>
          <div className="fixed inset-0 bg-[#5d026f22] " onMouseEnter={() => setDrop(false)}></div>
          <div className='absolute bg-white py-5 px-7 flex flex-col gap-5 text-[#333] rounded-[5px] shadow-[0_4px_12px_rgba(0,0,0,0.2)] top-14 z-20 transition-all duration-300 ease-in-out'>
            <p>Blog</p>
            <p>Press</p>
            <p>Join Our Team</p>
            <p>About Us</p>
            <p>Kuda in Nigeria</p>
          </div>

        </>
      )}
          </div>
  )
}

export default Company