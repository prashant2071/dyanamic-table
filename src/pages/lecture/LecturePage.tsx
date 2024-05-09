import { useContext, useEffect, useState } from "react";
import { axiosDelete, axiosGet } from "../../services/axios.services";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { lectureInterface } from "../../interface/lectures.interface";
import IconButton from "@mui/material/IconButton";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import "./lecture.css";

import "./../../components/loader/Loader";
import { successToast } from "../../config/toastConfig";
import { useNavigate } from "react-router-dom";
import Loader from "./../../components/loader/Loader";
import GlobalContext from "../../context/GlobalContext";

const LecturePage = () => {
  const [lectures, setLectures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [headers, setHeaders] = useState<Array<string>>([]);
  const navigate = useNavigate();
  const isLoggedInContext = useContext(GlobalContext);
  console.log(isLoggedInContext)
  const getLecture = async () => {
    setLoading(true);
    const response = await axiosGet("lectures");
    console.log("the lecture response is ", response);
    if (response.status) {
      let head = Object.keys(response.data[0]);
      setHeaders(head);
      setLectures(response.data);
      setLoading(false);
    }
  };

  const handleDelete = async (e: any, id: string) => {
    e.preventDefault();
    const response = await axiosDelete(`lectures/${id}`);
    console.log("the response of handle delete is", response);
    if (response.status) {
      const fiteredItem = lectures.filter(
        (item: lectureInterface) => item._id !== id
      );
      setLectures(fiteredItem);
      successToast(response.message);
    }
  };
  const handleToggle = (e: any) => {
    const { checked } = e.target;
    if (checked === true) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  const handleEdit = async (e:any, id: string) =>{
    e.preventDefault();
    navigate(`/lectures/${id}`);
  }

  const addLecture = (e: any) => {
    e.preventDefault();
    console.log("hello");
    navigate("/lectures/add");
  };
  useEffect(() => {
    getLecture();
  }, []);
  return (
    <>
      <div className="container mx-auto px-4 py-2">
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                name="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onChange={handleToggle}
              />
              <label className="form-check-label">Toggle</label>
            </div>
            {toggle ? (
              <table className="table table-bordered">
                <thead>
                  <tr>
                    {headers.map((item) => (
                      <td>{item}</td>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {lectures.map((item: any) => (
                    <tr>
                      <td>{item._id}</td>
                      <td>{item.title}</td>
                      <td>{item.content}</td>
                      <td>{item.duration}</td>
                      <td>{item.lectureUrl}</td>
                      <td>{item.createdAt}</td>
                      <td>{item.updatedAt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <>
                <h2 className="text-center">Lectures</h2>
                <Button variant="contained" onClick={(e: any) => addLecture(e)}>
                  Add Lectures
                </Button>

                <div className="d-flex flex-wrap gap-4">
                  {lectures.map((item: lectureInterface) => {
                    return (
                      <Card key={item._id} className="lecture-content h-100">
                        <CardContent className="h-50">
                          <div className="video-container">
                            <video controls className="h-100 w-100">
                              <source src={item.lectureUrl} />
                            </video>
                          </div>
                        </CardContent>
                        <div className="d-flex justify-content-between ms-3">
                          <div>
                            <Typography variant="h5">{item.title}</Typography>
                            <Typography variant="body1">
                              {item.content.length > 20
                                ? item.content.slice(0, 20) + "..."
                                : item.content}
                            </Typography>
                            <Typography variant="subtitle1">
                              Durations: {item.duration} hours
                            </Typography>
                          </div>
                          <CardActions className="d-flex flex-column">
                            <IconButton color="primary" onClick={(e: any) => handleEdit(e, item._id)}>
                              <AiFillEdit  />
                            </IconButton>
                            <IconButton
                              color="error"
                              onClick={(e: any) => handleDelete(e, item._id)}
                            >
                              <AiFillDelete />
                            </IconButton>
                          </CardActions>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default LecturePage;
