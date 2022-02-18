import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import FormLabel from "@mui/material/FormLabel";

function CheckboxGroup(props) {
    return (
        <FormGroup>
            {props.label ? <FormLabel>{props.label}</FormLabel> : <></>}
            {props.arrayOptions.map((option) => (
                <FormControlLabel
                    key={option}
                    label={option}
                    // value={props.value}
                    control={
                        <Checkbox
                            name={option}
                            checked={props.state[option] || false}
                            onChange={props.onChangeValue}
                            inputProps={{ "aria-label": "controlled" }}
                        />
                    }
                />
            ))}
        </FormGroup>
    );
}

export default CheckboxGroup;
