function aleatorios(min, max) {
  return parseInt(Math.random() * (max - min)) + min;
}

//console.log(aleatorios(1,10))

function num(n) {
  let vector=[]

  for (var i= 1;i<= n; i++) {    
      vector.push(aleatorios(1,10));
  }
  vector.sort();
  return vector
  
}

console.log(num(10));