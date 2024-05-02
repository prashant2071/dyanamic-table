import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap"
import { Post } from "../services/axios.services";
import { loginInterface } from "../interface/login.Interface";
import { errorToast, successToast } from "../config/toastConfig";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [email,setEmail]= useState<string>("");
  const [password,setPassword]= useState<string>("");
 const navigate = useNavigate();
  const handleSubmit =async (e:any) =>{
    let data :loginInterface={
      email,
      password
    }
    console.log("the data is",data);
    const response:any =await Post('users/login',data);
    if(response && response.status){
      successToast(response.message)
      localStorage.setItem("isLoggedIn","true");
      localStorage.setItem("token",response.data.jwt)
      navigate('/lectures')
    }
    else{
      errorToast(response.message)
    }
    console.log("the respose is ",response);
    
  }
  return (
    <Card className="w-25 mx-auto p-5 mt-5">
      <h3 className="text-center">Sign In</h3>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label> Email</Form.Label>
        <Form.Control type="text" placeholder="Enter email" onChange={(e:any)=>setEmail(e.target.value)}></Form.Control>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label> Password</Form.Label>
        <Form.Control type="password" placeholder="Enter password" onChange={(e:any)=>setPassword(e.target.value)}></Form.Control>
      </Form.Group>
      <Button variant="success" onClick={(e:any)=>handleSubmit(e)}>Submit</Button>
    </Form>
    </Card>
  )
}

export default Signin