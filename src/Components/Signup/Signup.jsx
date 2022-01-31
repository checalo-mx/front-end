import { Grid } from '@mui/material';
import React from 'react';
import PrimaryButton from '../Buttons/Primary/PrimaryButton';
import CheckboxGroup from '../CheckboxGroup/CheckboxGroup';
import Dropdown from '../Dropdown/Dropdown';
import InputForm from '../Inputs/InputForm';
import CardTitle from '../Titles/CardTitle';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


const Signup = () => {
  return <div>
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={10}>
        <ArrowBackIosNewIcon>ArrowBackIosNewIcon</ArrowBackIosNewIcon>
      </Grid>
    </Grid>

    <form>
      <Grid container spacing= {{xs:2}} alignItems="center"  justifyContent="center">
        
        <Grid item xs={10}>
          <CardTitle
            titleText="Únete a checalo.mx"
          />
          <p>
          ¡Ya casi estás!
          </p>
        </Grid>
        <Grid item xs={10}>
          <InputForm
            label="Nombre"
            type="text"
            // value={fullName}
          />
        </Grid>
        <Grid item xs={10}>
          <InputForm
            label="Apellido"
            type="text"
            // value={fullName}
          />
        </Grid>
        <Grid item xs={10}>
          <InputForm
            label="Email"
            type="text"
            // value={fullName}
          />
        </Grid>
        <Grid item xs={10}>
          <InputForm
            label="Contraseña"
            type="password"
            // value={fullName}
          />
        </Grid>
        <Grid item xs={10}>
          <InputForm
            label="Confirmar contraseña"
            type="password"
            // value={fullName}
          />
        </Grid>
        <Grid item xs={10}>
          <Dropdown
            label="Tipo de dieta"
            arrayOptions={["random1", "randon2"]}
          />
        </Grid>
        <Grid item xs={10}>
          <CheckboxGroup
          label="Alergias"
          arrayOptions={["random1", "randon2"]}
          />
        </Grid>
        <Grid item xs={10}>
          <PrimaryButton
           buttonText="REGISTRATE"
           color="primary"
           type="submit"
           variant="contained"
           />
        </Grid>

      </Grid>
    </form>
    
  </div>;
};

export default Signup;
