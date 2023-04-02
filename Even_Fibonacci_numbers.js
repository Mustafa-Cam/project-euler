// n=document.getElementById(info).innerhtml;
// function bilgial(){
//     let n = prompt("bi sayı gir");
// }


    var i=1;
    var a=0;
    var b;
    const dizi =[i];
    dizi[1]=1;
    dizi[0]=1;
    
    while(dizi[i]<4000000){

        // for(i=1;i<34;i++){
            dizi[i+1]=dizi[i]+dizi[i-1];
            i++;
            if(dizi[i]%2==0){
                b=dizi[i];
                a+=b;
            }
        }
    
    document.write(a+"</br>");
