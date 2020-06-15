function getRandom(min, max){

    for(let i=0; i<10; i++){
	console.log(parseInt(Math.random()*(max-min)+min));
    }
 
}

getRandom(1,10);

