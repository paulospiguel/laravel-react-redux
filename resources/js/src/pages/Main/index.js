import React from "react";
import { useHistory } from "react-router-dom";

import api from "../../services/api";
import { logout, getToken } from "../../services/auth";

export default function Main() {
    const history = useHistory();

    const token = getToken();

    const handleLogout = async () => {
        const response = await api.post("auth/logout", {
            headers: {
                Authorization: `Basic ${token}`,
            },
        });
        logout();
        history.push("/");
    };
    return (
        <div className="d-flex justify-content-between w-100 bg-secondary">
            <span>Main</span>
            <button type="button" onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
}
