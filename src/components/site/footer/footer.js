import './footer.css'
import logo from '../../../assets/img/logo.png'

const Footer = () => {
  const url = '#'

  return (
    <footer>
      <div className='up__section'>
        <a href={url} className='f__logo'>
          <img src={logo} alt='logo' />
        </a>
        <ul>
          <h1>Company</h1>
          <li>
            <a href={url}>Teams</a>
          </li>
          <li>
            <a href={url}>Services</a>
          </li>
          <li>
            <a href={url}>Contact Us</a>
          </li>
          <li>
            <a href={url}>Support</a>
          </li>
        </ul>

        <ul>
          <h1>About</h1>
          <li>
            <a href={url}>Team & company</a>
          </li>
          <li>
            <a href={url}>Location</a>
          </li>
          <li>
            <a href={url}>About</a>
          </li>
          <li>
            <a href={url}>Our Services</a>
          </li>
        </ul>

        <ul>
          <h1>Contact Us</h1>
          <li>
            <p>+92475357355</p>
          </li>
          <li>
            <p>House #215,Street #5</p>
          </li>
          <li>
            <p>Near Model Town</p>
          </li>
        </ul>
      </div>

      <div className='down__section'>
        <ul>
          <h1>Company</h1>
          <li>
            <a href={url}>Teams</a>
          </li>
          <li>
            <a href={url}>Services</a>
          </li>
          <li>
            <a href={url}>Contact Us</a>
          </li>
          <li>
            <a href={url}>Support</a>
          </li>
        </ul>

        <ul>
          <h1>About</h1>
          <li>
            <a href={url}>Team & company</a>
          </li>
          <li>
            <a href={url}>Location</a>
          </li>
          <li>
            <a href={url}>About</a>
          </li>
          <li>
            <a href={url}>Our Services</a>
          </li>
        </ul>

        <div className='social'>
          <h1>Social</h1>
          <div className='social__icons'>
            <a href={url}>
              <i class='bx bxl-facebook'></i>
            </a>
            <a href={url}>
              <i class='bx bxl-twitter'></i>
            </a>
            <a href={url}>
              <i class='bx bxl-instagram'></i>
            </a>
            <a href={url}>
              <i class='bx bxl-youtube'></i>
            </a>
          </div>
        </div>

        <div className='footer__search'>
          <h1>Email</h1>
          <input type='email' placeholder='Enter Your Email' />
        </div>
      </div>

      <p class='copyright'>All Right Reserved &copy; 2020</p>
    </footer>
  )
}

export default Footer
