import React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function MySnack(props) {

    const handleClose = (event, reason) => {
          if (reason === 'clickaway') {
            return;
          }
        props.onClose()
    };

    return (
        <Stack spacing={2} sx={{ width: "100%" }}>
            <Snackbar
                open={props.open}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <Alert
                    onClose={handleClose}
                    severity={props.message.severity}
                    sx={{ width: "100%" }}
                >
                    {props.message.msg}
                </Alert>
            </Snackbar>
        </Stack>
    );
}

//

export const SnackCtx = React.createContext();
export const SnackProvider = ({ children }) => {
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState({ msg: "", severity: "" });

    function openSnackbar(msg, severity) {
        setMessage({ msg, severity });
        setOpen(true);
    }

    function closeSnackbar() {
        setMessage({ msg: "", severity: "" });
        setOpen(false);
    }

    return (
        <SnackCtx.Provider value={{ openSnackbar, closeSnackbar }}>
            {children}
            <MySnack
                open={open}
                message={message}
                onClose={() => setOpen(false)}
            />
        </SnackCtx.Provider>
    );
};
