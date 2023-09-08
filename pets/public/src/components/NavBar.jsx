import styles from "./styles/NavBar.module.scss";
import Logo from "../assets/logo/petcare.png"
import { navLinksItems } from "../routes/routes";
import { NavLink } from "react-router-dom";
import React from 'react';
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import {FaUserCircle} from "react-icons/fa";

const NavBar = () => {
    const {user} = useContext(UserContext);

    return (
        <nav className={styles.cointainer}>
            <div className={styles.left}>
                <img className={styles.logo} src={Logo} alt="petcare" />
            </div>
            <div className={styles.center}>
                {navLinksItems.map((navItem) => (
                    <NavLink 
                        key={navItem.path}
                        to={navItem.path}
                    >
                        {navItem.title}
                    </NavLink>
                ))}
            </div>
            <div className={styles.right}>
                {(user && user.email)}
                <FaUserCircle 
                    className={styles.userIcon}
                />
            </div>
        </nav>
    )
}

export default NavBar;