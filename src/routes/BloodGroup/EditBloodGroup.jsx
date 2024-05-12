import { Box, Button, Typography } from "@mui/material";
import React from "react";
import FormContainer from "../../components/Forms/FormContainer";
import FormTextInput from "../../components/Forms/FormTextInput";
import FormTextArea from "../../components/Forms/FormTextArea";
import { useParams } from "react-router-dom";
import FormText from "../../components/Forms/FormText";
import BLOOD_GROUPS from "../../_mock/blood-groups.json";
import FormDropDown from "../../components/Forms/FormDropDown";

function EditBloodGroup() {
  const params = useParams();
  console.log(params);

  return (
    <Box>
      <Typography variant="h6" mb={2}>
        Edit Blood Group {params.id}
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
        <FormContainer title={"Blood Recievers"}>
          <FormDropDown name={"bloodRecievers"} options={BLOOD_GROUPS} />
        </FormContainer>
        <Box gap={1} display={"flex"} justifyContent={"center"} mb={2}>
          <Button variant="contained">Update Blood Group</Button>
        </Box>
      </form>
    </Box>
  );
}
// https://www.blood.co.uk/why-give-blood/blood-types/a-negative-blood-type/
export default EditBloodGroup;
