n = [];
m=[];
for (i=1;i<=100;i++){
    n.push(i);
  }
key = [2,3,5,7];
for(i=0;i<key.length;i++){
    for(j=0;j<=n.length;j++){
        if(n[j]==1 || n[j]%key[i]==0){
            delete n[j];
        }
    } 
}

for(i=0;i<=n.length;i++){
    if(n[i]!==undefined){
      m.push(n[i]);
    }
  }

console.log(m);
var primeNos = [...key,...m];
console.log(primeNos);