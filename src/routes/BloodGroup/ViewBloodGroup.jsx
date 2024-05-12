import { Box, Typography } from "@mui/material";
import FormContainer from "../../components/Forms/FormContainer";
import FormText from "../../components/Forms/FormText";
import { useParams } from "react-router-dom";

function ViewBloodGroup() {
  const params = useParams();
  console.log(params);
  return (
    <Box>
      <Typography variant="h6" mb={2}>
        View Blood Group {params.id}
      </Typography>
      <FormContainer title={"Blood Group"}>
        <FormText>Blood Group Here</FormText>
      </FormContainer>
      <FormContainer title={"Description"}>
        <FormText>Blood Group Decription Here</FormText>
      </FormContainer>
      <FormContainer title={"Blood Donors"}>
        <FormText>Blood Donors Here</FormText>
      </FormContainer>
      <FormContainer title={"Blood Recievers"}>
        <FormText>Blood Recievers Here</FormText>
      </FormContainer>
    </Box>
  );
}

export default ViewBloodGroup;
