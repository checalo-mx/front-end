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
                }}
            >
                <Card variant="outlined">{props.cardTags}</Card>
            </Box>
        </div>
    );
};

export default OutlinedCard;
