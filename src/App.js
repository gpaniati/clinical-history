import "./App.css";
import EstudiosListContainer from "./components/EstudiosListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrincipalContainer from "./components/PrincipalContainer";
import ImagenEstudio from "./components/ImagenEstudio";

function App() {
  return (
    <div className="principal">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<PrincipalContainer />} />
          <Route exact path="/tusEstudios" element={<EstudiosListContainer />}/>
          <Route exact path="/tusEstudios/:id" element={<ImagenEstudio />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
