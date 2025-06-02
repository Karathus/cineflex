import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Horario from "./Horario";

function SelecaoHorario({ setDataFilme, setHoraFilme }) {
    const [sessoes, setSessoes] = useState([])
    const { idFilme } = useParams();

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`)
            .then(resposta => {
                setSessoes(resposta.data.days);
            });
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Horarios>
            <h1>Selecione o horário</h1>
            {sessoes.map(sessao => <Horario idFilme={idFilme} idSessao={sessao.id} weekday={sessao.weekday} date={sessao.date} showtimes={sessao.showtimes} setDataFilme={setDataFilme} setHoraFilme={setHoraFilme} key={sessao.id} />)}
        </Horarios>
    )
}

export default SelecaoHorario;

const Horarios = styled.div`
min-height: calc(100vh - 67px);
margin-top: 67px;
width: 100%;
background-color: #212226;
color: #FFFFFF;
display: flex;
flex-direction: column;
align-items: center;
overflow: auto;
font-family: 'Sarala';
h1{
    min-height: 78px;
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: 400;
}
h2{
    min-height: 50px;
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 400;
}
`