var i;
var sayi=2e6;
var a=2;
var sum=0;
var count =0;
while(a<sayi){
for(i=2;i<=a;i++){
    if(a%i==0){
        count++;
    }
}
if(count==1){
sum+=a;
}
count=0;
a++;
}
console.log(sum);