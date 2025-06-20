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
  const [passOrIne, setPassOrIne] = useState("ine");
  const [showBanner, setShowBanner] = useState(false);
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
        .then(
          () => setShowBanner(true),
          setTimeout(() => {
            setShowBanner(false);
          }, 1500)
        )
        .catch((err) => console.error("Error al copiar", err));
    }
  }
  function toggleCard() {
    setPassOrIne((prev) => (prev === "ine" ? "pass" : "ine"));
  }
  return (
    <div className="main-app">
      <button onClick={toggleCard} className="tramite">
        {passOrIne === "ine" ? (
          <img
            alt="passport"
            src="https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/notary-nine%2Fpassport-mexican-copy.png?alt=media&token=818a23a8-4011-40e9-a292-482e6826470b"
            title="Cambiar a pasaporte"
          />
        ) : (
          <img
            alt="passport"
            src="https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/notary-nine%2Fine-modelo-dos-copy.png?alt=media&token=a4538ddd-3eae-47fc-a3f6-ed5321989c43"
            title="Cambiar a INE"
          />
        )}
      </button>

      <div className="App">
        <SeleccionGenerales
          passOrIne={passOrIne}
          datos={datos}
          onHandleSetData={handleSetData}
        />
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
        <UiGenerales passOrIne={passOrIne} ref={refTexto} datos={datos}>
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
      {showBanner && (
        <div
          value={showBanner}
          className={showBanner ? `banner` : `banner slide-bottom`}
        >
          {" "}
          <p> Texto copiado 📋</p>
        </div>
      )}
    </div>
  );
}

export default App;
