import React from "react";
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
import NotFound from "./pages/NotFound";
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
            <Route path="/lectures" element={<LecturePage />}>            </Route>

              <Route path="/lectures/add" element={<LectureForm />}/>
              <Route
                path="/lectures/:lectureId"
                element={<EditLecturePage />}
              />
            </Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
