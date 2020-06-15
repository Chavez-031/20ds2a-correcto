let anArray= [2, 7, 3, 4, 5, 6];
let x=7;
let bandera=false;

for (let y of anArray){
    if(x===y){
	bandera=true

	break;
    }
    
}
if(bandera){
    console.log('<--Encontrado')
}else{
    console.log('No encontrado')
}



