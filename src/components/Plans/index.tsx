import SectionTitle from "../SectionTitle";

import "./style.scss";

const plans: PlanCardProps[] = [
	 {
		"active": true,
		"type": "Plano Anual",
		"subTitle": "Mais Vendido",
		"sign": "R$",
		"amount":  45,
		"amountLocale": "en-US",
		"timeCourse": "anual",
		"description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
		"benefits": [
			"- Acesso imediato ao assistente!",
			"- 24h por dia disponível!",
			"- Controle seus gastos pessoais.",
			"- Crie Lembretes de contas e afins.",
			"- Receba relatórios em segundos.",
			"- Crie metas de gastos.",
		]
	}
]
export default function Plans() {
	return (
		<section id="plans" className="container">
			<SectionTitle
				title="Planos"
				subTitle="Alguns dos nossos
melhores planos"
			/>

			<div className="row-plan-cards mt-5">
				{plans.map(plan => <PlanCardComponent {...plan} /> )}
			</div>
		</section>
	);
}

type PlanCardProps = {
	"active"?: boolean
	"type": "Standard"|"Premium"|"Enterprise"|"Plano Mensal"|"Plano Anual"|"Plano Vitalicio"
	"subTitle"?: string
	"sign": "$"|"R$"
	"amount": number
	"amountLocale": "en-US"|"pt-BR"
	"timeCourse": "month"|"year"|"mês"|"ano"|"anual"
	"description": string
	"benefits": string[]
}
function PlanCardComponent({ active, type, subTitle, sign, amount, amountLocale, timeCourse, description, benefits }: PlanCardProps) {
	function formatMoney(number:number, type:string) {
		return new Intl.NumberFormat(type, { maximumSignificantDigits: 3 }).format(number);
	}

	return (
		<div className={`plan-card ${active ? "active" : ""}`}>
			<div className="content">
				<div className="text-align-center mb-5">
					<h1>{type}</h1>
					{subTitle && <h3 className="text-primary-gradient">{subTitle}</h3>}
				</div>

				<div className="amount-container mb-5">
					<h4 className="bold">{sign}</h4>
					<h1 className="bold">{formatMoney(amount, amountLocale)}</h1>
					<h3 className="bold">/{timeCourse}</h3>
				</div>

				<p className="mb-4">{description}</p>

				<ul className="text-align-center mb-5">
					{benefits.map(benefit => <li>{benefit}</li>)}
				</ul>

				<div className="text-align-center">
				<button
  type="button"
  className="w-75"
  onClick={() => window.open('https://pay.kirvano.com/0a266a9d-e1cc-4757-b0fe-e049d556a496', '_blank')}
>
  Testar Agora
</button>
				</div>
			</div>
		</div>
	);
}
