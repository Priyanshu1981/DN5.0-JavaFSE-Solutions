public class Main {
    public static void main(String[] args) {
        System.out.println("Document Management System : --\n");

        DocumentFactory wordFactory = new WordFactory();
        System.out.println("Client requests a Word document:");
        wordFactory.processDocument();

        DocumentFactory pdfFactory = new PdfFactory();
        System.out.println("Client requests a PDF document:");
        pdfFactory.processDocument();

        DocumentFactory excelFactory = new ExcelFactory();
        System.out.println("Client requests an Excel document:");
        excelFactory.processDocument();
    }
}