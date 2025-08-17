import Container from "../Container"
import Producs from "../Producs"
import Best1 from '../../assets/Best1.png'
import Best2 from '../../assets/Best2.png'
import Best3 from '../../assets/Best3.png'
import Best4 from '../../assets/Best4.png'

const BestSelars = () => {
    return (
        <>
            <Container>
                <div className="mt-[118px] mb-[130px]">
                    <h1 className='font-bold text-[40px] pb-12'>Our Bestsellers</h1>
                    <div className="flex -mx-5">
                            <Producs Color={'Black'} productImg={Best1} productBadge={'New'} />
                            <Producs Color={'Black'} productImg={Best2} productBadge={'New'} />
                            <Producs Color={'Black'} productImg={Best3} productBadge={'New'} />
                            <Producs Color={'Black'} productImg={Best4} productBadge={'New'} />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default BestSelars
