import React from "react";
import { Themes } from "../helpers/themes.enum";
import { IThemeContext } from "../interfaces/theme-context.interface";

export const ThemeContext: React.Context<IThemeContext> = React.createContext<IThemeContext>({ theme: Themes.light });