import styled from "styled-components";

function SelecaoAssento() {
    return (
        <Assentos>
            <h1>Selecione o(s) assento(s)</h1>
            <Selecao>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>10</button>
                <button>11</button>
                <button>12</button>
                <button>13</button>
                <button>14</button>
                <button>15</button>
                <button>16</button>
                <button>17</button>
                <button>18</button>
                <button>19</button>
                <button>20</button>
                <button>21</button>
                <button>22</button>
                <button>23</button>
                <button>24</button>
                <button>25</button>
                <button>26</button>
                <button>27</button>
                <button>28</button>
                <button>29</button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
            </Selecao>
            <Line />
            <form>
                <InputGroup>
                    <Title>Nome do comprador(a)</Title>
                    <input
                        id="name"
                        required
                        type="text"
                        placeholder="Digite seu nome..."
                    />
                </InputGroup>
                <InputGroup>
                    <Title>CPF do comprador(a)</Title>
                    <input
                        id="cpf"
                        required
                        type="text"
                        placeholder="Digite seu CPF..."
                    />
                </InputGroup>
                <SubmitButton>Reservar assento(s)</SubmitButton>
            </form>
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
form{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
`

const Selecao = styled.div`
width: 90%;
height: 205px;
display: flex;
flex-wrap: wrap;
gap: 7px;
button{
    width: 26px;
    height: 26px;
    border-radius: 100%;
    color: #2B2D36;
    font-family: 'Roboto';
    font-size: 11px;
    font-weight: 400;
    background-color: #9DB899;
}
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
    width: 100%;
    height: 40px;
    border-radius: 8px;
    margin-bottom: 12px;
}
`

const Title = styled.label`
font-family: Sarala;
font-weight: 400;
font-size: 16px;
`

const SubmitButton = styled.button`
width: 90%;
height: 42px;
margin-top: 24px;
border-radius: 8px;
background-color: #EE897F;
color: #2B2D36;
font-family: 'Sarala';
font-size: 18px;
font-weight: 700;
`