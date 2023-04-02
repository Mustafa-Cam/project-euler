
class primeNumber{
    public static void main(String[] args){
//         int a=0;
// long n=60;
// int coun=0;
// for(int i=2;i<n;i++){
//     if(n%i==0){
//         // document.write(i+",<br\> ");
//         a=i;
//     }
//         if(n%i!=0){
//             continue;
//     }
//     for(int b=2;b<=a;b++){
//         if(a%b==0){
//             coun+=1;
//             // document.write(a+"çalışıyorum<br\>");
//         }
//     }
//     if(coun==1){
//         // document.write(a+";<br\>")
//         System.out.println(a);
//     }
//     coun=0;
// }
int i;
int sayi=200000;
int a=2;
long sum=0;
int count =0;
while(a<sayi){
for(i=2;i<=a;i++){
    if(a%i==0){
        count++;
    }
    if(count==2){
        break;
    }
    }
    
if(count==1){
sum+=a;
}
count=0;
a++;
}
System.out.println(sum);

    }
}