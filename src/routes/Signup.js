import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Signup() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // endpoint for logginin
    const url = `${process.env.REACT_APP_BACKEND_URL}/auth/signup`;
    // data you need to send to login endpoint
    const data = {
      firstName,
      lastName,
      email,
      password,
    };
    // axios request, you get back a response containing the token
    const response = await axios.post(url, data);
    // check if the response is OK
    if (response.status === 200) {
      // if OK navigate to login page
      navigate("/login");
    }
    /**
     * same in .then notation
     * axios.post(url, data).then(response => {
     *  if (response.status === 200) {
     *    navigate("/login");
     *  }
     * }).catch(err => console.log(err))
     */
  };
  return (
    <form className="loginForm" onSubmit={handleSubmit}>
      <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Signup</button>
    </form>
  );
}
