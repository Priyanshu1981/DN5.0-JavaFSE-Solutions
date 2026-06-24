public class Search {

    public static Product linearSearch(Product[] products, int targetId) {
        for(int i = 0; i < products.length; i++) {
            if (products[i].getProductId() == targetId) {
                return products[i];
            }
        }
        return null;
    }

    public static Product binarySearch(Product[] products, int targetId) {
        int left = 0;
        int right = products.length - 1;

        while (left <= right) {
            int mid = (left + right) / 2;

            if (products[mid].getProductId() == targetId) {
                return products[mid];
            }

            if (products[mid].getProductId() < targetId) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return null;
    }
}