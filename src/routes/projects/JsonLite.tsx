import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Box, Divider, Link, Typography } from "@mui/material";
import CodeBlock from "../../components/CodeBlock";
import PageTitle from "../../components/PageTitle";
import ProjectLabel from "../../components/ProjectLabel";
import { colors } from "../../constants/colors";

const JsonLite = () => {
  return (
    <>
      <ProjectLabel type="Java Library" />
      <PageTitle>JsonLite</PageTitle>

      <Link
        href="https://github.com/Devroic/jsonlite"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: "#90caf9", textTransform: "none" }}
      >
        {" "}
        Source Code <OpenInNewIcon fontSize="inherit" />
      </Link>
      <br />
      <Link
        href="/jsonlite/javadocs"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: "#90caf9", textTransform: "none" }}
      >
        Docs <OpenInNewIcon fontSize="inherit" />
      </Link>

      <Box my={2} />

      <Typography variant="body1">
        <strong>JsonLite</strong> is a lightweight Java library designed to
        simplify the process of working with JSON files in Java applications. It
        provides easy-to-use operations for manipulating JSON objects in JSON
        files, including creating, reading, updating, and deleting records. This
        library integrates with popular JSON processing tools like Jackson,
        making it easy to integrate into your Java projects.
      </Typography>
      <br />
      <Typography variant="body1">
        The JsonLite client provides a simple API for working with JSON files,
        allowing users to serialize objects to JSON, deserialize JSON to
        objects, and validate and manipulate JSON data.
      </Typography>
      <Divider sx={{ my: 4, borderColor: colors.lightBlue }} />
      <Typography variant="h6" gutterBottom>
        Features
      </Typography>
      <ul>
        <li>Create and manage JSON files.</li>
        <li>Serialize and deserialize objects to/from JSON.</li>
        <li>
          Support for performing CRUD-like operations (e.g., reading, saving,
          and querying data) on JSON data inside JSON files.
        </li>
        <li>
          Reflective operations for working with Java objects and their fields.
        </li>
      </ul>
      <Divider sx={{ my: 4, borderColor: colors.lightBlue }} />
      <Typography variant="h6" gutterBottom>
        Prerequisites
      </Typography>
      <Typography variant="body1">
        <strong>Java Development Kit (JDK)</strong>: requires{" "}
        <strong>JDK 22</strong> or later to compile and run. If you haven't
        installed JDK 22 or later yet, you can download it from the{" "}
        <Link
          href="https://www.oracle.com/java/technologies/downloads/"
          target="_blank"
          rel="noopener noreferrer"
          color={colors.lightBlue}
        >
          official Oracle website
        </Link>{" "}
        or use a package manager like{" "}
        <Link
          href="https://brew.sh/"
          target="_blank"
          rel="noopener noreferrer"
          color={colors.lightBlue}
        >
          Homebrew
        </Link>{" "}
        for macOS or{" "}
        <Link
          href="https://sdkman.io/"
          target="_blank"
          rel="noopener noreferrer"
          color={colors.lightBlue}
        >
          SDKMAN!
        </Link>{" "}
        for Unix-based systems.
      </Typography>
      <Divider sx={{ my: 4, borderColor: colors.lightBlue }} />
      <Typography variant="h6" gutterBottom>
        Getting Started
      </Typography>
      <Typography variant="body1">
        Add Dependency: Begin by adding the JsonLite Library as a dependency in
        your project. Find the latest version on{" "}
        <Link
          href="https://central.sonatype.com/artifact/com.devroic/jsonlite/versions"
          target="_blank"
          rel="noopener noreferrer"
          color={colors.lightBlue}
        >
          Maven Central
        </Link>
        .
      </Typography>
      <Typography variant="subtitle1">Maven</Typography>
      <CodeBlock language="xml">{`
<dependency>
  <groupId>com.devroic</groupId>
  <artifactId>jsonlite</artifactId>
  <version>1.0.0</version>
</dependency>`}</CodeBlock>
      <Typography variant="subtitle1">Gradle</Typography>
      <CodeBlock language="groovy">{`
implementation group: 'com.devroic', name: 'jsonlite', version: '1.0.0'`}</CodeBlock>
      <Divider sx={{ my: 4, borderColor: colors.lightBlue }} />
      <Typography variant="h6" gutterBottom>
        Usage
      </Typography>
      <Typography variant="subtitle1">Model Class</Typography>
      <CodeBlock language="java">{`
// A basic model class with fields and getters/setters
public class Person {
  private String id;
  private String name;
  private String city;
  private List<String> cars;
  private List<String> brands;
  private String job;

  public Person() {}

  public Person(String id, String name, String city, List<String> cars, List<String> brands, String job) {
    this.id = id;
    this.name = name;
    this.city = city;
    this.cars = cars;
    this.brands = brands;
    this.job = job;
  }
  // Getters and Setters
}`}</CodeBlock>
      <Typography variant="subtitle1">Configurations</Typography>
      <CodeBlock language="java">{`
// Build and configure the JsonLiteClient
JsonLiteClient client = JsonLiteClient.builder()
  .jsonFilePath("../test.json")
  .type(Person.class)
  .idKey("id")
  .createFileIfNotExists(true)
  .build();`}</CodeBlock>
      <Divider sx={{ my: 4, borderColor: colors.lightBlue }} />
      <Typography variant="h6">Select Operations</Typography>
      <br />
      <Typography variant="subtitle1">selectAll()</Typography>
      <CodeBlock language="java">{`
// Retrieves all objects of the specified type from the JSON file
List<Person> people = client.selectAll();`}</CodeBlock>
      <Typography variant="subtitle1">selectKey()</Typography>
      <CodeBlock language="java">{`
// Retrieves a specific key from all objects in the JSON file
var keyResults = client.selectKey("id");`}</CodeBlock>
      <Typography variant="subtitle1">selectKeys()</Typography>
      <CodeBlock language="java">{`
// Retrieves multiple keys from all objects in the JSON file
var keysResults = client.selectKeys("id", "name");`}</CodeBlock>
      <Typography variant="subtitle1">selectById()</Typography>
      <CodeBlock language="java">{`
// Retrieves an object from the JSON file by its unique ID
Person person = client.selectById("1");`}</CodeBlock>
      <Typography variant="subtitle1">selectByKey()</Typography>
      <CodeBlock language="java">{`
// Retrieves objects that match a specific key-value pair
List<Person> people = client.selectByKey("name", "Test");`}</CodeBlock>
      <Typography variant="subtitle1">selectWhere()</Typography>
      <CodeBlock language="java">{`
// Retrieves objects where a condition is met
List<Person> people = client.selectWhere(
  object -> ((Person) object).getName().equals("Test")
);`}</CodeBlock>
      <Divider sx={{ my: 4, borderColor: colors.lightBlue }} />
      <Typography variant="h6">Insert Operations</Typography>
      <br />
      <Typography variant="subtitle1">insert()</Typography>
      <CodeBlock language="java">{`
// Insert a single object
Person person = new Person();
boolean insertResult = client.insert(person);`}</CodeBlock>
      <Typography variant="subtitle1">insertMultiple()</Typography>
      <CodeBlock language="java">{`
// Insert multiple objects
Person person1 = new Person();
Person person2 = new Person();
List<Person> people = Arrays.asList(person1, person2);
boolean insertMultipleResult = client.insertMultiple(people);`}</CodeBlock>
      <Divider sx={{ my: 4, borderColor: colors.lightBlue }} />
      <Typography variant="h6">Update Operations</Typography>
      <br />
      <Typography variant="subtitle1">updateKey()</Typography>
      <CodeBlock language="java">{`
// Update a specific key for all objects
boolean updateResult = client.updateKey("name", "Test");`}</CodeBlock>
      <Typography variant="subtitle1">updateById()</Typography>
      <CodeBlock language="java">{`
// Update an object by ID
Person person = new Person();
person.setId("1");
boolean updateResult = client.updateById("1", person);`}</CodeBlock>
      <Typography variant="subtitle1">updateWhere (single key)</Typography>
      <CodeBlock language="java">{`
// Update objects matching a condition with a single key
boolean updateResultSingle = client.updateWhere(
  object -> ((Person) object).getId().equals("1"),
  "name",
  "Test"
);`}</CodeBlock>
      <Typography variant="subtitle1">updateWhere (multiple keys)</Typography>
      <CodeBlock language="java">{`
// Update objects matching a condition with multiple keys
Map<String, Object> updates = new HashMap<>();
updates.put("name", "UpdatedName");
updates.put("city", "UpdatedCity");

boolean updateResultMultiple = client.updateWhere(
  object -> ((Person) object).getName().equals("Test"),
  updates
);`}</CodeBlock>
      <Divider sx={{ my: 4, borderColor: colors.lightBlue }} />
      <Typography variant="h6">Delete Operations</Typography>
      <br />
      <Typography variant="subtitle1">deleteAll()</Typography>
      <CodeBlock language="java">{`
// Delete all records
boolean deleteResult = client.deleteAll();`}</CodeBlock>
      <Typography variant="subtitle1">deleteById()</Typography>
      <CodeBlock language="java">{`
// Delete a record by ID
boolean deleteResult = client.deleteById("1");`}</CodeBlock>
      <Typography variant="subtitle1">deleteByKey()</Typography>
      <CodeBlock language="java">{`
// Delete records matching key-value
boolean deleteResult = client.deleteByKey("name", "Test");`}</CodeBlock>
      <Typography variant="subtitle1">deleteWhere()</Typography>
      <CodeBlock language="java">{`
// Delete records where condition matches
boolean deleteResult = client.deleteWhere(
  object -> ((Person) object).getName().equals("Test")
);`}</CodeBlock>
      <Divider sx={{ my: 4, borderColor: colors.lightBlue }} />
      <Typography variant="h6" gutterBottom>
        License
      </Typography>
      <Typography variant="body1">
        This project is licensed under the terms of the{" "}
        <strong>GNU General Public License v3.0 (GPL-3.0)</strong>.<br />
        See the{" "}
        <Link
          href="https://www.gnu.org/licenses/gpl-3.0.en.html"
          target="_blank"
          rel="noopener noreferrer"
          color={colors.lightBlue}
        >
          GNU General Public License v3.0
        </Link>{" "}
        for more details.
      </Typography>
    </>
  );
};

export default JsonLite;
