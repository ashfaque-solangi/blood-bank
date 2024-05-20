import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import FormContainer from "../../components/Forms/FormContainer";
import FormText from "../../components/Forms/FormText";
import { useParams } from "react-router-dom";
import { getRequest } from "../../utils/server-request";
import { toast } from "react-toastify";
import Breadcrumbs from "../../components/Common/Breadcrumbs";

const BREADCRUMBS_OPTIONS = [
  { title: "Donors", href: "/donors" },
  { title: "View Donor", href: "#" },
];

function ViewDonor() {
  const params = useParams();

  const [donor, setDonor] = useState({});

  const getDonor = async () => {
    try {
      await getRequest(`donors/${params.id}`, (res) => {
        toast.success(res.message);
        console.log("res", res.data);
        setDonor(res.data);
      });
    } catch (err) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    getDonor();
  }, [params.id]);

  return (
    <Box>
      <Breadcrumbs options={BREADCRUMBS_OPTIONS} />
      <Typography variant="h6" mb={2} mt={2}>
        View Donor
      </Typography>
      <FormContainer title={"Donor Name"}>
        <FormText>{donor?.donor_name}</FormText>
      </FormContainer>
      <FormContainer title={"Blood Group"}>
        <FormText>{donor?.donor_blood_type}</FormText>
      </FormContainer>
      <FormContainer title={"Qty"}>
        <FormText>{donor?.donor_blood_qty}</FormText>
      </FormContainer>
      <FormContainer title={"Contact Number"}>
        <FormText>{donor?.donor_contact}</FormText>
      </FormContainer>
      <FormContainer title={"Email"}>
        <FormText>{donor?.donor_email}</FormText>
      </FormContainer>
      <FormContainer title={"Description"}>
        <FormText>{donor?.donor_description}</FormText>
      </FormContainer>
    </Box>
  );
}

export default ViewDonor;
