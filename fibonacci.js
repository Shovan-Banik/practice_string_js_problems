// fibonacci : 0,1,1,2,3,5,8,13,21,34,55.......................
//fibonacci method: fibo[i]= fibo[i-1] + fibo[i-2]

const fibonacci=[0,1];
for(i=2;i<=20;i++){
    fibonacci[i]=fibonacci[i-1]+fibonacci[i-2];
}
console.log(fibonacci);
