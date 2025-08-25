import { useEffect, useState } from "react";
import Container from "../Container"
import Producs from "../Producs"
import axios from "axios";

const BestSelars = () => {


    let [allData, setAlldata] = useState([])

    useEffect(() => {
        async function allDatas() {
            let data = await axios.get('https://dummyjson.com/products')
            setAlldata(data.data.products)
        } allDatas()
    }, []);




    return (
        <>
            <Container>
                <div className="mt-[118px] mb-[130px]">
                    <h1 className='font-bold text-[40px] pb-12'>Our Bestsellers</h1>
                    <div className=" grid grid-cols-4 -mx-5">
                        {allData.slice(4, 8).map((item) => (
                            <div>
                                <Producs Color={'Black'} productImg={item.thumbnail} productBadge={'New'} price={`$${item.price}`} title={item.title} />
                            </div>
                        ))}

                    </div>
                </div>
            </Container>
        </>
    )
}

export default BestSelars
