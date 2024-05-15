import { Box, Typography } from "@mui/material";
import FormContainer from "../../components/Forms/FormContainer";
import FormText from "../../components/Forms/FormText";
import { useParams } from "react-router-dom";

function ViewPatient() {
  const params = useParams();
  console.log(params);
  return (
    <Box>
      <Typography variant="h6" mb={2}>
        View Patient {params.id}
      </Typography>
      <FormContainer title={"Patient Name"}>
        <FormText>Patient Name Here</FormText>
      </FormContainer>
      <FormContainer title={"Blood Group"}>
        <FormText>Blood Group Type Here</FormText>
      </FormContainer>
      <FormContainer title={"Blood Qty"}>
        <FormText>Blood Qty Type Here</FormText>
      </FormContainer>
      <FormContainer title={"Contact Number"}>
        <FormText>Patient Contact Here</FormText>
      </FormContainer>
      <FormContainer title={"Email"}>
        <FormText>Patient Email Here</FormText>
      </FormContainer>
      <FormContainer title={"Description"}>
        <FormText>Patient Decription Here</FormText>
      </FormContainer>
    </Box>
  );
}

export default ViewPatient;
