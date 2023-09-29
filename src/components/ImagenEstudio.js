import Figure from "react-bootstrap/Figure";
import { useParams } from "react-router-dom";
import "../components/ImagenEstudio.css";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

function ImagenEstudio() {
  let imagen;
  const { id } = useParams();
  if (id === "cadera") {
    imagen = "../images/cadera.jpg";
  } else {
    if (id === "dentista") {
      imagen = "../images/dentista.jpg";
    } else {
      imagen = "../images/sangre.jpg";
    }
  }

  return (
    <div className="imagenEstudio">
      <div>
        <Figure>
          <Figure.Image width={800} height={800} alt="imagen" src={imagen} />
        </Figure>
      </div>
      <Button className="boton" as={Link} to="/tusEstudios" variant="primary" size="lg">Volver</Button>
    </div>
  );
}

export default ImagenEstudio;