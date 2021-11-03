import React from "react";
import Menubar from "./components/menubar";
import Navbar from "./components/navbar";
import PageBody from "./components/pageBody";
import GlobalStyle from "./styles/global";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Menubar />
      <PageBody />
    </>
  );
};

export default App;
