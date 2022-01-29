import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";

function CheckboxGroup (props) {
    return (
        <FormGroup>
            { props.arrayOptions.map(option => <FormControlLabel label={option} control={<Checkbox defaultChecked />} />)}
        </FormGroup>
    )
}

export default CheckboxGroup;