public class Main {
    public static void main(String[] args) {

        System.out.println("Starting application...");

        Logger logger1 = Logger.getInstance();
        logger1.log("This is the first log message.");

        Logger logger2 = Logger.getInstance();
        logger2.log("This is the second log message.");

        if (logger1 == logger2) {
            System.out.println("Success : Both logger1 and logger2 are the exact same instance");
        } else {
            System.out.println("Fail : Different instances were created.");
        }
    }
}