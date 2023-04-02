class multiple3or5{
    static int a=0;
     static int b=0;
     static int c=0;
     public static int d=0;
     static int p=0;
     public static int t;
public static int find()
{
    
    for(int i=0; i<1000; i++){
        if(i%3==0){
        // System.out.println(i);
        a = i;
        b += a;
        }
    } 
    System.out.println(b);
    return 0 ;    

}
public static int find2(){
for(int i=0; i<1000; i++){
    if(i%5==0){
    // System.out.println(i);
    a = i;
    c += a;
    }
} 
System.out.println(c);
return 0 ;
}
public static int find3(){
    for(int i=0; i<1000;i++){
       if(i%15==0){
    p+=i;
 System.out.println(i);    
}
}
System.out.println(p);

    return 0;
}
public static int find4(){
    int m=0;
    for(int i=0;i<1000;i++){
        if(i%3==0||i%5==0){
            m+=i;
        }
    }
    System.out.println(m);
    return m;
}
public static void main(String[] args){
// find();
// find2();
// find3();
// d=b+c;
// t = d-p;
// System.out.println("toplam sonucu: "+d);
// System.out.println("toplam sonucu: "+t);
find4();
}
}
