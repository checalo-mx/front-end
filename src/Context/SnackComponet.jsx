import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useState, useContext } from "react";
import {SnackbarContext} from "./ContextSnackBar"

const SnackComponet = (props) => {

    const {msg, setOpen, direction, open} = useContext(SnackbarContext)

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });


    const [severity, setSeverity] = useState({
        severity: "sucess",
    });



    const { vertical, horizontal } = direction;

    // const handleClick = () => {
    //     setOpen(true);
    //     setDirection({ vertical: "top", horizontal: "center" });
    // };

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    const handleSeverity = (severity) => {
        setSeverity({ severity: "success" });
    };
    return (
        <div>
            <Stack spacing={2} sx={{ width: "100%" }}>
                {/* <Button variant="outlined" onClick={handleClick}>
                    Open success snackbar
                </Button> */}
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    anchorOrigin={{ vertical, horizontal }}
                >
                    <Alert
                        onClose={handleClose}
                        severity="success"
                        sx={{ width: "100%" }}
                    >
                        {msg}
                    </Alert>
                </Snackbar>
            </Stack>
        </div>
    );
};

export default SnackComponet;
