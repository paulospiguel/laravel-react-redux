import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import Logo from "../../../assets/logo.png";
import api from "../../../services/api";
import { login } from "../../../services/auth";

import { Form, Container } from "./styles";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const history = useHistory();

    const handleSignIn = async e => {
        e.preventDefault();
        if (!email || !password) {
            setError("Preencha e-mail e senha para continuar!");
        } else {
            try {
                const response = await api.post("/sessions", {
                    email,
                    password,
                });
                login(response.data.token);
                history.push("/app");
            } catch (err) {
                setError(
                    "Houve um problema com o login, verifique suas credenciais. T.T"
                );
            }
        }
    };

    return (
        <Container>
            <Form onSubmit={handleSignIn}>
                <img src={Logo} alt="logo" />
                {error && <p>{error}</p>}
                <input
                    type="email"
                    placeholder="Endereço de e-mail"
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit">Entrar</button>
                <hr />
                <div className="d-flex justify-content-between w-100 mb-5">
                    <div className="d-flex align-items-md-start">
                        <input type="checkbox" />
                        <label className="checkbox ml-1">Lembrar-me</label>
                    </div>
                    <a href="#" class="small-text">
                        Forgot password?
                    </a>
                </div>
                <Link to="/signup">Registrar-se</Link>
            </Form>
        </Container>
    );
}
