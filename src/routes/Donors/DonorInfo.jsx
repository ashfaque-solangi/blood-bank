import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  RadioGroup,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Breadcrumbs from "../../components/Common/Breadcrumbs";
import FormContainer from "../../components/Forms/FormContainer";
import FormNumberInput from "../../components/Forms/FormNumberInput";
import FormTextInput from "../../components/Forms/FormTextInput";
import FormRadioInput from "../../components/Forms/FormRadioInput";

import FORM_QUESTIONS from "../../_mock/form-question.json";
import { postRequest } from "../../utils/server-request";
import { toast } from "react-toastify";
import { useParams } from "react-router";

const BREADCRUMBS_OPTIONS = [
  { title: "Donors", href: "/donors" },
  { title: "Add Donors", href: "/donors/add" },
  { title: "Donor Info", href: "#" },
];

// console.log("FORM_QUESTIONS", FORM_QUESTIONS);

function DonorInfo() {
  const params = useParams();
  const [inputs, setInputs] = useState({});

  const handlerRadio = async (e) => {
    const questionId = e.target.getAttribute("questionid");
    const value = e.target.value;
    const newInputs = { ...inputs };
    newInputs[questionId] = { ...inputs[questionId], option: value };
    setInputs(newInputs);
  };

  const handlerDescription = async (e) => {
    const questionId = e.target.getAttribute("questionid");
    const value = e.target.value;
    const newInputs = { ...inputs };
    newInputs[questionId] = { ...inputs[questionId], description: value };
    setInputs(newInputs);
  };

  // const handlerInputs = (e) => {
  //   const { name, value } = e.target;
  //   setInputs((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  // console.log(inputs);

  const handlerSubmit = async (e) => {
    e.preventDefault();
    // console.log("inputs", inputs);

    try {
      await postRequest(`donors/detail/${params.id}`, inputs, (res) => {
        toast.success(res.message);
        // navigate(`/donors/view/${res.data}`);
      });
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <>
      <Grid container>
        <Grid>
          <Breadcrumbs options={BREADCRUMBS_OPTIONS} />
          <Typography variant="h6" mb={2} mt={2}>
            Donor Info
          </Typography>
        </Grid>
      </Grid>

      <form onSubmit={handlerSubmit}>
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
                  <FormTextInput
                    variant={"standard"}
                    // name={`description_${disease.id}`}
                    placeholder="تفصیل"
                    inputProps={{
                      questionid: disease.id,
                      style: { textAlign: "right" },
                    }}
                    value={inputs[disease.id]?.description}
                    onChange={handlerDescription}
                  />
                </td>
                <td
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <RadioGroup row name={`option_${disease.id}`}>
                    {disease.options.map((option, optionIndex) => (
                      <FormRadioInput
                        key={optionIndex}
                        value={option}
                        label={option}
                        childProps={{
                          inputProps: {
                            questionid: disease.id,
                          },
                        }}
                        checked={inputs[disease.id]?.option === option}
                        onChange={handlerRadio}
                      />
                    ))}
                  </RadioGroup>
                </td>

                <th align="right">{disease.name}</th>
              </tr>
            ))}
          </tbody>
        </table>

        <Divider sx={{ my: 4 }} />

        <table className="table-column-padding ">
          <tbody>
            {FORM_QUESTIONS.questions.map((question, index) => (
              <tr key={index}>
                <td>
                  <FormTextInput
                    variant={"standard"}
                    placeholder="تفصیل"
                    inputProps={{
                      questionid: question.id,
                      style: { textAlign: "right" },
                    }}
                    value={inputs[question.id]?.description}
                    onChange={handlerDescription}
                  />
                </td>
                <td
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <RadioGroup row name={`option_${question.id}`}>
                    {question.options.map((option, optionIndex) => (
                      <FormRadioInput
                        sx={{ border: 1, px: 1 }}
                        key={optionIndex}
                        value={option}
                        label={option}
                        childProps={{
                          inputProps: {
                            questionid: question.id,
                          },
                        }}
                        checked={inputs[question.id]?.option === option}
                        onChange={handlerRadio}
                      />
                    ))}
                  </RadioGroup>
                </td>

                <th align="right">{question.question}</th>
              </tr>
            ))}
          </tbody>
        </table>
        <Box gap={1} display={"flex"} justifyContent={"center"} mt={4}>
          <Button variant="contained" type="submit">
            Add Donor Info
          </Button>
        </Box>
      </form>
    </>
  );
}

export default DonorInfo;
