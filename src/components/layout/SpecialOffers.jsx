import Container from '../Container'
import Producs from '../Producs'
import SOfferone from '../../assets/sofferone.png'
import SOffertwo from '../../assets/soffertwo.png'
import SOfferthree from '../../assets/sofferthree.png'
import SOfferfour from '../../assets/sofferfour.png'





const SpecialOffers = () => {
  return (
    <>
       <Container>
                <div className="mt-[118px] mb-[130px]">
                    <h1 className='font-bold text-[40px] pb-12'>Special Offers</h1>
                    <div className="flex -mx-5">
                            <Producs Color={'Black'} productImg={SOfferone} productBadge={'New'} />
                            <Producs Color={'Black'} productImg={SOffertwo} productBadge={'New'} />
                            <Producs Color={'Black'} productImg={SOfferthree} productBadge={'New'} />
                            <Producs Color={'Black'} productImg={SOfferfour} productBadge={'New'} />
                    </div>
                </div>
            </Container>
    </>
  )
}

export default SpecialOffers
