import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Assento from "./Assento";


function SelecaoAssento({ selecionados, setSelecionados, idsSelecionados, setIdsSelecionados, setNome, setCpf }) {
    const [assentos, setAssentos] = useState([])
    const { idSessao } = useParams();

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
            .then(resposta => {
                setAssentos(resposta.data.seats);
            });
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Assentos>
            <h1>Selecione o(s) assento(s)</h1>
            <Selecao>
                {assentos.map(assento => <Assento idAssento={assento.id} isAvailable={assento.isAvailable} name={assento.name} selecionados={selecionados} setSelecionados={setSelecionados} idsSelecionados={idsSelecionados} setIdsSelecionados={setIdsSelecionados} key={`a${assento.id}`} />)}
            </Selecao>
            <Line />
            <Inputs>
                <InputGroup>
                    <Title>Nome do comprador(a)</Title>
                    <input
                        id="name"
                        required
                        type="text"
                        placeholder="Digite seu nome..."
                        onChange={e => setNome(e.target.value)}
                    />
                </InputGroup>
                <InputGroup>
                    <Title>CPF do comprador(a)</Title>
                    <input
                        id="cpf"
                        required
                        type="text"
                        placeholder="Digite seu CPF..."
                        onChange={e => setCpf(e.target.value)}
                    />
                </InputGroup>
                <SubmitButton to={`/sucesso`}>Reservar assento(s)</SubmitButton>
            </Inputs>
        </Assentos>
    )
}

export default SelecaoAssento;

const Assentos = styled.div`
min-height: calc(100vh - 67px);
margin-top: 67px;
width: 100%;
background-color: #212226;
color: #FFFFFF;
display: flex;
flex-direction: column;
align-items: center;
font-family: 'Sarala';
h1{
    min-height: 78px;
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: 400;
}
`
const Inputs = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`

const Selecao = styled.div`
width: 90%;
max-width: 350px;
height: 205px;
display: flex;
flex-wrap: wrap;
gap: 7px;
`
const Line = styled.div`
margin: 35px 0 25px;
border-bottom: 1px solid #4E5A65;
width: 80%;
`

const InputGroup = styled.div`
display: flex;
flex-direction: column;
width: 90%;
input{
    padding: 0 15px;
    width: 100%;
    height: 40px;
    border-radius: 8px;
    margin-bottom: 12px;
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 400;
    &::placeholder{
        font-style: italic;
    }
}
`

const Title = styled.label`
font-family: Sarala;
font-weight: 400;
font-size: 16px;
`

const SubmitButton = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
width: 90%;
height: 42px;
margin-top: 24px;
border-radius: 8px;
background-color: #EE897F;
color: #2B2D36;
font-family: 'Sarala';
font-size: 18px;
font-weight: 700;
text-decoration: none;
`