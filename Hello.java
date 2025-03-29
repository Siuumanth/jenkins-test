public class Hello {
    public int add(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        Hello calc = new Hello();
        System.out.println("Sum: " + calc.add(5, 3));
    }
}
