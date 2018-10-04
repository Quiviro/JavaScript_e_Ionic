
var url = 'https://mindicador.cl/api/dolar';

	$.ajax({
	type: 'GET',
  	url: 'js/fichero.json',
  	dataType:'json',
  	success: function (data){
  		cargaDatos(data);		
  	},
});


function cargaDatos(informa){
	console.log('pinto la info de la web ');

	//$('tabla').append('<tr><td>'+ informa.fecha+ '</td></tr>')
	//console.log( informa);
	console.log(informa);
}
//window.onload = datos;

// function pinta(n1,n2){
//  document.write('hola ' + nombre);
// }

// function datos (){

// var url = 'https://mindicador.cl/api/dolar';

// 	$.ajax({

// 	type: 'GET',
//   	url: 'js/fichero.json',
//   	dataType:'json',
//   	success: function (data){
//   		cargaDatos(data);		
//   	},
// });


// function cargaDatos(informa){
// 	console.log('pinto la info de la web ');

// 	//$('tabla').append('<tr><td>'+ informa.fecha+ '</td></tr>')
// 	//console.log( informa);
// 	console.log(informa.autor);
// }

// this.empresa = 'Cruzado';
// this.direccion = 'Getafe';
// this.metodo = function (){
// 	 return 'bienvenido a empresa '+ this.empresa;
// };


	// Object.prototype.funcion = function (){
	// 		console.log('Hola '+ this.nombre + ' tu puesto es '+ this.puesto + '<br>');	
	// }
	// String.prototype.texto = function (){
	// 	console.log('he creado una funcion');
	// }

	 // var datos = {
	 // 	Empresa:'Cruzado',
	 // 	direccion: 'Getafe',
	 // 	metodo: function (){
	 // 		console.log('bienvenido a empresa ' + datos.Empresa);
	 // 	}
	 // }

	 // var pepe = Object.create(datos);
	 // pepe.nombre = 'Pepe';
	 // pepe.salario = 15000;

	// var juan = Object.create(datos);
	// juan.salario = 20000;

	// var andres = {coche: 'Seat'};

	// console.log('El trabajar'+ pepe.nombre + ' pertenece a la empresa '+pepe.Empresa);

	// console.log(juan);
	// console.log(pepe);
	// console.log(andres);
	// console.log(datos.isPrototypeOf(pepe));
	// console.log(datos.isPrototypeOf(andres));
	// pepe.metodo();

	//var saluda = 'hola';

	//saluda.texto();
	//pepe.funcion();
	// juan.funcion();
	// juan.texto();
	// saluda.texto();
	// saluda.funcion();
	//console.log(pepe.texto());
	//console.log(pepe.funcion());
//}

// var obj = new datos();

// obj.salario = 10000;
// console.log(obj);

// var obj1 = new datos();
// obj1.nombre = 'Juan';
// obj1.empresa = 'Jimenez';

// console.log(obj1);
// console.log(obj);
// var obj2 = new datos();
// console.log(obj2.metodo());

/*
var pinta = (n1,n2) => {return  'Hola ' + n1 + ' ' + n2 + '<br>';} 

var suma = (n3,n4) => { 
	var n5= 20;
	return 'Hola '+ (n3+n4+n5);
};
var n1= 'Juan';
var n2 = 'Pepe';

document.getElementById('resultado').innerHTML += pinta(n1,n2);
document.getElementById('resultado2').innerHTML += suma(10,20);



/*
function operacion(){
	var valor =0;
	var incremento = function (){
		return valor += 2;
	}

	valor = 5;
	return incremento;
}

var ejecuta = operacion();
document.write(ejecuta()+ '<br>');
document.write(ejecuta()+ '<br>');
document.write(ejecuta()+ '<br>');



function makeSizer(size) {

  return function() {
    document.body.style.fontSize = size + 'px';
  };
}

	var size12 = makeSizer(12);
	var size14 = makeSizer(18);
	var size16 = makeSizer(24);

document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
document.getElementById('size-16').onclick = size16;
	



function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  };
}

var size12 = makeSizer(12);
var size14 = makeSizer(18);
var size16 = makeSizer(24);

document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
document.getElementById('size-16').onclick = size16;


var inicio = function (){
	var valor = 0;
	function operacion (num){
		valor += num;
	}
	valor = 5;
	return {
		suma: function (){
			operacion(3);
		},
		resta: function (){
			operacion(-1)
		},
		pintaValor: function (){
			return valor;
		}
	}
}
var obj = inicio();
//obj.operacion();
obj.suma();
document.write(obj.pintaValor()+ '<br>');
obj.resta();
document.write(obj.pintaValor()+ '<br>');
obj.suma();
document.write(obj.pintaValor()+ '<br>');
obj.suma();
document.write(obj.pintaValor()+ '<br>');
*/

