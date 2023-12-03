import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

function Home() {
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios
      .get("http://localhost:5000")
      .then((res) => {
        if (res.data.Status === "Success") {
          setAuth(true);
          setUsername(res.data.username);
        } else {
          setAuth(false);
          console.log("Error");
          setMessage(res.data.Error);
        }
      })
      .then((err) => console.log(err));
  }, []);

  const handleDelete = () => {
    axios
      .get("http://localhost:5000/logout")
      .then((res) => {
        location.reload(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div>Home</div>
      {auth ? (
        <div>
          <h3>Welcome {username}</h3>
          <button onClick={handleDelete}>Logout</button>
        </div>
      ) : (
        <div>
          <h3>{message}</h3>
          <NavLink to="/login">Login</NavLink>
        </div>
      )}
    </>
  );
}

export default Home;
