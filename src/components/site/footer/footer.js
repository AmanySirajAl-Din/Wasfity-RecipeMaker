import './footer.css'
import logo from '../../../assets/img/logo.png'
import { Link } from 'react-router-dom'
import { injectIntl } from 'react-intl'

const Footer = ({ intl: { messages } }) => {
  const url = '#'
  const { company, about, contact, other } = messages.footer
  console.log(messages.footer)

  return (
    <footer>
      <div className='up__section'>
        <Link to='/' className='f__logo'>
          <img src={logo} alt='logo' />
        </Link>
        <ul>
          <h1>{company.company}</h1>
          <li>
            <a href={url}>{company.teams}</a>
          </li>
          <li>
            <a href={url}>{company.services}</a>
          </li>
          <li>
            <a href={url}>{company.subscribe}</a>
          </li>
          <li>
            <a href={url}>{company.advertise}</a>
          </li>
        </ul>

        <ul>
          <h1>{about.about}</h1>
          <li>
            <a href={url}>{about.community}</a>
          </li>
          <li>
            <a href={url}>{about.location}</a>
          </li>
          <li>
            <a href={url}>{about.app}</a>
          </li>
          <li>
            <a href={url}>{about.services}</a>
          </li>
        </ul>
      </div>

      <div className='down__section'>
        <ul>
          <h1>{contact.contact}</h1>
          <li>
            <p>+92475357355</p>
          </li>
          <li>
            <p>
              {contact.house} #215,{contact.street} #5
            </p>
          </li>
          <li>
            <p>{contact.town}</p>
          </li>
          <li>
            <p>{contact.map}</p>
          </li>
        </ul>

        <div className='social'>
          <h1>{other.social}</h1>
          <div className='social__icons'>
            <a href={url}>
              <i className='bx bxl-facebook'></i>
            </a>
            <a href={url}>
              <i className='bx bxl-twitter'></i>
            </a>
            <a href={url}>
              <i className='bx bxl-instagram'></i>
            </a>
            <a href={url}>
              <i className='bx bxl-youtube'></i>
            </a>
          </div>
        </div>

        <div className='footer__search'>
          <h1>{other.email}</h1>
          <input type='email' placeholder={other.enterEmail} />
        </div>
      </div>

      <p className='copyright'>{other.rights} &copy; 2021</p>
    </footer>
  )
}

export default injectIntl(Footer)
