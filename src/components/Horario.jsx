import styled from "styled-components";
import { Link } from "react-router-dom";

function Horario({ weekday, date, showtimes, setDataFilme, setHoraFilme }) {
    function selecionaDataHora(time) {
        setHoraFilme(time.name);
        setDataFilme(date);
    }

    return (
        <Selecao>
            <h2>{weekday}, {date}</h2>
            <Line />
            <Sessoes>
                {showtimes.map(time => <Tempo to={`/assentos/${time.id}`} onClick={() => selecionaDataHora(time)} key={`${time.id}}`}>{time.name}</Tempo>)}
            </Sessoes>
        </Selecao>
    )
}

export default Horario;

const Selecao = styled.div`
margin-bottom: 30px;
min-height: 150px;
width: 90%;
background-color: #2B2D36;
display: flex;
flex-direction: column;
justify-content: space-evenly;
border-radius: 8px;
`
const Line = styled.div`
border-bottom: 1px solid #4E5A65;
width: 90%;
margin-left: 5%;
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
`
const Tempo = styled(Link)`
height: 41px;
width: 84px;
text-decoration: none;
display: flex;
justify-content: center;
align-items: center;
border: 2px solid #EE897F;
border-radius: 4px;
color: #EE897F;
font-size: 16px;
font-weight: 400;
`