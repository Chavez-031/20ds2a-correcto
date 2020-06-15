function factorial(n){
    let f=1;


    for (i=1;i <=n; i++){
	f=f*i
}
return f;
}
function permutacion(n,r){
    let x;

    if(n==0){
	return 1;
    }else{

    x=factorial(n)/factorial(n-r)
    
    return x;

    }
}

console.log(permutacion(8,5))
