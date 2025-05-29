import styled from "styled-components";

function Finalizado() {
    return (
        <Pedido>
            <h1>Pedido finalizado!</h1>
            <Detalhes>
                <Sessao>
                    <h2>Filme e sessão</h2>
                    <Line />
                    <h3>
                        Filme<br />
                        data às hora
                    </h3>
                </Sessao>
                <Ingressos>
                    <h2>Ingressos</h2>
                    <Line />
                    <h3>
                        Assento x<br />
                        Assento x
                    </h3>
                </Ingressos>
                <Comprador>
                    <h2>Comprador(a)</h2>
                    <Line />
                    <h3>
                        Nome:nome<br />
                        CPF:cpf
                    </h3>
                </Comprador>
            </Detalhes>
            <Inicio>Voltar para tela incial</Inicio>
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
h3{
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
`
const Line = styled.div`
border-bottom: 1px solid #4E5A65;
width: 100%;
`
const Sessao = styled.div`
    width: 90%;
    margin-top: 9px;
`
const Ingressos = styled.div`
width: 90%;
    margin-top: 9px;
`
const Comprador = styled.div`
width: 90%;
    margin-top: 9px;
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