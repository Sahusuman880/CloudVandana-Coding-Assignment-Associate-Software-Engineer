import java.util.*;
class ArrayShuffle{
    public static void main(String[]args){
        int []arr={1,2,3,4,5,6,7};
        Random num=new Random();
        for(int i=0;i<arr.length;i++){
            int number=num.nextInt(arr.length);
            int cons=arr[i];
            arr[i]=arr[number];
            arr[number]=cons;
        }
        for(int a:arr){
            System.out.print(a+" ");
        }
    }
}