import { Link } from 'react-router-dom'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Offerone from '../../assets/offerone.png'
import Offertwo from '../../assets/offertwo.png'
import Offerthree from '../../assets/offerthree.png'


const Offer = () => {
    return (
        <>
            <div className="pt-[172px] pb-32">
                <Container>
                    <Flex className={'gap-10'}>
                        <div className="">
                            <Link to={'shop'}>
                                <Image src={Offerone} />
                            </Link>
                        </div>
                        <div className="gap-10 flex flex-col">
                            <Link to={'shop'}>
                                <Image src={Offertwo} />
                            </Link>
                            <Link to={'shop'} >
                                <Image src={Offerthree} /></Link>
                        </div>
                    </Flex>
                </Container>
            </div>
        </>
    )
}

export default Offer
