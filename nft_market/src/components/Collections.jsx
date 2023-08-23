import "./styles/Collections.css";
import PropTypes from "prop-types";
import Nftsdata from "../data/nftdata.json";
import Item from "../assets/icons/item.png";
import Like from "../assets/icons/like.png"

const Collections = (props) => { 
    const nftrandom = Nftsdata.slice(0, 4);    

    return (
        <div className="collectionBox">
            <div className="collectionsImg">
                {nftrandom.map((Nftdata) => (
                    <img className="nftImgColl" src={Nftdata.image} alt="" />
                ))}
            </div>
            <div className="userCollBox">
                <img className="userCollImg" src={props.usersImg} alt="" />
            </div>
            <div className="collectInfo">
                <div>{props.collectionName}</div>
                <div className="reactionBox">
                    <div>
                        <img className="rectionIcon" src={Item} alt="" />
                        <div>Items&nbsp;{props.collectionitems}</div>
                    </div>
                    <div>
                        <img className="rectionIcon" src={Like} alt="" />
                        <div>Likes&nbsp;{props.collectionitems}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Collections.propTypes = {
    collectionName: PropTypes.string,
    usersImg: PropTypes.string,
    collectionitems: PropTypes.number,
}

export default Collections;