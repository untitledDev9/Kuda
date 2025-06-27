import React from 'react'
import PayBills from './PayBills'

const BigDropDown = () => {
  return (
    <div className=' flex bg-white w-[100%] '>
      <div className=' flex flex-col px-10 gap-5 py-7'>
        
        <PayBills 
        iconBg=""
        icon=""
        title="Discover Personal"
        />

        <PayBills 
        iconBg=""
        icon=""
        title="Transfer"
        />

        <PayBills 
        iconBg=""
        icon=""
        title=""
        />

        <PayBills 
        iconBg=""
        icon=""
        title=""
        />

        <PayBills 
        iconBg=""
        icon=""
        title=""
        />
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
    </div>
  )
}

export default BigDropDown