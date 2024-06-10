import { useState, useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import FormContainer from "../../components/Forms/FormContainer";
import FormText from "../../components/Forms/FormText";
import { useParams } from "react-router-dom";
import { getRequest } from "../../utils/server-request";
import { toast } from "react-toastify";
import Breadcrumbs from "../../components/Common/Breadcrumbs";
import FORM_QUESTIONS from "../../_mock/form-question.json";

const BREADCRUMBS_OPTIONS = [
  { title: "Donors", href: "/donors" },
  { title: "View Donor", href: "#" },
];

function ViewDonor() {
  const params = useParams();

  const [donor, setDonor] = useState({});
  const [donorDetail, setdonorDetail] = useState({});

  const getDonor = async () => {
    try {
      await getRequest(`donors/${params.id}`, (res) => {
        toast.success(res.message);
        // console.log("res", res.data);
        setDonor(res.data);
        // setdonorDetail(res.data.question_id[{ selected_option, description }]);
      });
      // setdonorDetail({
      //   ...donorDetail,
      //   questions: {
      //     question_id: res.data.question_id,
      //     selected_option: res.data.selected_option,
      //     description: res.data.description,
      //   },
      // });
    } catch (err) {
      toast.error(err.message);
    }
  };

  console.log("donor", donor);
  console.log("donorDetail", donorDetail);

  useEffect(() => {
    getDonor();
  }, [params.id]);

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Breadcrumbs options={BREADCRUMBS_OPTIONS} />
          <Typography variant="h6" mb={2} mt={2}>
            View Donor
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <FormContainer title={"Donor Name"}>
            <FormText>{donor?.donor_name}</FormText>
          </FormContainer>
          <FormContainer title={"Age"}>
            <FormText>{donor?.donor_age}</FormText>
          </FormContainer>
          <FormContainer title={"Gender"}>
            <FormText>{donor?.donor_gender}</FormText>
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
          <FormContainer title={"Address"}>
            <FormText>{donor?.donor_description}</FormText>
          </FormContainer>
        </Grid>
        <Grid item xs={6}>
          <FormContainer title={"Weight"}>
            <FormText>{donor?.donor_weight}</FormText>
          </FormContainer>
          <FormContainer title={"Temp"}>
            <FormText>{donor?.donor_temprature}</FormText>
          </FormContainer>
          <FormContainer title={"B.P."}>
            <FormText>{donor?.donor_b_p}</FormText>
          </FormContainer>
          <FormContainer title={"Pulse"}>
            <FormText>{donor?.donor_pulse}</FormText>
          </FormContainer>
          <FormContainer title={"Blood Technician"}>
            <FormText>{donor?.blood_technician}</FormText>
          </FormContainer>
        </Grid>
      </Grid>
      <Grid container>
        <Grid>
          <Typography variant="h6" mb={2} mt={2}>
            Donor Info
          </Typography>
        </Grid>
        <table className="table-column-padding" border={2}>
          <thead>
            <tr>
              <th>تفصیل</th>
              <th>نہیں/ہاں</th>
              <th>
                کیا آپ مندرجہ ذیل بیماریوں سے متاثر ہیں، یا ماضی میں رہ چکے ہیں؟
              </th>
            </tr>
          </thead>
          <tbody>
            {FORM_QUESTIONS.diseases.map((disease, index) => (
              <tr key={index}>
                <td>
                  <FormContainer>
                    <FormText>{donor?.donor_name}</FormText>
                  </FormContainer>
                </td>
                <td
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                ></td>
                <th align="right">{disease.name}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </Grid>
    </>
  );
}

export default ViewDonor;
