import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div>
      <Link to={'shop'}>
      <div className="bg-[url(/src/assets/banner.png)] h-[597px] bg-no-repeat bg-center bg-cover "></div>
      </Link>
    </div>
  )
}

export default Banner
