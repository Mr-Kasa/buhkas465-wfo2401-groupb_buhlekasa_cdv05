import {React ,useState} from "react";







  const ThemeSelector = () => {
    const [activeTheme, setActiveTheme] = useState('');

    const handleThemeChange = (theme) => {
        setActiveTheme(theme);
      
    };
      

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
      
  export default ThemeSelector