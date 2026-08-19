import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import PageTitle from "../components/PageTitle";
import useDocumentTitle from "../hooks/useDocumentTitle";

const skillGroups: { label: string; skills: string[] }[] = [
  {
    label: "Languages",
    skills: ["TypeScript", "Java", "Python"],
  },
  {
    label: "Web & Backend",
    skills: ["React", "Spring Boot", "FastAPI", "Node.js"],
  },
  {
    label: "Mobile",
    skills: ["React Native", "Expo"],
  },
  {
    label: "Machine Learning",
    skills: ["PyTorch", "Ultralytics YOLOv8"],
  },
  {
    label: "Tools & Infra",
    skills: ["Docker", "Maven", "Git"],
  },
];

const AboutPage = () => {
  useDocumentTitle("About");

  return (
    <>
      <PageTitle>About Me</PageTitle>

      <Typography variant="body1" paragraph>
        I'm <strong>Andreas Eracleous</strong>, a Full Stack Software
        Developer with a strong foundation in data structures, algorithms,
        and modern development practices. I'm passionate about solving
        complex problems and delivering efficient, scalable software
        solutions.
      </Typography>

      <Typography variant="body1" paragraph>
        With experience across the front end, back end, and everything in
        between, I like taking a project all the way from idea to something
        people can actually use - whether that's a library published on
        Maven Central, a mobile app running on someone's phone, or a machine
        learning model wired up behind a working UI.
      </Typography>

      <Box sx={{ my: 5 }}>
        <Typography variant="h6" gutterBottom>
          What I Build
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Devroic is where I publish that work. So far that includes{" "}
          <strong>JsonLite</strong>, a Java library for treating a JSON file
          as a lightweight queryable data store; <strong>Shiftly</strong>, a
          local-first mobile calendar app for shift workers; and{" "}
          <strong>Tooth Segmentation</strong>, a YOLOv8-based computer vision
          pipeline that segments and numbers teeth in dental X-rays behind a
          clinical web UI. You can find all three on the{" "}
          <Box component="a" href="/" sx={{ color: "primary.main" }}>
            Projects
          </Box>{" "}
          page.
        </Typography>
      </Box>

      <Box sx={{ my: 5 }}>
        <Typography variant="h6" gutterBottom>
          Skills
        </Typography>
        <Stack spacing={2}>
          {skillGroups.map((group) => (
            <Box key={group.label}>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 1 }}
              >
                {group.label}
              </Typography>
              <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                {group.skills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    size="small"
                    sx={{
                      bgcolor: "background.paper",
                      color: "white",
                      border: "1px solid",
                      borderColor: "divider",
                    }}
                  />
                ))}
              </Stack>
            </Box>
          ))}
        </Stack>
      </Box>

      <Box sx={{ my: 5 }}>
        <Typography variant="h6" gutterBottom>
          Get in Touch
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Happy to talk about a project, a bug you found, or anything in
          between.
        </Typography>
        <Stack direction="row" spacing={1.5} flexWrap="wrap">
          <Button
            variant="outlined"
            startIcon={<EmailIcon />}
            href="mailto:info@devroic.com"
            sx={{ color: "primary.main", borderColor: "primary.main" }}
          >
            Email
          </Button>
          <Button
            variant="outlined"
            startIcon={<GitHubIcon />}
            href="https://github.com/devroic"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "primary.main", borderColor: "primary.main" }}
          >
            GitHub
          </Button>
          <Button
            variant="outlined"
            startIcon={<LinkedInIcon />}
            href="https://www.linkedin.com/in/andreaseracleous99/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "primary.main", borderColor: "primary.main" }}
          >
            LinkedIn
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default AboutPage;
