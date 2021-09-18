import { createContext, useContext } from 'react';

export const storeContext = createContext();
export const StoreProvider = ({ children, value }) => {
    return <storeContext.Provider value={value}>{children}</storeContext.Provider>
}
export const useStore = () => {
    const store = useContext(storeContext)
    if (!store) {
        throw new Error('Придурок! Ты используешь этот хук за пределами StoreProvider и я не могу добраться до контекста')
    }
    return store
}