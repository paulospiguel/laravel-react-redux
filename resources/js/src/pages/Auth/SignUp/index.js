import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../../services/api';

import Logo from '../../../assets/logo.png';

import { Form, Container } from './styles';

const title = 'SignUp';

export default function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [error, setError] = useState('');

    const history = useHistory();

    const handleSignUp = async (e) => {
        e.preventDefault();

        if (password !== passwordConfirmation) {
            setError('Senhas digitadas são diferentes');
        }

        if (!name || !email || !password || !passwordConfirmation) {
            setError('Preencha todos os dados para se cadastrar');
        } else {
            try {
                await api.post('/register', {
                    name,
                    email,
                    password,
                    password_confirmation: passwordConfirmation,
                });
                history.push('/');
            } catch (err) {
                console.log(err);
                setError('Ocorreu um erro ao registrar sua conta. T.T');
            }
        }
    };

    useEffect(() => {
        document.title = title;
    }, []);

    return (
        <Container>
            <Form onSubmit={handleSignUp}>
                <img src={Logo} alt="logo" />
                {error && <p>{error}</p>}
                <input
                    type="text"
                    placeholder="Seu nome"
                    onChange={(e) => setName(e.target.value)}
                />
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
                <input
                    type="password"
                    placeholder="Confirmar senha"
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
                <button type="submit">Cadastrar</button>
                <hr />
                <Link to="/">Fazer login</Link>
            </Form>
        </Container>
    );
}
