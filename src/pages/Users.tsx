import { useEffect, useState } from "react";
import { SERVER_URL } from "../config/envConfig";
import axios from "axios";
import { AiFillEdit } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import { Button } from "react-bootstrap";
import CommonModal from "../components/modal/modal";
import {toast} from "react-toastify"
import { errorToast, successToast } from "../config/toastConfig";

const Users = () => {
  const [users, setUsers] = useState<any>([]);
  const [user, setUser] = useState<any>({});
  const [headers, setHeaders] = useState<any>([]);
  const [showModal, setShowModal] = useState(false);

  const getAllUsers = async () => {
    try {
      const response = await axios.get(`${SERVER_URL}/users`);
      setUsers(response.data.users);
      successToast("data fetched successfully!");
      setHeaders(Object.keys(response.data.users[0]));
    } catch (err) {
      errorToast("failed to fetched data");
      return err;
    }
  };
  const renderCellDatata = (item: any) => {
    return (
      <>
        <table className="table table-bordered table-dark">
          {Object.keys(item).map((keys: any, index: number) => {
            return (
              <tr key={index}>
                <td>{keys}</td>
                <td>
                  {typeof item[keys] === "object"
                    ? renderCellDatata(item[keys])
                    : item[keys]}
                </td>
              </tr>
            );
          })}
        </table>
      </>
    );
  };
  const deleteHandler = (id: number) => {
    const result = users.filter((item: any) => item.id !== id);
    setUsers(result);
    successToast("deleted successfully!");

  };
  const handleChange = (e:any) =>{
    const {name,value} = e.target;
    setUser((prev:any)=>{
    return{...prev,[name]:value}})

  };

  const handleClose = () => {
    setShowModal(false);
    successToast("Edited successfully!");
  };

  const editHandler = (user: any) => {
    setShowModal(true);
    setUser(user);
  };

  const submitEditHandler = () => {
    // const Index = users.findIndex((item:any)=>item.id==user.id);
    // setUsers((prevState:any) =>prevState[Index]=user);
    const result = users.map((item:any)=>(item.id===user.id)?user:item);
    setUsers(result);
    // console.log("the users is ",users)
    // console.log("the users is ",typeof (users))
    setShowModal(false);
    successToast("Edited successfully!");
  };


  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <div className="container">
      <h1>table</h1>
      <table className="table table-bordered table-dark">
        <thead>
          <tr>
            {headers.map((item: string, index: number) => {
              return <th key={index}>{item.toUpperCase()}</th>;
            })}{" "}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item: any, index: number) => {
            return (
              <tr key={index}>
                {headers.map((head: any, index: any) => {
                  return (
                    <td key={index}>
                      {typeof item[head] === "object"
                        ? renderCellDatata(item[head])
                        : item[head]}
                    </td>
                  );
                })}
                <td>
                  <Button
                    variant="primary"
                    onClick={(e: any) => editHandler(item)}
                  >
                    {<AiFillEdit />} Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="d-flex g-4"
                    onClick={(e: any) => deleteHandler(item.id)}
                  >
                    {<FaTrash />} Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
     {showModal&& <CommonModal
        show={showModal}
        handleClose={handleClose}
        submitEditHandler={submitEditHandler}
        user={user}
        onChange={handleChange}
      />}
    </div>
  );
};

export default Users;
