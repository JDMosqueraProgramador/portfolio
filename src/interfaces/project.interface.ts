export interface IProject {
    id: number,
    img: Array<string>,
    name: string,
    description: string,
    rol?: string,
    technologies: Array<string>
    links?: Array<ILink>
}

interface ILink {
    name: string,
    url: string
}