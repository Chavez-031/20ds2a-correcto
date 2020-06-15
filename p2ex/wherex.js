let anArray= [2, 7, 3, 4, 5, 6];
let x=7;
let bandera=false, p=0;
let c=0;

for (let y of anArray){
    if(x===y){
	bandera=true
	console.log(p)
	c++;
    }
    p++;
}
if(bandera){
    console.log(c+' <--Encontrado')
}else{
    console.log('No encontrado')
}

