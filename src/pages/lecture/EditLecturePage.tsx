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
// import { mixed, number, object, string } from "yup";
import { axiosGet ,axiosPatch} from "../../services/axios.services";
import { successToast } from "../../config/toastConfig";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../../components/loader/Loader";
import { AiFillDelete } from "react-icons/ai";
import "./editLecture.css";
const EditLecturePage = () => {
  const [lecture, setLecture] = useState<any>({});
  const [isDisabled, setIsDisabled] = useState(false);
  const [removeVideo, setRemoveVideo] = useState(false);

  const navigate = useNavigate();
  const { lectureId } = useParams();
  // console.log(window.location.pathname) it gives /lectures/64d9dae49c6481b0ee0de246
  console.log("the lectureId is ", lectureId);
  useEffect(() => {
    getLectureById();
  }, []);
  const getLectureById = async () => {
    const response = await axiosGet(`lectures/${lectureId}`);
    console.log("the response is ", response);
    if (response.status == true) {
      console.log("the lecture is", lecture);
      setLecture(response);
    }
  };

  const handleEdit = async (values: any) => {
    setIsDisabled(true);
    console.log("================================================");
    const formData:any = new FormData();
    formData.append("title", values.title);
    formData.append("content", values.content);
    formData.append("duration", values.duration);
    console.log("the values is ", values);
    if(values.file){
      formData.append("video", values.file);
      //yedi anytype hunna vane formData Argument of type 'boolean' is not assignable to parameter of type 'string'
      formData.append("isVideoEdited", true);
    }
    else{
      formData.append("isVideoEdited", false);
    }
    const response = await axiosPatch(`lectures/${lectureId}`, formData);
    if (response.status) {
      successToast(response.message);
      setIsDisabled(false);
      navigate("/lectures");
    }
  };
  return (
    <div className="container mb-2 mx-auto w-100">
      <h2 className="text-center font-bold"> Edit lecture</h2>
      {lecture.status ? (
        <Formik
          initialValues={{
            title: lecture.data.title,
            content: lecture.data.content,
            duration: lecture.data.duration,
            isVideoEdited : false
          }}
          onSubmit={handleEdit}
        >
          {({ values, errors, handleChange, handleSubmit, setFieldValue }) => (
            <Form onSubmit={(e: any) => handleSubmit(e)}>
              <div className="mb-3">
                <FormControl>
                  <InputLabel htmlFor="title">Lecture Title</InputLabel>
                  <Input
                    id="title"
                    name="title"
                    type="text"
                    value={values.title}
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
                    value={values.content}
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
                    value={values.duration}
                    className="w-full border "
                    onChange={handleChange}
                  />
                </FormControl>
                <ErrorMessage name="duration" className="text-center" />
              </div>
              <div className="mb-3">
                {removeVideo ? (
                  <>
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
                  </>
                ) : (
                  <div className="mb-4 videoImg">
                    <label htmlFor="file" className="mb-2"></label>
                    <video width={200} height={150} className="videoImg">
                      <source src={lecture.data.lectureUrl}></source>
                    </video>
                    <button
                      className="btn btn-danger videoDel"
                      type="button"
                      onClick={(e: any) => {
                        e.preventDefault();
                        setRemoveVideo(true);
                      }}
                    >
                      <AiFillDelete />
                    </button>
                  </div>
                )}
              </div>
              <Button disabled={isDisabled} variant="outlined" type="submit">
                {!isDisabled ? "Submit" : "Submitting ..."}
              </Button>
            </Form>
          )}
        </Formik>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default EditLecturePage;
