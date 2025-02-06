import { FormEvent } from "react";
import { toast } from "react-toastify";

export default function FormContact(){
	function handleFormSubmit(ev:FormEvent){
		ev.preventDefault();
        
        return toast.error("Dear user, fill in all the information so that we can proceed with the request!");
	}
    return(
        <form 
            id="form-contact" 
            className="w-100 mb-5" 
            onSubmit={handleFormSubmit}
            style={{ maxWidth: 350 }}
        >
            <div className="form-div">
                <label className="required-label" htmlFor="name">Nome:</label>
                <input type="text" id="name" name="name" className="required" placeholder="Seu Nome" maxLength={50} />
            </div>

            <div className="form-div">
                <label className="required-label" htmlFor="email">E-mail:</label>
                <input type="email" id="email" name="email" className="required" placeholder="Ex.: steven@gmail.com.br" maxLength={50} />
            </div>

            <div className="form-div">
                <label className="required-label" htmlFor="subject">Mensagem:</label>
                <textarea id="subject" name="subject" className="required" placeholder="Sua mensagem" rows={7} maxLength={255}></textarea>
            </div>

            <div className="form-div">
                <button type="submit" className="w-100">Enviar</button>
            </div>
        </form>
    );
}