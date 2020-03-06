let n = [];
let m =[];
let key = 0 ;
for (i=1;i<=500;i++){
  n.push(i);
}
//console.log(n);

for(i=0;i<=Math.sqrt(n.length);i++){
  if(n[i]==1){
    delete n[i];
  }
  if(n[i]>1 && n[i]!==undefined){
    key = n[i];
    console.log("key: ",key)
    for(j=0;j<=n.length;j++){
      if(n[j]%key === 0 && n[j]!==key){
        delete n[j];
      }
    }
  }
}

for(i=0;i<=n.length;i++){
  if(n[i]!==undefined){
    m.push(n[i]);
  }
}
console.log(n[0]);
console.log(m);