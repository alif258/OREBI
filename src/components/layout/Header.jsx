import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import { Link } from 'react-router-dom'
import { FaSearch, FaUser,FaShoppingCart   } from "react-icons/fa"
import { TiArrowSortedDown } from "react-icons/ti";




const Header = () => {
  return (
    <>
      <Container>
        <Flex className={"justify-between py-8"}>
          <div className=""><Link to={'/'}><Image src={'/images/logo.png'} /></Link></div>
          <div className="">
            <ul className='font-normal text-[14px] text-[#767676]'>
              <Flex className={'gap-10'}>
                <Link to={'/'}>
                  <li className='hover:text-[#262626] hover:font-bold font-bold'>Home</li>
                </Link>
                <Link to={'shop'}>
                  <li className='hover:text-[#262626] hover:font-bold font-bold'>Shop</li>
                </Link>
                <Link to={'about'}>
                  <li className='hover:text-[#262626] hover:font-bold font-bold'>About</li>
                </Link>
                <Link to={'contacts'}>
                  <li className='hover:text-[#262626] hover:font-bold font-bold'>Contacts</li>
                </Link>
                <Link to={'journal'}>
                  <li className='hover:text-[#262626] hover:font-bold font-bold'>Journal</li>
                </Link>
              </Flex>
            </ul>
          </div>
          <div className="">
            <Flex className={'items-center gap-5'}>
              <div className=""><Image src={'/images/en.png'} /></div>
              <div className=""><Image src={'/images/ru.png'} /></div>

            </Flex>
          </div>
        </Flex>
      </Container>


      <div className="bg-[#DFDFDF] py-6  ">
        <Container className={'flex justify-between items-center'}>
          <div className="">
            <Flex className={'gap-[10px] '}>
              <Image src={'/images/menu.png'} />
              <p className='text-[14px ] text-[#262626]'>Shop by Category</p>
            </Flex>
          </div>

          <div className="Srch relative ">
            <input type="text" placeholder='Search Products' className=' outline-0 py-4 px-5 bg-[#FFFFFF] w-[600px] text-[#C4C4C4] text-[14px]' />
             <FaSearch className='absolute top-1/2 -translate-1/2 right-[17px] ' />
          </div>



          <div className="flex items-center gap-10">
            <div className="flex items-center gap-1">
              <FaUser />
              <TiArrowSortedDown/>
              </div>

              <FaShoppingCart/>
          </div>

         

          

        </Container>
      </div>



    </>
  )
}

export default Header




