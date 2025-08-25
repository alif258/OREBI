import Container from '../Container'
import Producs from '../Producs'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import NextArrow from '../NextArrow'
import PrevArrow from '../PrevArrow'
import { useEffect, useState } from 'react';
import axios from 'axios';

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



  let [allData, setAlldata] = useState([])

  useEffect(() => {
    async function allDatas() {
      let data = await axios.get('https://dummyjson.com/products')
      setAlldata(data.data.products)
    } allDatas()
  }, []);





  return (
    <>

      <div>
        <Container>
          <h1 className='font-bold text-[40px] pb-12'>New Arrivals</h1>
          <div className="-mx-5 ">
            <Slider  {...settings} >
              {allData.map((item) =>(
                <div>
                  <Producs
                    productImg={item.thumbnail}
                    productBadge={'New'}
                    price={`$${item.price}`}
                    title={item.title}
                  />
                  </div>
              ))}
            </Slider>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Arrivals
