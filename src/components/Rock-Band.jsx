// PianoVirtual.js
import React from "react";
import { NotasMusicales } from "./Piano.jsx";
import { NotasBateria } from "./Bateria.jsx";
import "../components/Rock-Band.css"

export const PianoVirtual = () => {


  
  return (
      <div className="container">
      <h2>Rock Band</h2>
      <div className="components-container">
        <div className="component">
          <NotasMusicales />
        </div>
        <div className="component">
          <NotasBateria />
        </div>
      </div>
    </div>
  );
  
  
};
