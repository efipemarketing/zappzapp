export function scrollTo(id:string, yOffset:number=0, behavior:"smooth"|"auto"="smooth"){
    const element = document.getElementById(id);
    if(element){
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: behavior, });
    }
}