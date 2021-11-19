import './nav.css'
import logo from '../../../assets/img/logo.png'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import setLang from '../../../store/actions/lang'
import { injectIntl } from 'react-intl'

const Nav = ({ intl: { messages } }) => {
  // Handle Language
  const lang = useSelector((state) => state)
  console.log(lang)
  const dispatch = useDispatch()

  const setLanguage = () => {
    dispatch(setLang(lang === 'ar' ? 'en' : 'ar'))
  }

  return (
    <header className='header'>
      <nav className='nav'>
        <div className='left-side'>
          <Link to='/'>
            <img src={logo} alt='logo' className='logo' />
          </Link>
          <h3 className='nav__heading'>{messages.nav.Wasfity}</h3>
        </div>
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
