function getRandom(min, max){
    var array=[];
    for(let i=0; i<999; i++){
	    let random=parseInt(Math.random()*(max-min)+min);

	if(random===0){

	    array[i]=random;
	    console.log( "este es un :"+ array[i]+"en posicion" +i);
	}

    }
 
}

    getRandom(1,6);


