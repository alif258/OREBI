import Container from '../Container'
import Producs from '../Producs'
import SOffer1 from '../../assets/soffer1.png'
import SOffer2 from '../../assets/soffer2.png'
import SOffer3 from '../../assets/soffer3.png'
import SOffer4 from '../../assets/soffer4.png'





const SpecialOffers = () => {
  return (
    <>
       <Container>
                <div className="mt-[118px] mb-[130px]">
                    <h1 className='font-bold text-[40px] pb-12'>Special Offers</h1>
                    <div className="flex -mx-5">
                            <Producs Color={'Black'} productImg={SOffer1} productBadge={'New'} />
                            <Producs Color={'Black'} productImg={SOffer2} productBadge={'New'} />
                            <Producs Color={'Black'} productImg={SOffer3} productBadge={'New'} />
                            <Producs Color={'Black'} productImg={SOffer4} productBadge={'New'} />
                    </div>
                </div>
            </Container>
    </>
  )
}

export default SpecialOffers
