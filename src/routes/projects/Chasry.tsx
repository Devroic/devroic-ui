import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Box, Divider, Link, Typography } from "@mui/material";
import PageTitle from "../../components/PageTitle";
import ProjectLabel from "../../components/ProjectLabel";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const Chasry = () => {
  useDocumentTitle("Chasry");

  return (
    <>
      <ProjectLabel type="Web Application" />
      <PageTitle>Chasry</PageTitle>

      <Link
        href="https://chasry.com"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: "primary.main", textTransform: "none" }}
      >
        {" "}
        Visit Chasry <OpenInNewIcon fontSize="inherit" />
      </Link>

      <Box my={2} />

      <Typography variant="body1">
        <strong>Chasry</strong> is a SaaS web app that chases unpaid invoices
        so you don't have to. Log a client and an invoice, and Chasry sends
        automatic, polite reminder emails on a schedule - a heads-up before
        the due date, a nudge once it's overdue, and a firmer tone the longer
        it stays unpaid - until the invoice is marked as paid.
      </Typography>
      <br />
      <Typography variant="body1">
        It's a complete production SaaS: sign up, onboarding, a free plan, a
        Pro subscription with card checkout, and a daily background job that
        does the chasing.
      </Typography>

      <Divider sx={{ my: 4, borderColor: "primary.main" }} />
      <Typography variant="h6" gutterBottom>
        Features
      </Typography>
      <ul>
        <li>
          Automatic reminder emails - scheduled relative to each invoice's
          due date, escalating in tone the further overdue it gets, and
          stopping the moment the invoice is paid.
        </li>
        <li>
          Custom reminder schedules - override the default offsets per client
          or per invoice, or turn reminders off entirely where they're not
          wanted.
        </li>
        <li>
          Recurring invoices - monthly retainers roll over automatically,
          with month-end dates clamped so they never drift.
        </li>
        <li>
          Client-facing links - signed, expiring links in reminder emails let
          a client flag an invoice as paid without needing an account.
        </li>
        <li>
          PDF attachments - attach the original invoice PDF so clients see
          exactly what they're being reminded about.
        </li>
        <li>
          Weekly digest - a summary email of what's due, what's overdue, and
          what got paid.
        </li>
        <li>Fully localized in English and Greek.</li>
      </ul>

      <Divider sx={{ my: 4, borderColor: "primary.main" }} />
      <Typography variant="h6" gutterBottom>
        Billing
      </Typography>
      <Typography variant="body1">
        Chasry runs on a simple two-tier model: a free plan for up to 3
        active invoices at a time, and a Pro plan at €10/month for unlimited
        invoices, handled end to end through Stripe Checkout, webhooks, and
        the customer billing portal.
      </Typography>

      <Divider sx={{ my: 4, borderColor: "primary.main" }} />
      <Typography variant="h6" gutterBottom>
        Tech Stack
      </Typography>
      <Typography variant="body1">
        Next.js (App Router, TypeScript, Server Actions) with Tailwind CSS
        and shadcn/ui, Supabase (Postgres, Auth, Row Level Security), Stripe
        for billing, Resend + React Email for the reminder emails, and Vercel
        for hosting and the daily reminder cron - with Upstash Redis rate
        limiting and Sentry error monitoring.
      </Typography>
    </>
  );
};

export default Chasry;
