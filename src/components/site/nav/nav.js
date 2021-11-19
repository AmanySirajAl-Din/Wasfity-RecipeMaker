import './nav.css'
import logo from '../../../assets/img/logo.png'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <header className='header'>
      <nav className='nav'>
        <div className='left-side'>
          <Link to='/'>
            <img src={logo} alt='logo' className='logo' />
          </Link>
          <h3 className='nav__heading'> Wasfity </h3>
        </div>
        <div className='right-side'>
          <button className='login__btn nav__btn'> Login </button>
          <button className='register__btn nav__btn'> Register </button>
          <button className='language__btn btn'> عربي </button>
        </div>
      </nav>
    </header>
  )
}

export default Nav
