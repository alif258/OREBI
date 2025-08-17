import { Link } from 'react-router-dom'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'


const Offer = () => {
    return (
        <>
            <div className="pt-[172px] pb-32">
                <Container>
                    <Flex className={'gap-10'}>
                        <div className="">
                            <Link to={'shop'}>
                                <Image src={'/images/offerone.png'} />
                            </Link>
                        </div>
                        <div className="gap-10 flex flex-col">
                            <Link to={'shop'}>
                                <Image src={'/images/offertwo.png'} />
                            </Link>
                            <Link to={'shop'} >
                                <Image src={'/images/offerthree.png'} /></Link>
                        </div>
                    </Flex>
                </Container>
            </div>
        </>
    )
}

export default Offer
