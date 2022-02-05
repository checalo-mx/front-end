import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Switchs from "../../Components/Switchs/Switchs"
import CardTitle from "../../Components/Titles/CardTitle";

const card = (
  <React.Fragment>
      <CardTitle titleText="Perfil de Alimentación" />
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Tipo de Dieta
      </Typography>
      <Typography variant="h5" component="div">
            Vegetariano
             <Switchs>
                             
            </Switchs>
            Vegano
             <Switchs>
                             
            </Switchs>
      </Typography>
    </CardContent>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Alergias
      </Typography>
      <Typography variant="h5" component="div">
            Huevo
             <Switchs>
                             
            </Switchs>
           Mariscos
             <Switchs>
                             
            </Switchs>
            Nueces
            <Switchs>

            </Switchs>
            Celiaco
            <Switchs>

            </Switchs>
            Intolerancia a los lácteos
            <Switchs>

            </Switchs>
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
