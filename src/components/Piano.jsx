import React, { useState, useEffect } from "react";
import "./Piano.css";
import doSound from "../sounds/DO-Piano.mp3";
import reSound from "../sounds/RE-Piano.mp3";
import miSound from "../sounds/MI-Piano.mp3";
import faSound from "../sounds/FA-Piano.mp3";
import solSound from "../sounds/SOL-Piano.mp3";
import laSound from "../sounds/LA-Piano.mp3";
import siSound from "../sounds/SI-Piano.mp3";

export const NotasMusicales = () => {
  const notas = ["A", "S", "D", "J", "K", "L", "Ñ"];
  const teclas = ["a", "s", "d", "j", "k", "l", "ñ"];
  const [teclaPresionada, setTeclaPresionada] = useState(null);
  const [mostrarPiano, setMostrarPiano] = useState(false);

  const audio = (nota) => {
    switch (nota) {
      case "A":
        new Audio(doSound).play();
        break;

      case "S":
        new Audio(reSound).play();
        break;

      case "D":
        new Audio(miSound).play();
        break;

      case "J":
        new Audio(solSound).play();
        break;

      case "K":
        new Audio(laSound).play();
        break;

      case "L":
        new Audio(siSound).play();
        break;

      case "Ñ":
        new Audio(faSound).play();
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
      <button className="instrument" onClick={() => setMostrarPiano(!mostrarPiano)}>Piano</button>
      {mostrarPiano && (
        <div className="piano">
          <div>
            <ul className="notas">
              {notas.map((nota) => (
                <li key={nota} className={teclaPresionada === nota ? "pressed" : ""} onClick={() => handelTeclaClick(nota)}>
                  {nota}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

    </section>
  );
};
