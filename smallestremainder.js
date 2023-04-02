// 1-20 hepsine bölüncek elimizde bir sayı olacak sonra o sayıyı arttıracağız eğer 1-20 arasındaki bir sayıya bölünmezse iptal edicez bir sonraki sayıya çıkıcaz olay bu
let sayi=2520;
let i=2;
while(i<20){
for(i=2;i<=20;){
    if(sayi%i==0){
    i++;
    }
    if(i==20){
        document.write(sayi);
    }
    else if(sayi%i!=0){
        sayi++;
        i=2;
    }
}
}