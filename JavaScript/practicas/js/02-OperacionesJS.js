var litros = 350;
var centilitros = litros * 100;
document.getElementById("centilitros").innerHTML= "¿Cuánto es " + litros + " litros en centilitros? " + centilitros + " centilitros.";

var km = 5.3;
document.getElementById("kilometros").innerHTML= "¿Cuántos metros son " + km + " kilómetros?";
var metros = km * 1000;
document.getElementById("metros").innerHTML= metros + " metros.";

var dias = 5;
var minutos = dias * 24 * 60;
document.getElementById("minutos").innerHTML= "¿Cuántos minutos hay en " + dias +" días? " + minutos + " minutos.";

var megabytes = 4096;
var gygabytes = megabytes / 1024;
var kilobytes = megabytes * 1024;
document.getElementById("gygabytes").innerHTML= "¿Cuántos son " + megabytes + " megabytes en gigabytes y kilobytes? " + gygabytes + " gygabytes y " + kilobytes + " kilobytes.";

var pulgadas = 56;
var centimetros = pulgadas * 2.54;
document.getElementById("centimetros").innerHTML= "¿Cuántos centímetros son " + pulgadas + " pulgadas? " + centimetros + " centímetros.";

var dia = 1;
var diaHoras = dia * 24;
document.getElementById("diaHoras").innerHTML= dia + " día tiene " + diaHoras + " horas, ";
var diaMinutos = diaHoras * 60;
document.getElementById("diaMinutos").innerHTML= diaMinutos + " minutos y ";
var diaSegundos = diaMinutos * 60;
document.getElementById("diaSegundos").innerHTML= diaSegundos + " segundos.";

var valor = 50;
document.getElementById("valor").innerHTML= "Calcula el precio final de un producto con valor " + valor + " €";
var descuento = 20;
document.getElementById("descuento").innerHTML= " - " + descuento + " % ";
var iva = 21;
document.getElementById("iva").innerHTML= "+ IVA (" + iva + "% ) ";
var precioFinal = ( valor * ( 1 - descuento / 100 ) ) * ( 1 + iva / 100 );
document.getElementById("precioFinal").innerHTML= "= " + precioFinal + " €";

var anyo = 2018;
document.getElementById("anyo").innerHTML= "El año actual es " + anyo + ", ";
var anyoAnt = anyo - 1;
document.getElementById("anyoAnt").innerHTML="el año anterior fue " + anyoAnt;
var anyoSig = anyo + 1;
document.getElementById("anyoSig").innerHTML=" y el año siguiente será " + anyoSig + ".";

var anyoComp = 1;
document.getElementById("anyoComp").innerHTML= anyoComp + " año completo tiene ";
var anyoDias = anyoComp * 365;
document.getElementById("anyoDias").innerHTML= anyoDias + " días, ";
var anyoSemanas = parseInt(anyoDias/7);
document.getElementById("anyoSemanas").innerHTML= anyoSemanas + " semanas y ";
var anyoTrimestres = anyoComp * 4;

var cocheVel = 120;
document.getElementById("cocheVel").innerHTML= "Si un coche circula a " + cocheVel + " km/h, ";
var cocheKm = 375;
document.getElementById("cocheKm").innerHTML= "¿cuántos minutos tarda en recorrer " + cocheKm + " km?";
var cocheHoras = cocheKm / cocheVel;
var cocheMinutos = cocheHoras * 60;
document.getElementById("cocheTiempo").innerHTML= cocheMinutos + " minutos (" + cocheHoras + " horas).";


function centilitros2() {
	var numeroLitros = document.getElementById("numeroLitros").value;
	if (numeroLitros > 0) 
	{
		document.getElementById("centilitros2").innerHTML = numeroLitros * 100;
	}
}

