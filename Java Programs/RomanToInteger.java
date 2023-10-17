import java.util.*;
class RomanToInteger {
    static int integerValue(char ch){
        if(ch=='I'){
            return 1;
        }
        if(ch=='V'){
            return 5;
        }
        if(ch=='X'){
            return 10;
        }
        if(ch=='L'){
            return 50;
        }
        if(ch=='C'){
            return 100;
        }
        if(ch=='D'){
            return 500;
        }
        if(ch=='M'){
            return 1000;
        }
        return -1;
    }
    public static void main(String[] args) {
       Scanner sc=new Scanner(System.in);
       System.out.println("Enter the Roman Number ");
       String str=sc.nextLine();
       int len=str.length();
       int sum=0;
       for(int i=0;i<len;i++){
           int num1=integerValue(str.charAt(i));
           if(i+1<len){
               int num2=integerValue(str.charAt(i+1));
               if(num1>=num2){
                   sum=sum+num1;
               }
               else{
                   sum=sum-num1;
               }
           }
           else{
               sum=sum+num1;
           }
       }
       System.out.println("The integer number is "+sum);
    }
}