import React, { useState, useEffect } from "react";

const ThemeSelector = () => {
  const [activeTheme, setActiveTheme] = useState('light');

  const handleThemeChange = (theme) => {
    setActiveTheme(theme);
    document.documentElement.className = theme; 
  };

  useEffect(() => {
    document.documentElement.className = activeTheme; 
  }, [activeTheme]);

  return (
    <form>
      <div className="themeButton">
        <button type="button" className="theme">Theme</button>
        <div className="themeOptions">
          <button
            type="button"
            className={`light ${activeTheme === 'light' ? 'active' : ''}`}
            onClick={() => handleThemeChange('light')}
          >
            Light
          </button>
          <button
            type="button"
            className={`dark ${activeTheme === 'dark' ? 'active' : ''}`}
            onClick={() => handleThemeChange('dark')}
          >
            Dark
          </button>
        </div>
      </div>
    </form>
  );
};

export default ThemeSelector;
