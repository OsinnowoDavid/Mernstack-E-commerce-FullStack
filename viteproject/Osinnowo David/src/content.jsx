import {createContext, useContext} from "react"

export const ShopCentext = createContext()
const ShopcontextProvider = (props) => {
    const backendUrl = 'https://done-e-commerce-full-stack-4v72.vercel.app'
    const Value = {
        backendUrl
    }

    return (
        <ShopCentext.Provider value={Value}>
            {props.children}
        </ShopCentext.Provider>
    )
}

// Custom hook to use the ShopContext
export const useShopContext = () => {
    return useContext(ShopCentext);
}

export default ShopcontextProvider;
