// cuando se carga la página, ejecuta
//window.onload = init;

// este método es un poco más moderno
window.addEventListener('load',init);
// window.addEventListener('load',function(){
// aquí el código que queremos
// });

function init() 
{
	// QUIERO METER TODO EL CÓDIGO DENTRO DEL INIT, PARA CARGAR PRIMERO EL HTML
	// aquí, dentro del init, me aseguro que la página se ha cargado correctamente

	// document = objeto
	// getElementById = método
	var miboton = document.getElementById("miboton");
	miboton.style.width = "300px";
	miboton.style.background = "red";
	// miboton.focus();

	// no quiero que se ejecute sin pulsar el botón
	document.getElementById("miboton").onclick = function() {miFuncion()};
	function miFuncion()
	{
		document.getElementById("miboton").style.color = '#fff';
	}


	// función sin parámetros ni valor de retorno
	// function muestraFecha()
	// {
	// 	var fecha = new Date();
	// 	console.log("La fecha actual es " + fecha);
	// }

	// esta función recibe parámetros pero no devuelve nada
	// var dato1 = parseInt(prompt("Primer operando:"));
	// var dato2 = parseInt(prompt("Segundo operando:"));
	// suma(dato1, dato2);
	// function suma(n1, n2)
	// {
	// 	alert(n1 + " + " + n2);
	// }

	//esta función recibe parámetros y devuelve un valor
	var dimeOperacion = prompt("Indique operación que quiere realizar");
	var dato1 = parseInt(prompt("Primer operando:"));
	var dato2 = parseInt(prompt("Segundo operando:"));
	operacion (dimeOperacion);
	function operacion(operacion, n1, n2)
	{
		var dato;
		switch(operacion)
		{
			case 'sumar':
				dato = sumar(n1,n2);
				break;
			case 'restar':
				dato = restar(n1,n2);
				break;
			case 'multiplicar':
				dato = multiplicar(n1,n2);
				break; 
			case 'dividir':
				dato = dividir(n1,n2);
				break;
			default:
				return 'ERROR';
		}	
		return dato;
	}
	function sumar(n1, n2)
	{
		return n1 + n2;
	}
	function multiplicar(n1, n2)
	{
		return n1 * n2;
	}
	function restar(n1, n2)
	{
		return n1 - n2;
	}
	function dividir(n1, n2)
	{
		return n1 / n2;
	}

	document.getElementById("mostrarOperacion").innerHTML = dimeOperacion + " (" 
		+ dato1 + ", " + dato2 + "): " + operacion(dimeOperacion, dato1, dato2);


	
	class Peliculas
	{
		// constructor de clase con 3 parámetros
		constructor (idBBDD, titulo, tematica)
		{
			this.idBBDD = idBBDD;
			this.titulo = titulo;
			this.tematica = tematica;
		}
		// método de la clase
		reproducir ()
		{
			return 'Reproduciendo película "' + this.titulo + '"';
		}
		// otro método
		setTime(tiempo)
		{
			return 'Has fijado un tiempo de ' + tiempo + ' minutos para "'+ this.titulo + '"' ;
		}
	}
	// creo los objetos, instancias de esa clase
	var pelicula1 = new Peliculas (1, 'Bourne', 'ficción');
	var pelicula2 = new Peliculas (2, 'Monstruos S.A.', 'dibujos');

	console.log(pelicula1);
	console.log(pelicula2.reproducir());
	console.log(pelicula2.setTime(120));

	// HERENCIA
	class Series extends Peliculas
	{
		constructor(idBBDD, titulo, tematica, capitulo)
		{
			// utiliza el constructor del que hereda en estos parámetros
			super(idBBDD, titulo, tematica);
			this.capitulo = capitulo;
		}
		reproducirSerie()
		{
			return 'Estás reproduciendo la serie ' + this.titulo + '. Tiene ' + this.capitulo + ' capítulos.';
		}

	}
	var serie1 = new Series(1,'La casa de papel', 'Ficción', 10);

	console.log(serie1);
	console.log(serie1.reproducirSerie());





	class Persona
	{
		constructor(idBBDD, nombre, apellidos, direccion)
		{
			this.idBBDD = idBBDD;
			this.nombre = nombre;
			this.apellidos = apellidos;
			this.direccion = direccion;
		}
		mostrarDatos()
		{
			return "Nombre: " + this.nombre + "\nApellidos: " + this.apellidos + 
			"\nDirección: " + this.direccion;
		}
	}
	var persona1 = new Persona (
		1, 
		"Quiviro", 
		"Enquerre", 
		"En todas partes y en ninguna"
		);
	// puedo cambiar un valor
	persona1.direccion = "La oscuridad";
	console.log(persona1.mostrarDatos());


	class Empleado extends Persona
	{
		constructor(idBBDD, nombre, apellidos, direccion, departamento, salario)
		{
			super(idBBDD, nombre, apellidos, direccion);
			this.departamento = departamento;
			this.salario = salario;
		}
		mostrarDatos()
		{
			return "Nombre: " + this.nombre + "\nApellidos: " + this.apellidos + 
			"\nDirección: " + this.direccion + "\nDepartamento: " + this.departamento + 
			"\nSalario: " + this.salario ;
		}
		mostrarDatosHTML()
		{
			return "Nombre: " + this.nombre + "<br>Apellidos: " + this.apellidos + 
			"<br>Dirección: " + this.direccion + "<br>Departamento: " + this.departamento + 
			"<br>Salario: " + this.salario ;
		}
	}
	var empleado1 = new Empleado (
		1, 
		"Quiviro", 
		"Enquerre", 
		"En todas partes y en ninguna", 
		"Desidia", 
		"1 alma"
		);
	console.log(empleado1.mostrarDatos());

	document.getElementById("mostrarMiNombre").innerHTML = persona1.nombre;
	document.getElementById("mostrarDatosEmpleado").innerHTML = 
	empleado1.mostrarDatosHTML();

} //fin init











