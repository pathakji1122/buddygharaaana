import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Cookies from "js-cookie";
import { Navigate } from 'react-router-dom';
import StudentHome from "./pages/StudentHome";
import UserHome from "../src/pages/UserHome";
import UserNavbar from "../src/components/UserNavbar";
import StudentNavbar from "../src/components/StudentNavbar";
import Login from "../src/pages/Login";
import SignUp  from "../src/pages/Signup";
import PlaceRequests from "./pages/PlaceRequests";
import Logout from "./pages/Logout";
import CheckRequest from "./pages/CheckRequest";
import BuddyRequests from "./pages/BuddyRequests";
import StudentRequest from "./pages/StudentRequest";
import StudentProfile from "./pages/StudentProfile";
function App() {
  const [userStage, setUserStage] = useState(0);
  useEffect(() => {
    const storedUserStage = localStorage.getItem('userStage') || Cookies.get('userStage');
    if (storedUserStage) {
      setUserStage(parseInt(storedUserStage, 10));
    } else {
      setUserStage(0);
    }
  }, []);
  const handleLogin = (newUserStage, token) => {
    setUserStage(newUserStage);
    localStorage.setItem("userStage", newUserStage.toString());
    Cookies.set("userStage", newUserStage.toString(), { expires: 7 }); // set cookie expiration time (in days)
  };
  const handleLogout = () => {
    setUserStage(0);
    localStorage.removeItem("userStage");
    Cookies.remove("userStage");
  };
  let userElement = "";
  if (userStage === 0) {
    userElement = <UserHome />;
  } else if (userStage === 1) {
    userElement = <StudentHome />;
  } else {
    userElement = <Navigate to="/404" />;
  }
  return (
    <>
      {userStage === 0 && <UserNavbar />}
      {userStage === 1 && <StudentNavbar />}
      <Routes>
        <Route
          path="/"
          element={
            userStage === 0 ? <UserHome /> :
            userStage === 1 ? <StudentHome /> : null
          }
        />
         <Route
          path="/home"
          element={
            userStage === 0 ? <UserHome /> :
            userStage === 1 ? <StudentHome />  : null
          }
        />
        <Route path="/" element={<UserHome />} />
        <Route path="/home" element={<UserHome />} />
        <Route path="/login" element={userStage === 0 ? <Login onLogin={handleLogin} /> : <Navigate to="/" />} />
        <Route path="/signup" element={userStage === 0 ? <SignUp /> : <Navigate to="/" />} />
        <Route path="/logout" element={userStage !== 0 ? <Logout onLogout={handleLogout}/> :<Navigate to="/" />} />
        <Route path="/placerequest" element={userStage === 1 ?<PlaceRequests />:<Navigate to ="/"/>}/>  
        <Route path="/checkrequest" element={userStage === 1 ?<CheckRequest />:<Navigate to ="/"/>}/>
        <Route path="/buddyrequest" element={<BuddyRequests/>}/> 
        <Route path="/studentrequest" element={<StudentRequest/>}/>
        <Route path="/profile" element={<StudentProfile/>}/>
      </Routes>
    </>
  );
}
export default App;
