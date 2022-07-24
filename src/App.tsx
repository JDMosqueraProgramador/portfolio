import React, { useEffect, useState } from 'react';
import { ThemeContext } from './context/themes.context';
import { Themes } from './helpers/themes.enum';
import { changeTheme, getTheme, saveTheme } from './helpers/save-theme.helper';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Index from './pages/Index.page';
import Project from './pages/Project.page';
import Footer from './components/navegation/Footer.component';

const App: React.FC<{}> = () => {

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
            <BrowserRouter basename='portfolio'>
                <Routes>
                    <Route path='/' element={<Index />}>
                    </Route>
                    <Route path=":id" element={<Project />} />

                </Routes>
            </BrowserRouter>
            <Footer />
        </ThemeContext.Provider>
    );
}

export default App;
