import { useState, useEffect, createContext } from "react";
import Theme from "./components/Theme/Theme";
import SearchBar from "./components/SearchBar/SearchBar";
import UserDetails from "./components/UserDetails/UserDetails";
import "./App.css";
import axios from "axios";

export const ThemeContext = createContext(null)

function App() {

  const [theme, setTheme] = useState('Dark');
  function ChangeTheme(){
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  const [userData, setUserData] = useState(null);

  const handleUserFound = (data) => {
    setUserData(data);
  };

  useEffect(() => {
    const fetchOctocatData = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/octocat"
        );
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching Octocat's data:", error);
      }
    };

    fetchOctocatData();
  }, []);

  return (
    <ThemeContext.Provider value={{theme, ChangeTheme}}>
      <Theme />
      <SearchBar onUserFound={handleUserFound} />
      <UserDetails userData={userData} />
    </ThemeContext.Provider>
  );
}

export default App;
