import "./App.css";
import React, { useRef } from "react";
import UiGenerales from "./components/UiGenerales";
import SeleccionGenerales from "./components/SeleccionGenerales";
import { useState } from "react";
const valoresIniciales = {
  fullName: "",
  genero: "",
  originariaYVecina: null,
  vecino: "",
  originTown: "",
  day: "",
  month: "",
  year: "",
  civilStatus: "",
  occupation: "",
  currentAddress: "",
  postalCode: "",
  backNumbers: "",
  curp: "",
  rfc: "",
};
function App() {
  const [datos, setDatos] = useState(valoresIniciales);
  const handleResetValues = () => {
    setDatos(valoresIniciales);
  };
  function handleSetData(field, value) {
    setDatos((prevDatos) => ({
      ...prevDatos,
      [field]: value,
    }));
  }
  const refTexto = useRef();
  function copyToClipboard() {
    const paragrapgh = refTexto.current.innerText;
    if (paragrapgh) {
      navigator.clipboard
        .writeText(paragrapgh)
        .then(() => alert("Texto copiado"))
        .catch((err) => console.error("Error al copiar", err));
    }
  }
  return (
    <div className="App">
      <SeleccionGenerales datos={datos} onHandleSetData={handleSetData} />
      {/* 
      <UiGenerales
        genero={"a"}
        originariaYVecina={true}
        día={"21"}
        mes={"Junio"}
        año={"1999"}
        empleo={"emplead"}
        estadoCivil={"Solter"}
        domicilio={
          "privada primero de mayo, numero 4 (cuatro), manzana 6(seis), Colonia Las Palmas"
        }
        cp={"94500"}
        vecino={"Fortín de las Flores, Veracruz"}
        originario={"Córdoba, Veracruz"}
        numeroReverso={14253678978}
        curp={"FUGR980621MVZNRS02"}
        rfc={"FUGR9806212J3"}
        fullName="Rosario Fuentes García"
      >
        <div className="buttons">
          <button className="btn-minimal">Copy</button>
          <button className="btn-minimal">Reset</button>
        </div>
      </UiGenerales> */}
      <UiGenerales ref={refTexto} datos={datos}>
        <div className="buttons">
          <button onClick={copyToClipboard} className="btn-minimal">
            Copiar
          </button>
          <button onClick={handleResetValues} className="btn-minimal">
            Reset
          </button>
        </div>
      </UiGenerales>
    </div>
  );
}

export default App;
