import axios from "axios"
import { LOCAL_SERVER_URL } from "../config/envConfig";

const token = localStorage.getItem("token")

export const Post =async (url:string,data:any) =>{
    try{

        const response = await axios.post(`${LOCAL_SERVER_URL}/${url}`,data);
        return response.data;

    }
    catch(err:any){
        return err.response.data
    }

}
export const axiosPost =async (url:string,data:any) =>{
    try{

        const response = await axios.post(`${LOCAL_SERVER_URL}/${url}`,data,{
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
export const axiosPatch =async (url:string,data:any) =>{
    try{

        const response = await axios.patch(`${LOCAL_SERVER_URL}/${url}`,data,{
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
export const axiosGet =async (url:string) =>{
    try{
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
export const axiosDelete =async (url:string) =>{
    try{
        const response = await axios.delete(`${LOCAL_SERVER_URL}/${url}`,{
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