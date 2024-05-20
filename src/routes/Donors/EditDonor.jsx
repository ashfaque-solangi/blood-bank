import { useState, useEffect } from "react";
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
import { useParams } from "react-router-dom";
import { getRequest, updateRequest } from "../../utils/server-request";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Breadcrumbs from "../../components/Common/Breadcrumbs";

const BREADCRUMBS_OPTIONS = [
  { title: "Donors", href: "/donors" },
  { title: "Edit Donor", href: "#" },
];

function EditDonor() {
  const params = useParams();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});

  const getDonor = async () => {
    try {
      await getRequest(`donors/${params.id}`, (res) => {
        toast.success(res.message);
        setInputs(res.data);
      });
    } catch (err) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    getDonor();
  }, [params.id]);

  const handlerInputs = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateRequest(`donors/${params.id}`, inputs, (res) => {
        toast.success(res.message);
        navigate(`/donors/view/${res.data.id}`);
      });
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <Box>
      <Breadcrumbs options={BREADCRUMBS_OPTIONS} />
      <Typography variant="h6" mb={2} mt={2}>
        Edit Donor
      </Typography>
      <form onSubmit={handlerSubmit}>
        <FormContainer title={"Donor Name"}>
          <FormTextInput
            name={"donor_name"}
            placeholder="Enter Donor Name"
            value={inputs.donor_name || ""}
            onChange={handlerInputs}
          />
        </FormContainer>
        <FormContainer title={"Blood Group"}>
          <FormDropDown
            name={"donor_blood_type"}
            options={BLOOD_GROUPS}
            value={inputs.donor_blood_type || ""}
            onChange={handlerInputs}
          />
        </FormContainer>
        <FormContainer title={"Qty"}>
          <FormNumberInput
            name={"donor_blood_qty"}
            value={inputs.donor_blood_qty || ""}
            onChange={handlerInputs}
          />
        </FormContainer>
        <FormContainer title={"Contact Number"}>
          <FormTelNumberInput
            name={"donor_contact"}
            value={inputs.donor_contact || ""}
            onChange={handlerInputs}
          />
        </FormContainer>
        <FormContainer title={"Email"}>
          <FormEmailInput
            name={"donor_email"}
            placeholder="Enter Donor Email"
            value={inputs.donor_email || ""}
            onChange={handlerInputs}
          />
        </FormContainer>
        <FormContainer title={"Description"}>
          <FormTextArea
            name={"donor_description"}
            value={inputs.donor_description || ""}
            onChange={handlerInputs}
          />
        </FormContainer>
        <Box gap={1} display={"flex"} justifyContent={"center"} mb={2}>
          <Button variant="contained" type="submit">
            Update Donor
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default EditDonor;
