import { scrollTo } from "./../../utils/general";
import { BsPlayCircle } from "react-icons/bs";

import "./style.scss";
export default function Header(){
	return (
		<header id="header" className="container">
			<div>
				<h1> AssisZapp</h1>
				<p className="color-medium mb-5">SEU ASSISTENTE FINANCEIRO DISPONÍVEL  24H POR DIA NO WHATSAPP 🤖</p>

				<div className="buttons">
					<button className="w-100" onClick={() => scrollTo("about-us", -66)}>Saiba mais</button>
					<button className="w-100 light-outline">
						<BsPlayCircle className="mr-1" /> Assistir Video
					</button>
				</div>
			</div>
		</header>
	);
}
