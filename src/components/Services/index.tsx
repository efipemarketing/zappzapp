import SectionTitle from '../SectionTitle';
import ServicesJSON from './../../assets/json/services.json';
import "./style.scss";

export default function Services(){
	return (
		<section id="services" className="container">
			<SectionTitle
				title="Nossos Serviços"
				subTitle="Aqui você encontra tudo que oferecemos dentro do nosso AssisZapp."
			/>
			
			<div className="cards my-5">
				{ServicesJSON.map(({ icon, title, description }: {icon: string, title: string, description: string}, index) => (
					<div key={`service-card-${index + 1}`}>
						<img 
							src={require(`./../../assets${icon}`)} 
							alt={title} 
						/>

						<h1 className='color-secondary mb-3'>{title}</h1>
						<p>{description}</p>
					</div>
				))}
			</div>
		</section>
	);
}