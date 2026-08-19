import { Box, Grid, Typography } from "@mui/material";
import PageTitle from "../components/PageTitle";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants/projects";
import useDocumentTitle from "../hooks/useDocumentTitle";

const ProjectsPage = () => {
  useDocumentTitle("Projects");

  return (
    <>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="p" sx={{ fontWeight: 600 }}>
          Hi, I'm Andreas 👋
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
          I'm a Full Stack Software Developer. This is where I publish the
          projects I build on the side.
        </Typography>
      </Box>
      <PageTitle>Projects</PageTitle>
      <Grid container spacing={4} alignItems="stretch">
        {projects.map((project) => (
          <Grid key={project.path} size={{ xs: 12, sm: 6 }}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProjectsPage;
