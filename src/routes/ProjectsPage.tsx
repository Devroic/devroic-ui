import { Grid } from "@mui/material";
import PageTitle from "../components/PageTitle";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants/projects";
import useDocumentTitle from "../hooks/useDocumentTitle";

const ProjectsPage = () => {
  useDocumentTitle("Projects");

  return (
    <>
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
