import React from 'react'
import Container from '../Container'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import FotterLogo from '../../assets/FotterLogo.png'
import Image from '../Image';
import Flex from '../Flex';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <>
      <div className="bg-[#F5F5F3]">
        <Container>
          <div className="pt-[60px] pb-[52px]">


            <div className="line flex">

              <div className="mr-36 menu">
                <h1 className='font-bold text-[16px] leading-6 mb-[18px]'>MENU</h1>
                <ul className='font-normal text-[14px] text-[#767676] leading-6'>
                  <Flex className={' flex-col items-start gap-1.5 '}>
                    <Link to={'/'}>
                      <li className='hover:text-[#262626]'>Home</li>
                    </Link>
                    <Link to={'shop'}>
                      <li className='hover:text-[#262626]'>Shop</li>
                    </Link>
                    <Link to={'about'}>
                      <li className='hover:text-[#262626]'>About</li>
                    </Link>
                    <Link to={'contacts'}>
                      <li className='hover:text-[#262626]'>Contacts</li>
                    </Link>
                    <Link to={'journal'}>
                      <li className='hover:text-[#262626]'>Journal</li>
                    </Link>
                  </Flex>
                </ul>
              </div>



              <div className="mr-36 shop">
                <h1 className='font-bold text-[16px] leading-6 mb-[18px]'>SHOP</h1>
                <ul className='font-normal text-[14px] text-[#767676] leading-6'>
                  <Flex className={' flex-col items-start gap-1.5 '}>
                    <Link to={''}>
                      <li className='hover:text-[#262626]'>Category 1</li>
                    </Link>
                    <Link to={''}>
                      <li className='hover:text-[#262626]'>Category 2</li>
                    </Link>
                    <Link to={''}>
                      <li className='hover:text-[#262626]'>Category 3</li>
                    </Link>
                    <Link to={''}>
                      <li className='hover:text-[#262626]'>Category 4</li>
                    </Link>
                    <Link to={''}>
                      <li className='hover:text-[#262626]'>Category 5</li>
                    </Link>
                  </Flex>
                </ul>

              </div>



              <div className="mr-36 help">
                <h1 className='font-bold text-[16px] leading-6 mb-[18px]'>HELP</h1>
                <ul className='font-normal text-[14px] text-[#767676] leading-6'>
                  <Flex className={' flex-col items-start gap-1.5 '}>
                    <Link to={''}>
                      <li className=''>Privacy Policy</li>
                    </Link>
                    <Link to={''}>
                      <li className=''>Terms & Conditions</li>
                    </Link>
                    <Link to={''}>
                      <li className=''>Special E-shop</li>
                    </Link>
                    <Link to={''}>
                      <li className=''>Shipping</li>
                    </Link>
                    <Link to={''}>
                      <li className=''>Secure Payments</li>
                    </Link>
                  </Flex>
                </ul>

              </div>



              <div className="mr-64 about">
                <h1 className='font-bold text-[16px] leading-7 mb-3.5 w-[187px]'>
                  (052) 611-5711
                  company@domain.com
                </h1>
                <p className='font-normal text-[14px] text-[#767676] leading-6'>575 Crescent Ave. Quakertown, PA 18951</p>

              </div>


              <div className="logo">
                <Image src={FotterLogo} />
              </div>
            </div>



            <div className="flex justify-between items-center mt-16">
              <div className="h-3.5 flex gap-6">
                <FaFacebookF />
                <FaLinkedinIn />
                <FaInstagram />
              </div>
              <div className="">
                <p className='text-[14px] text-[#6D6D6D] leading-6'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
              </div>
            </div>
          </div>
        </Container>
      </div>

    </>
  )
}

export default Footer
