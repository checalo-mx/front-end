import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const Lists = (props) => {
  return (
    <div>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper"  }}>

        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Imagen Producto" src={props.imgAvatar} />
          </ListItemAvatar>
          <ListItemText
            primary={props.productTitle}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                 
                </Typography>
                {"Escaneaste el día: " + props.date}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </div>
  );
};

export default Lists;
