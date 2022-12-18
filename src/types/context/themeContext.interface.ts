import { Themes } from "./themes.enum";

export interface IThemeContext {
    theme: Themes,
    toggleTheme?: () => void
}