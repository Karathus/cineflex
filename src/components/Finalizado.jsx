import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

function Finalizado({ nomeFilme, dataFilme, horaFilme, selecionados, nome, cpf, setSelecionados, idsSelecionados, setIdsSelecionados }) {
    const navigate = useNavigate();

    useEffect(() => {
        axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", {
            ids: idsSelecionados,
            name: nome,
            cpf: cpf
        }).then(() => (setIdsSelecionados([])))
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    function voltarParaInicio() {
        setSelecionados([])
        navigate("/")
    }

    return (
        <Pedido>
            <h1>Pedido finalizado!</h1>
            <Detalhes>
                <div>
                    <h2>Filme e sessão</h2>
                    <Line />
                    <h3>
                        {nomeFilme}<br />
                        {dataFilme} às {horaFilme}
                    </h3>
                </div>
                <div>
                    <h2>Ingressos</h2>
                    <Line />
                    <h3>
                        {selecionados.map(selecionado => (
                            <p key={selecionado}>Assento {selecionado}</p>
                        ))}
                    </h3>
                </div>
                <Comprador>
                    <h2>Comprador(a)</h2>
                    <Line />
                    <h3>
                        Nome: {nome}<br />
                        CPF: {cpf}
                    </h3>
                </Comprador>
            </Detalhes>
            <Inicio onClick={voltarParaInicio}>Voltar para tela incial</Inicio>
        </Pedido>
    )
}

export default Finalizado;

const Pedido = styled.div`
min-height: calc(100vh - 67px);
margin-top: 67px;
width: 100%;
background-color: #212226;
color: #9DB899;
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
    color: #EE897F;
    font-size: 22px;
    font-weight: 700;
}
h3, p{
    font-size: 20px;
    font-weight: 400;
    color: #FFFFFF;
    margin-top: 15px;
}
`
const Detalhes = styled.div`
width: 90%;
min-height: 420px;
background-color: #2B2D36;
border-radius: 8px;
display: flex;
flex-direction: column;
align-items: center;
div{
    width: 90%;
    margin-top: 9px;
}
`
const Line = styled.div`
border-bottom: 1px solid #4E5A65;
width: 100%;
margin: 0;
`
const Comprador = styled.div`
    margin-bottom: 12px;
`
const Inicio = styled.button`
margin-top: 22px;
background-color: #EE897F;
width: 90%;
height: 42px;
border-radius: 8px;
font-family: 'Sarala';
font-size: 18px;
font-weight: 700;
`