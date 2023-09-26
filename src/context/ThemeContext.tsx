import { createContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

type ThemeProviderProps = {
  children: React.ReactNode;
};

const key = "theme";
const initialValue = "light";

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // Get Item on Local Storage
  const savedValue = localStorage.getItem(key);
  const parsedValue = savedValue ? JSON.parse(savedValue) : initialValue;
  const [theme, setTheme] = useState<Theme>(parsedValue);

  // Set Item on Local Storage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(theme));
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
