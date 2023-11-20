import { SearchIcon } from "@heroicons/react/solid";
import { TextInput } from "@tremor/react";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [text, setText] = useState("");
  const titleText = "Monitoreo Financiero"; // Texto que se mostrará con el efecto de máquina de escribir

  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex <= titleText.length) {
        currentText = titleText.slice(0, currentIndex);
        setText(currentText);
        currentIndex += 1;
      } else {
        clearInterval(interval);
      }
    }, 100); // Ajusta la velocidad del efecto cambiando el valor del intervalo

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="top"
      className="relative w-full sm:flex justify-between items-center p-3"
    >
      <h1 className="flex font-bold text-gray-200" >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#2fe864"
          className="w-8 h-8"
        >
          {<path fill-rule="evenodd" d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.54 15h6.42l.5 1.5H8.29l.5-1.5zm8.085-8.995a.75.75 0 10-.75-1.299 12.81 12.81 0 00-3.558 3.05L11.03 8.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l2.47-2.47 1.617 1.618a.75.75 0 001.146-.102 11.312 11.312 0 013.612-3.321z" clip-rule="evenodd" />}
        </svg>
        {text}
      </h1>
    </div>
  );
};

export default Navbar;