import {
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  Input,
  InputLabel,
} from "@mui/material";
import { ErrorMessage, Formik } from "formik";
import { Form } from "react-bootstrap";
import { mixed, number, object, string } from "yup";
import { axiosPost } from "../../services/axios.services";
import { successToast } from "../../config/toastConfig";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LectureForm = () => {
  console.log("lecture form")
  const [isDisabled,setIsDisabled] = useState(false);
  const navigate = useNavigate();
  const initialValues = {
    title: "",
    content: "",
    duration: 0,
    file: null,
  };
  const lectureValidationSchema = object({
    title: string()
      .required("title is required*")
      .min(5, "minimum 5 character is required"),
    content: string()
      .required("content is required*")
      .min(5, "minimum character must be greater then 3")
      .max(20, "maximum character mustn't be greater then 30"),
    duration: number().required("content is required*"),
    file: mixed().required(),
  });
  const handleSubmit =async (values: any) => {
    setIsDisabled(true);
    console.log("the values is ",values)
      const formData = new FormData();
      formData.append("title",values.title);
      formData.append("content",values.content);
      formData.append("duration",values.duration);
      formData.append("video",values.file);
      
      const response = await axiosPost('lectures',formData);
      if(response.status){
        successToast(response.message);
        setIsDisabled(false);
        navigate('/lectures')
      }

  };
  return (
    <div className="container mb-2 mx-auto w-100">
      <h2 className="text-center font-bold"> create lecture</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={lectureValidationSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          handleChange,
          handleSubmit,
          setFieldValue,
        }) => (
          <Form onSubmit={(e:any)=>handleSubmit(e)}>
            <div className="mb-3">
              <FormControl>
                <InputLabel htmlFor="title">Lecture Title</InputLabel>
                <Input
                  id="title"
                  name="title"
                  type="text"
                  className="w-full border "
                  onChange={handleChange}
                />
              </FormControl>
              <ErrorMessage name="title" className="text-center" />
            </div>
            <div className="mb-3">
              <FormControl>
                <InputLabel htmlFor="content">Lecture content</InputLabel>
                <Input
                  id="content"
                  name="content"
                  type="text"
                  className="w-full border "
                  onChange={handleChange}
                />{" "}
              </FormControl>
              <ErrorMessage name="content" className="text-center" />
            </div>
            <div className="mb-3">
              <FormControl>
                <InputLabel htmlFor="duration">Lecture duration</InputLabel>
                <Input
                  id="duration"
                  name="duration"
                  type="number"
                  className="w-full border "
                  onChange={handleChange}
                />
              </FormControl>
              <ErrorMessage name="duration" className="text-center" />
            </div>
            <div className="mb-3">
              <FormControl>
                <InputLabel htmlFor="file">Lecture file</InputLabel>
                <Input
                  id="file"
                  name="file"
                  type="file"
                  className="w-full border "
                  onChange={(e: any) => {
                    console.log(e.currentTarget.files[0]);
                    setFieldValue("file", e.currentTarget.files[0]);
                  }}
                />
              </FormControl>
              <ErrorMessage name="file" className="text-center" />
            </div>
            <Button disabled={isDisabled} variant="outlined" type="submit">
              {!isDisabled?"Submit":"Submitting ..."}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LectureForm;
