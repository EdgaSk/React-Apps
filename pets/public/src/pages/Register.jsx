import RegisterForm from "../components/RegisterForm";
import styles from "./styles/Login.module.scss";
import DogImg from "../assets/img/dog.avif";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/');
  };

  return (
    <section className={styles.loginCointainer}>
      <div className={styles.left}>
        <img src={DogImg} alt="Dog" />
      </div>
      <div className={styles.right}>
      <h1 className={styles.title}>Registration</h1>
      <div className={styles.formBox}>
        <RegisterForm />
      </div>
        <div className={styles.rBottom}>
            <button onClick={handleRedirect} className={styles.btn}>Login</button>
        </div>
      </div>
    </section>
  );
};

export default Register;