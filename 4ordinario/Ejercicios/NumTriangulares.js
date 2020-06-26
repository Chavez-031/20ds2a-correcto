function triangulares(num) {
    let vector = []

    for (var i= 1;i<= num; i++) {    
        vector.push(i*(i+1)/2);
    }
    return vector
}
console.log(triangulares(10));