import styled from "styled-components";
import { Link } from "react-router-dom";

function Finalizado({ nomeFilme, dataFilme, horaFilme, selecionados, nome, cpf, setSelecionados, setIdsSelecionados }) {

    function resetarSelecionados() {
        setIdsSelecionados([]);
        setSelecionados([])
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
                <div>
                    <h2>Comprador(a)</h2>
                    <Line />
                    <h3>
                        Nome: {nome}<br />
                        CPF: {cpf}
                    </h3>
                </div>
            </Detalhes>
            <Inicio to={"/"} onClick={resetarSelecionados}>Voltar para tela incial</Inicio>
        </Pedido>
    )
}

export default Finalizado;

const Pedido = styled.div`
min-height: calc(100vh - 67px);
margin-top: 67px;
width: 100%;
background-color: #212226;
display: flex;
flex-direction: column;
align-items: center;
overflow: auto;
font-family: 'Sarala';
h1{
    min-height: 78px;
    display: flex;
    align-items: center;
    color: #9DB899;
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
    margin-left: 3%;
}
h3{
    font-size: 20px;
    font-weight: 400;
    color: #FFFFFF;
    margin-top: 15px;
    margin-left: 3%;
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
padding-bottom: 12px;
div{
    width: 95%;
    margin-top: 9px;
}
`
const Line = styled.div`
border-bottom: 1px solid #4E5A65;
justify-self: center;
`
const Inicio = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
margin-top: 22px;
background-color: #EE897F;
width: 90%;
height: 42px;
border-radius: 8px;
font-family: 'Sarala';
font-size: 18px;
font-weight: 700;
text-decoration: none;
color: #2B2D36;
`