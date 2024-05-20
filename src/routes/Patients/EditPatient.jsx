import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import FormContainer from "../../components/Forms/FormContainer";
import FormTextInput from "../../components/Forms/FormTextInput";
import FormEmailInput from "../../components/Forms/FormEmailInput";
import FormDropDown from "../../components/Forms/FormDropDown";
import BLOOD_GROUPS from "../../_mock/blood-groups.json";
import FormTelNumberInput from "../../components/Forms/FormTelNumberInput";
import FormTextArea from "../../components/Forms/FormTextArea";
import { useNavigate, useParams } from "react-router-dom";
import FormNumberInput from "../../components/Forms/FormNumberInput";
import { getRequest, updateRequest } from "../../utils/server-request";
import { toast } from "react-toastify";
import Breadcrumbs from "../../components/Common/Breadcrumbs";

const BREADCRUMBS_OPTIONS = [
  { title: "Patients", href: "/patients" },
  { title: "Edit Patient", href: "#" },
];

function EditPatient() {
  const params = useParams();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});

  const getPatient = async () => {
    try {
      await getRequest(`patients/${params.id}`, (res) => {
        toast.success(res.message);
        setInputs(res.data);
      });
    } catch (err) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    getPatient();
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
    console.log("abc");
    try {
      await updateRequest(`patients/${params.id}`, inputs, (res) => {
        toast.success(res.message);
        navigate(`/patients/view/${res.data.id}`);
      });
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <Box>
      <Breadcrumbs options={BREADCRUMBS_OPTIONS} />
      <Typography variant="h6" mb={2} mt={2}>
        Edit Patient
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
        <FormContainer title={"Blood Group"}>
          <FormDropDown
            name={"patient_blood_type"}
            options={BLOOD_GROUPS}
            value={inputs.patient_blood_type || ""}
            onChange={handlerInputs}
          />
        </FormContainer>
        <FormContainer title={"Qty"}>
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
        <FormContainer title={"Description"}>
          <FormTextArea
            name={"patient_description"}
            value={inputs.patient_description || ""}
            onChange={handlerInputs}
          />
        </FormContainer>
        <Box gap={1} display={"flex"} justifyContent={"center"} mb={2}>
          <Button variant="contained" type="submit">
            Update Patient
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default EditPatient;
