import { Box, Chip, Stack, Typography } from "@mui/material";
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
          Devroic is where I publish that work - libraries, apps, and
          experiments across whatever stack fits the problem. Have a look at
          the{" "}
          <Box component="a" href="/" sx={{ color: "primary.main" }}>
            Projects
          </Box>{" "}
          page to see what's currently up.
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
    </>
  );
};

export default AboutPage;
