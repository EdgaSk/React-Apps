import styles from "./styles/PetLog.module.scss";
import {GreenBtn} from "../components/Buttons";
import { useApi } from "../context/ApiContext";

const PetLog = () => {
    const {logs} = useApi();

    function formatDate(timestamp) {
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
      
        const formattedDate = `${year}-${padZero(month)}-${padZero(day)} ${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
        return formattedDate;
    }
      
    function padZero(value) {
        return value.toString().padStart(2, '0');
    }

    return (
        <>
            <section className={styles.topCointainer}>
                <p>Health Records</p>
                <GreenBtn 
                    Btntext="Add Log"
                />
            </section>
            <section className={styles.listCointainer}>
                {logs.map((log, index) => (
                    <div key={index} className={styles.card}>
                        <p>{log.status}</p>
                        <p>{formatDate(log.dob)}</p>
                        <p>{log.description}</p>
                    </div>
                ))}
            </section>
        </>
    )
}

export default PetLog;