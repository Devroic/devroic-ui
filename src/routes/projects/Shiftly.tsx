import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Box, Divider, Link, Typography } from "@mui/material";
import CodeBlock from "../../components/CodeBlock";
import PageTitle from "../../components/PageTitle";
import ProjectLabel from "../../components/ProjectLabel";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const Shiftly = () => {
  useDocumentTitle("Shiftly");

  return (
    <>
      <ProjectLabel type="Mobile Application" />
      <PageTitle>Shiftly</PageTitle>

      <Link
        href="https://github.com/Devroic/shiftly"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: "primary.main", textTransform: "none" }}
      >
        {" "}
        Source Code <OpenInNewIcon fontSize="inherit" />
      </Link>

      <Box my={2} />

      <Typography variant="body1">
        <strong>Shiftly</strong> is a mobile calendar app (iOS & Android)
        built for people who work rotating day and night shifts. It tracks
        your shift schedule and your everyday plans in one place - mark each
        day as a shift, attach regular calendar events to any date, and set
        up repeating shift patterns that fill in weeks or months in a single
        tap instead of setting every day by hand.
      </Typography>
      <br />
      <Typography variant="body1">
        Everything runs locally: there's no account, no server, and nothing
        is ever uploaded anywhere.
      </Typography>

      <Divider sx={{ my: 4, borderColor: "primary.main" }} />
      <Typography variant="h6" gutterBottom>
        Features
      </Typography>
      <ul>
        <li>
          Full month calendar - every day shows its shift and events at a
          glance, with a running count of shifts per type for the month.
        </li>
        <li>
          Custom shift types - start with Day / Night / Off / Leave, or
          create your own with any name and color.
        </li>
        <li>
          Repeating patterns - define a shift cycle once (e.g. 2 days, 2
          nights, 4 off) and stamp it onto any date range.
        </li>
        <li>
          Everyday events - appointments and reminders with an optional time
          and notes, alongside your shifts.
        </li>
        <li>
          Backup & restore - export everything to a JSON file and restore it
          later, or on another device.
        </li>
        <li>Light & dark mode, with a manual override.</li>
      </ul>

      <Divider sx={{ my: 4, borderColor: "primary.main" }} />
      <Typography variant="h6" gutterBottom>
        Getting Started
      </Typography>
      <Typography variant="body1">
        Want to run Shiftly from source instead of installing it as a built
        app? Requires Node.js 20+ and the Expo Go app on your phone:
      </Typography>
      <CodeBlock language="bash">{`
npm install
npx expo start`}</CodeBlock>
      <Typography variant="body2" color="text.secondary">
        Scan the QR code with Expo Go, or press i / a in the terminal to
        launch an iOS/Android simulator.
      </Typography>

      <Divider sx={{ my: 4, borderColor: "primary.main" }} />
      <Typography variant="h6" gutterBottom>
        Tech Stack
      </Typography>
      <Typography variant="body1">
        Expo + Expo Router, Drizzle ORM over expo-sqlite for local reactive
        storage, and TypeScript - MIT licensed.
      </Typography>
    </>
  );
};

export default Shiftly;
