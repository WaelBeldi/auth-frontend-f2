import './App.css';
import {Route, Routes} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavBar from './Components/AppNavBar';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Profile from './Components/Profile';
import PrivateRoutes from './Components/PrivateRoutes';
import { useDispatch } from 'react-redux';
import { getAuthUser } from './Redux/actions/authActions';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch()
  const getUser = () => dispatch(getAuthUser())

  useEffect(() => {
    if(localStorage.getItem("token")) {
      getUser()
    }
  }, [])
  return (
    <div>
      <AppNavBar />
      <Routes>
        <Route path="/" element={<h1 style={{textAlign: "center"}}>Welcome to Home Page</h1>} />
        <Route path="/profile" element={<PrivateRoutes><Profile /></PrivateRoutes>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
