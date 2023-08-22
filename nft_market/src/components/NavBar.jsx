import './styles/NavBar.css'
import Logo from "../assets/logo/nftlogo.png"
import { Link } from 'react-router-dom';
import { YellowBtn } from './Buttons';
import WalletIcon from '../assets/icons/walleticon.png'

const Header = () => {
    return(
        <header className="headerCointainer">
            <nav className="navCointainer">
                <img className="logoImg" src={Logo} alt="Logo MarketPlace" />
                <ul className='linkCointainer'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/explore">Explore</Link></li>
                    <li><Link to="/pages">Pages</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <YellowBtn 
                    yellowText="Wallet Connect"
                    yellowIcon={WalletIcon}
                />
            </nav>
        </header>
    )
}

export default Header;