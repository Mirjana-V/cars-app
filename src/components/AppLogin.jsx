import React from "react";

export default function AppLogin({ handleOnLogin, user, setUser }) {
  return (
    <div>
      <form onSubmit={handleOnLogin}>
        <label>Email:</label>
        <input
          required
          type="email"
          value={user.email}
          onChange={({ target }) => setUser({ ...user, email: target.value })}
        />
        <br />
        <br />
        <label>Password:</label>
        <input
          required
          type="password"
          value={user.password}
          onChange={({ target }) =>
            setUser({ ...user, password: target.value })
          }
        />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}