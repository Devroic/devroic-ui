import { Project } from "./interfaces";

export const projects: Project[] = [
  {
    title: "Chasry",
    description:
      "A SaaS web app that chases unpaid invoices for you - log an invoice and Chasry sends automatic, polite reminder emails to your client that escalate in tone until you get paid.",
    path: "/chasry",
    type: "Web Application",
  },
  {
    title: "JsonLite",
    description:
      "JsonLite is a lightweight Java library designed to simplify the process of working with JSON data in Java applications.",
    path: "/jsonlite",
    type: "Java Library",
  },
  {
    title: "Tooth Segmentation",
    description:
      "Binary and multi-class tooth segmentation for panoramic dental radiographs, with a clinical UI showing per-tooth FDI numbering and confidence.",
    path: "/tooth-segmentation",
    type: "Machine Learning",
  },
  {
    title: "Shiftly",
    description:
      "A mobile calendar app for people who work rotating day and night shifts, with repeating shift patterns, custom shift types, and everyday events - all stored locally on the device.",
    path: "/shiftly",
    type: "Mobile Application",
  },
];
