import { Link, Typography } from "@mui/material";
import PageTitle from "../components/PageTitle";
import { colors } from "../constants/colors";

const ContactPage = () => (
  <>
    <PageTitle>Contact</PageTitle>
    <Typography>
      You can reach me at:
      <Link
        href="mailto:andreas.eracleous99@hotmail.com"
        underline="hover"
        color={colors.lightBlue}
      >
        {" "}
        andreas.eracleous99@hotmail.com
      </Link>
    </Typography>
  </>
);

export default ContactPage;
