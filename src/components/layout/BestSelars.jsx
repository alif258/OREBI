import Container from "../Container"
import Producs from "../Producs"

const BestSelars = () => {
    return (
        <>
            <Container>
                <div className="mt-[118px] mb-[130px]">
                    <h1 className='font-bold text-[40px] pb-12'>Our Bestsellers</h1>
                    <div className="flex -mx-5">
                            <Producs Color={'Black'} productImg={'/images/bestone.png'} productBadge={'New'} />
                            <Producs Color={'Black'} productImg={'/images/besttwo.png'} productBadge={'New'} />
                            <Producs Color={'Black'} productImg={'/images/bestthree.png'} productBadge={'New'} />
                            <Producs Color={'Black'} productImg={'/images/bestfour.png'} productBadge={'New'} />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default BestSelars
