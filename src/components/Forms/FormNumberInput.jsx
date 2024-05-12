import { TextField } from "@mui/material";

function FormNumberInput(props) {
  return (
    <TextField
      type="number"
      variant="outlined"
      fullWidth
      size="small"
      {...props}
    />
  );
}

export default FormNumberInput;
