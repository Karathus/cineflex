import styled from "styled-components";

function SelecaoHorario() {
    return (
        <Horario>
            <h1>Selecione o horário</h1>
            <Selecao>
                <h2>Quinta-feira, 21/03/2024</h2>
                <Line />
                <Sessoes>
                    <button>10:00</button>
                    <button>10:00</button>
                    <button>10:00</button>
                    <button>10:00</button>
                    <button>10:00</button>
                    <button>10:00</button>
                    <button>10:00</button>
                </Sessoes>
            </Selecao>
            <Selecao>
                <h2>Quinta-feira, 21/03/2024</h2>
                <Line />
                <Sessoes>
                    <button>10:00</button>
                    <button>10:00</button>
                    <button>10:00</button>
                    <button>10:00</button>
                </Sessoes>
            </Selecao>
            <Selecao>
                <h2>Quinta-feira, 21/03/2024</h2>
                <Line />
                <Sessoes>
                    <button>10:00</button>
                    <button>10:00</button>
                    <button>10:00</button>
                    <button>10:00</button>
                </Sessoes>
            </Selecao>
        </Horario>
    )
}

export default SelecaoHorario;

const Horario = styled.div`
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

const Selecao = styled.div`
margin-bottom: 30px;
min-height: 150px;
width: 90%;
background-color: #2B2D36;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
border-radius: 8px;
`
const Line = styled.div`
border-bottom: 1px solid #4E5A65;
width: 90%;
`

const Sessoes = styled.div`
margin-top: 20px;
margin-bottom: 15px;
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
align-items: center;
gap: 15px;
button{
    height: 41px;
    width: 84px;
    background: none;
    border: 2px solid #EE897F;
    color: #EE897F;
    font-size: 16px;
    font-weight: 400;
    font-family: 'Sarala';
}
`