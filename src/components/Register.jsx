import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../index.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const resetFields = () => {
    setUsername('');
    setPassword('');
    setEmail('');
  };

  const handleSuccess = () => {
    resetFields();
    toast.success('Usuario registrado!', {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    setTimeout(() => {
        navigate('/login')
    }, 3000);
  };

  const handleError = (error) => {
    toast.error('Falló: ' + error.message);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let user = { username, password, email };
    try {
      const created_user = await axios.post('http://localhost:3000/api/v1/auth/signup', user);
      if (created_user) {
        handleSuccess();
      }
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <div>
      <div className="form-main">
        <div className="form-content">
          <div className="circle-1"></div>
          <div className="circle-2"></div>
          <div className="circle-3"></div>
          <div className="box">
            <h3>Crear Cuenta</h3>
            <form onSubmit={handleSubmit}>
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Usuario"
                  className="input-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Email"
                  className="input-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-box">
                <input
                  type="password"
                  placeholder="password"
                  className="input-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn">
                Registrar
              </button>
            </form>
            <p>
              Ya tienes una cuenta? <NavLink to="/login">Iniciar Sesion</NavLink>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
