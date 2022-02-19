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
    "& img": { display: "block", margin: "auto" },
    // display: "flex",
    // // alignItems:"column",
    // justifyContent: "center"
};

const ImModal = (props) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>{props.btnTxt}</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                    >
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
        </div>
    );
};

export default ImModal;
