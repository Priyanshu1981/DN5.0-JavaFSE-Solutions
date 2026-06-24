public class Main {
    public static void main(String[] args) {
        Product p1 = new Product(102, "Wireless Mouse", "Electronics");
        Product p2 = new Product(202, "Keyboard", "Electronics");
        Product p3 = new Product(302, "Laptop", "Electronics");
        Product p4 = new Product(402, "Tea", "Food");
        Product p5 = new Product(502, "Chair", "Furniture");

        Product[] inventory = new Product[5];
        inventory[0] = p1;
        inventory[1] = p2;
        inventory[2] = p3;
        inventory[3] = p4;
        inventory[4] = p5;

        System.out.println("Testing Linear Search for ID 302:");
        Product foundLinear = Search.linearSearch(inventory, 302);

        if (foundLinear != null) {
            System.out.println("Found: " + foundLinear.toString());
        } else {
            System.out.println("Product not found.");
        }

        System.out.println("Testing Binary Search for ID 502:");
        Product foundBinary = Search.binarySearch(inventory, 502);

        if (foundBinary != null) {
            System.out.println("Found: " + foundBinary.toString());
        } else {
            System.out.println("Product not found.");
        }
    }
}