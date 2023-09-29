import Button from "react-bootstrap/esm/Button";
import "../components/EstudiosListContainer.css";
import EstudiosList from "./EstudiosList";
import { Link } from "react-router-dom";

function EstudiosListContainer() {
  return (
    <div className="pani">
      <EstudiosList  />
      <Button className="boton" as={Link} to="/" variant="primary" size="lg">Volver</Button>
    </div>
  );
}

export default EstudiosListContainer;
