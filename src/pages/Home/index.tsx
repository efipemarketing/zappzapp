import { useEffect, useState } from "react";
import { Navbar, Header, AboutUs, Services, Plans, Contact } from "./../../components";
import { scrollTo } from "./../../utils/general";
import { HiChevronDoubleUp } from "react-icons/hi";

import "./styles.scss";
export default function Home() {
	const [showButton, setShowButton] = useState(false)
	useEffect(() => {
		const onScroll = () => setShowButton(window.pageYOffset > (window.innerHeight / 3));
		
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
	}, [])
	return (
		<main id="home-page" className="wrapper">
			<Navbar />
			<Header/>
			<AboutUs/>
			<Services/>
			<Plans/>
			<Contact/>

			<button className={`btnToTop ${showButton && "show"}`} onClick={() => scrollTo("header", -66)}>
				<HiChevronDoubleUp className="color-fill color-secondary" size={"4rem"} />
			</button>
			
		</main>
	);
}
