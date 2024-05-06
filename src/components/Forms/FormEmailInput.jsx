import { TextField } from "@mui/material";

function FormEmailInput(props) {
  return (
    <TextField
      type="email"
      variant="outlined"
      fullWidth
      size="small"
      {...props}
    />
  );
}

export default FormEmailInput;
