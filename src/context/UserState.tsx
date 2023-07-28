import { useState } from "react"
import UserContext from "./UserContext"

const UserState = () => {
    const [name,setName] = useState("Test User")
  return (
    <UserContext.Provider value={name}></UserContext.Provider>
  )
}

export default UserState