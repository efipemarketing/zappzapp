import { BsInstagram, BsLinkedin, BsFacebook } from "react-icons/bs";
import "./styles.scss"
const SocialNetworkArr = [{
    'icon': <BsInstagram size={"3rem"} />,
    'url': "#"
}, {
    'icon': <BsLinkedin size={"3rem"} />,
    'url': "#"
}, {
    'icon': <BsFacebook size={"3rem"} />,
    'url': "#"
}];

export default function SocialNetwork(){
    return(
        <div id="social-network" className="mt-5 d-flex justify-content-between align-items-center">
            {SocialNetworkArr.map(({ icon, url }, index) => (
                <a
                    key={`social-network-icon-${index + 1}`}
                    className="not-effect" 
                    href={url}
                    target="_blank" 
                    rel="noopener noreferrer"
                >{icon}</a>
            ))}
        </div>
    );
}