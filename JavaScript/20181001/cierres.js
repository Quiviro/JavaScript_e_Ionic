window.addEventListener("load", init);

function init()
{

	/*
	// esta es la estructura de una función closure
	function pinta()
	{
		var nombre;
		var info = function dime()
		{
			nombre = "Pedro";
		}
		return nombre;
	}
	
	function operacion()
	{
		var valor = 0;
		var incremento = function()
		{
			return valor += 2;
		}
		return incremento;
	}
	var ejecuta = operacion();
	document.getElementById("resultado").innerHTML = ejecuta();
	document.getElementById("resultado").innerHTML = ejecuta();
	// aunque en la función inicializo a 0, el resultado se acumula
	document.getElementById("resultado").innerHTML = ejecuta();
	*/

	var inicio = function()
	{
		var valor = 0;
		function operacion(num)
		{
			valor += num;
		}
		return {
			suma: function()
			{
				operacion(4);
			},
			pintaValor: function ()
			{
				return valor;
			}
		}
	}
	var obj = inicio();
	document.getElementById("cierre").onclick = function(){mostrar(), saludame()};
	// como las funciones están incluidas dentro del "return" puedo referenciarlas
	obj.suma();
	console.log(obj.pintaValor());
	function mostrar()
	{
		obj.suma();
		console.log(obj.pintaValor());
	}


	// funciones flecha =>
	function saludame()
	{
		var pinta = nombre => "Hola " + nombre;
		console.log(pinta("Pablo"));
		console.log(pinta("Fernanda"));
		var saluda = (n1, n2) => {return "Buen día, " + n1 + "<br>Buen día, " + n2};
		document.getElementById("resultado").innerHTML = saluda("Pablo", "Fernanda");
	}


	// objetos, prototipos...
	// ojo con las buenas o malas prácticas
	Object.prototype.funcion = function()
	{
		console.log("Hola " + this.nombre + ". Tu puesto es " + this.puesto);
	}
	String.prototype.texto = function()
	{
		console.log("He creado una función");
	}
	var pepe = 
	{
		nombre: "Pepe",
		apellido: "Jiménez",
		puesto: "Admin"
		/*
		,
		funcion: function()
		{
			console.log("Hola " + this.nombre + ". Tu puesto es " + this.puesto);
		}
		*/
	}
	var juan =
	{
		nombre: "Juan",
		apellido: "Gómez",
		puesto: "Developer"
	}
	var saluda = "Hola";
	pepe.funcion();
	juan.funcion();
	saluda.texto();

	// var datos = 
	// {
	// 	Empresa: "Cruzado",
	// 	Direccion: "Getafe",
	// 	metodo: function ()
	// 	{
	// 		console.log("Bienvenido a empresa " + this.empresa);
	// 	}
	// }
	var pepe = Object.create(datos);
	pepe.nombre = "Pepe";
	pepe.salario = 14500;
	var juan = Object.create(datos);
	juan.salario = 17000;
	console.log(pepe);
	console.log(juan);
	console.log(datos.isPrototypeOf(pepe));

	console.log("Ahora creamos un objeto mediante la sintaxis \"new\".\nSerán simples copias, no es muy recomendable");
	function datos()
	{
		this.empresa = "Cruzado";
		this.direccion = "Getafe";
		this.metodo = function ()
		{
			console.log("Bienvenido a empresa " + this.empresa);
		}
	}
	var obj = new datos();
	obj.salario = 10000;
	console.log(obj);

} // fin escuchador de carga inicial