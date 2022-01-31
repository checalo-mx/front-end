import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import FormLabel from "@mui/material/FormLabel";


function CheckboxGroup (props) {
    return (
        <FormGroup>
            { props.label ? <FormLabel>{props.label}</FormLabel> : <></> }
            { props.arrayOptions.map(option => <FormControlLabel label={option} control={<Checkbox defaultChecked />} />)}
        </FormGroup>
    )
}

export default CheckboxGroup;