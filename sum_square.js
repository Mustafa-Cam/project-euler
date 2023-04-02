function karalertoplami(){
var a=0;
var b=0;
var c=0;
for(i=0;i<100;i++){
    a++;
b=a*a;
c+=b;
}
var d=0;
var e=0;
var i=0;
var carpim=0;
while(i<100){
    d++;
    e+=d;
    i++;
}
carpim=e*e;
return document.write(carpim-c);
}

karalertoplami();

