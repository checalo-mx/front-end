import React from 'react';
import { useState } from 'react';

export const SnackbarContext = React.createContext()

const ContextSnackBar = (props) => {

    const [msg, setMsg] = useState("Lorem Ipsum")
    const [open, setOpen] = useState(true);
    const [direction, setDirection] = useState({
        vertical: "top",
        horizontal: "cener",
    });
    
    const handleClick = () => {
        setOpen(true);
        setDirection({ vertical: "top", horizontal: "center" });
    };

  return(
    <SnackbarContext.Provider value={{msg, handleClick, setOpen, direction, open}}>
        {props.children}
    </SnackbarContext.Provider>


      )

};

export default ContextSnackBar;
