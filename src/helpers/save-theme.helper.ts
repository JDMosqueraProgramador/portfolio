import { Themes } from "../types/context/themes.enum";

const THEME_STORAGE: string = "THEME";

export const saveTheme = (theme: Themes): void => localStorage.setItem(THEME_STORAGE, theme);

export const getTheme = (): Themes => {

    const theme = localStorage.getItem(THEME_STORAGE);
    if (theme != null) {
        return (theme === Themes.dark) ? Themes.dark : Themes.light;
    } else {
        return Themes.light;
    }
}

export const changeTheme = (theme: Themes): void => {
    switch (theme) {
        case Themes.dark: 
            document.body.classList.add("dark");
        break;

        case Themes.light: 
            if (document.body.classList.contains("dark")) {
                document.body.classList.remove("dark");
            }
        break;
    }
}