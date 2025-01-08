import "./styles.css";
import { useState } from "react";
import { Navbar } from "./Navbar";
import { Home } from "./Home";

// get theme and language contexts here
import { ThemeContext } from "./themeContext";
import { LanguageContext } from "./languageContext";

export default function App() {
 

  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("English");
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (

    <div className={`App ${theme}`}>
      {/* Add context provider here */}
    <LanguageContext.Provider value={{ language, setLanguage }}>
     <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      <Navbar />
      <Home />
     </ThemeContext.Provider>
    </LanguageContext.Provider>
      
    </div>
  
  
  );
}
