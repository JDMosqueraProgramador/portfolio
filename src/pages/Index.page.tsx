import React, { useEffect, useState } from 'react'
import Main from '../components/index/sections/Main.component';
import { ThemeContext } from '../context/themes.context';
import { Themes } from '../helpers/themes.enum';
import { changeTheme, getTheme, saveTheme } from '../helpers/save-theme.helper';
import Menu from '../components/index/navegation/Menu.component';
import Experience from '../components/index/sections/Experience.component';
import Areas from '../components/index/sections/Areas.component';
import Projects from '../components/index/sections/Projects.component';

const Index: React.FC<{}> = () => {

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
            <Projects />
        </ThemeContext.Provider>
    )
}

export default Index;