import { Aprendiz, NivelEducativo } from "./aprendiz.js";
import { Curso } from "./curso.js";


let cursos = [
    new Curso("Practicas esenciales para el agilismo",20,true,2019),
    new Curso("Pruebas automatizadas",80,true,2029),
    new Curso("Diseño y Arquitectura",60,true,2010),
]

export const ap = new Aprendiz("Harold Hernando", "Funeme Molano", "avatar.png", 33, NivelEducativo.POSTGRADO, cursos);

console.log(ap);
console.log(ap.cursos);

let aprendizTable: HTMLElement = document.getElementById("aprendiz")!;
let estadisticasTable: HTMLElement = document.getElementById("estadisticas")!;

function mostrarDatosAprendiz(aprendiz: Aprendiz): void{
    let tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = `<tr><td colspan=2><img src="./${aprendiz.avatar}" height="100"></td></tr>
    <tr><td>Nombres: </td><td>${aprendiz.nombre}</td></tr>
    <tr><td>Apellidos: </td><td>${aprendiz.apellido}</td></tr>
    <tr><td>Nivel Educativo: </td><td>${aprendiz.nivelEducativo}</td></tr>
    <tr><td>Edad: </td><td>${aprendiz.edad}</td></tr>
    `
    aprendizTable.appendChild(tbodyAprendiz);

}

function mostrarEstadisticas(aprendiz: Aprendiz): void{
    let numeroCertificados: number = aprendiz.darCursosCertificados();

    let trElement = document.createElement("tr");
    trElement.innerHTML = `
    <td><b>Cursos certificados</b></td>
    <td>${numeroCertificados}</td>
    `
    estadisticasTable.appendChild(trElement);

}

mostrarDatosAprendiz(ap);
mostrarEstadisticas(ap);