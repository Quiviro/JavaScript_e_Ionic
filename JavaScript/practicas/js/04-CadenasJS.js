// Crear un objeto para rellenar la tabla
var persona = {
    nombre: "Quiviro",
    apellidos : "Enquerre",
    telefono: 666999666,
    email: "correo@servidor.com",
  	anonacimiento: 1981,
  	edad: function() {
         return (2018 - persona.anonacimiento);
    }
  }
document.getElementById("demo0").innerHTML = persona.nombre;
document.getElementById("demo19").innerHTML = persona.apellidos;
document.getElementById("demo20").innerHTML = persona.telefono;
document.getElementById("demo21").innerHTML = persona.email;
document.getElementById("demo22").innerHTML = persona.anonacimiento;
document.getElementById("demo23").innerHTML = persona.edad ();


function iniciar()
{
	var frase = document.getElementById("frase").value;
	document.getElementById("mostrarFrase").innerHTML = frase;
}
function remplazar()
{
	var frase = document.getElementById("frase").value;
	var comillas = "\"" + frase + "\"";
	var fraseRemplazada = frase.replace(frase, comillas);
	document.getElementById("mostrarFrase").innerHTML = fraseRemplazada;
}
function mayusculas()
{
	var frase = document.getElementById("frase").value.toUpperCase();
	document.getElementById("mostrarFrase").innerHTML = frase;
}
function minusculas()
{
	var frase = document.getElementById("frase").value.toLowerCase();
	document.getElementById("mostrarFrase").innerHTML = frase;
}
function concatenar()
{
	var frase = document.getElementById("frase").value;
	var fraseCita = "\"Cita:\" " + frase;
	document.getElementById("mostrarFrase").innerHTML = fraseCita;
}


function mostrarPrimeraPalabra()
{
	var frasePalabra = document.getElementById("frasePalabra").value;
	// var primeraPalabra = frasePalabra.split(' '); 
	// para separar las palabras cuando encuentre un espacio
	var primerEspacio = frasePalabra.indexOf(" ");
	var primeraPalabra = "";
	if (primerEspacio >= 0) 
	{
		primeraPalabra = frasePalabra.substring(0, primerEspacio);
		document.getElementById("resultadoPalabra").innerHTML = primeraPalabra;
	}
	else
	{
		document.getElementById("resultadoPalabra").innerHTML = frasePalabra;
	}
}
function mostrarUltimaPalabra()
{
	var frasePalabra = document.getElementById("frasePalabra").value;
	var ultimoEspacio = frasePalabra.lastIndexOf(" ");
	var ultimaPalabra = "";
	if (ultimoEspacio >= 0) 
	{
		ultimaPalabra = frasePalabra.substring(ultimoEspacio);
		document.getElementById("resultadoPalabra").innerHTML = ultimaPalabra;
	}
	else
	{
		document.getElementById("resultadoPalabra").innerHTML = frasePalabra;
	}
}


function contarCaracteres()
{
	var fraseContarCaracteres = document.getElementById("contarCaracteres").value;
	var caracteres = fraseContarCaracteres.length;
	document.getElementById("resultadoContarCaracteres").innerHTML = caracteres + " caracteres.";
}


function sustituirEspacios()
{
	var fraseConEspacios = document.getElementById("contarvocales6").value;
	// espacio en blanco también se puede buscar /\s/g...
	var fraseConGuiones = fraseConEspacios.replace(/ /g, "-");
	document.getElementById("resultadoSustituirEspacios").innerHTML = fraseConGuiones;
}


function mostrarAlReves()
{
	var textoNormal = document.getElementById("contarvocales7").value;
	var textoDelReves = "";
	// lo convierto en array, invierto el orden, uno los valores sin separación
	// textoDelReves = textoNormal.split('').reverse().join('');
	for (var i = textoNormal.length; i >= 0; i--) {
		textoDelReves += textoNormal.charAt(i);
	}
	document.getElementById("resultadoMostrarAlReves").innerHTML = textoDelReves;
}


function convertirEntero()
{
	// MIS FUNCIONES NO REDONDEAN
	// ¿round?
	var numero = document.getElementById("contarvocales8").value;
	// numero.split('.');
	document.getElementById("resultadoConvertirNumero").innerHTML = parseInt(numero);
}
function convertirUnDecimal()
{
	var numero = document.getElementById("contarvocales8").value;
	document.getElementById("resultadoConvertirNumero").innerHTML = parseInt(numero).toFixed(1); 
}
function convertirDosDecimal()
{
	var numero = document.getElementById("contarvocales8").value;
	document.getElementById("resultadoConvertirNumero").innerHTML = parseInt(numero).toFixed(2); 
}
function convertirEuro()
{
	var numero = document.getElementById("contarvocales8").value;
	document.getElementById("resultadoConvertirNumero").innerHTML = parseInt(numero).toFixed(2) + " €"; 
}


function contarVocales()
{
	 var a = 'a', e = 'e', i = 'i', o = 'o', u = 'u';
	 var vocales = document.getElementById("contarvocales").value.toLowerCase();
	 var sumaVocales = 0;
	 for (var i = 0; i < vocales.length; i++) 
	 {
	 	if (vocales[i] == a || vocales[i] == e || vocales[i] == i || vocales[i] == o || vocales[i] == u ) 
	 	{
	 		sumaVocales++;
	 	}
	 }
	 //var patron = /[aeiou]/g;
	 document.getElementById("resultadoContarVocales").innerHTML = "En el texto hay " + sumaVocales + " vocales";
}


function contarConsonantes()
{
	var consonantes = document.getElementById("contarConsonantes").value.toLowerCase();
	var sumaConsonantes = 0;
	for (var i = 0; i < consonantes.length; i++) 
	{
		if (consonantes[i] > 'a' && consonantes[i] <= 'z' &&
			 consonantes[i] != 'e' && consonantes[i] != 'i' && consonantes[i] != 'o' && 
			 consonantes[i] != 'u' || consonantes[i] == 'ñ')
		{
			sumaConsonantes++;
		}
	}
	document.getElementById("resultadoContarConsonantes").innerHTML = "En el texto hay " + sumaConsonantes + " consonantes";
}










