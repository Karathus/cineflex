import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import ListaFilmes from "./components/ListaFilmes";
import SelecaoHorario from "./components/SelecaoHorario";
import SelecaoAssento from "./components/SelecaoAssentos";
import Finalizado from "./components/Finalizado";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/a" element={<ListaFilmes />} />
        <Route path="/sessoes/:id" element={<SelecaoHorario />} />
        <Route path="/assentos/:id" element={<SelecaoAssento />} />
        <Route path="/sucesso" element={<Finalizado />} />
        {/* <Route path="/" element={<ListaFilmes />} /> */}
        {/* <Route path="/" element={<SelecaoHorario />} /> */}
        {/* <Route path="/" element={<SelecaoAssento />} /> */}
        {/* <Route path="/" element={<Finalizado />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App