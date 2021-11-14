import './header.css';
import logo from '../../assets/img/logo.png';

const Header = () =>{
    return(
        <header className='header'>
            <nav className='nav'>
                <img className='logo' src={logo} alt='logo' />

                <i class='bx bx-user userIcon'></i>
            </nav>
        </header>
    )
}

export default Header;
