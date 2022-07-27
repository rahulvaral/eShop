import React from "react";

import "./styles.css";
import Header from "./Layout/Header/Header";
import ThemeContext from "./theme/themeContext";
import { colors } from "./theme/theme";
import MainContent from "./Layout/MainContent/MainContent";

const App = (): React.ReactElement => {
  return (
    <ThemeContext.Provider value={{ colors: colors }}>
      <div className="App">
        <Header />
        <MainContent>Hiiii</MainContent>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
