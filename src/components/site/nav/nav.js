import { useSelector, useDispatch } from 'react-redux'
import { injectIntl } from 'react-intl'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import logo from '../../../assets/img/logo.png'
import setLang from '../../../store/actions/lang'
import './nav.css'

const Nav = ({ intl: { messages } }) => {
  // Handle Language
  const lang = useSelector((state) => state)
  const dispatch = useDispatch()

  const setLanguage = () => {
    dispatch(setLang(lang === 'ar' ? 'en' : 'ar'))
  }

  // Add header shadow on scroll
  const [isShadow, setIsShadow] = useState(false)
  function scrollHeader() {
    // When the scroll is greater than 50 viewport height, add the scroll-header
    if (this.scrollY >= 50) setIsShadow(true)
    else setIsShadow(false)
  }
  window.addEventListener('scroll', scrollHeader)

  return (
    <header className={isShadow ? 'header header-scroll' : 'header'}>
      {/*-------------------------------- NAV */}
      <nav className='nav'>
        {/*-------------------------- Left Side */}
        <div className='left-side'>
          <Link to='/'>
            <img src={logo} alt='logo' className='logo' />
          </Link>
          <h3 className='nav__heading'>{messages.nav.Wasfity}</h3>
        </div>
        {/*-------------------------- Right Side */}
        <div className='right-side'>
          <button className='login__btn nav__btn'>{messages.nav.login}</button>
          <button className='register__btn nav__btn'>
            {messages.nav.register}
          </button>
          <button className='language__btn btn' onClick={setLanguage}>
            {messages.nav.lang}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default injectIntl(Nav)
