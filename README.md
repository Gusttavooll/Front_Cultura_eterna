# Mini Projeto M5 - Cultura Eterna

Este projeto é uma aplicação web desenvolvida em **Next.js** que apresenta um mapa interativo do Brasil. Ao clicar em um estado, o usuário pode visualizar informações culturais e lendas populares, consumindo dados de uma API pública chamada [Cultura Eterna](https://cultura-eterna.vercel.app/).

## Funcionalidades

- **Mapa Interativo do Brasil:** Clique em qualquer estado para acessar informações detalhadas.
- **Página de Estado:** Exibe informações culturais e lendas do estado selecionado.
- **Consumo de API:** Busca dados em tempo real da API Cultura Eterna para os estados disponíveis (atualmente MT e MS).
- **Acessibilidade:** Cada estado possui `<title>` para melhor navegação e identificação.

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/) para requisições HTTP
- SVG para renderização do mapa do Brasil

## Como rodar o projeto

1. **Clone o repositório:**
   ```bash
   git clone <url-do-repositorio>
   cd miniprojetom5
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Acesse no navegador:**
   ```
   http://localhost:3000
   ```

## Estrutura do Projeto

- `src/components/BrazilMap/BrazilMap.tsx`: Componente do mapa SVG do Brasil, com eventos de clique para cada estado.
- `src/app/estados/[sigla]/page.tsx`: Página dinâmica que exibe informações do estado selecionado, consumindo a API.
- `public/`: Recursos estáticos.
- `README.md`: Este arquivo.

## Sobre a API Cultura Eterna

A [API Cultura Eterna](https://cultura-eterna.vercel.app/) é um projeto independente que reúne informações culturais e lendas do Brasil. Atualmente, possui rotas para:

- **Mato Grosso (MT):**
  - `/cultura_MT` — Informações culturais gerais
  - `/lendas_MT` — Lista de lendas do estado

- **Mato Grosso do Sul (MS):**
  - `/cultura_MS` — Informações culturais gerais
  - `/lendas_MS` — Lista de lendas do estado

> Para outros estados, a aplicação exibe uma mensagem informando que os dados ainda não estão disponíveis.

O código-fonte do backend está disponível em:  
[https://github.com/Gusttavooll/Cultura_Eterna](https://github.com/Gusttavooll/Cultura_Eterna)

## Como funciona a busca de dados

Ao clicar em um estado:
- Se for MT ou MS, a aplicação faz requisições para a API e exibe as informações e lendas.
- Para outros estados, exibe uma mensagem padrão.

## Contribuição

Contribuições são bem-vindas!  
Você pode sugerir melhorias, adicionar novos estados ou aprimorar a interface.

1. Fork este repositório
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas alterações (`git commit -m 'feat: nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## Licença

Este projeto é livre para fins educacionais. Consulte a [API Cultura Eterna](https://cultura-eterna.vercel.app/) para detalhes sobre uso dos dados.

---

Desenvolvido por Gustavo Alves no curso Programadores do Amanhã.

---
