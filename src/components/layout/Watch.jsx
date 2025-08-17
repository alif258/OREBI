import { Link } from "react-router-dom"
import Container from "../Container"
import Image from "../Image"
import Watch1 from '../../assets/Watch.png'

const Watch = () => {
    return (
        <>
            <Container>
                <div className="h-[370px] flex bg-[url(/src/assets/WatchBg.png)] mb-32 ">
                    <div className="">
                        <Image src={Watch1} />
                    </div>
                    <div className="py-[60px] ml-12 ">
                        <h6 className="font-bold text-[40px] mb-[38px]">Phone of the year</h6>
                        <p className="mb-[50px] text-[16px] text-[#262626] w-[511px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum..</p>
                        <Link to={'shop'}>
                            <button className="bg-[#262626] text-white py-4 px-12 font-bold text-[16px]">Shop Now</button>
                        </Link>                    </div>
                </div>
            </Container>
        </>
    )
}

export default Watch
