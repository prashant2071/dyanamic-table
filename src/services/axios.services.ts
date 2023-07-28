import axios from "axios"
import { LOCAL_SERVER_URL } from "../config/envConfig";

const token = localStorage.getItem("token")

export const axiosPost =async (url:string,data:any) =>{
    console.log("the url is",url,"the data is ",data);
    try{

        const response = await axios.post(`${LOCAL_SERVER_URL}/${url}`,data);
        return response.data;

    }
    catch(err:any){
        return err.response.data
    }

}
export const axiosGet =async (url:string) =>{
    try{
        console.log("the token is",token);
        const response = await axios.get(`${LOCAL_SERVER_URL}/${url}`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        });
        return response.data;

    }
    catch(err:any){
        return err.response.data
    }

}