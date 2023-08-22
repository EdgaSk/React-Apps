import './styles/Hero.css';
import PropTypes from "prop-types";
import { YellowBtn, WhitewBtn } from './Buttons';
import ArrowIcon from '../assets/icons/iconArrow.png'
import BitCoin from '../assets/icons/bitcoin.png'
import ETH from '../assets/icons/eth.png'
import DogeCoin from '../assets/icons/dogecoin.png'

const Hero = (props) => {
    return (
        <div className='heroCointainer'>
            <img className='coinIcons bitcoin' src={BitCoin} alt="" />
            <img className='coinIcons eth' src={ETH} alt="" />
            <img className='coinIcons doge' src={DogeCoin} alt="" />
            <h1>{props.heroTitle}</h1>
            <p>{props.heroSubtitle}</p>
            <div className='heroButtons'>
                <YellowBtn 
                    yellowText="Discover More"
                    yellowIcon={ArrowIcon}
                />
                <WhitewBtn 
                    whiteText="All Collections"
                    whiteIcon={ArrowIcon}
                />
            </div>
        </div>
    )
}

Hero.PropTypes = {
    heroTitle: PropTypes.string.isRequired,
    heroSubtitle: PropTypes.string.isRequired,
}


export default Hero;