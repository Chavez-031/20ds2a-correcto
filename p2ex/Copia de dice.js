function getRandom(min, max){
    var array=[];
    for(let i=0; i<10; i++){
	array[i]=(parseInt(Math.random()*(max-min)+min));
	console.log(array[i])
    }
 
}

getRandom(1,6);


