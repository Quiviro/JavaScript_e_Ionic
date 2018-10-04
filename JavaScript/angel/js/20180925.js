
window.addEventListener('load', init);

function init (){
	document.getElementById('boton1').onclick=muestraFecha;
	var dimeOperacion = prompt ('Indique operación que quiere realizar');	
	operacion (dimeOperacion);

	var coche = {color:'rojo',marca:'seat',modelo:'ibiza',potencia:100};
 		for (var clave in coche){
 			document.write(clave + ' : ' + coche[clave] + ' ');
 		}
/* --------------- EJERCICIO CON FUNCIONES ------*/
 		function operacion (operacion){
			var n1 = parseInt(prompt ('Dime primer operando'));
			var n2 = parseInt(prompt ('Dime 2o operando'));

			switch(operacion){
				case 'suma': 
					var dato = suma(n1, n2);
					document.getElementById('resultado').innerHTML = 'la ' + operacion + ' da de resultado ' +dato;
					break;
				case 'resta': 
					resta(n1, n2);
					break;
				case 'division': 
					var dato = divide(n1, n2);
					document.getElementById('resultado').innerHTML = 'la ' + operacion + ' da de resultado ' +dato;
					break;
				case 'multiplicacion': 
					multiplica(n1, n2);
					break;
			}

		}

		function divide(n1,n2){
			var resultado = n1/n2;
			return resultado;
		}

		function suma(n1,n2){
			var resultado = n1+n2;
			return resultado;
		}

		function multiplica(n1,n2){
			var dato = n1*n2;
			document.getElementById('resultado').innerHTML = 'la  multiplicación da de resultado ' +dato;

		}
		function resta(n1,n2){
			var dato = n1-n2;
			document.getElementById('resultado').innerHTML = 'la  resta da de resultado ' +dato;

		}
 /* ------- FIN DE CALCULADORA -------------------*/

 /* ------- FUNCIÓN BÁSICA ---------*/
		function muestraFecha(){
			var fecha = new Date();

			document.write ('la fecha actual es ' + fecha.toDateString());

		}

/* -------- CREACIÓN DE OBJETOS POO Y HERENCIA --------------*/
		class Peliculas {

			constructor (idBBDD, titulo, tematica){
				this.idBBDD= idBBDD;
				this.titulo = titulo;
				this.tematica = tematica;
			}

			reproducir (){
				return 'reproduciendo película ' + this.titulo;
			}

			setTime (tiempo){
				return 'has fijado un timepo de ' + tiempo + ' para pelicula ' +this.titulo ;
			}

		}

		class Series extends Peliculas {

			constructor (ibBBDD, titulo, tematica, capitulo){
				super(ibBBDD, titulo, tematica);
				this.capitulo = capitulo;
			}
			reproducirSerie() {
				return 'estás reproduciendo la serie' + this.titulo + ' tiene ' + this.capitulo + 'capitulos' ;
			}
		}


	var pelicula1 = new Peliculas (1,'Bourne', 'ficción');
	var pelicula2 = new Peliculas (2, 'mostruos s.a','dibujos');
	var serie1 = new Series (1, 'la casa papel', 'ficcion', 10);
 /* ------- FIN DE CREACIÓN DE OBJETOS Y HERENCIA ---- */ 
	console.log(pelicula1);
	console.log(pelicula2);

	console.log(pelicula1.reproducir());
	console.log(serie1.reproducirSerie());
	console.log(pelicula2.setTime(120));

} // fin función init

