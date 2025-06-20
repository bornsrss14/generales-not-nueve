import VecinoYOriginario from "../core/VecinoYOriginario";

export const SeleccionGenerales = ({ passOrIne, datos, onHandleSetData }) => {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 80 }, (_, i) => currentYear - i);

  //TEST 🧪
  console.log(
    "El genero es: ",
    datos.genero,
    "¿Originario y vecino?",
    datos.originariaYVecina,
    "Estado civil:",
    datos.civilStatus
  );
  return (
    <div className="container-generales">
      {passOrIne === "ine" && (
        <>
          <div className="p-4">
            <label className="question">Nombre:</label>
            <input
              placeholder="Ej.Ross Fuentes García..."
              id="origen"
              value={datos.fullName}
              type="text"
              className="input-simple"
              onChange={(e) => onHandleSetData("fullName", e.target.value)}
            />
          </div>
          <div className="p-4">
            <label className="question">Genero de la persona:</label>
            <select
              className="select-simple"
              onChange={(e) => onHandleSetData("genero", e.target.value)}
            >
              <option value={""}>----</option>
              <option value={"o"}>Hombre</option>
              <option value={"a"}>Mujer</option>
            </select>
          </div>
          <div className="p-4">
            <label className="question">
              ¿Nació y vive en la misma ciudad?
            </label>
            <label className="flex">
              <input
                onChange={() => onHandleSetData("originariaYVecina", true)}
                type="radio"
                name="originario"
              />
              Sí
            </label>
            <label className="flex">
              <input
                type="radio"
                name="originario"
                onChange={() => onHandleSetData("originariaYVecina", false)}
              />
              No
            </label>
          </div>
          <div className="domicilioYVecino">
            {datos.originariaYVecina !== null &&
              (datos.originariaYVecina ? (
                <div className="p-4">
                  <label className="question">Ciudad de nacimiento</label>
                  <input
                    placeholder="Ej. Córdoba, Veracruz"
                    id="origen"
                    value={datos.originTown}
                    type="text"
                    className="input-simple"
                    onChange={(e) =>
                      onHandleSetData("originTown", e.target.value)
                    }
                  />
                </div>
              ) : (
                <div className="domicilioYVecino">
                  <div className="p-4">
                    <label className="question">Ciudad de nacimiento</label>
                    <input
                      placeholder="Ej. Córdoba, Veracruz"
                      id="origen"
                      value={datos.originTown}
                      type="text"
                      className="input-simple"
                      onChange={(e) =>
                        onHandleSetData("originTown", e.target.value)
                      }
                    />
                  </div>
                  <VecinoYOriginario
                    datos={datos}
                    onHandleSetData={onHandleSetData}
                  />
                </div>
              ))}
          </div>

          <div className="p-4 date-birth">
            <label className="question">Fecha de nacimiento</label>

            <div className="day-month-year-container">
              <div className="gap-inputs">
                <label htmlFor="day" className="block mb-1">
                  Día:
                </label>
                <select
                  id="day"
                  value={datos.day}
                  onChange={(e) => onHandleSetData("day", e.target.value)}
                  className="select-simple"
                >
                  <option value="">-- Día --</option>
                  {days.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              <div className="gap-inputs">
                <label htmlFor="month" className="block mb-1">
                  Mes:
                </label>
                <select
                  id="month"
                  value={datos.month}
                  onChange={(e) => onHandleSetData("month", e.target.value)}
                  className="select-simple"
                >
                  <option value={""}>-- Mes --</option>
                  {months.map((m, i) => (
                    <option key={m + i} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </div>

              <div className="gap-inputs">
                <label htmlFor="year" className="block mb-1">
                  Año:
                </label>
                <select
                  id="year"
                  value={datos.year}
                  onChange={(e) => onHandleSetData("year", e.target.value)}
                  className="select-simple"
                >
                  <option value="">-- Año --</option>
                  {years.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="p-4">
            <label className="question">Estado Civil:</label>
            <select
              className="select-simple"
              id="civilStatus"
              onChange={(e) => onHandleSetData("civilStatus", e.target.value)}
            >
              <option value="">?</option>
              <option value={"solter"}>Soltero(a)</option>
              <option value={"casad"}>Casado(a)</option>
            </select>
          </div>

          <div className="p-4">
            <label htmlFor="occupation" className="question">
              Ocupación:
            </label>
            <input
              id="occupation"
              type="text"
              value={datos.occupation}
              onChange={(e) => onHandleSetData("occupation", e.target.value)}
              placeholder="Ej. Ingeniero, empleado..."
              className="input-simple"
            />
          </div>
          <div className="p-4">
            <label htmlFor="addres" className="question">
              Dirección sin C.P. ni Ciudad:
            </label>
            <input
              id="address"
              type="text"
              value={datos.currentAddress}
              onChange={(e) =>
                onHandleSetData("currentAddress", e.target.value)
              }
              placeholder="Privada primero de ... numero cuatro"
              className="input-simple"
            />
          </div>

          <div className="p-4">
            <label htmlFor="cp-address" className="question">
              Código Postal:
            </label>
            <input
              id="cp-address"
              type="number"
              value={datos.postalCode}
              onChange={(e) => onHandleSetData("postalCode", e.target.value)}
              placeholder="94478"
              className="input-simple"
            />
          </div>
          <div className="p-4">
            <label htmlFor="num-reverso" className="question">
              Numeros al reverso:
            </label>
            <input
              id="cp-address"
              type="number"
              value={datos.backNumbers}
              onChange={(e) => onHandleSetData("backNumbers", e.target.value)}
              placeholder="1548106713897"
              className="input-simple"
            />
          </div>
          <div className="p-4">
            <label htmlFor="rfc" className="question">
              RFC:
            </label>
            <input
              id="rfc"
              type="text"
              value={datos.rfc}
              onChange={(e) => onHandleSetData("rfc", e.target.value)}
              placeholder="FUGR990621..."
              className="input-simple"
            />
          </div>
          <div className="p-4">
            <label htmlFor="curp" className="question">
              CURP:
            </label>
            <input
              id="curp"
              type="text"
              value={datos.curp}
              onChange={(e) => onHandleSetData("curp", e.target.value)}
              placeholder="FUGR990621..."
              className="input-simple"
            />
          </div>
        </>
      )}

      {/* esta opcion aparece solo en passport */}
      {passOrIne === "pass" && (
        <>
          <div className="p-4">
            <label className="question">Nombre:</label>
            <input
              placeholder="Ej.Ross Fuentes García..."
              id="origen"
              value={datos.fullName}
              type="text"
              className="input-simple"
              onChange={(e) => onHandleSetData("fullName", e.target.value)}
            />
          </div>
          <div className="p-4">
            <label className="question">Genero de la persona:</label>
            <select
              className="select-simple"
              onChange={(e) => onHandleSetData("genero", e.target.value)}
            >
              <option value={""}>----</option>
              <option value={"o"}>Hombre</option>
              <option value={"a"}>Mujer</option>
            </select>
          </div>
          <div className="p-4">
            <label className="question">
              ¿Nació y vive en la misma ciudad?
            </label>
            <label className="flex">
              <input
                onChange={() => onHandleSetData("originariaYVecina", true)}
                type="radio"
                name="originario"
              />
              Sí
            </label>
            <label className="flex">
              <input
                type="radio"
                name="originario"
                onChange={() => onHandleSetData("originariaYVecina", false)}
              />
              No
            </label>
          </div>
          <div className="domicilioYVecino">
            {datos.originariaYVecina !== null &&
              (datos.originariaYVecina ? (
                <div className="p-4">
                  <label className="question">Ciudad de nacimiento</label>
                  <input
                    placeholder="Ej. Córdoba, Veracruz"
                    id="origen"
                    value={datos.originTown}
                    type="text"
                    className="input-simple"
                    onChange={(e) =>
                      onHandleSetData("originTown", e.target.value)
                    }
                  />
                </div>
              ) : (
                <div className="domicilioYVecino">
                  <div className="p-4">
                    <label className="question">Ciudad de nacimiento</label>
                    <input
                      placeholder="Ej. Córdoba, Veracruz"
                      id="origen"
                      value={datos.originTown}
                      type="text"
                      className="input-simple"
                      onChange={(e) =>
                        onHandleSetData("originTown", e.target.value)
                      }
                    />
                  </div>
                  <VecinoYOriginario
                    datos={datos}
                    onHandleSetData={onHandleSetData}
                  />
                </div>
              ))}
          </div>

          <div className="p-4 date-birth">
            <label className="question">Fecha de nacimiento</label>

            <div className="day-month-year-container">
              <div className="gap-inputs">
                <label htmlFor="day" className="block mb-1">
                  Día:
                </label>
                <select
                  id="day"
                  value={datos.day}
                  onChange={(e) => onHandleSetData("day", e.target.value)}
                  className="select-simple"
                >
                  <option value="">-- Día --</option>
                  {days.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              <div className="gap-inputs">
                <label htmlFor="month" className="block mb-1">
                  Mes:
                </label>
                <select
                  id="month"
                  value={datos.month}
                  onChange={(e) => onHandleSetData("month", e.target.value)}
                  className="select-simple"
                >
                  <option value={""}>-- Mes --</option>
                  {months.map((m, i) => (
                    <option key={m + i} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </div>

              <div className="gap-inputs">
                <label htmlFor="year" className="block mb-1">
                  Año:
                </label>
                <select
                  id="year"
                  value={datos.year}
                  onChange={(e) => onHandleSetData("year", e.target.value)}
                  className="select-simple"
                >
                  <option value="">-- Año --</option>
                  {years.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="p-4">
            <label className="question">Estado Civil:</label>
            <select
              className="select-simple"
              id="civilStatus"
              onChange={(e) => onHandleSetData("civilStatus", e.target.value)}
            >
              <option value="">?</option>
              <option value={"solter"}>Soltero(a)</option>
              <option value={"casad"}>Casado(a)</option>
            </select>
          </div>

          <div className="p-4">
            <label htmlFor="occupation" className="question">
              Ocupación:
            </label>
            <input
              id="occupation"
              type="text"
              value={datos.occupation}
              onChange={(e) => onHandleSetData("occupation", e.target.value)}
              placeholder="Ej. Ingeniero, empleado..."
              className="input-simple"
            />
          </div>
          <div className="p-4">
            <label htmlFor="addres" className="question">
              Dirección sin C.P. ni Ciudad:
            </label>
            <input
              id="address"
              type="text"
              value={datos.currentAddress}
              onChange={(e) =>
                onHandleSetData("currentAddress", e.target.value)
              }
              placeholder="Privada primero de ... numero cuatro"
              className="input-simple"
            />
          </div>

          <div className="p-4">
            <label htmlFor="cp-address" className="question">
              Código Postal:
            </label>
            <input
              id="cp-address"
              type="number"
              value={datos.postalCode}
              onChange={(e) => onHandleSetData("postalCode", e.target.value)}
              placeholder="94478"
              className="input-simple"
            />
          </div>
          <div className="p-4">
            <label
              style={{ color: "red" }}
              htmlFor="num-reverso"
              className="question"
            >
              No° Pasaporte:
            </label>
            <input
              id="cp-address"
              type="text"
              value={datos.backNumbers}
              onChange={(e) => onHandleSetData("backNumbers", e.target.value)}
              placeholder="N1270715"
              className="input-simple"
            />
          </div>
          <div className="p-4">
            <label htmlFor="rfc" className="question">
              RFC:
            </label>
            <input
              id="rfc"
              type="text"
              value={datos.rfc}
              onChange={(e) => onHandleSetData("rfc", e.target.value)}
              placeholder="FUGR990621..."
              className="input-simple"
            />
          </div>
          <div className="p-4">
            <label htmlFor="curp" className="question">
              CURP:
            </label>
            <input
              id="curp"
              type="text"
              value={datos.curp}
              onChange={(e) => onHandleSetData("curp", e.target.value)}
              placeholder="FUGR990621..."
              className="input-simple"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default SeleccionGenerales;
