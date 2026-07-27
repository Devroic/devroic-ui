import { Link, Typography } from "@mui/material";
import PageTitle from "../components/PageTitle";
import useDocumentTitle from "../hooks/useDocumentTitle";

const ContactPage = () => {
  useDocumentTitle("Contact");

  return (
    <>
      <PageTitle>Contact</PageTitle>
      <Typography>
        You can reach me at:
        <Link
          href="mailto:andreas.eracleous99@hotmail.com"
          underline="hover"
          sx={{ color: "primary.main" }}
        >
          {" "}
          andreas.eracleous99@hotmail.com
        </Link>
      </Typography>
    </>
  );
};

export default ContactPage;
