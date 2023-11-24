import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';

const EditarPerfil = () => {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Puedes realizar alguna lógica de carga inicial aquí, como obtener los datos del usuario y establecer los estados.
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("userId");
    const userData = { nombre, telefono, email };

    try {
      const token = localStorage.getItem("jwt-token");
      await axios.patch(`http://localhost:3000/api/v1/auth/${userId}`, userData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Datos actualizados exitosamente");
      navigate("/f");
    } catch (error) {
      toast.error("Falló la actualización: " + error.message);
    }
  };

  return (
    <>
      <h2 className="font-black text-3xl text-center">Editar Perfil</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Modifica tu {""}{" "}
        <span className="text-indigo-600 font-bold">Información</span>{" "}
      </p>
      <div className="flex justify-center">
        <div className="w-full md:w-1/2 bg-indigo-900 shadow rounded-lg p-5">
          <form onSubmit={handleSubmit}>
            <div className="my-3">
              <label className="uppercase font-bold text-white">Nombre</label>
              <input
                type="text"
                className="border bg-gray-300 w-full p-2 mt-2 rounded-lg"
                name="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
              <label className="uppercase font-bold text-white">Telefono</label>
              <input
                type="text"
                className="border bg-gray-300 w-full p-2 mt-2 rounded-lg"
                name="telefono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
              <label className="uppercase font-bold text-white">Email</label>
              <input
                type="text"
                className="border bg-gray-300 w-full p-2 mt-2 rounded-lg"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <input
              type="submit"
              value="Guardar Cambios"
              className="bg-indigo-700 px-10 py-3 text-center cursor-pointer font-bold text-white rounded-lg uppercase w-full mt-5"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default EditarPerfil;
