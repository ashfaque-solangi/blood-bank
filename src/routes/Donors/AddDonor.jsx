import { Box, Button, Typography } from "@mui/material";
import React from "react";
import FormContainer from "../../components/Forms/FormContainer";
import FormTextInput from "../../components/Forms/FormTextInput";
import FormEmailInput from "../../components/Forms/FormEmailInput";
import FormDropDown from "../../components/Forms/FormDropDown";
import BLOOD_GROUPS from "../../_mock/blood-groups.json";
import FormTelNumberInput from "../../components/Forms/FormTelNumberInput";
import FormTextArea from "../../components/Forms/FormTextArea";
import FormNumberInput from "../../components/Forms/FormNumberInput";

function AddDonor() {
  return (
    <Box>
      <Typography variant="h6" mb={2}>
        Add New Donor
      </Typography>
      <form>
        <FormContainer title={"Donor Name"}>
          <FormTextInput name={"donorName"} placeholder="Enter Donor Name" />
        </FormContainer>
        <FormContainer title={"Blood Group"}>
          <FormDropDown name={"bloodGroup"} options={BLOOD_GROUPS} />
        </FormContainer>
        <FormContainer title={"Qty"}>
          <FormNumberInput name={"qty"} />
        </FormContainer>
        <FormContainer title={"Contact Number"}>
          <FormTelNumberInput name={"contactNumber"} />
        </FormContainer>
        <FormContainer title={"Email"}>
          <FormEmailInput name={"email"} placeholder="Enter Donor Email" />
        </FormContainer>
        <FormContainer title={"Description"}>
          <FormTextArea name={"description"} />
        </FormContainer>
        <Box gap={1} display={"flex"} justifyContent={"center"} mb={2}>
          <Button variant="contained">Add Donor</Button>
          <Button variant="contained" color="error">
            Reset
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default AddDonor;
