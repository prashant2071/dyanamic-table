import axios from "axios"
import { SERVER_URL } from "../config/envConfig"

const getAllUsers =async () =>{
    try{
   const users = await axios.get(`${SERVER_URL}/users`);
   console.log("the data is ",users.data.users);
   return users.data.users
    }
    catch(err){
        return err
    }
}
export default getAllUsers;