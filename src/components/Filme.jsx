import { Link } from "react-router-dom";

function Filme({ idFilme, title, posterURL, setNomeFilme}) {
    function selecionaFilme() {
        setNomeFilme(title);
    }

    return(
        <Link to={`/sessoes/${idFilme}`} onClick={selecionaFilme}>
            <img src={posterURL} />
        </Link>
    )
}

export default Filme;