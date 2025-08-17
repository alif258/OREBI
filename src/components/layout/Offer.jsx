import { Link } from 'react-router-dom'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Offer1 from '/src/assets/Offer1.png'
import Offer2 from '/src/assets/Offer2.png'
import Offer3 from '/src/assets/Offer3.png'


const Offer = () => {
    return (
        <>
            <div className="pt-[172px] pb-32">
                <Container>
                    <Flex className={'gap-10'}>
                        <div className="">
                            <Link to={'shop'}>
                                <Image src={Offer1} />
                            </Link>
                        </div>
                        <div className="gap-10 flex flex-col">
                            <Link to={'shop'}>
                                <Image src={Offer2} />
                            </Link>
                            <Link to={'shop'} >
                                <Image src={Offer3} />                            </Link>
                        </div>
                    </Flex>
                </Container>
            </div>
        </>
    )
}

export default Offer
