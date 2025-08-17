import Container from '../Container'
import Producs from '../Producs'
import productsone from '../../assets/productsone.png'
import productstwo from '../../assets/productstwo.png'
import productsthree from '../../assets/productsthree.png'
import productsfour from '../../assets/productsfour.png'
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
                <Producs productImg={productsone} productBadge={'New'} />

              </div>
              <div>
                <Producs productImg={productstwo} productBadge={'10%'} />

              </div>
              <div>
                <Producs productImg={productsthree} productBadge={'New'} />
              </div>
              <div>
                <Producs productImg={productsfour} productBadge={'50%'} />
              </div>
              <div>
                <Producs productImg={productsone} productBadge={'10%'} />
              </div>
              <div>
                <Producs productImg={productstwo} productBadge={'New'} />
              </div>
            </Slider>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Arrivals
