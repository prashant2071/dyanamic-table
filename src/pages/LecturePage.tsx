import { useEffect, useState } from "react"
import { axiosGet } from "../services/axios.services"

const LecturePage = () => {
  const[lectures,setLectures] = useState([]);
  const getLecture =async () =>{
    const response  = await axiosGet('lectures');
    console.log("the response is ",response);
    if(response.status){
      setLectures(response.data);
    }
  }
  useEffect(()=>{
    getLecture();
  },[])
  return (
    <div>lecture page</div>
  )
}

export default LecturePage