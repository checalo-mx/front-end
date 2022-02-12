import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export default function UserProvider  ({ children })  {
    const initialState = JSON.parse(localStorage.getItem("user")) || {
        logged: false,
    };
    const [user, setUser] = useState(initialState);
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    }, [user]);

    // function getActiveUser (){
    //     return activeUser = localStorage.getItem("user")
    // }

    ///{user: }
    ////setUser({name: "usuario", token: "frewvgdfbhnjremgf", allergies:[{}])
    const data = { user, setUser };
    return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};
