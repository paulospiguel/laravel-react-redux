import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const Form = styled.form`
    width: 400px;
    background: #fff;
    box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.15);
    border-radius: 1rem;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        min-width: 100px;
        margin: 0 40px;
    }
    p {
        color: #ff3333;
        margin-bottom: 15px;
        border: 1px solid #ff3333;
        padding: 10px;
        width: 100%;
        text-align: center;
    }
    input {
        flex: 1;
        min-height: 46px;
        margin-bottom: 15px;
        padding: 0 20px;
        color: #777;
        font-size: 15px;
        width: 100%;
        border: 1px solid #ddd;
        border-radius: 4px;

        &::placeholder {
            color: #999;
        }
    }

    input[type="checkbox"] {
        min-height: 0px;
        margin: auto;
    }

    label.checkbox {
        margin: auto;
    }

    button {
        color: #fff;
        font-size: 16px;
        background: #3490dc;
        height: 56px;
        border: 0;
        border-radius: 5px;
        width: 100%;
        transition: filter 0.5s;

        &:hover {
            filter: brightness(90%);
        }
    }
    hr {
        margin: 20px 0;
        border: none;
        border-bottom: 1px solid #cdcdcd;
        width: 100%;
    }
    a {
        font-size: 16;
        font-weight: bold;
        color: #999;
        text-decoration: none;
    }
`;
