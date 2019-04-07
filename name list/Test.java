import org.xml.sax.*;
import org.w3c.dom.*;
import javax.xml.parsers.*;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

// Recursively lists the value of the "name" elements in the dataset (XML).

public class Test {
    public static void main(String[] args) {
        Document xmlDoc = getDocument("./data.xml");

        Node people = xmlDoc.getElementsByTagName("people").item(0);
        Element peopleElement = (Element) people;
        NodeList persons = peopleElement.getElementsByTagName("person");
        for (int i=0; i < persons.getLength(); i++){
            Node person = persons.item(i);
            Element personElement = (Element) person;
            Node personName = personElement.getElementsByTagName("name").item(0);
            Element personNameElement = (Element) personName;
            System.out.println(personNameElement.getTextContent());
        }
    }

    private static Document getDocument(String docString){
        try{
            DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();

            factory.setIgnoringComments(true);
            factory.setValidating(false);

            DocumentBuilder builder = factory.newDocumentBuilder();

            return builder.parse(new InputSource(docString));
        } catch (Exception ex) {
            System.out.println(ex.getMessage());
        }

        return null;
    }
}