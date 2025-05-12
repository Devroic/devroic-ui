export type ProjectType =
  | "Java Library"
  | "Web Application"
  | "Mobile Application";

export interface Project {
  title: string;
  description: string;
  path: string;
  type: ProjectType;
}
