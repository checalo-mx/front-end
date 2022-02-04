import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useState } from "react";

export const SnackContext = React.createContext(Snackcontext)

const Snackcontext = (props) => {
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const [open, setOpen] = useState(false);

    const [severity, setSeverity] = useState({
        severity: "sucess",
    });

    const [direction, setDirection] = useState({
        vertical: "false",
        horizontal: "false",
    });

    const { vertical, horizontal } = direction;

    const handleClick = () => {
        setOpen(true);
        setDirection({ vertical: "top", horizontal: "center" });
    };

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
                        severity={props.severity}
                        sx={{ width: "100%" }}
                    >
                        {props.snackText}
                    </Alert>
                </Snackbar>
            </Stack>
        </div>
    );
};

export default Snackcontext;
