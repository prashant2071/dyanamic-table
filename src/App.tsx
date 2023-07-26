import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Users from './pages/Users'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Users/>}></Route>
    </Routes>
    </BrowserRouter>
    <ToastContainer/>

    </>
  )
}

export default App
