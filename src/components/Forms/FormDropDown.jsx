import { MenuItem, Select } from "@mui/material";
import React from "react";

function FormDropDown({ options = [], ...props }) {
  return (
    <Select variant="outlined" fullWidth size="small" {...props}>
      {options.map((option) => (
        <MenuItem key={option.key} value={option.key}>
          {option.value}
        </MenuItem>
      ))}
    </Select>
  );
}

export default FormDropDown;
