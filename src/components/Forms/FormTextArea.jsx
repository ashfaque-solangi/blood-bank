import { TextField } from "@mui/material";

function FormTextArea(props) {
  return (
    <TextField
      variant="outlined"
      fullWidth
      size="small"
      multiline
      minRows={2}
      {...props}
    />
  );
}

export default FormTextArea;
