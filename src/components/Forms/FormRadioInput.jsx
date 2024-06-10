import { FormControlLabel, Radio } from "@mui/material";

function FormRadioInput({ childProps, ...props }) {
  return <FormControlLabel control={<Radio {...childProps} />} {...props} />;
}

export default FormRadioInput;
