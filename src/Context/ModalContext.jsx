import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    // display: "flex",
    // // alignItems:"column",
    // // alignContent: "center"
  };

export default function MyModal(props) {

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        props.onClose();
    };

    const [open, setOpen] = React.useState(false);

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {props.modalTitle}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {props.modalText}
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <Button variant="outlined" color={props.okColor}>
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
    const [open, setOpen] = React.useState(false);
    const [modalSettings, setModalSettings] = React.useState({
        modalTitle: "Soy un titulo",
        modalText: "soy un texto",
        okColor: "primary",
        okButtonText: "button text",
        cancelColor: "secondary",
        cancelButtonText: "cancel text",
    });

    function openModal(
        modalTitle,
        modalText,
        okColor,
        okButtonText,
        cancelColor,
        cancelButtonText
    ) {
        setModalSettings({
            modalTitle,
            modalText,
            okColor,
            okButtonText,
            cancelColor,
            cancelButtonText,
        });
        setOpen(true);
        console.log(modalSettings)
    }

    function closeModal() {
        setModalSettings({
            modalTitle: "Soy un titulo",
            modalText: "soy un texto",
            okColor: "primary",
            okButtonText: "button text",
            cancelColor: "secondary",
            cancelButtonText: "cancel text",
        });
        setOpen(false);
    }

    return (
        <ModalCtx.Provider value={{ openModal, closeModal }}>
            {children}
            <MyModal
                open={open}
                modalSettings={modalSettings}
                onClose={() => setOpen(false)}
            />
        </ModalCtx.Provider>
    );
};
