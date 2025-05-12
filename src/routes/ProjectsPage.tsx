import { Grid } from "@mui/material";
import PageTitle from "../components/PageTitle";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants/projects";

const ProjectsPage = () => (
  <>
    <PageTitle>Projects</PageTitle>
    <Grid container spacing={4}>
      {projects.map((project, index) => (
        <Grid key={index}>
          <ProjectCard project={project} />
        </Grid>
      ))}
    </Grid>
  </>
);

export default ProjectsPage;
