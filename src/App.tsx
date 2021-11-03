import React from "react";
import Navbar from "./components/navbar";
import GlobalStyle from "./styles/global";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
    </>
  );
};

export default App;
