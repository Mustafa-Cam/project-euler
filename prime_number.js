var a=0;
const n=75142;
var coun=0;
for(var i=2;i<n;i++){
    if(n%i==0){
        // document.write(i+",<br\> ");
        a=i;
    }
        if(n%i!=0){
            continue;
    }
    for(var b=2;b<=a;b++){
        if(a%b==0){
            coun+=1;
            // document.write(a+"çalışıyorum<br\>");
        }
    }
    if(coun==1){
        document.write(a+";<br\>")
    }
    coun=0;
}
