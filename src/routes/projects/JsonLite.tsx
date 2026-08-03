import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Box, Divider, Link, Typography } from "@mui/material";
import CodeBlock from "../../components/CodeBlock";
import PageTitle from "../../components/PageTitle";
import ProjectLabel from "../../components/ProjectLabel";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const JsonLite = () => {
  useDocumentTitle("JsonLite");

  return (
    <>
      <ProjectLabel type="Java Library" />
      <PageTitle>JsonLite</PageTitle>

      <Link
        href="https://github.com/Devroic/jsonlite"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: "primary.main", textTransform: "none" }}
      >
        {" "}
        Source Code <OpenInNewIcon fontSize="inherit" />
      </Link>
      <br />
      <Link
        href="/jsonlite/javadocs"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: "primary.main", textTransform: "none" }}
      >
        Docs <OpenInNewIcon fontSize="inherit" />
      </Link>

      <Box my={2} />

      <Typography variant="body1">
        Small Java projects and prototypes often need somewhere to persist a
        handful of records without pulling in a full database.{" "}
        <strong>JsonLite</strong> fills that gap: it treats a plain JSON file
        as a lightweight, queryable data store, giving you CRUD-style
        operations - select, insert, update, delete - on top of a format you
        can open, diff, and edit by hand.
      </Typography>
      <br />
      <Typography variant="body1">
        It's built on Jackson, so any class with getters and setters maps
        straight to and from JSON with no extra boilerplate.
      </Typography>

      <Divider sx={{ my: 4, borderColor: "primary.main" }} />
      <Typography variant="h6" gutterBottom>
        Highlights
      </Typography>
      <ul>
        <li>
          Query, insert, update, and delete records by ID, by key, or by a
          lambda condition - no query language to learn.
        </li>
        <li>
          Reads and writes plain Java objects directly via reflection, so
          there's no mapping code to write or maintain.
        </li>
        <li>
          Data lives in a human-readable JSON file, not a binary format or a
          separate server process.
        </li>
        <li>
          Built on Jackson, so it drops into existing Java tooling without
          friction.
        </li>
      </ul>

      <Divider sx={{ my: 4, borderColor: "primary.main" }} />
      <Typography variant="h6" gutterBottom>
        Quick Look
      </Typography>
      <Typography variant="body1">
        Define a model, point a client at a JSON file, and start querying:
      </Typography>
      <CodeBlock language="java">{`
public class Person {
  private String id;
  private String name;
  private String city;
  // constructor, getters and setters
}

JsonLiteClient client = JsonLiteClient.builder()
  .jsonFilePath("people.json")
  .type(Person.class)
  .idKey("id")
  .createFileIfNotExists(true)
  .build();

client.insert(new Person("1", "Ada", "London"));

Person person = client.selectById("1");

List<Person> londoners = client.selectWhere(
  p -> ((Person) p).getCity().equals("London")
);

client.updateById("1", updatedPerson);
client.deleteById("1");`}</CodeBlock>
      <Typography variant="body2" color="gray">
        selectAll, selectKey(s), selectByKey, updateKey, updateWhere,
        deleteAll and deleteByKey round out the API - see the{" "}
        <Link
          href="/jsonlite/javadocs"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "primary.main" }}
        >
          JavaDocs
        </Link>{" "}
        for the full reference.
      </Typography>

      <Divider sx={{ my: 4, borderColor: "primary.main" }} />
      <Typography variant="h6" gutterBottom>
        Getting Started
      </Typography>
      <Typography variant="body1">
        Requires JDK 22 or later. Add the dependency from{" "}
        <Link
          href="https://central.sonatype.com/artifact/com.devroic/jsonlite/versions"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "primary.main" }}
        >
          Maven Central
        </Link>
        :
      </Typography>
      <Typography variant="subtitle1">Maven</Typography>
      <CodeBlock language="xml">{`
<dependency>
  <groupId>com.devroic</groupId>
  <artifactId>jsonlite</artifactId>
  <version>1.1.0</version>
</dependency>`}</CodeBlock>
      <Typography variant="subtitle1">Gradle</Typography>
      <CodeBlock language="groovy">{`
implementation group: 'com.devroic', name: 'jsonlite', version: '1.1.0'`}</CodeBlock>

      <Divider sx={{ my: 4, borderColor: "primary.main" }} />
      <Typography variant="h6" gutterBottom>
        Tech Stack
      </Typography>
      <Typography variant="body1">
        Java 22, Jackson, and Maven - published to Maven Central under the
        GNU GPL-3.0{" "}
        <Link
          href="https://www.gnu.org/licenses/gpl-3.0.en.html"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "primary.main" }}
        >
          license
        </Link>
        .
      </Typography>
    </>
  );
};

export default JsonLite;
