import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { CloseFullscreenOutlined } from "@mui/icons-material";
import errorSymbol from "../Pages/Svg/error.svg";
import TextField from '@mui/material/TextField';

const style = {
    position: "absolute",
    textAlign: "center",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
};

export default function MyModal(props) {
    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        props.onClose();
    };

    return (
        <Modal
            open={props.open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <img src={errorSymbol} />
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {props.modalTitle}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 4, mb: 2 }}>
                    {props.modalText}
                </Typography>
                <Typography
                    id="modal-modal-warm-Farewell"
                    sx={{ mt: 2, mb: 8 }}
                >
                    {props.modalText2}
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <Button
                        variant="contained"
                        color={props.okColor}
                        onClick={props.handleConfirm}
                    >
                        {props.okButtonText}
                    </Button>
                    <Button
                        variant="contained"
                        color={props.cancelColor}
                        onClick={handleClose}
                    >
                        {props.cancelButtonText}
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
}

//

export const ModalCtx = React.createContext();
export const ModalProvider = ({ children }) => {
    const [confirm, setConfirm] = useState(false);
    const [open, setOpen] = useState(false);
    const [modalSettings, setModalSettings] = useState({
        modalTitle: "Soy un titulo",
        modalText: "soy un texto",
        modalText2: "soy otro texto",
        okColor: "primary",
        okButtonText: "button text",
        cancelColor: "secondary",
        cancelButtonText: "cancel text",
        inputModal: "yes" || <TextField id="standard-basic" label="Standard" variant="standard" />
    });

    function handleConfirm() {
        setConfirm(true);
    }

    function openModal(
        modalTitle,
        modalText,
        modalText2,
        okColor,
        okButtonText,
        cancelColor,
        cancelButtonText,
        inputModal
    ) {
        setModalSettings({
            modalTitle,
            modalText,
            modalText2,
            okColor,
            okButtonText,
            cancelColor,
            cancelButtonText,
            inputModal
        });
        setOpen(true);
        // console.log(modalSettings);
        console.log(open);
    }

    function closeModal() {
        setModalSettings({
            modalTitle: "Soy un titulo",
            modalText: "soy un texto",
            modalText2: "soy otro texto",
            okColor: "primary",
            okButtonText: "button text",
            cancelColor: "secondary",
            cancelButtonText: "cancel text",
            inputModal: "yes" || <TextField id="standard-basic" label="Standard" variant="standard" />
        });
        setOpen(false);
    }

    return (
        <ModalCtx.Provider value={{ openModal, closeModal, confirm }}>
            {children}
            <MyModal
                handleConfirm= {handleConfirm}
                open={open}
                // modalSettings={modalSettings}
                {...modalSettings}
                onClose={() => setOpen(false)}
            />
        </ModalCtx.Provider>
    );
};
