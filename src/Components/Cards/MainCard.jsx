import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const MainCard = (props) => {
  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <Container
          maxWidth="xxl"
          sx={{
            position: "absolute",
            top: "25vh",
          }}
        >
          <Box
            sx={{
              margin: "auto",
              bgcolor: "#FFFF",
              height: "380px",
              width: "300px",
              borderRadius: "30px",
              boxShadow: "1px 5px 5px gray",
            }}
          >
            {props.children}
          </Box>
        </Container>
      </React.Fragment>
    </>
  );
};

export default MainCard;
