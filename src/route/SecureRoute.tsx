import { Navigate, Outlet } from "react-router-dom";
const SecureRoute = () => {
  const isLoggedIn:boolean = JSON.parse(sessionStorage.getItem("isLoggedIn")|| "false");
  debugger;
  return <>{isLoggedIn ? <Outlet /> : <Navigate to="/" />}</>;
};
export default SecureRoute;
