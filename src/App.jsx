import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ListaFilmes from "./components/ListaFilmes";
import SelecaoHorario from "./components/SelecaoHorario";
import SelecaoAssento from "./components/SelecaoAssentos";
import Finalizado from "./components/Finalizado";
import { useState } from "react";

function App() {
  const [selecionados, setSelecionados] = useState([]);
  const [idsSelecionados, setIdsSelecionados] = useState([]);
  const [nomeFilme, setNomeFilme] = useState("");
  const [dataFilme, setDataFilme] = useState("");
  const [horaFilme, setHoraFilme] = useState("");
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ListaFilmes setNomeFilme={setNomeFilme} />} />
        <Route path="/sessoes/:idFilme" element={<SelecaoHorario setDataFilme={setDataFilme} setHoraFilme={setHoraFilme} />} />
        <Route path="/sessoes/:idFilme/assentos/:idSessao" element={<SelecaoAssento selecionados={selecionados} setSelecionados={setSelecionados} idsSelecionados={idsSelecionados} setIdsSelecionados={setIdsSelecionados} nome={nome} setNome={setNome} cpf={cpf} setCpf={setCpf} />} />
        <Route path="/sucesso" element={<Finalizado nomeFilme={nomeFilme} dataFilme={dataFilme} horaFilme={horaFilme} selecionados={selecionados} nome={nome} cpf={cpf} setSelecionados={setSelecionados} setIdsSelecionados={setIdsSelecionados} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App