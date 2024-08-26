import "./Theme.css"
import {  useContext, useState } from "react";
import { ThemeContext } from "../../App"

function Theme(){
  const [isDarkMode, setIsDarkMode] = useState(true);
  const PassedValue = useContext(ThemeContext)
  function handleChange(){
      // console.log('Mode changed', event.target.checked)          
      PassedValue.ChangeTheme()
      document.documentElement.setAttribute('dark-theme', PassedValue.theme);
      setIsDarkMode(!isDarkMode);
      }

  return (
    <header className="header">
      <div className="logo">devfinder</div>
      <button className="dark-mode-btn" onClick={handleChange}>
        <p className="dark-mode-btn__text">
          {isDarkMode ?           
          <p className="light">Dark</p>:<p className="dark">Light</p>}          
        </p> 
        <div className="dark-mode-btn__icon"> 
          {isDarkMode ? <img src="/imgs/icon-moon.svg" alt="" /> : 
          <img src="/imgs/icon-sun.svg" alt="" />}
        </div>
      </button>
    </header>
  );
}

export default Theme;