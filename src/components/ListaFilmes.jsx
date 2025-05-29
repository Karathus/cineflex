import styled from "styled-components";
import Filme from "./Filme";
import test from "../assets/test.jpg"

function ListaFilmes() {
    return (
        <Cartaz>
            <h1>Em Cartaz</h1>
            <Filmes>
                <img src={test} />
                <img src={test} />
                <img src={test} />
                <img src={test} />
                <img src={test} />
                <img src={test} />
                <img src={test} />
            </Filmes>
        </Cartaz>
    )
}

export default ListaFilmes;

const Cartaz = styled.div`
min-height: calc(100vh - 67px);
margin-top: 67px;
width: 100%;
background-color: #212226;
color: #FFFFFF;
display: flex;
flex-direction: column;
align-items: center;
overflow: auto;
h1{
    min-height: 78px;
    display: flex;
    align-items: center;
    font-family: 'Sarala';
    font-size: 24px;
    font-weight: 400;
}
`

const Filmes = styled.div`
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
width: 100%;
height: 100%;
img{
    margin-bottom: 20px;
    width: 145px;
    height: 210px;
    border-radius: 8px;
}
`