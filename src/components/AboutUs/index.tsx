import SectionTitle from "./../SectionTitle";

import "./style.scss";
export default function AboutUs(){
	return (
		<section id="about-us" className="container">
			<SectionTitle
				title="Sobre Nós"
				subTitle="Aqui você conhece um pouco mais sobre nossa a empresa."
			/>

			<article className="my-5 color-medium">
				<p>Na AssisZapp, oferecemos soluções financeiras inovadoras e acessíveis para empresas e indivíduos, por meio de um Assistente Financeiro Inteligente via WhatsApp. Nossa missão é simplificar a gestão financeira, proporcionando agilidade e eficiência com a ajuda de tecnologia de ponta.</p>
				<p>Nosso assistente utiliza Inteligência Artificial para realizar uma série de tarefas financeiras essenciais, como controle de gastos, planejamento de orçamento, análise de fluxo de caixa e muito mais. Tudo isso com a facilidade e praticidade que o WhatsApp oferece, proporcionando um atendimento rápido e personalizado.</p>
				<p>Acreditamos que a tecnologia deve estar a serviço da simplificação e da transparência financeira, permitindo que nossos clientes tomem decisões mais informadas e seguras. Estamos aqui para apoiar você em cada passo da sua jornada financeira, oferecendo suporte 24/7 diretamente no seu WhatsApp.</p>
			</article>

			<div className="text-align-center">
				<button className="w-100">Saiba mais</button>
			</div>
		</section>
	);
}