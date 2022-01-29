import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const MainCard = () => {
  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Box
            sx={{
              bgcolor: "#FFFF",
              height: "380px",
              width: "300px",
              borderRadius: "30px",
              boxShadow: '1px 5px 5px gray'
            }}
          />
        </Container>
      </React.Fragment>
    </div>
  );
};

export default MainCard;
