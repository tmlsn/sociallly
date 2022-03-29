import axios from "axios";
import { useState } from "react";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // endpoint for logginin
    const url = `${process.env.REACT_APP_BACKEND_URL}/auth/login`;
    // data you need to send to login endpoint
    const data = {
      email,
      password,
    };
    // axios request, you get back a response containing the token
    const response = await axios.post(url, data);
    // check if the response is OK
    if (response.status === 200) {
      // if OK we save the token to local storage
      localStorage.setItem("token", `Bearer ${response.data}`);
    }
  };

  return (
    <form className="loginForm" onSubmit={handleSubmit}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
}
