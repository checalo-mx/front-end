import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function Dropdown (props) {
    return (
        <FormControl fullWidth>
            { props.label ? <InputLabel>{props.label}</InputLabel> : <></> }
            <Select
                label={props.label}
            >
                {
                    props.arrayOptions.map(option => <MenuItem value={option}>{option}</MenuItem>)
                }
            </Select>
        </FormControl>
    )
}

export default Dropdown