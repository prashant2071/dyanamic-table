import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import GlobalContext from "../context/GlobalContext";
const SecureRoute = () => {
  const {loginState}:any = useContext(GlobalContext);
  const isLoggedIn = loginState.isLoggedIn;
  console.log("secure route",isLoggedIn)
  // const isLoggedIn:boolean = JSON.parse(localStorage.getItem("isLoggedIn")|| "false");
  return <>{isLoggedIn ? <Outlet /> : <Navigate to="/" />}</>;
};
export default SecureRoute;
