import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import styles from "./styles/LoginForm.module.scss"

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = { email, password };
    setUser(user);

    console.log("Įvesti duomenys:", user);
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
      <button className={styles.btn} type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
