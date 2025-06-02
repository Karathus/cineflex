import styled from "styled-components";
import { useState } from "react";

function Assento({ idAssento, isAvailable, name, selecionados, setSelecionados, idsSelecionados, setIdsSelecionados }) {
    const [selected, setSelected] = useState(false)

    function selecionaAssento() {
        if (isAvailable && !selected) {
            setSelecionados([...selecionados, name])
            setIdsSelecionados([...idsSelecionados, idAssento])
            setSelected(true)
        }
        else if (!isAvailable) {
            alert("O assento não está disponível");
        }
    }

    return (
        <Cadeira $isSelected={selected} $isAvailable={isAvailable} onClick={selecionaAssento}>{name}</Cadeira>
    )
}


export default Assento;

const Cadeira = styled.button`
width: 26px;
height: 26px;
border-radius: 100%;
color: #2B2D36;
font-family: 'Roboto';
font-size: 11px;
font-weight: 400;
background-color: ${props => (props.$isAvailable ? "#9DB899" : "#2B2D36")};
background-color: ${props => (props.$isSelected ? "#FADBC5" : "")};
border: ${props => (props.$isSelected ? "2px solid #EE897F" : "none")};
`