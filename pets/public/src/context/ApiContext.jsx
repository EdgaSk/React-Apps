import { createContext, useContext, useState, useEffect } from "react";
import Loading from "../components/Loading";

const ApiContext = createContext();

export const ApiProvider = ({children}) => {
    const [pets, setPets] = useState([]);
    const [meds, setMeds] = useState([]);
    const [logs, setLogs] = useState([]);
    const [prescriptions, setPrescriptions] = useState([]);
    const [loading, setIsLoading] = useState(true);

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
        fetch("https://glittery-dull-snickerdoodle.glitch.me/v1/logs")
            .then((resp) => resp.json())
            .then((response) => {setLogs (response)})
            .catch((error) => {console.error(error)})
            .finally(() => {setIsLoading(false)});
        fetch("https://glittery-dull-snickerdoodle.glitch.me/v1/prescriptions")
            .then((resp) => resp.json())
            .then((response) => {setPrescriptions (response)})
            .catch((error) => {console.error(error)})
            .finally(() => {setIsLoading(false)});
    },[])

    if (loading) {
        return <Loading/>
    }

    const api ={
        pets,
        meds,
        logs,
        prescriptions,
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