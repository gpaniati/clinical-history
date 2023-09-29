import Estudio from "./Estudio";

function EstudiosList() {
  return (
    <div className="d-flex flex-row justify-content-around">
      <Estudio
        key={1}
        estudio={"Ecografia de Cadera"}
        detalle={"10/05/2022 - Dr Alonso"}
        idEstudio={"cadera"}
      />
      <Estudio
        key={2}
        estudio={"Placa dentista"}
        detalle={"22/01/2023 - Dr Ragas"}
        idEstudio={"dentista"}
      />
      <Estudio
        key={3}
        estudio={"Analisis de sangre"}
        detalle={"10/08/2023 - Dr perez"}
        idEstudio={"sangre"}
      />
    </div>
  );
}

export default EstudiosList;
