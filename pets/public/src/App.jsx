import styles from './App.module.scss'
import AppRoutes from './AppRoutes';
import { UserProvider } from "./context/UserContext";

const App = () => {

  return (
    <UserProvider>
      <AppRoutes/>
    </UserProvider>
  )
}

export default App;
