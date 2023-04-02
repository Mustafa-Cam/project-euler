//ilk olarak asal sayıyı bulucaz sonra asal sayıyı bulunca sayacımızı 1 arttıracağız 100001. sayıya gelince o sayıyı göstereceğiz
var a=2;
var sayac =0
var count=0;
while(sayac<=100001){
for(var i=2;i<=a;i++) {
    if(a%i==0){
count++
    }
    if(count==2){
        break;
    }
}
if(count==1){
    sayac++
}
count=0;
if(sayac==10001){  
    document.write(a);
    break;
}
a++;
}
