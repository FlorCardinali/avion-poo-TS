class Turbina {
    private NTurb:number;
    public constructor(num:number){
        this.NTurb=num;
    }
     public ATexto():string{
        return this.NTurb + " turbina/s";
    }
}
class Cubierta {
    private CabinaDeTripulacion:boolean = false;
    private CabinaVuelo:boolean = false;
    private SistemaEmergencia:boolean = false;
    private NroTanquesCombustible:number =0;
    private CantPuertasSalida:number =0;

    public constructor(
    pCabinaDeTripulacion:boolean,
    pCabinaVuelo:boolean,
    pSistemaDeEmergencia:boolean,
    pNroTanquesCombustible:number,
    pCantPuertasSalida:number){
        this.CabinaDeTripulacion = pCabinaDeTripulacion;
        this.CabinaVuelo = pCabinaVuelo;
        this.SistemaEmergencia = pSistemaDeEmergencia;
        this.NroTanquesCombustible = pNroTanquesCombustible;
        this.CantPuertasSalida = pCantPuertasSalida;
    }

    public ATexto():string {
        let mensaje:string = "Cubierta Compuesta por: ";
        if (this.CabinaDeTripulacion) {
            mensaje += "Cabina de tripulacion,";
        }
        if (this.CabinaVuelo){
            mensaje += "Cubierta de vuelo, ";
        }
        if (this.SistemaEmergencia){
            mensaje += "Sistema de mergencia, ";
        }
        mensaje += this.NroTanquesCombustible + " Tanque se combustible, ";
        mensaje += this.CantPuertasSalida + " Puertas de Salida.";
    
        return mensaje;
    }
}
class Helice {
    private CantHelices:number=0;
    public constructor (numero:number){
        this.CantHelices=numero;
    }

    public ATexto ():string{
        return this.CantHelices + " Helice/s ";
    }
}

class Alas {
    private cantAlas:number= 0;
    public constructor(cantidad:number) {
        this.cantAlas= cantidad;
    }
    public ATexto():string{
        return this.cantAlas + " Ala/s.";
    }
}
class TrenDeAterrisaje {
    private cantNeumaticos:number=0;
    private diametroRuedas:number=0;

    public constructor(cant:number,diametro:number) {
        this.cantNeumaticos=cant;
        this.diametroRuedas= diametro;
    }
    public ATexto():string{
        return this.cantNeumaticos + " neumaticos de " + this.diametroRuedas + "cm de diametro";
    }
}

class Aeroplano {
    private helice:Helice;
    private trenDeAterrisaje:TrenDeAterrisaje;
    private alas:Alas;
    private cubierta:Cubierta;
    private turbina:Turbina;

    constructor(
        phelice:Helice,
        ptrenat:TrenDeAterrisaje, 
        palas:Alas, 
        pcubierta:Cubierta,
        pturbina:Turbina) 
    {
        this.helice=phelice;
        this.trenDeAterrisaje=ptrenat;
        this.alas=palas;
        this.cubierta=pcubierta;
        this.turbina=pturbina;
    }
    public ATexto (){
        let mensaje = "Aeroplano Compuesto por: ";
        mensaje+=this.helice.ATexto();
        mensaje+= this.trenDeAterrisaje.ATexto();
        mensaje+= this.alas.ATexto();
        mensaje+= this.cubierta.ATexto();
        mensaje+= this.turbina.ATexto();

        return mensaje;
    }
}

let heli = new Helice(3);
let tren = new TrenDeAterrisaje(4,80);
let ala = new Alas(2);
let cubi = new Cubierta(true,true,true,2,1);
let turbi = new Turbina(3);

let nuevoAvion = new Aeroplano(heli,tren,ala,cubi,turbi);
console.log(nuevoAvion.ATexto());
