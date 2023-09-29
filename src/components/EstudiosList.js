import Estudio from "./Estudio";

function EstudiosList() {
  return (
    <div className="d-flex flex-row justify-content-around">
      <Estudio
        key={1}
        estudio={"Ecografia de Cadera"}
        fecha={"10/05/2022"}
        profesional={"Dr. Alonso Juan"}
        especialidad={"Traumatología"}
        prestador={"Osde 210"}
        idEstudio={"cadera"}
      />
      <Estudio
        key={2}
        estudio={"Placa panorámica"}
        fecha={"22/01/2023"}
        profesional={"Dr. Muños Rodrigo"}
        especialidad={"Odontología"}
        prestador={"Osde 210"}
        idEstudio={"dentista"}
      />
      <Estudio
        key={3}
        estudio={"Hemograma"}
        fecha={"10/11/2023"}
        profesional={"Dra. Varela María"}
        especialidad={"Clínica"}
        prestador={"Osde 210"}
        idEstudio={"sangre"}
      />
    </div>
  );
}

export default EstudiosList;
