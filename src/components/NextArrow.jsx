import { FaArrowRightLong } from "react-icons/fa6";




const NextArrow = (props) => {
    const { onClick } = props;

    return (
        <div className={'h-16 w-16 bg-[#DFDFDF]  absolute px-6 py-6 text-center top-1/3  right-5 text-white rounded-full hover:bg-[#979797]'} onClick={onClick}><FaArrowRightLong /></div>

    )
}

export default NextArrow
