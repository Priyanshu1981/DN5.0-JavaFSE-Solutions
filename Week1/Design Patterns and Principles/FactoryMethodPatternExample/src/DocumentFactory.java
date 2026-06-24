public abstract class DocumentFactory {
    public abstract Document createDocument();

    public void processDocument() {
        Document doc = createDocument();
        doc.open();
        doc.save();
        System.out.println("Document processing complete.");
    }
}