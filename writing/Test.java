import org.xml.sax.*;
import org.w3c.dom.*;
import javax.xml.parsers.*;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import java.util.*;

public class Test {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        Document xmlDoc = getDocument("./data.xml");
        Element people = (Element) xmlDoc.getElementsByTagName("people").item(0);

        System.out.println("Please enter the new person's name: ");
        String name = scan.nextLine();
        System.out.println("Please enter the new person's email: ");
        String email = scan.nextLine();
        System.out.println("Please enter the new person's phone: ");
        String phone = scan.nextLine();
        System.out.println("Please enter the new person's age: ");
        String age = scan.nextLine();
        System.out.println("Please enter the new person's gender (M or F): ");
        String gender = scan.nextLine();
        System.out.println("Please enter any tags for the new person, each separted by a comma, then a space: ");
        String tags = scan.nextLine();

        people.appendChild(createPerson(xmlDoc, name, email, phone, age, gender, tags));

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

    private static Node createPerson(Document xmlDoc, String name, String email, String phone, String age, String gender, String tags){
        Node person = xmlDoc.createElement("person");
        Node nameNode = xmlDoc.createElement("name");
        Node emailNode = xmlDoc.createElement("email");
        Node phoneNode = xmlDoc.createElement("phone");
        Node ageNode = xmlDoc.createElement("age");
        Node genderNode = xmlDoc.createElement("gender");
        Node tagsNode = xmlDoc.createElement("tags");
        person.appendChild(nameNode);
        person.appendChild(emailNode);
        person.appendChild(phoneNode);
        person.appendChild(ageNode);
        person.appendChild(genderNode);
        person.appendChild(tagsNode);

        return person;
    }
}