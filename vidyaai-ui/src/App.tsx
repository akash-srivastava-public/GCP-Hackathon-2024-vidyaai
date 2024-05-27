import { MainScreen } from "./Modules";
import {HashRouter as Router,Route,Routes, Navigate} from "react-router-dom"
import LoginPage from "./Modules/LoginScreen";
import { useEffect, useState } from "react";
import axios from 'axios'

function App() {

  const [userAuth,setUserAuth] = useState(false);
  const handleAuth=(val:any)=>{
    setUserAuth(val)
  }
  useEffect(() => {
    const fetchAuthStatus = async () => {
      try {
        const response = await axios.get(`${window.origin}/auth/user`);
        setUserAuth(response.data);
      } catch (error) {
        console.error('Error fetching auth status:', error);
        setUserAuth(false); // In case of error, consider the user not authenticated
      }
    };

    fetchAuthStatus();
  }, []);

  return (
    <Router>
      <Routes>
        <Route index path="/" element={userAuth ? <MainScreen handleAuth={handleAuth}/> : <Navigate to="/login" replace />} />
        <Route path="/login" element={!userAuth ? <LoginPage /> : <Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
