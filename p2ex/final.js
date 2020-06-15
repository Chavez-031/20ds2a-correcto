function per(a,b,c){
    let s,r;
    s= (1/2)*(a+b+c)

    r= Math.sqrt(s*(s-a)*(s-b)*(s-c))
    r=r/s
    return r;
}
console.log(per(5,6,7))
