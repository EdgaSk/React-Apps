import LoginForm from "../components/LoginForm";
import styles from "./styles/Login.module.scss";
import DogImg from "../assets/img/dog.avif";
import { useNavigate } from "react-router-dom";

const Login = () => {
  
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/register');
  };
  


  return (
    <section className={styles.loginCointainer}>
      <div className={styles.left}>
        <img src={DogImg} alt="Dog" />
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>Login</h1>
        <div className={styles.formBox}>
          <LoginForm />
        </div>
        <div className={styles.rBottom}>
            <button onClick={handleRedirect} className={styles.btn}>Registration</button>
        </div>
      </div>
    </section>
  );
};

export default Login;
