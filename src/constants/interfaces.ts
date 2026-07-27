export type ProjectType =
  | "Java Library"
  | "Web Application"
  | "Mobile Application"
  | "Machine Learning";

export interface Project {
  title: string;
  description: string;
  path: string;
  type: ProjectType;
}
