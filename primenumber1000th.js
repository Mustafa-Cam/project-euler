//ilk önce asal sayı bulan işlemi yapıcaz sonra eğer bulduğumuz  sayı asal sayı ise sayacı bir arttırıcaz
//sayac 10001 olursa o sayıyı bas
var sayi=2;
var primeNumber=0;
var sayac=0;
while(primeNumber<10001){
for(var i=2;i<=sayi;i++){
    if(sayi%i==0){   
        sayac++;
    }
    else if(sayi%i!=0){
        continue;
    }
}
if(sayac==1){
    primeNumber++;
}
sayac=0;
if(primeNumber==10001){
    document.write(sayi);
}
sayi++;
}