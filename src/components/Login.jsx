import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../index.css';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let credentials = { username, password };
    try {
      const res = await axios.post("http://localhost:3000/api/v1/auth/signin", credentials);
      const token = res.data.data.token;
      const decodedToken = parseJwt(token);
      const userId = decodedToken.user.id; // Acceder al ID del usuario desde el payload del token
      localStorage.setItem("jwt-token", token);
      localStorage.setItem("userId", userId);
      console.log(localStorage.getItem("jwt-token"));
      console.log(localStorage.getItem("userId"));
      navigate("/f");
    } catch (error) {
      toast.error("Falló: " + error.message);
    }
  };

  // Función para decodificar un token JWT
  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  };

  return (
    <div>
      <section className="form-main">
        <div className="form-content">
          <div className="circle-1"></div>
          <div className="circle-2"></div>
          <div className="circle-3"></div>
          <div className="box">
            <h3>Bienvenido</h3>
            <form onSubmit={handleSubmit}>
              <div className="input-box">
                <input type="text" placeholder="User" className="input-control" onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="input-box">
                <input type="password" placeholder="password" className="input-control" onChange={(e) => setPassword(e.target.value)} />
                <div className="input-link">
                  <NavLink to='/pass'>Contrasena Olvidada?</NavLink>
                </div>
              </div>
              <button type="submit" className="btn">
                Iniciar Sesion
              </button>
            </form>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
}

export default Login;
