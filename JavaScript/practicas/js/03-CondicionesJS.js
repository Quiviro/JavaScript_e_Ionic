function multiplicar() 
{
	var numeroTabla = document.getElementById("numeroTabla").value;
	if (numeroTabla >= 1 && numeroTabla <= 10) 
	{
		var tabla = "<ul>";
		for (var i = 1; i <= 10; i++)
		{
			tabla += "<li>" + numeroTabla + " x " + i + " = " + numeroTabla * i + "</li>";
		}

		document.getElementById("mostrarTabla").innerHTML = tabla;
	}
}

function parImpar()
{
	var numero = document.getElementById("numeroParImpar").value;
	var par = "El número " + numero + " es par";
	var impar = "El número " + numero + " es impar"
	if (numero!=0) 
	{
		if (!(numero % 2)) 
		{
			document.getElementById("mostrarParImpar").innerHTML = par;
		} 
		else 
		{
			document.getElementById("mostrarParImpar").innerHTML = impar;
		}
	}
}

function primo()
{
	var numero = document.getElementById("numeroPrimo").value;
	var siPrimo = "El número " + numero + " es primo";
	var noPrimo = "El número " + numero + " no es primo";
	if (numero != 0)
	{
		var divisores = 0;
		for (var i = 1; i <= numero; i++) {
			if (numero % i == 0)
			{
				divisores++;
			}
		}
		// función para averiguar si un número es primo: ((n-1)! + 1) % n = 0
		// Un número n es primo si y solo si (n-1)! + 1 es múltiplo de n
		if (divisores <= 2)
		{
			document.getElementById("mostrarPrimo").innerHTML = siPrimo;
		}
		else
		{
			document.getElementById("mostrarPrimo").innerHTML = noPrimo;
		}
	}
}

function calcularEdad()
{
	var edad = parseInt(document.getElementById("edad").value);
	var categoria;
	if (edad >= 5 && edad <= 18) 
	{
		
		switch (edad)
		{
			case 5:
			case 6:
			case 7:
				categoria = "Prebenjamines";
				break;
			case 8:
			case 9:
				categoria = "Benjamines";
				break;
			case 10:
			case 11:
				categoria = "Alevines";
				break;
			case 12:
			case 13:
				categoria = "Infantiles";
				break;
			case 14:
			case 15:
				categoria = "Cadetes";
				break;
			case 16:
			case 17:
			case 18:
				categoria = "Juveniles";
				break;
			default:
				categoria = "Dedíquese a la petanca";
	
		}
		document.getElementById("mostrarEdad").innerHTML = categoria;
	}
}

function trimestre()
{
	var mes = document.getElementById("mes").value;
	var trimestre = 0;
	if (mes >=1 && mes <= 12) 
	{
		if (mes <= 3)
		{
			trimestre = 1;
		}
		else if (mes <= 6)
		{
			trimestre = 2;
		}
		else if (mes <= 9)
		{
			trimestre = 3;
		}
		else
		{
			trimestre = 4;
		}
		document.getElementById("mostrarTrimestre").innerHTML = "Está en el " + trimestre + "º trimestre";
	}
}

function zodiaco()
{
	var fecha = document.getElementById("fecha").value;
	var signo = "";
	var dia = parseInt(fecha.substr(8,2));
	var mes = parseInt(fecha.substr(5,2));
	var anyo = parseInt(fecha.substr(0,4));
	if (mes == 1)
	{
		if (dia <= 19) signo = "Capricornio";
		else signo = "Acuario";
	}
	else if (mes == 2)
	{
		if (dia <= 19) signo = "Acuario";
		else signo = "Piscis";
	}	
	else if (mes == 3)
	{
		if (dia <= 20) signo = "Piscis";
		else signo = "Aries";
	}	
	else if (mes == 4)
	{
		if (dia <= 19) signo = "Aries";
		else signo == "Tauro";
	}	
	else if (mes == 5)
	{
		if (dia <= 20) signo = "Tauro";
		else signo = "Géminis";
	}	
	else if (mes == 6)
	{
		if (dia <= 20) signo = "Géminis";
		else signo = "Cáncer";
	}	
	else if (mes == 7)
	{
		if (dia <= 22) signo = "Cáncer";
		else signo = "Leo";
	}	
	else if (mes == 8)
	{
		if (dia <= 22) signo = "Leo";
		else signo = "Virgo";
	}	
	else if (mes == 9)
	{
		if (dia <= 22) signo = "Virgo";
		else signo = "Libra";
	}	
	else if (mes == 10)
	{
		if (dia <= 22) signo = "Libra";
		else signo == "Escorpio";
	}	
	else if (mes == 11)
	{
		if (dia <= 21) signo = "Escorpio";
		else signo = "Sagitario";
	}	
	else if (mes == 12)
	{
		if (dia <= 21) signo = "Sagitario";
		else signo = "Capricornio";
	}
	else
	{
		signo = "ERROR";
	}
	document.getElementById("mostrarZodiaco").innerHTML = "Su signo es " + signo + ".";
}

function codigoPostal()
{
	// jQuery: $('#codigo').val()
	var codigo = document.getElementById("codigo").value;
	var provincia = "";
	var codigoProvincia = parseInt(codigo.substr(0,2));
	// falta comprobar que los valores son correctos, entre 01001 y 52999
	if (codigo.length == 5 ) 
	{	
		switch (codigoProvincia)
		{
			case 2:
				provincia = "Albacete";
				break;
			case 8:
				provincia = "Barcelona";
				break;
			case 12:
				provincia = "Castellón";
				break;
			case 19:
				provincia = "Guadalajara";
				break;
			case 28:
				provincia = "Madrid";
				break;
			case 29:
				provincia = "Málaga";
				break;
			case 50:
				provincia = "Zaragoza";
				break;
			default:
				provincia = "Otra";
		}
		document.getElementById("mostrarCodigoPostal").innerHTML = "Su provincia es " + provincia + ".";
	}
}

function diaSemana()
{
	var diaSemana = parseInt(document.getElementById("diaSemana").value);
	var diaSemanaNombre = "";
	if (diaSemana >= 1 && diaSemana <= 7) 
	{
		switch (diaSemana)
		{
			case 1:
				diaSemanaNombre = "Lunes";
				break;
			case 2:
				diaSemanaNombre = "Martes";
				break;
			case 3:
				diaSemanaNombre = "Miércoles";
				break;
			case 4:
				diaSemanaNombre = "Jueves";
				break;
			case 5:
				diaSemanaNombre = "Viernes";
				break;
			case 6:
				diaSemanaNombre = "Sábado";
				break;
			case 7:
				diaSemanaNombre = "Domingo";
				break;
			default:
				diaSemanaNombre = "ERROR";
		}
		document.getElementById("mostrarDiaSemana").innerHTML = "El día elegido es " + diaSemanaNombre + ".";
	}
}

function tipoIdentificacion()
{
	if (document.getElementById("dni").checked)
	{
		document.getElementById("botonesNie").style.display = "none";
		document.getElementById("botonesDni").style.display = "block";
	}
	else if (document.getElementById("nie").checked)
	{
		document.getElementById("botonesDni").style.display = "none";
		document.getElementById("botonesNie").style.display = "block";
	}
}

// método para la clase String que indica si la cadena se corresponde con un nif válido o no. 7 u 8 cifras y letra mayúscula
// String.prototype.isNif=function()
// {
//    return /^(\d{7,8})([A-HJ-NP-TV-Z])$/.test(this) && ("TRWAGMYFPDXBNJZSQVHLCKE"[(RegExp.$1%23)]==RegExp.$2);
// };
function validarDni()
{
	var numeroDni = document.getElementById("numeroDni").value;
	var letraDni = document.getElementById("letraDni").value.toUpperCase();
	var letraDniValida = "";
	switch (numeroDni % 23)
	{
		case 0:
			letraDniValida = "T";
			break;
		case 1:
			letraDniValida = "R";
			break;
		case 2:
			letraDniValida = "W";
			break;
		case 3:
			letraDniValida = "A";
			break;
		case 4:
			letraDniValida = "G";
			break;
		case 5:
			letraDniValida = "M";
			break;
		case 6:
			letraDniValida = "Y";
			break;
		case 7:
			letraDniValida = "F";
			break;
		case 8:
			letraDniValida = "P";
			break;
		case 9:
			letraDniValida = "D";
			break;
		case 10:
			letraDniValida = "X";
			break;
		case 11:
			letraDniValida = "B";
			break;
		case 12:
			letraDniValida = "N";
			break;
		case 13:
			letraDniValida = "J";
			break;
		case 14:
			letraDniValida = "Z";
			break;
		case 15:
			letraDniValida = "S";
			break;
		case 16:
			letraDniValida = "Q";
			break;
		case 17:
			letraDniValida = "V";
			break;
		case 18:
			letraDniValida = "H";
			break;
		case 19:
			letraDniValida = "L";
			break;
		case 20:
			letraDniValida = "C";
			break;
		case 21:
			letraDniValida = "K";
			break;
		case 22:
			letraDniValida = "E";
			break;
		default:
			letraDniValida = "ERROR";
	}
	if (letraDni == letraDniValida) 
	{
		document.getElementById("mostrarValidacion").innerHTML = "Número y letra correctos";
	}
	else
	{
		document.getElementById("mostrarValidacion").innerHTML = "El número y la letra no coinciden";
	}
}

function horaDelDia()
{
	/*
	si en el HTML usamos type="time"...
	var hora = document.getElementById('horaDia').value;
	···.innerhtml = hora.slice(0, 2):
	*/
	var horaDia = parseInt(document.getElementById("horaDia").value);
	var franja = "";
	if (horaDia >= 0 && horaDia < 6) 
	{
		franja = "Madrugada";
	} 
	else if (horaDia < 12)
	{
		franja = "Mañana";
	}
	else if ( horaDia < 18 )
	{
		franja = "Tarde";
	}
	else if ( horaDia < 24 )
	{
		franja = "Noche";
	}
	else 
	{
		franja = "Error: el día solo tiene 24 horas";
	}
	document.getElementById("mostrarHoraDelDia").innerHTML = franja;
}













