import { ELanguage } from "./language.enum";

export interface ILanguageContext {
    languague: ELanguage,
    changeLanguage: (languague: ELanguage) => void
}