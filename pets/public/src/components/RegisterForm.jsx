import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/LoginForm.module.scss"

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.cointainer}
    >
        <label>Email</label>
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Repeat password</label>
        <input
          placeholder="Password"
          type="password"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
        />
      <button className={styles.btn} type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
