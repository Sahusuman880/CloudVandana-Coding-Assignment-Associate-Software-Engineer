import java.util.*;
class CheckPangram {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        String str="abcdefghijklmnopqrstuvwxyz";
        System.out.println("Enter the Sentence");
        String input=sc.nextLine();
        String user=input.toLowerCase();
        int count=0;
        for(int i=0;i<str.length();i++){
            for(int j=0;j<user.length();j++){
                if(str.charAt(i)==user.charAt(j)){
                    count++;
                }
            }
        }
        if(count==26){
          System.out.println("This String is pangram");  
        }
        else{
            System.out.println("This String is not pangram");
        }
        
        
    }
}
