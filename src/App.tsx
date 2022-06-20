import React, { useEffect, useState } from 'react';
import Main from './components/pages/Main.component';
import './App.scss';
import { ThemeContext } from './context/themes.context';
import { Themes } from './helpers/themes.enum';
import { changeTheme, getTheme, saveTheme } from './helpers/save-theme.helper';
import Menu from './components/navegation/Menu.component';
import Experience from './components/pages/Experience.component';
import Areas from './components/pages/Areas.component';

const App: React.FC<{}> = () => {

    const [main, setMain] = useState<boolean>(false);
    const [theme, setTheme] = useState<Themes>(getTheme());
    const toggleTheme = () => {
        setTheme((theme === Themes.dark) ? Themes.light : Themes.dark);
    }

    useEffect(() => {
        saveTheme(theme);
        changeTheme(theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{
            theme: theme,
            toggleTheme: toggleTheme
        }}>

            <Main setMain={setMain} />
            <Menu theme={theme} main={main} />
            <Experience />
            <Areas />
        </ThemeContext.Provider>
    );
}

export default App;
