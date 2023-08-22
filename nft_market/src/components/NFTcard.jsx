import './styles/NFTcard.css';
import PropTypes from "prop-types"; 

const Nftcard = (props) => {
    return(
        <div className='cardCointainer'>
            <img className='nftImage' src={props.nftImg} alt="" />
            <div className='nftInfo'>
                <div className='nftTitleName'>{props.nftName}</div>
                <div className='priceInfo'>Price:&nbsp;{props.nftPrice}&nbsp;{props.nftCrypto}</div>
                <div className='priceInfo'>Last Sale:&nbsp;{props.lastSale}&nbsp;{props.nftCrypto}</div>
            </div>

        </div>
    )
}

Nftcard.propTypes = {
    nftImg: PropTypes.string,
    nftName: PropTypes.string,
    nftPrice: PropTypes.number,
    nftCrypto: PropTypes.string,
    lastSale: PropTypes.number,
}

export default Nftcard;