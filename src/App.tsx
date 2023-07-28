import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Users from './pages/Users'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import LecturePage from './pages/LecturePage';
import Signin from './pages/SIgnin';
import Signup from './pages/Signup';
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signin/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>

      <Route path='/users' element={<Users/>}></Route>

      <Route path='/lectures' element={<LecturePage/>}></Route>
    </Routes>
    </BrowserRouter>
    <ToastContainer/>

    </>
  )
}

export default App
