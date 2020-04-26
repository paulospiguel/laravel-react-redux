import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

function Copyright() {
    return (
        <Title level={4} variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <a color="inherit" href="https://material-ui.com/">
                Your Website
            </a>{" "}
            {new Date().getFullYear()}
            {"."}
        </Title>
    );
}

export default Copyright;
