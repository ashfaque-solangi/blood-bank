import { TextField } from "@mui/material";

function FormTelNumberInput(props) {
  return (
    <TextField
      type="tel"
      variant="outlined"
      fullWidth
      size="small"
      {...props}
    />
  );
}

export default FormTelNumberInput;
