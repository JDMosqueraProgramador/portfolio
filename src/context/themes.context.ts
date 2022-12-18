import React from "react";
import { Themes } from "../types/context/themes.enum";
import { IThemeContext } from "../types/context/themeContext.interface";

export const ThemeContext: React.Context<IThemeContext> = React.createContext<IThemeContext>({ theme: Themes.light });