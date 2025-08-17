import Container from "../Container"
import Producs from "../Producs"
import Bestone from '../../assets/bestone.png'
import Besttwo from '../../assets/besttwo.png'
import Bestthree from '../../assets/bestthree.png'
import Bestfour from '../../assets/bestfour.png'

const BestSelars = () => {
    return (
        <>
            <Container>
                <div className="mt-[118px] mb-[130px]">
                    <h1 className='font-bold text-[40px] pb-12'>Our Bestsellers</h1>
                    <div className="flex -mx-5">
                            <Producs Color={'Black'} productImg={Bestone} productBadge={'New'} />
                            <Producs Color={'Black'} productImg={Besttwo} productBadge={'New'} />
                            <Producs Color={'Black'} productImg={Bestthree} productBadge={'New'} />
                            <Producs Color={'Black'} productImg={Bestfour} productBadge={'New'} />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default BestSelars
