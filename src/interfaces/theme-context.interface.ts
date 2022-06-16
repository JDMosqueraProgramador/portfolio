import { Themes } from "../helpers/themes.enum";

export interface IThemeContext {
    theme: Themes,
    toggleTheme?: () => void
}