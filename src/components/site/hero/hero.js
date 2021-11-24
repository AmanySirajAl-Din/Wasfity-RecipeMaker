import './hero.css'
import heroLeft1 from '../../../assets/img/hero-left1.jfif'
import heroLeft2 from '../../../assets/img/hero-left2.jfif'
import heroMain from '../../../assets/img/hero-main.jfif'
import heroMain2 from '../../../assets/img/hero-main2.jfif'
import heroMain3 from '../../../assets/img/hero-main3.jfif'
import heroMain4 from '../../../assets/img/hero-main4.jfif'
import heroMain5 from '../../../assets/img/hero-main5.jfif'
import heroPopular1 from '../../../assets/img/hero-popular1.jfif'
import heroPopular2 from '../../../assets/img/hero-popular2.jfif'
import heroPopular3 from '../../../assets/img/hero-popular3.jfif'
import heroPopular4 from '../../../assets/img/hero-popular4.jfif'
import { useSelector } from 'react-redux'
import { useRef } from 'react'

/* Swiper Slider */
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import SwiperCore, { Autoplay } from 'swiper'
import 'swiper/modules/navigation/navigation.min.css'

import 'swiper/swiper-bundle.css'

const Hero = ({ props }) => {
  const lang = useSelector((state) => state)

  SwiperCore.use([Autoplay])

  const swiperRef = useRef(null)
  return (
    <div
      className='hero__container'
      onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
      onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
    >
      <section className='hero'>
        <div className='hero__left'>
          <div className='meal'>
            <img src={heroLeft1} alt='' className='meal__img' />
            <p
              className='meal__title'
              style={
                lang === 'en' ? { textAlign: 'left' } : { textAlign: 'right' }
              }
            >
              {props.bread}
            </p>
          </div>
          <div className='meal'>
            <img src={heroLeft2} alt='' className='meal__img' />
            <p
              className='meal__title'
              style={
                lang === 'en' ? { textAlign: 'left' } : { textAlign: 'right' }
              }
            >
              {props.aid}
            </p>
          </div>
        </div>

        {/* Hero Main Slider */}
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          onSwiper={(swiper) => console.log(swiper)}
          // centeredSlides={true}
          className='hero__main'
          ref={swiperRef}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          style={{ direction: 'rtl' }}
        >
          <SwiperSlide className='hero__slide'>
            <img src={heroMain} alt='' className='hero__main-img' />
            <h3
              className='hero__main-title'
              style={
                lang === 'en' ? { textAlign: 'left' } : { textAlign: 'right' }
              }
            >
              {props.best}
            </h3>
            <p className='hero__main-description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              consectetur optio consequuntur odio illo vitae corrupti, dolorum
              cum non veniam?
            </p>
          </SwiperSlide>
          <SwiperSlide className='hero__slide'>
            <img src={heroMain2} alt='' className='hero__main-img' />
            <h3
              className='hero__main-title'
              style={
                lang === 'en' ? { textAlign: 'left' } : { textAlign: 'right' }
              }
            >
              {props.best}
            </h3>
            <p className='hero__main-description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              consectetur optio consequuntur odio illo vitae corrupti, dolorum
              cum non veniam?
            </p>
          </SwiperSlide>
          <SwiperSlide className='hero__slide'>
            <img src={heroMain3} alt='' className='hero__main-img' />
            <h3
              className='hero__main-title'
              style={
                lang === 'en' ? { textAlign: 'left' } : { textAlign: 'right' }
              }
            >
              {props.best}
            </h3>
            <p className='hero__main-description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              consectetur optio consequuntur odio illo vitae corrupti, dolorum
              cum non veniam?
            </p>
          </SwiperSlide>
          <SwiperSlide className='hero__slide'>
            <img src={heroMain4} alt='' className='hero__main-img' />
            <h3
              className='hero__main-title'
              style={
                lang === 'en' ? { textAlign: 'left' } : { textAlign: 'right' }
              }
            >
              {props.best}
            </h3>
            <p className='hero__main-description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              consectetur optio consequuntur odio illo vitae corrupti, dolorum
              cum non veniam?
            </p>
          </SwiperSlide>
          <SwiperSlide className='hero__slide'>
            <img src={heroMain5} alt='' className='hero__main-img' />
            <h3
              className='hero__main-title'
              style={
                lang === 'en' ? { textAlign: 'left' } : { textAlign: 'right' }
              }
            >
              {props.best}
            </h3>
            <p className='hero__main-description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              consectetur optio consequuntur odio illo vitae corrupti, dolorum
              cum non veniam?
            </p>
          </SwiperSlide>
        </Swiper>

        <div className='hero__popular'>
          <h2 className='hero__popular-title'>{props.popular}</h2>

          <div className='hero__popular-meals'>
            <div className='pop-meal'>
              <img src={heroPopular1} alt='' className='pop-meal-img' />
              <p className='pop-meal-text'>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='pop-meal'>
              <img src={heroPopular2} alt='' className='pop-meal-img' />
              <p className='pop-meal-text'>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='pop-meal'>
              <img src={heroPopular3} alt='' className='pop-meal-img' />
              <p className='pop-meal-text'>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='pop-meal'>
              <img src={heroPopular4} alt='' className='pop-meal-img' />
              <p className='pop-meal-text'>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
