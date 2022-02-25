import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Background from '../../Components/Backgrounds/Background';
import { Grid } from '@mui/material';
import Navbar from '../../Components/Navbar/Navbar';

export default function AlignItemsList() {
  return (
      <div>
          <Navbar/>
          <Background/>
          <Grid container
          container
          justifyContent="center"
          flexDirection="column"
          marginBottom={10}
          >
          <Grid item marginTop={2}>
              <Typography fontWeight="700" fontSize={25} color={"grey"} textAlign="center">
                  Mis Listas
              </Typography>
          </Grid>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
    </ListItem>
    </List>
    </Grid>
    </div>
   
    
  );
};