import SectionTitle from './../SectionTitle';
import SocialNetwork from "./SocialNetwork"
import FormContact from './FormContact';

import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaLocationArrow } from "react-icons/fa";

import "./style.scss";
export default function Contact(){
	return (
		<footer id="contact" className="container">
			<SectionTitle
				title="Contato"
				subTitle={<>Está tendo problemas ou dúvidas?<b className="color-primary">?</b></>}
			/>

			<p className="my-5 color-medium">Nos envie agora uma mensagem, que algúem do nosso time irá atende-lo.!</p>
			<div className="d-flex justify-content-between flex-wrap">
				<div className="w-auto mb-5">
					<p className="mb-3">
						<BsFillTelephoneFill
							size={"2.5rem"}
							className="vertical-align-middle color-primary mr-1"
						/> (57) 301 211-2018
					</p>
					<p className="mb-3">
						<HiOutlineMail
							size={"2.5rem"}
							className="vertical-align-middle color-primary mr-1"
						/>
						<a className="color-secondary" href="mailto: contato@assizapp.online">
							contato@assizapp.online
						</a>
					</p>
					<p className="mb-3">
						<FaLocationArrow
							size={"2.5rem"}
							className="vertical-align-middle color-primary mr-1"
						/> Santa Catarina, Brazil
					</p>

					<SocialNetwork />
				</div>

				<FormContact />
			</div>

			<div className="text-align-center">
				<small className="color-medium">AssisZapp | Todos os direitos reservados | 2025 ©</small>
			</div>
		</footer>
	);
}