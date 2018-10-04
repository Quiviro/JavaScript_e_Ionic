

function backLlamadaSuma(resultado){
	console.log(resultado);
	multiplicar(resultado, backMultiplicar);
}

function backMultiplicar (n1){
	console.log(n1);
	restar (n1,4, backResta)
}

function backResta (n1){
	console.log(n1);
	cuadrado(n1, backCuadrado);
}

function backCuadrado (n1){
 	console.log(n1);
 	dividir(n1, backDividir);
}

function backDividir (n1){
	console.log(n1);
	par(n1, backPar);
}

function backPar (n1){
	if(n1==0){
		console.log('es par');
	}else{
		console.log('es impar');
	}
}
