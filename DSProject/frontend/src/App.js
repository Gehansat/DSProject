// import React from 'react'



// export default function App() {
//   return (

//   )
// }
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components_log/login.component";
import SignUp from "./components_log/signup.component";
import UserDetails from "./components_log/userDetails";
// import ImageUpload from "./components/imageUpload.";

function App() {
  const isLoggedIn = window.localStorage.getItem("LoggedIn");
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
             exact
             path="/"
             element={isLoggedIn == "true" ? <UserDetails /> : <Login />}
          />
          <Route path="/sign-in" element={<Login />} />
          <Route  path="/sign-up" element={<SignUp />} />
          { <Route path="/userDetails" element={<UserDetails />} /> }
        </Routes>
        {/* <ImageUpload/> */}
      </div>
    </Router>
  );
}

export default App;
