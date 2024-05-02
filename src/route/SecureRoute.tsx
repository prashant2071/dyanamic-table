import { Navigate, Outlet } from "react-router-dom";
const SecureRoute = () => {
  const isLoggedIn:boolean = JSON.parse(localStorage.getItem("isLoggedIn")|| "false");
  debugger;
  return <>{isLoggedIn ? <Outlet /> : <Navigate to="/" />}</>;
};
export default SecureRoute;
