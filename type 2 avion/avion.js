var Turbina = /** @class */ (function () {
    function Turbina(num) {
        this.NTurb = num;
    }
    Turbina.prototype.ATexto = function () {
        return this.NTurb + " turbina/s";
    };
    return Turbina;
}());
var Cubierta = /** @class */ (function () {
    function Cubierta(pCabinaDeTripulacion, pCabinaVuelo, pSistemaDeEmergencia, pNroTanquesCombustible, pCantPuertasSalida) {
        this.CabinaDeTripulacion = false;
        this.CabinaVuelo = false;
        this.SistemaEmergencia = false;
        this.NroTanquesCombustible = 0;
        this.CantPuertasSalida = 0;
        this.CabinaDeTripulacion = pCabinaDeTripulacion;
        this.CabinaVuelo = pCabinaVuelo;
        this.SistemaEmergencia = pSistemaDeEmergencia;
        this.NroTanquesCombustible = pNroTanquesCombustible;
        this.CantPuertasSalida = pCantPuertasSalida;
    }
    Cubierta.prototype.ATexto = function () {
        var mensaje = "Cubierta Compuesta por: ";
        if (this.CabinaDeTripulacion) {
            mensaje += "Cabina de tripulacion,";
        }
        if (this.CabinaVuelo) {
            mensaje += "Cubierta de vuelo, ";
        }
        if (this.SistemaEmergencia) {
            mensaje += "Sistema de mergencia, ";
        }
        mensaje += this.NroTanquesCombustible + " Tanque se combustible, ";
        mensaje += this.CantPuertasSalida + " Puertas de Salida.";
        return mensaje;
    };
    return Cubierta;
}());
var Helice = /** @class */ (function () {
    function Helice(numero) {
        this.CantHelices = 0;
        this.CantHelices = numero;
    }
    Helice.prototype.ATexto = function () {
        return this.CantHelices + " Helice/s ";
    };
    return Helice;
}());
var Alas = /** @class */ (function () {
    function Alas(cantidad) {
        this.cantAlas = 0;
        this.cantAlas = cantidad;
    }
    Alas.prototype.ATexto = function () {
        return this.cantAlas + " Ala/s.";
    };
    return Alas;
}());
var TrenDeAterrisaje = /** @class */ (function () {
    function TrenDeAterrisaje(cant, diametro) {
        this.cantNeumaticos = 0;
        this.diametroRuedas = 0;
        this.cantNeumaticos = cant;
        this.diametroRuedas = diametro;
    }
    TrenDeAterrisaje.prototype.ATexto = function () {
        return this.cantNeumaticos + " neumaticos de " + this.diametroRuedas + "cm de diametro";
    };
    return TrenDeAterrisaje;
}());
var Aeroplano = /** @class */ (function () {
    function Aeroplano(phelice, ptrenat, palas, pcubierta, pturbina) {
        this.helice = phelice;
        this.trenDeAterrisaje = ptrenat;
        this.alas = palas;
        this.cubierta = pcubierta;
        this.turbina = pturbina;
    }
    Aeroplano.prototype.ATexto = function () {
        var mensaje = "Aeroplano Compuesto por: ";
        mensaje += this.helice.ATexto();
        mensaje += this.trenDeAterrisaje.ATexto();
        mensaje += this.alas.ATexto();
        mensaje += this.cubierta.ATexto();
        mensaje += this.turbina.ATexto();
        return mensaje;
    };
    return Aeroplano;
}());
var heli = new Helice(3);
var tren = new TrenDeAterrisaje(4, 80);
var ala = new Alas(2);
var cubi = new Cubierta(true, true, true, 2, 1);
var turbi = new Turbina(3);
var nuevoAvion = new Aeroplano(heli, tren, ala, cubi, turbi);
console.log(nuevoAvion.ATexto());
