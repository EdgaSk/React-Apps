import {routes} from "./routes/routes";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import { useContext } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NavBar from "./components/NavBar";
import React from "react";
import { ApiProvider } from "./context/ApiContext";

const AppRoutes = () => {
    const { isLoggedIn } = useContext(UserContext);
    console.log(isLoggedIn);
    return (
        <>
            {!isLoggedIn ? (
                <Routes>
                    <>
                        <Route path="/" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </> 
                </Routes>
            ) : (
                <>
                    <ApiProvider>
                        <header>
                            <NavBar />
                        </header>
                        <main>
                            <Routes>
                                {routes.map(({ path, Component }) => (
                                    <Route key={path} path={path} element={<Component />} />
                                ))}
                            </Routes>
                        </main>
                        <footer>
                                
                        </footer>
                    </ApiProvider>
                </>
            )}
        </>
    )
}

export default AppRoutes;