import './hero.css'
import heroLeft1 from '../../../assets/img/hero-left1.jfif'
import heroLeft2 from '../../../assets/img/hero-left2.jfif'
import heroMain from '../../../assets/img/hero-main.jfif'
import heroPopular1 from '../../../assets/img/hero-popular1.jfif'
import heroPopular2 from '../../../assets/img/hero-popular2.jfif'
import heroPopular3 from '../../../assets/img/hero-popular3.jfif'
import heroPopular4 from '../../../assets/img/hero-popular4.jfif'

const Hero = () => {
  return (
    <div className='hero__container'>
      <section className='hero'>
        <div className='hero__left'>
          <div className='meal'>
            <img src={heroLeft1} alt='' className='meal__img' />
            <p className='meal__title'>
              11 Bread Recipes You Can Make in Your 9x13 Dish
            </p>
          </div>
          <div className='meal'>
            <img src={heroLeft2} alt='' className='meal__img' />
            <p className='meal__title'>Make ahead thanksgiving recipe.</p>
          </div>
        </div>

        <div className='hero__main'>
          <img src={heroMain} alt='' className='hero__main-img' />
          <h3 className='hero__main-title'>
            20 best Middle East Recipes of all time
          </h3>
          <p className='hero__main-description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            consectetur optio consequuntur odio illo vitae corrupti, dolorum cum
            non veniam?
          </p>
        </div>

        <div className='hero__popular'>
          <h2 className='hero__popular-title'>Most Popular</h2>

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
