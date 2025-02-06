import { useState } from "react";
import { Link } from "react-router-dom";
import { scrollTo } from "./../../utils/general"; 

import { IoLogInSharp } from "react-icons/io5";


import Logo from './../../assets/img/logo/logo-home.png'

import "./style.scss";
export default function Navbar() {
	const [isNavExpanded, setIsNavExpanded] = useState(false);

	function scrollToElement(id: string){
		scrollTo(id, -82);
		if(isNavExpanded){ setIsNavExpanded(false); }
	}
	return (
		<nav className="navigation">
			<a type="button" className="a-none" onClick={() => scrollToElement("header")}>
				<img src={Logo} alt="Logo" />
			</a>
			<div
				className={`hamburger-lines ${isNavExpanded ? "open" : ""}`} 
				onClick={() => setIsNavExpanded(!isNavExpanded)}
			>
				<span className="line line1"></span>
				<span className="line line2"></span>
				<span className="line line3"></span>
			</div>
			<ul className={`${isNavExpanded ? "open" : ""}`}>
				<li>
					<a type="button" onClick={() => scrollToElement("about-us")}>Sobre nós</a>
				</li>
				<li>
					<a type="button" onClick={() => scrollToElement("services")}>Serviços</a>
				</li>
				<li>
					<a type="button" onClick={() => scrollToElement("plans")}>Planos</a>
				</li>
				<li>
					<a type="button" onClick={() => scrollToElement("contact")}>Contato</a>
				</li>
				<li>
					<Link to="/login">
						<IoLogInSharp className="vertical-align-middle"/> Logar
					</Link>
				</li>
			</ul>
		</nav>
	)
}