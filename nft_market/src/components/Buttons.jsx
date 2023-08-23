import PropTypes from "prop-types";
import "./styles/Buttons.css"

export const YellowBtn = (props) => {
    return (
        <button className="yellowBtn">
            {props.yellowText}
            <img className="ylBtnIcon" src={props.yellowIcon}/>
        </button>
    )
}

export const WhitewBtn = (props) => {
    return (
        <button className="WhitewBtn">
            {props.whiteText}
            <img className="wtBtnIcon" src={props.whiteIcon}/>
        </button>
    )
}

YellowBtn.propTypes = {
    yellowText: PropTypes.string.isRequired,
    yellowIcon: PropTypes.string,
};

WhitewBtn.propTypes = {
    whiteText: PropTypes.string.isRequired,
    whiteIcon: PropTypes.string,
};