import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducers/filterReducer";


const filterContext = createContext();

const FilterProvider = ({ children }) => {

    const [state, dispatch] = useReducer(filterReducer, {
        sortBy: null,
        sizes: { "s": false, "m": false, "l": false, "xl": false },
        brands: { "Addidas": false, "Roadster": false, "Puma": false, "Hrx": false, },
        categories: { men: false, women: false, boys: false, girls: false }
    });

    return (
        <filterContext.Provider value={{ state, dispatch }}>
            {children}
        </filterContext.Provider>
    )
}

const useFilter = () => useContext(filterContext);

export { useFilter, FilterProvider };