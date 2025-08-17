
import Badge from './Badge'
import Image from './Image'
import { FaHeart, FaCartArrowDown } from "react-icons/fa";
import { TbRefresh } from "react-icons/tb";
import { Link } from 'react-router-dom'



const Producs = ({ productImg, productBadge, Color }) => {
    return (
        <>

            <div className=" relative px-5 ">
                <div className="">
                    <div className=" relative group ">
                        <Image className='w-full' src={productImg} />
                        <Badge BadgeText={productBadge} className={'absolute top-[20px] left-[20px]'} />
                        <div className="py-[25px] bg-[#FFFFFF]  w-full absolute bottom-0  opacity-0 group-hover:opacity-100 duration-700">
                            <div className="flex items-center justify-end px-[30px]  gap-4">

                                <Link to={'shop'}>
                                    <p className='text-[16px] text-[#767676] hover:text-[#262626] hover:font-bold'>Add to Wish List</p>
                                </Link>
                                <Link to={'shop'}>
                                    <FaHeart />
                                </Link>

                            </div>
                            <div className="flex items-center justify-end py-5 px-[30px] gap-4">
                                <Link to={'shop'}>
                                    <p className='text-[16px] text-[#767676] hover:text-[#262626] hover:font-bold'>Compare</p>
                                </Link>
                                <Link to={'shop'}>
                                    <TbRefresh />
                                </Link>

                            </div>
                            <div className="flex items-center justify-end  px-[30px] gap-4">
                                <Link to={'shop'}>
                                    <p className='text-[16px] text-[#767676] hover:text-[#262626] hover:font-bold'>Add to Cart</p>
                                </Link>
                                <Link to={'shop'}>
                                    <FaCartArrowDown />
                                </Link>

                            </div>
                        </div>
                    </div>

                </div>
                <div className="pt-6 flex items-center justify-between">
                    <p className='text-[20px] font-bold text-[#262626]'>Basic Crew Neck Tee</p>
                    <p className='text-[16px] text-[#767676]'>$44.00</p>
                </div>
                <p className='tex-[16px] mt-3.5 text-[#767676] leading-[30px]'>{Color}</p>

            </div>
        </>
    )
}

export default Producs




