import { createContext, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {

    const [productsList, setProductsList] = useState([]);
    const [counter, setCounter] = useState(0);

    const [user, setUser] = useState({
        fName: "Guest",
        age: 0,
        city: "Unknown",
    });

    async function getProducts() {
        try {
            let { data } = await axios.get(`https://fakestoreapi.com/products`);
            setProductsList(data);
        } catch (error) {
            console.error(error);
        }
    }

    function userLogin() {
        setUser({
            fName: "Shrouk",
            age: 22,
            city: "Cairo",
        });
    }

    function increament() {
        setCounter(prev => prev + 1);
    }

    function them() {
        console.log("theme toggled");
    }

    return (
        <AppContext.Provider value={{
            productsList,
            getProducts,
            user,
            setUser,
            userLogin,
            counter,
            increament,
            them,
        }}>
            {children}
        </AppContext.Provider>
    );
}