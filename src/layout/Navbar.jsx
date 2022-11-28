import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useHistory } from "react-router-dom";
import { authService } from "../services/AuthService";



export default function Navbar() {
  const { user } = useAuth();

  const history = useHistory();

const handleLogout = async () => {
  await authService.logout();
  history.push("/cars");

}

  return (
    <nav>
      <ul>
        {!user.name && (
          <li>
            <Link to="/login">Login</Link>
          </li>
            )}
        {!user.name && (
          <li>
            <Link to="/register">Register</Link>
          </li>
            )}
          <li>
            <Link to="/cars">Cars</Link>
          </li>
          <li>
            <Link to="/add">Add</Link>
          </li>
        {user.name && <li>
          <button onClick={handleLogout}>Logout</button>
       </li>}
      </ul>
      <br />
      <br />
    </nav>
  );
}


{/* <ul>
        {!user.name && (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
        {!user.name && (
          <li>
            <Link to="/register">Register</Link>
          </li>
        )}
        <li>
          <Link to="/cars">Cars</Link>
        </li>
        <li>
              <Link to="/add">Add</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
      </ul> */}