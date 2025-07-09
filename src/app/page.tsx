// pages/index.tsx
import BrazilMap from "@/components/BrazilMap/BrazilMap";
import Head from "next/head";

const HomePage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Mapa do Brasil Interativo</title>
        <meta
          name="description"
          content="Mapa interativo dos estados do Brasil com Next.js e TypeScript."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ textAlign: "center", padding: "20px" }}>
        <h1>Explore o Brasil!</h1>
        <p>
          Passe o mouse sobre um estado para destacar e clique para ver mais
          informações.
        </p>
        <div style={{ width: "80%", margin: "0 auto" }}>
          <BrazilMap />
        </div>
      </main>

      <footer>
        <p>Projeto de Mapa Interativo</p>
      </footer>
    </div>
  );
};

export default HomePage;
