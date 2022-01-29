import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';

function InputForm (props) {
    return (
        <FormControl fullWidth variant={props.variant}>
            { props.label ? <InputLabel>{props.label}</InputLabel> : <></> }
            <Input type={props.type} />
        </FormControl>
    )
}

export default InputForm;