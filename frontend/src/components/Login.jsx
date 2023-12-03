import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/login", values)
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/");
        } else {
          console.log("Error");
        }
      })
      .then((err) => console.log(err));
  };

  return (
    <div className="registro-formulario">
      <h2>Loguear</h2>
      <form onSubmit={handleSubmit}>
        <div className="campo-formulario">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
        </div>
        <div className="campo-formulario">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => setValues({ ...values, password: e.target.value })}
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Login;
