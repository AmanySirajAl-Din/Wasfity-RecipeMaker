// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'

// Import Images
import slide1 from '../../../assets/img/hero-popular1.jfif'
import slide2 from '../../../assets/img/hero-popular2.jfif'
import slide3 from '../../../assets/img/hero-popular3.jfif'
import slide4 from '../../../assets/img/hero-popular4.jfif'

// Import Swiper styles
import 'swiper/swiper.min.css'

const Slider = () => {
  return (
    <div style={{ margin: '7rem 0' }}>
      <Swiper
        spaceBetween={1}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        style={{ maxWidth: '200px' }}
      >
        <SwiperSlide>
          <img src={slide1} alt='...' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt='...' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt='...' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt='...' />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider
