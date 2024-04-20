import React, { useState, useEffect } from "react";
import "./Bateria.css";
import kickSound from "../sounds/Platillo-Bateria.mp3";
import snareSound from "../sounds/Tambor-Bateria.mp3";
import hiHatSound from "../sounds/Tambor-Bateria-2.mp3";
import crashSound from "../sounds/Tambor-Bateria-3.mp3";
import rideSound from "../sounds/Tambor-Bateria-4.mp3";
import tom1Sound from "../sounds/Tambor-Bateria-5.mp3";
import tom2Sound from "../sounds/Platillo-Bateria-2.mp3";

export const NotasBateria = () => {
  const notas = ["Z", "X", "C", "V", "B", "N", "M"];
  const teclas = ["z", "x", "c", "v", "b", "n", "m"];
  const [teclaPresionada, setTeclaPresionada] = useState(null);
  const [mostrarBateria, setMostrarBateria] = useState(false);

  const audio = (nota) => {
    switch (nota) {
      case "Z":
        new Audio(kickSound).play();
        break;
      case "X":
        new Audio(snareSound).play();
        break;
      case "C":
        new Audio(hiHatSound).play();
        break;
      case "V":
        new Audio(crashSound).play();
        break;
      case "B":
        new Audio(rideSound).play();
        break;
      case "N":
        new Audio(tom1Sound).play();
        break;
      case "M":
        new Audio(tom2Sound).play();
        break;
      default:
        break;
    }
  };

   useEffect(() => {
    const handleKeyPress = (event) => {
      const indiceTecla = teclas.indexOf(event.key.toLowerCase());
      if (indiceTecla !== -1) {
        setTeclaPresionada(notas[indiceTecla]);
        audio(notas[indiceTecla]);
      }
    };

    const handleKeyNotPress = () => {
      setTeclaPresionada(null);
    };

    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("keyup", handleKeyNotPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("keyup", handleKeyNotPress);
    };
  }, [notas, teclas]);

  const handelTeclaClick = (nota) => {
    audio(nota)
  }

  return (
    <section>
      <button className="instrument" onClick={() => setMostrarBateria(!mostrarBateria)}>Batería</button>
      {mostrarBateria && (
        <div className="bateria">
          <ul className="notas-bateria">
            {notas.map((nota) => (
              <li key={nota} className={teclaPresionada === nota ? "Bateria-pressed" : ""} onClick={() => handelTeclaClick(nota)}>
                {nota}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};