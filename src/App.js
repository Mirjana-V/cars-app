import React, { useState } from "react";
import "./App.css";
import Router from "./Router";

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;




// import './App.css';
// import React from 'react';
// import {Link} from 'react-router-dom';
// import Router from "./Router";
// import { authService } from './services/AuthService';
// import {useHistory} from 'react-router-dom';

// function App() {

// const history = useHistory();

// const handleLogout = async () => {
//   await authService.logout();
//   history.push("/cars");

// }
//   return (
//     <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/cars">Cars</Link>
//             </li>
//             <li>
//               <Link to="/add">Add</Link>
//             </li>
//             <li>
//               <Link to="/login">Login</Link>
//             </li>
//             <li>
//               <button onClick={handleLogout}>Logout</button>
//             </li>
//             <li>
//               <Link to="/register">Register</Link>
//             </li>
//           </ul>
//         </nav>
//       <Router />
//     </div>
//   );
// }

// export default App;
