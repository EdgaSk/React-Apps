import { createContext, useContext, useState, useEffect } from "react";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";
import { NOT_FOUND_404 } from "../routes/routes";

const ApiContext = createContext();

export const ApiProvider = ({children}) => {
    const [pets, setPets] = useState([]);
    const [meds, setMeds] = useState([]);
    const [logs, setLogs] = useState([]);
    const [prescriptions, setPrescriptions] = useState([]);
    const [loading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect (() => {
        fetch("https://glittery-dull-snickerdoodle.glitch.me/v1/pets")
            .then((resp) => resp.json())
            .then((response) => {setPets (response)})
            .catch((error) => {console.error(error)})
            .finally(() => {setIsLoading(false)});
        fetch("https://glittery-dull-snickerdoodle.glitch.me/v1/meds")
            .then((resp) => resp.json())
            .then((response) => {setMeds (response)})
            .catch((error) => {console.error(error)})
            .finally(() => {setIsLoading(false)});
        fetch("https://glittery-dull-snickerdoodle.glitch.me/v1/logs/288")
            .then((resp) => resp.json())
            .then((response) => {setLogs (response)})
            .catch((error) => {console.error(error)})
            .finally(() => {setIsLoading(false)});
        // fetch("https://glittery-dull-snickerdoodle.glitch.me/v1/prescriptions")
        //     .then((resp) => resp.json())
        //     .then((response) => {setPrescriptions (response)})
        //     .catch((error) => {console.error(error)})
        //     .finally(() => {setIsLoading(false)});
    },[])

    const handleRedirect = () => {
        navigate(NOT_FOUND_404);
    };

    if (loading) {
        return <Loading/>
    }

    if (!pets && !meds && !logs && !loading) {
        handleRedirect();
    }

    const api ={
        pets,
        meds,
        logs,
        // prescriptions,
    }
    return (
        <ApiContext.Provider value={api}>
            {children}
        </ApiContext.Provider>
    )
}

export const useApi = () => {
    return useContext(ApiContext);
}