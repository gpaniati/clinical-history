import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import imagenEstudio from "../images/estudio.png";
import "../components/Estudio.css";
import { Link } from "react-router-dom";

function Estudio({estudio , fecha, profesional, especialidad, prestador, idEstudio}) {
  return (
      <Card className="carta md=6" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imagenEstudio} />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{estudio}</Card.Title>
          <Card.Text>Fecha: {fecha}</Card.Text>
          <Card.Text>Profesional: {profesional}</Card.Text>
          <Card.Text>Especialidad: {especialidad}</Card.Text>
          <Card.Text>Prestador: {prestador}</Card.Text>
          <Button as={Link} to={`/tusEstudios/${idEstudio}`}variant="primary">Ver estudio</Button>
        </Card.Body>
      </Card>
  );
}
  export default Estudio;