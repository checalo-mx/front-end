import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";

const OutlinedCard = (props) => {
    return (
        <div>
            <Box
                sx={{
                    bgcolor: "#FFFF",
                    height: "380px",
                    width: "300px",
                    borderRadius: "30px",
                    boxShadow: "1px 5px 5px gray",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center"
                }}
            >
                <Card variant="outlined" sx={{border:0}}>{props.cardTags ?  props.cardTags : props.children }</Card>
            </Box>
        </div>
    );
};

export default OutlinedCard;