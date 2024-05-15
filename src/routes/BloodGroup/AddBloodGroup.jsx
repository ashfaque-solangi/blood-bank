import { Box, Button, Typography } from "@mui/material";
import React from "react";
import FormContainer from "../../components/Forms/FormContainer";
import FormTextInput from "../../components/Forms/FormTextInput";
import FormTextArea from "../../components/Forms/FormTextArea";
import FormDropDown from "../../components/Forms/FormDropDown";
import BLOOD_GROUPS from "../../_mock/blood-groups.json";
import FormNumberInput from "../../components/Forms/FormNumberInput";

function AddBloodGroup() {
  return (
    <Box>
      <Typography variant="h6" mb={2}>
        Add Blood Group
      </Typography>
      <form>
        <FormContainer title={"Blood Group"}>
          <FormTextInput name={"bloodGroup"} placeholder="Enter Blood Group" />
        </FormContainer>
        <FormContainer title={"Description"}>
          <FormTextArea name={"description"} />
        </FormContainer>
        <FormContainer title={"Blood Donors"}>
          <FormDropDown name={"bloodDonors"} options={BLOOD_GROUPS} />
        </FormContainer>
        <FormContainer title={"Qty"}>
          <FormNumberInput name={"qty"} />
        </FormContainer>
        <Box gap={1} display={"flex"} justifyContent={"center"} mb={2}>
          <Button variant="contained">Add Group</Button>
          <Button variant="contained" color="error">
            Reset
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default AddBloodGroup;
