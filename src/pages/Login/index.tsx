import { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

import { HiExternalLink } from "react-icons/hi";

import "./styles.scss";
export default function Login(){
    const navigate = useNavigate();
    function handleSubmitLogin(ev: FormEvent){
        ev.preventDefault();
    }
    return(
        <div id="login-page" className="wrapper">
            <div className="col-container">
                <div className="mb-5">
                    <p className="mb-3">Welcome back</p>
                    <h2 className="color-tertiary">Sign in to your account</h2>
                </div>

                <form id="form-login" className="mb-5" onSubmit={handleSubmitLogin}>
                    <div className="form-div mb-5">
                        <label className="required-label" htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            name="email"
                            id="email" 
                            className="required" 
                            placeholder="Ex.: steven@gmail.com"
                        />
                    </div>

                    <div className="form-div">
                        <label className="required-label" htmlFor="password">Password</label>
                        <input
                            type="password" 
                            name="password" 
                            id="password" 
                            className="required"
                            placeholder="**********"
                        />
                    </div>

                    <div className="form-div form-helper">
                        <div>
                            <input type="checkbox" id="remenber_me" name="remenber_me" />
                            <label htmlFor="remenber_me">Remember me</label>
                        </div>

                        <div>
                            <Link to="/" className="color-secondary">Forgot password?</Link>
                        </div>
                    </div>

                    <div className="d-flex" style={{ gap: `2rem` }}>
                        <button type="button" className="w-100 light-outline" onClick={() => navigate("/")}>Back</button>
                        <button type="submit" className="w-100">Sing in</button>
                    </div>
                </form>

                <div className="text-align-center">
                    <p>
                        Don't have an account yet?
                        <Link
                            to="/"
                            className="ml-2 color-secondary"
                        >
                            Sign Up <HiExternalLink size="2.25rem" className="vertical-align-middle" />
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}