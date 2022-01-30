import React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const AlertMessage = (props) => {
  return (
    <div>
      <Stack sx={{ width: "50%" }} spacing={2}>
        <Alert severity={props.severity}>{props.text}</Alert>
      </Stack>
    </div>
  );
};

export default AlertMessage;
