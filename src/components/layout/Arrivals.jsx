import Container from '../Container'
import Producs from '../Producs'
import p1 from '../../assets/products1.png'
import p2 from '../../assets/products2.png'
import p3 from '../../assets/products3.png'
import p4 from '../../assets/products4.png'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import NextArrow from '../NextArrow'
import PrevArrow from '../PrevArrow'

const Arrivals = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };


  return (
    <>
      <div>
        <Container>
          <h1 className='font-bold text-[40px] pb-12'>New Arrivals</h1>
          <div className="-mx-5">
            <Slider  {...settings} >
              <div>
                <Producs productImg={p1} productBadge={'New'} />

              </div>
              <div>
                <Producs productImg={p2} productBadge={'10%'} />

              </div>
              <div>
                <Producs productImg={p3} productBadge={'New'} />
              </div>
              <div>
                <Producs productImg={p4} productBadge={'50%'} />
              </div>
              <div>
                <Producs productImg={p2} productBadge={'10%'} />
              </div>
              <div>
                <Producs productImg={p3} productBadge={'New'} />
              </div>
            </Slider>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Arrivals
