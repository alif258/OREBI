import Container from '../Container'
import Producs from '../Producs'





const SpecialOffers = () => {
  return (
    <>
       <Container>
                <div className="mt-[118px] mb-[130px]">
                    <h1 className='font-bold text-[40px] pb-12'>Special Offers</h1>
                    <div className="flex -mx-5">
                            <Producs Color={'Black'} productImg={'/images/sofferone.png'} productBadge={'New'} />
                            <Producs Color={'Black'} productImg={'/images/soffertwo.png'} productBadge={'New'} />
                            <Producs Color={'Black'} productImg={'/images/sofferthree.png'} productBadge={'New'} />
                            <Producs Color={'Black'} productImg={'/images/sofferfour.png'} productBadge={'New'} />
                    </div>
                </div>
            </Container>
    </>
  )
}

export default SpecialOffers
