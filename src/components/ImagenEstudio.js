import Figure from "react-bootstrap/Figure";
import { useParams } from "react-router-dom";
import "../components/ImagenEstudio.css";

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
      <Figure>
        <Figure.Image width={800} height={800} alt="imagen" src={imagen} />
      </Figure>
    </div>
  );
}

export default ImagenEstudio;

/*return (
    <div>
      {id === "cadera" ? (
          <Figure>
          <Figure.Image width={800} height={800} alt="imagen" src="../images/sangre.jpg" />
        </Figure>
      ) : (
        <Figure>
          <Figure.Image width={800} height={800} alt="imagen" src={dentista} />
        </Figure>
      )}
    </div>
  );*/
