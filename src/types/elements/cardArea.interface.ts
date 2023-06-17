export interface ITechnology {
    technology: string,
    img: string
}

export interface IArea<T> {
    img?: string, title: string, technologies: Array<T>
}