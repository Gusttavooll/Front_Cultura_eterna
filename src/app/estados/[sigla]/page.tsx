// pages/estados/[sigla].tsx

"use client";

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';

interface Lenda {
    nome: string;
    historia: string;
}

const StateDetailPage: React.FC = () => {
    const params = useParams();
    const router = useRouter();
    const sigla = params?.sigla as string | undefined;

    const [lendas, setLendas] = useState<Lenda[]>([]);
    const [info, setInfo] = useState<string>('Carregando informações...');
    const [erro, setErro] = useState<string | null>(null);

    useEffect(() => {
        if (!sigla) return;

        setInfo('Carregando informações...');
        setErro(null);
        setLendas([]);

        let urlInfo = '';
        let urlLendas = '';

        if (sigla === 'mt') {
            urlInfo = 'https://cultura-eterna.vercel.app/cultura_MT';
            urlLendas = 'https://cultura-eterna.vercel.app/lendas_MT';
        } else if (sigla === 'ms') {
            urlInfo = 'https://cultura-eterna.vercel.app/cultura_MS';
            urlLendas = 'https://cultura-eterna.vercel.app/lendas_MS';
        } else {
            setInfo('Informações culturais ainda não disponíveis para este estado.');
            return;
        }

        // Buscar informações gerais
        axios.get(urlInfo)
            .then(res => {
                setInfo(res.data.info || JSON.stringify(res.data));
            })
            .catch(() => setErro('Não foi possível carregar as informações.'));

        // Buscar lendas
        axios.get(urlLendas)
            .then(res => {
                setLendas(res.data);
            })
            .catch(() => setLendas([]));
    }, [sigla]);

    const stateName = sigla ? sigla.toUpperCase() : 'Estado';

    return (
        <div>
            <h1>Página de Informações de {stateName}</h1>
            {erro ? <p style={{ color: 'red' }}>{erro}</p> : <p>{info}</p>}
            {lendas.length > 0 && (
                <div>
                    <h2>Lendas do Estado</h2>
                    <ul>
                        {lendas.map((lenda, idx) => (
                            <li key={idx}>
                                <strong>{lenda.nome}</strong>
                                <p>{lenda.historia}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <button onClick={() => router.back()}>Voltar ao Mapa</button>
        </div>
    );
};

export default StateDetailPage;