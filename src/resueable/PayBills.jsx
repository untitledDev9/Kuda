import React from 'react'

const PayBills = ({icon, iconBg, title}) => {
  return (
    <div className=' flex items-center gap-4'>
      <div
      style={{
        backgroundColor: iconBg,
      }}
      className=' p-2 rounded-full
      max-tablet:p-0
      '>
        {icon}
      </div>
      <p className=' text-[#333]'>{title}</p>
    </div>
  )
}

export default PayBills