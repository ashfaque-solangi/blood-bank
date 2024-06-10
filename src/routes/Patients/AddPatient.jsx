import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import FormContainer from "../../components/Forms/FormContainer";
import FormTextInput from "../../components/Forms/FormTextInput";
import FormEmailInput from "../../components/Forms/FormEmailInput";
import FormDropDown from "../../components/Forms/FormDropDown";
import BLOOD_GROUPS from "../../_mock/blood-groups.json";
import FormTelNumberInput from "../../components/Forms/FormTelNumberInput";
import FormTextArea from "../../components/Forms/FormTextArea";
import FormNumberInput from "../../components/Forms/FormNumberInput";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { postRequest } from "../../utils/server-request";
import Breadcrumbs from "../../components/Common/Breadcrumbs";

const BREADCRUMBS_OPTIONS = [
  { title: "Patients", href: "/donors" },
  { title: "Add Patient", href: "#" },
];

function AddPatient() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});

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
      await postRequest("patients", inputs, (res) => {
        toast.success(res.message);
        console.log("res", res.data);
        navigate(`/patients/view/${res.data}`);
      });
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <Box>
      <Breadcrumbs options={BREADCRUMBS_OPTIONS} />
      <Typography variant="h6" mb={2} mt={2}>
        Add New Patient
      </Typography>
      <form onSubmit={handlerSubmit}>
        <FormContainer title={"Patient Name"}>
          <FormTextInput
            name={"patient_name"}
            placeholder="Enter Patient Name"
            value={inputs.patient_name || ""}
            onChange={handlerInputs}
          />
        </FormContainer>
        <FormContainer title={"Age"}>
          <FormNumberInput
            name={"patient_age"}
            value={inputs.patient_age || ""}
            onChange={handlerInputs}
          />
        </FormContainer>
        <FormContainer title={"Blood Group"}>
          <FormDropDown
            name={"patient_blood_type"}
            options={BLOOD_GROUPS}
            value={inputs.patient_blood_type || ""}
            onChange={handlerInputs}
          />
        </FormContainer>
        <FormContainer title={"Blood Qty"}>
          <FormNumberInput
            name={"patient_blood_qty"}
            value={inputs.patient_blood_qty || ""}
            onChange={handlerInputs}
          />
        </FormContainer>
        <FormContainer title={"Contact Number"}>
          <FormTelNumberInput
            name={"patient_contact"}
            value={inputs.patient_contact || ""}
            onChange={handlerInputs}
          />
        </FormContainer>
        <FormContainer title={"Email"}>
          <FormEmailInput
            name={"patient_email"}
            placeholder="Enter Patient Email"
            value={inputs.patient_email || ""}
            onChange={handlerInputs}
          />
        </FormContainer>
        <FormContainer title={"Address"}>
          <FormTextArea
            name={"patient_description"}
            value={inputs.patient_description || ""}
            onChange={handlerInputs}
          />
        </FormContainer>
        <Box gap={1} display={"flex"} justifyContent={"center"} mb={2}>
          <Button variant="contained" type="submit">
            Add Patient
          </Button>
          <Button variant="contained" color="error">
            Reset
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default AddPatient;
