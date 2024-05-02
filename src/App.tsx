import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import LecturePage from "./pages/lecture/LecturePage";
import Signin from "./pages/SIgnin";
import Signup from "./pages/Signup";
import LectureForm from "./components/form/LectureForm";
import EditLecturePage from "./pages/lecture/EditLecturePage";
import SecureRoute from "./route/SecureRoute";
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/" element={<SecureRoute />}>
            <Route path="/dynamictable" element={<Users />}/>
            {/* nested routing */}
            <Route path="lectures" element={<LecturePage />}>
              <Route path="add" element={<LectureForm />}/>
              <Route
                path=":lectureId"
                element={<EditLecturePage />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
