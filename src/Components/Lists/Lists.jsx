import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ReactTimeAgo from 'react-time-ago'
import { useNavigate } from "react-router-dom";

const Lists = (props) => {

  const navigate = useNavigate();

  return (
    <div>
      <List sx={{bgcolor: "background.paper"}}  onClick={()=> navigate(`/productview/${props.code}`)}>

        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Imagen Producto" src={props.imgAvatar}/>
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
                {"Escaneado: "} <ReactTimeAgo date={props.date} locale="es-ES"/>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>
    </div>
  );
};

export default Lists;
