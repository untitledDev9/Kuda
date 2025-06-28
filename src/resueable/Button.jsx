import React from 'react'

const Button = ({text, bgColor, color}) => {
  return (
    <button style={{
      backgroundColor: bgColor,
      color: color,
    }}
    className=' py-2.5 px-9 rounded-[10px] text-[14px]'
    >
      {text}
    </button>
  )
}

export default Button