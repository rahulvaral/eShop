import { createContext } from "react";

import { Colors, colors } from "./theme";

interface Theme {
  colors: Colors;
}

const ThemeContext = createContext<Theme>({ colors });

export default ThemeContext;
