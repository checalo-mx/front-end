import React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const AlertMessage = (props) => {
  return (
    <div>
      <Stack sx={{ width: "auto", margin:"10px" }} spacing={2}>
        <Alert severity={props.severity}>{props.alertTitle}<br/>{props.alertText}</Alert>
      </Stack>
    </div>
  );
};

export default AlertMessage;
