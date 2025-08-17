import React from 'react'

const Badge = ({BadgeText,className}) => {
  return (
    <div className={`${className} py-2 px-8 text-[14px] text-white w-[92px] font-bold  text-center bg-[#262626]`}>
      {BadgeText}
    </div>
  )
}

export default Badge
