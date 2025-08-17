import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'


const Rectangle = () => {
    return (
        <div className="pt-8 pb-9 border-b border-[#F0F0F0]">
            <Container>
                <Flex className={'justify-between'}>
                    <div className="flex items-center gap-4">
                        <Image src={'/images/two.png'} />
                        <p className='text-[#6D6D6D] text-[16px] '>Two years warranty</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Image src={'/images/shape.png'} />
                        <p className='text-[#6D6D6D] text-[16px] '>Free shipping</p>
                    </div>
                        <div className="flex items-center gap-4">
                        <Image src={'/images/path.png'} />
                        <p className='text-[#6D6D6D] text-[16px] '>Return policy in 30 days</p>
                    </div>
              
                </Flex>
            </Container>
        </div>
    )
}

export default Rectangle
