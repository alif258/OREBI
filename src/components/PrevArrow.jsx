import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";


const PrevArrow = (props) => {
    const { onClick } = props;

    return (
        <div className={'h-16 w-16 bg-[#DFDFDF]  absolute px-6 py-6 text-center top-1/3 left-5 z-10 text-white rounded-full hover:bg-[#979797]'} onClick={onClick}><FaArrowLeftLong /></div>

    )
}

export default PrevArrow
