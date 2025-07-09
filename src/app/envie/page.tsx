"use client";
import React, { useState } from 'react';

export default function FormularioPage() {
const [nome, setNome] = useState('');
const [email, setEmail] = useState('');
const [mensagem, setMensagem] = useState('');
const [enviado, setEnviado] = useState(false);

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 

    
    console.log('Dados do Formulário:', { nome, email, mensagem });

    alert('Formulário enviado com sucesso!');
    setNome('');
    setEmail('');
    setMensagem('');
    setEnviado(true);

    setTimeout(() => {
    setEnviado(false);
    }, 3000);
};

return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Entre em Contato
        </h1>

        {enviado && (
        <p className="bg-green-100 text-green-700 p-3 rounded mb-4 text-center">
            Sua mensagem foi enviada com sucesso!
        </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
        <div>
            <label htmlFor="nome" className="block text-gray-700 text-sm font-bold mb-2">
            Nome Completo:
            </label>
            <input
            type="text"
            id="nome"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500"
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            />
        </div>

        <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email:
            </label>
            <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500"
            placeholder="seu.email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
        </div>

        <div>
            <label htmlFor="mensagem" className="block text-gray-700 text-sm font-bold mb-2">
            Mensagem:
            </label>
            <textarea
            id="mensagem"
            rows={5}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500"
            placeholder="Digite sua mensagem aqui..."
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            required
            ></textarea>
        </div>

        <div className="flex items-center justify-center">
            <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
            >
            Enviar Mensagem
            </button>
        </div>
        </form>
    </div>
    </div>
);
}