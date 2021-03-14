import React from "react";

import Routes from "./routes";

import { AuthProvider } from "./Context/AuthContext";

import GlobalStyle from "./globalStyle";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <GlobalStyle />
    </div>
  );
}

export default App;
