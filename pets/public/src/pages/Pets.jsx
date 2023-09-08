import styles from "./styles/Pets.module.scss";
import {GreenBtn} from "../components/Buttons"
import ListCard from "../components/ListCard";
import { useApi } from "../context/ApiContext";

const Pets = () => {
    const {pets} = useApi();

    return (
        <>
            <section className={styles.topCointainer}>
                <p>Pet List</p>
                <GreenBtn 
                    Btntext="Add Pets"
                />
            </section>
            <section className={styles.listCointainer}>
                {pets.map((pet) => (
                    <ListCard
                        key={pet.id}
                        name={pet.name}
                        email={pet.client_email}
                        petId={pet.id}
                    />
                ))}
            </section>
        </> 
    )
}

export default Pets;