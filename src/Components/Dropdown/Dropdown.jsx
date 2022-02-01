import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function Dropdown (props) {
    return (
        <FormControl fullWidth>
            { props.label ? <InputLabel>{props.label}</InputLabel> : <></> }
            <Select
                value={props.value}
                label={props.label}
                onChange={(e)=>props.onChangeValue(e.target.value)}
            >
                {
                    props.arrayOptions.map(option => <MenuItem key={option} value={option}>{option}</MenuItem>)
                }
            </Select>
        </FormControl>
    )
}

export default Dropdown;