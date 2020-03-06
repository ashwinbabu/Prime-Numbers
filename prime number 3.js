n = [];
m=[];
let index = 0;
for(i=2;i<=100;i++){
    n.push(i);
}
limit = Math.sqrt(n.length);
console.log(limit);
for(i=n[0];i<limit;i=n[0]){
loop:  for(j=i,k=i;j<=100;j+=i){
        index = n.indexOf(j);
        if(index===-1)
        continue loop
        else
        n.splice(index,1);
    }m.push(k);
}
console.log([...m,...n]);