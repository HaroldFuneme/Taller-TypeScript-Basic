import { Curso } from "./curso.js";

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
        public nivelEducativo: NivelEducativo,
        public cursos: Curso []
    ){}


    public darCursosCertificados(): number{
        let totalCursos: number = 0;
        for (let index = 0; index < this.cursos.length; index++) {
            let  curso:Curso = this.cursos[index];
            if (curso.calificaciion) {
                totalCursos++;
            }
            
        }
        return totalCursos;
    }

}