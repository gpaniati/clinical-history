import Figure from "react-bootstrap/Figure";
import cadera from "../images/cadera.jpg";
import dentista from "../images/dentista.jpg";
//import sangre from "../images/sangre.jpg";
import { useParams } from "react-router-dom";

function ImagenEstudio() {
const { id } = useParams();
  return (
    <div>
      {id === "cadera" ? (
          <Figure>
          <Figure.Image width={800} height={800} alt="imagen" src={cadera} />
        </Figure>
      ) : (
        <Figure>
          <Figure.Image width={800} height={800} alt="imagen" src={dentista} />
        </Figure>
      )}
    </div>
  );
}

export default ImagenEstudio;
