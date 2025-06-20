export const VecinoYOriginario = ({ datos, onHandleSetData }) => {
  return (
    <>
      <div className="p-4">
        <label className="question">Ciudad de Domicilio</label>
        <input
          className="input-simple"
          value={datos.vecino}
          onChange={(e) => onHandleSetData("vecino", e.target.value)}
          placeholder="Ej. Monterrey, Nuevo León"
          id="origen"
          type="text"
        />
      </div>
    </>
  );
};

export default VecinoYOriginario;
