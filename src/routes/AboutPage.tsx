import { Typography } from "@mui/material";
import PageTitle from "../components/PageTitle";

const AboutPage = () => (
  <>
    <PageTitle>About Me</PageTitle>

    <Typography variant="body1" paragraph>
      I’m <strong>Andreas Eracleous</strong>, a Full Stack Software Developer
      with a strong foundation in data structures, algorithms, and modern
      development practices. I'm passionate about solving complex problems and
      delivering efficient, scalable software solutions.
    </Typography>

    <Typography variant="body1" paragraph>
      With experience in both front-end and back-end development, I’ve built and
      maintained applications using{" "}
      <strong>React, TypeScript, Java, Spring Boot</strong>, and more.
    </Typography>
  </>
);

export default AboutPage;
