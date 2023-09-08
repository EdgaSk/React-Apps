import styles from "./styles/Buttons.module.scss";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { LOGS_PATH } from "../routes/routes";

export const GreenBtn = (props) => {
    return (
        <button className={styles.greenBtn}>{props.Btntext}</button>
    )
}
GreenBtn.propTypes = {
    Btntext: PropTypes.string,
}


export const LGreenBtn = (props) => {
    return (
        <button className={styles.lgreenBtn}>{props.Btntext}</button>
    )
}
LGreenBtn.propTypes = {
    Btntext: PropTypes.string,
}


export const LogsBtn = (props) => {
    const navigate = useNavigate();

    const handleRedicrect = (petId) => {
        navigate(`${LOGS_PATH.replace (":id", petId)}`);
    }

    return (
        <button 
            className={styles.logsBtn} 
            onClick={() => handleRedicrect(props.petId)}
            key={props.petId}
        >
            {props.Btntext}
        </button>
    )
}

LogsBtn.propTypes = {
    Btntext: PropTypes.string,
    petId: PropTypes.number,
}