import styles from "./styles/Med.module.scss"
import { GreenBtn } from "../components/Buttons";
import { useApi } from "../context/ApiContext";

const Medications = () => {
    const {meds} = useApi();
    return (
        <>
            <section className={styles.topCointainer}>
                <p>Medications</p>
                <GreenBtn 
                    Btntext="Add Med"
                />
            </section>
            <section className={styles.listCointainer}>
                {meds.map((med) => (
                    <div key={med.id} className={styles.card}>
                        <p>{med.name}</p>
                        <p>{med.description}</p>
                    </div>
                ))}
            </section>
        </>
    )
}

export default Medications;