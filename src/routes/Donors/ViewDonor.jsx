import { Box, Typography } from "@mui/material";
import FormContainer from "../../components/Forms/FormContainer";
import FormText from "../../components/Forms/FormText";
import { useParams } from "react-router-dom";
import FormNumberInput from "../../components/Forms/FormNumberInput";

function ViewDonor() {
  const params = useParams();
  console.log(params);
  return (
    <Box>
      <Typography variant="h6" mb={2}>
        View Donor {params.id}
      </Typography>
      <FormContainer title={"Donor Name"}>
        <FormText>Donor Name Here</FormText>
      </FormContainer>
      <FormContainer title={"Blood Group"}>
        <FormText>Blood Group Type Here</FormText>
      </FormContainer>
      <FormContainer title={"Qty"}>
        <FormText>Blood Qty Here</FormText>
      </FormContainer>
      <FormContainer title={"Contact Number"}>
        <FormText>Donor Contact Here</FormText>
      </FormContainer>
      <FormContainer title={"Email"}>
        <FormText>Donor Email Here</FormText>
      </FormContainer>
      <FormContainer title={"Description"}>
        <FormText>Donor Decription Here</FormText>
      </FormContainer>
    </Box>
  );
}

export default ViewDonor;
