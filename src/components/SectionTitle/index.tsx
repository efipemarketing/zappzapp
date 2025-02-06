export default function SectionTitle({ title, subTitle }: { title: string, subTitle?: string | JSX.Element}){
    return(
        <div className="section-title-container">
            <h2 className="horizontal-line-before color-primary">{title}</h2>
            {subTitle && (
                <h1 style={{ fontSize: `4rem`, fontWeight: 400 }}>{subTitle}</h1>
            )}
        </div>
    );
}