import React, { useState } from "react";
import AppLogin from "../components/AppLogin";
import { authService } from "../services/AuthService";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const history = useHistory();

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    await authService.login(user);
    history.push("/cars");
  };

  return <AppLogin
        handleOnLogin={handleSubmitForm}
        user={user}
        setUser={setUser}
        />;
}