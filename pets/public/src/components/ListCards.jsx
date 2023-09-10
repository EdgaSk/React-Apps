import styles from "./styles/ListCard.module.scss";
import PropTypes from "prop-types";
import {LogsBtn, LGreenBtn} from "./Buttons";

export const ListCard = (props) => {

    return (
        <div className={styles.cardCointainer}>
            <div className={styles.left}>
                <p className={styles.name}>{props.name}</p>
                <p>{props.email}</p>
            </div>
            <div className={styles.right}>
                <LogsBtn
                    Btntext="View Log"
                    petId={props.petId}
                    key={props.petId}
                />
                <LGreenBtn
                    Btntext="Delete"
                />
            </div>
        </div>
    )
}

ListCard.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    petId: PropTypes.number,
}