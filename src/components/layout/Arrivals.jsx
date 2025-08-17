import Container from '../Container'
import Producs from '../Producs'
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
                <Producs productImg={'/images/productsone.png'} productBadge={'New'} />

              </div>
              <div>
                <Producs productImg={'/images/productstwo.png'} productBadge={'10%'} />

              </div>
              <div>
                <Producs productImg={'/images/productsthree.png'} productBadge={'New'} />
              </div>
              <div>
                <Producs productImg={'/images/productsfour.png'} productBadge={'50%'} />
              </div>
              <div>
                <Producs productImg={'/images/productsone.png'} productBadge={'10%'} />
              </div>
              <div>
                <Producs productImg={'/images/productstwo.png'} productBadge={'New'} />
              </div>
            </Slider>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Arrivals
