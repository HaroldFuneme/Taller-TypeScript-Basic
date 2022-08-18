export var NivelEducativo;
(function (NivelEducativo) {
    NivelEducativo["BACHILLER"] = "Bachillerato";
    NivelEducativo["UNIVERSIDAD"] = "Universitario";
    NivelEducativo["POSTGRADO"] = "Postgradpo";
})(NivelEducativo || (NivelEducativo = {}));
var Aprendiz = /** @class */ (function () {
    function Aprendiz(nombre, apellido, avatar, edad, nivelEducativo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.avatar = avatar;
        this.edad = edad;
        this.nivelEducativo = nivelEducativo;
    }
    return Aprendiz;
}());
export { Aprendiz };
