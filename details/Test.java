import org.xml.sax.*;
import org.w3c.dom.*;
import javax.xml.parsers.*;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import java.util.*;

// Searches for specific name, then returns details for all persons with that name

public class Test {
    public static void main(String[] args) {
        Document xmlDoc = getDocument("./data.xml");
        Scanner scan = new Scanner(System.in);

        Node people = xmlDoc.getElementsByTagName("people").item(0);
        Element peopleElement = (Element) people;
        NodeList persons = peopleElement.getElementsByTagName("person");

        System.out.println("What name would you like to find? ");
        String nameToFind = scan.nextLine();
        
        findPeopleWithName(nameToFind, persons);

        scan.close();
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

    private static void findPeopleWithName(String name, NodeList persons){
        for (int i = 0; i < persons.getLength(); i++){
            Node person = persons.item(i);
            Element personElement = (Element) person;
            Node personName = personElement.getElementsByTagName("name").item(0);
            Element personNameElement = (Element) personName;
            if(personNameElement.getTextContent().equals(name)){
                System.out.println("Name: " + personElement.getElementsByTagName("name").item(0).getTextContent());
                System.out.println("Email Address: " + personElement.getElementsByTagName("email").item(0).getTextContent());
                System.out.println("Phone Number: " + personElement.getElementsByTagName("phone").item(0).getTextContent());
                System.out.println("Age: " + personElement.getElementsByTagName("age").item(0).getTextContent());
                System.out.println("Gender: " + personElement.getElementsByTagName("gender").item(0).getTextContent());
                System.out.print("Tags: ");
                for(int j = 0; j < personElement.getElementsByTagName("tag").getLength(); j++){
                    System.out.print(personElement.getElementsByTagName("tag").item(j).getTextContent() + ", ");
                }
                System.out.println();
            }
        }
    }
}