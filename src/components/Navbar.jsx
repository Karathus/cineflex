import styled from "styled-components";
import logo from "../assets/cineflix.png"

function Navbar() {
    return (
        <Cabecalho>
            <img src={logo} />
            Cineflex
        </Cabecalho>
    )
}
export default Navbar;

const Cabecalho = styled.div`
position: fixed;
top: 0;
left: 0;
height: 67px;
width: 100%;
background-color: #EE897F;
display: flex;
justify-content: center;
align-items: center;
gap: 12px;
color: #FADBC5;
font-size: 34px;
font-weight: 600;
font-family: 'Raleway';
img{
    height: 40px;
    width: 40px;
}
`