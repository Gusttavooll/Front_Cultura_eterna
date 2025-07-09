"use client";

import React from "react";

const SobrePage: React.FC = () => (
<div style={{ maxWidth: 700, margin: "40px auto", padding: 24 }}>
    <h1>Sobre o Projeto Cultura Eterna</h1>
    <p>
    O <strong>Cultura Eterna</strong> é um projeto criado para valorizar e preservar as histórias, lendas e tradições culturais do Brasil. 
    Através de um mapa interativo, você pode explorar informações sobre cada estado brasileiro e conhecer lendas populares, curiosidades e aspectos culturais únicos de cada região.
    </p>
    <p>
    O projeto utiliza uma API pública desenvolvida especialmente para reunir e compartilhar esse acervo cultural, começando pela região Centro-Oeste e com planos de expansão para todo o país.
    </p>
    <p>
    <strong>Objetivo:</strong> Tornar a cultura brasileira acessível a todos, incentivando o conhecimento, o respeito e a valorização das nossas raízes.
    </p>
    <p>
    <strong>Desenvolvedor:</strong> Gustavo Alves <br />
    <strong>Repositório do Backend:</strong>{" "}
    <a href="https://github.com/Gusttavooll/Cultura_Eterna" target="_blank" rel="noopener noreferrer">
        github.com/Gusttavooll/Cultura_Eterna
    </a>
    </p>
    <p>
    Projeto desenvolvido no curso <strong>Programadores do Amanhã</strong>.
    </p>
</div>
);

export default SobrePage;