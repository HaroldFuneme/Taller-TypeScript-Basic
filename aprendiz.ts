export enum NivelEducativo{
    BACHILLER = "Bachillerato",
    UNIVERSIDAD = "Universitario",
    POSTGRADO =  "Postgradpo"
}

export class Aprendiz {
    constructor(
        public nombre: string,
        public apellido: string,
        public avatar: string,
        public edad: number,
        public nivelEducativo: NivelEducativo
    ){}

}