import { createContext, useState } from 'react';

export const UserContext = createContext(null);

export const UserProvider = () => {
    const [userData, setUserData] = useState(
        localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : {}
    );

    return <UserContext.Provider value={{ userData, setUserData }}></UserContext.Provider>;
};
