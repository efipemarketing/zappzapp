import { Link } from "react-router-dom";

import "./styles.scss";
export default function Error(){
	return(
		<div id="error-page" className="wrapper">
			<div className="container">
                <div className="text-align-center">
                    <h1 className="error-title color-white">Página não encontrada</h1>
                    <p className="error-description">
                        Desculpe, não conseguimos localizar essa página :( <br />
                        Clique <Link to="/" className="color-secondary">aqui</Link> para voltar à aplicação.
                    </p>
                </div>
			</div>
		</div>
	);
}