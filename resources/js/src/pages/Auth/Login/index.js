import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Modal, ModalBody, Spinner, Button } from "reactstrap";

import Logo from "../../../assets/logo.png";
import api from "../../../services/api";
import { login } from "../../../services/auth";

import { Form, Container } from "./styles";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const loading = useSelector((state) => state.loading);

    const title = "SignIn";

    const history = useHistory();
    const dispatch = useDispatch();

    const handleSignIn = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError("Preencha e-mail e senha para continuar!");
        } else {
            dispatch({ type: "REQUEST" });
            try {
                const response = await api.post("/auth/login", {
                    email,
                    password,
                });
                login(response.data.access_token);
                setTimeout(() => {
                    dispatch({ type: "SIGN_IN", data: response.data });
                    setTimeout(() => {
                        history.push("/dashboard");
                    }, 500);
                }, 2000);
            } catch (err) {
                setError(
                    "Houve um problema com o login, verifique suas credenciais. T.T"
                );
                dispatch({ type: "SIGN_IN" });
            }
        }
    };

    useEffect(() => {
        document.title = title;
    }, []);

    return (
        <Container>
            <Form onSubmit={handleSignIn}>
                <img src={Logo} alt="logo" />
                {error && <p>{error}</p>}
                <input
                    type="email"
                    placeholder="Endereço de e-mail"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    disabled={loading}
                    size="lg"
                    type="submit"
                    color="primary"
                >
                    Entrar
                </Button>
                <hr />
                <div className="d-flex justify-content-between w-100 mb-5">
                    <div className="d-flex align-items-md-start">
                        <input type="checkbox" />
                        <label className="checkbox ml-1">Lembrar-me</label>
                    </div>
                    <a href="#" className="small-text">
                        Forgot password?
                    </a>
                </div>
                <Link to="/signup">Registrar-se</Link>
            </Form>
            <Modal isOpen={loading} centered size="sm">
                <ModalBody>
                    <div class="text-center m-3">
                        <Spinner style={{ width: "3rem", height: "3rem" }} />
                        <p className="mt-2">Loading...</p>
                    </div>
                </ModalBody>
            </Modal>
        </Container>
    );
}
