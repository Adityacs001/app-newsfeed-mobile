import * as React from "react";
const themes = {
  dark: {
    name: "dark",
    backgroundColor: "#334155",
    color: "#fff",
    highligthedcolor: "#C7D2FE",

    borderColor: "#E2E8F0",
    backgroundCard: "#475569",
    backgroundCardSelected: "#334155",
  },
  light: {
    name: "light",
    backgroundColor: "#fff",
    color: "#1E293B",
    highligthedcolor: "#4338CA",

    borderColor: "#1D4ED8",
    backgroundCard: "#CBD5E1",
    backgroundCardSelected: "#E2E8F0",
  },
};

const initialState = {
  dark: false,
  theme: themes.light,
  toggle: () => {},
};
const ThemeContext = React.createContext(initialState);

const ThemeProvider = ({ children }: { children: any }) => {
  const [dark, setDark] = React.useState(false);

  const toggle = () => {
    setDark(!dark);
  };

  const theme = dark ? themes.dark : themes.light;

  return (
    <ThemeContext.Provider value={{ dark, theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
