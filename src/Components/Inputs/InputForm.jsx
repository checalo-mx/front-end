import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";

function InputForm(props) {
  return (
    <FormControl fullWidth variant={props.variant}>
      {props.label ? <InputLabel>{props.label}</InputLabel> : <></>}
      <Input
        disabled={props.disabled || false}
        type={props.type}
        value={props.value}
        onChange={(e)=>props.onChangeValue(e.target.value)}
      />
    </FormControl>
  );
}

export default InputForm;
