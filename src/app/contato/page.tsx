"use client";

import React from "react";

const ContatoPage: React.FC = () => (
<div style={{ maxWidth: 600, margin: "40px auto", padding: 24 }}>
    <h1>Contato</h1>
    <p>
    Fique à vontade para entrar em contato comigo pelas redes abaixo:
    </p>
    <ul>
    <li>
        <strong>GitHub:</strong>{" "}
        <a href="https://github.com/Gusttavooll" target="_blank" rel="noopener noreferrer">
        github.com/Gusttavooll
        </a>
    </li>
    <li>
        <strong>LinkedIn:</strong>{" "}
        <a href="https://www.linkedin.com/in/gustavo-alves-dev/" target="_blank" rel="noopener noreferrer">
        linkedin.com/in/gustavo-alves-dev
        </a>
    </li>
    </ul>
</div>
);

export default ContatoPage;