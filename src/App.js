import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
};

body {
  font-family: "Sevillana", cursive;
  width: 100vw;
  min-height:100vh;
  overflow-x: hidden;
  background-image: url("https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/Imagem%20palacio.png?raw=true");

  @media (max-width: 900px) {
    background-image: url("https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/imagem%20do%20palacio.png?raw=true");
    background-size: cover;
    background-repeat: no-repeat;

  }

};

main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
 
};

}`;
const Titulo = styled.h1`
  color: white;
  width: 100%;
  text-align: center;
  padding: 20px 0;
  font-size: 4rem;

  @media (max-width: 900px) {
    font-size: 1.5rem;
  }
`;

const Botao = styled.button`
  width: 190px;
  height: 50px;
  border-radius: 50px;
  background: #007bff;
  color: white;
  font-family: "Sevillana", cursive;
  font-size: 24px;

  @media (max-width: 900px) {
    background: #b74794;
  }
`;

const Imagens = styled.img`
  @media (max-width: 900px) {
    width: 350px;
    height: 450px;
  }
`;

export default function App() {
  const [lampada, setLampada] = useState(false);
  const trocarLampada = () => {
    setLampada(!lampada);
  };
  return (
    <main>
      <GlobalStyle />
      <Titulo>"Liberte a magia da programação com a lâmpada de Aladim."</Titulo>
      <Imagens
        src={
          lampada
            ? "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada-com-mago.png?raw=true"
            : "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada.png?raw=true"
        }
        alt="Lâmpada"
      />
      <Botao onClick={trocarLampada}>Clique Aqui</Botao>
    </main>
  );
}
