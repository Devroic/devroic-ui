import { alpha, Box, Chip, Stack, Typography } from "@mui/material";
import PageTitle from "../components/PageTitle";
import { colors } from "../constants/colors";
import useDocumentTitle from "../hooks/useDocumentTitle";

const skillGroups: { label: string; skills: string[]; color: string }[] = [
  {
    label: "Languages",
    skills: ["TypeScript", "Java", "Python"],
    color: colors["Java Library"],
  },
  {
    label: "Web & Backend",
    skills: ["React", "Spring Boot", "FastAPI", "Node.js"],
    color: colors["Web Application"],
  },
  {
    label: "Mobile",
    skills: ["React Native", "Expo"],
    color: colors["Mobile Application"],
  },
  {
    label: "Machine Learning",
    skills: ["PyTorch", "Ultralytics YOLOv8"],
    color: colors["Machine Learning"],
  },
  {
    label: "Tools & Infra",
    skills: ["Docker", "Maven", "Git"],
    color: "#4dd0e1",
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
          <Box component="a" href="/projects" sx={{ color: "primary.main" }}>
            Projects
          </Box>{" "}
          page to see what's currently up.
        </Typography>
      </Box>

      <Box sx={{ my: 5 }}>
        <Typography variant="h6" gutterBottom>
          Skills
        </Typography>
        <Stack spacing={2.5}>
          {skillGroups.map((group) => (
            <Box key={group.label}>
              <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    bgcolor: group.color,
                  }}
                />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontWeight: 600, letterSpacing: 0.3 }}
                >
                  {group.label}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                {group.skills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    size="small"
                    sx={{
                      bgcolor: alpha(group.color, 0.12),
                      color: group.color,
                      fontWeight: 600,
                      border: "1px solid",
                      borderColor: alpha(group.color, 0.4),
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
