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
let cursosTable: HTMLElement = document.getElementById("cursos")!;
let btnFilter: HTMLElement = document.getElementById("boton-filtro")!;
//let btnFilterFormaLamda: HTMLElement = document.getElementById("boton-filtro-Skip!!")!;
let textoBusqueda: HTMLInputElement = <HTMLInputElement> document.getElementById("texto-busqueda")!;


// btnFilterFormaLamda.onclick = () =>{
//     let text: string =  textoBusqueda.value;
//     text =  (text == null)? "": text;
//     cursosTable.getElementsByTagName("tbody")[0].remove();
//     let cursosFiltrados: Curso[] = ap.cursos.filter(function(c){return c.nombre.match(text)})
//     mostrarCursosAprendiz(cursosFiltrados);
// };

btnFilter.onclick = filtrarPorNombre;


function filtrarPorNombre(): void{
    let text: string =  textoBusqueda.value;
    text =  (text == null)? "": text;
    cursosTable.getElementsByTagName("tbody")[0].remove();
    let cursosFiltrados: Curso[] = ap.cursos.filter(function(c){return c.nombre.match(text)})

    mostrarCursosAprendiz(cursosFiltrados);

}

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

function mostrarCursosAprendiz(cursos: Curso[]): void{
    let cursosTbody = document.createElement("tbody");
    let index: number = 0;

    let estado: string[] = cursos.map(c => (c.horas > 60)? 'green': 'red');
   for (let curso of cursos) {
    let trElement: HTMLElement = document.createElement("tr");
    trElement.innerHTML = 
    `
    <td>${curso.nombre}</td>
    <td>${curso.calificaciion}</td>
    <td style= "color: ${estado[index]}">${curso.horas}</td>
    <td>${curso.anio}</td>
    `
    cursosTbody.appendChild(trElement);
    index++;
   }
   cursosTable.appendChild(cursosTbody);

}

mostrarDatosAprendiz(ap);
mostrarEstadisticas(ap);
mostrarCursosAprendiz(ap.cursos);