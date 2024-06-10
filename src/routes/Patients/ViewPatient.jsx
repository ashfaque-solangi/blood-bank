import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import FormContainer from "../../components/Forms/FormContainer";
import FormText from "../../components/Forms/FormText";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getRequest } from "../../utils/server-request";
import Breadcrumbs from "../../components/Common/Breadcrumbs";

const BREADCRUMBS_OPTIONS = [
  { title: "Patients", href: "/donors" },
  { title: "View Patient", href: "#" },
];

function ViewPatient() {
  const params = useParams();

  const [patient, setPatient] = useState({});

  const getPatient = async () => {
    try {
      await getRequest(`patients/${params.id}`, (res) => {
        toast.success(res.message);
        setPatient(res.data);
      });
    } catch (err) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    getPatient();
  }, [params.id]);

  return (
    <Box>
      <Breadcrumbs options={BREADCRUMBS_OPTIONS} />
      <Typography variant="h6" mb={2} mt={2}>
        View Patient
      </Typography>
      <FormContainer title={"Patient Name"}>
        <FormText>{patient?.patient_name}</FormText>
      </FormContainer>
      <FormContainer title={"Age"}>
        <FormText>{patient?.patient_age}</FormText>
      </FormContainer>
      <FormContainer title={"Blood Group"}>
        <FormText>{patient?.patient_blood_type}</FormText>
      </FormContainer>
      <FormContainer title={"Blood Qty"}>
        <FormText>{patient?.patient_blood_qty}</FormText>
      </FormContainer>
      <FormContainer title={"Contact Number"}>
        <FormText>{patient?.patient_contact}</FormText>
      </FormContainer>
      <FormContainer title={"Email"}>
        <FormText>{patient?.patient_email}</FormText>
      </FormContainer>
      <FormContainer title={"Address"}>
        <FormText>{patient?.patient_description}</FormText>
      </FormContainer>
    </Box>
  );
}

export default ViewPatient;
