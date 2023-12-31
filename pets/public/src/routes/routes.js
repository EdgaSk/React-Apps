// import Home from "../pages/Home";
import Pets from "../pages/Pets";
import Medications from "../pages/Medications";
import Logs from "../pages/PetLog";
import NotFound from "../pages/Not_found_404";

// export const HOME_PATH = "/";
export const PETS_PATH = "/";
export const MEDICATIONS_PATH = "/medications";
export const LOGS_PATH = "/:id";
export const NOT_FOUND_404 = "*";

export const routes = [
    // { path: HOME_PATH, Component: Home},
    { path: PETS_PATH, Component: Pets},
    { path: MEDICATIONS_PATH, Component: Medications},
    { path: LOGS_PATH, Component: Logs},
    { path: NOT_FOUND_404, Component: NotFound},
]

export const navLinksItems = [
    // { title: "Home", path: HOME_PATH},
    { title: "Pets", path: PETS_PATH},
    { title: "Medications", path: MEDICATIONS_PATH},
]