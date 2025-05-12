// src/components/CodeBlock.tsx
import { Box } from "@mui/material";

const CodeBlock = ({
  children,
  language = "text",
}: {
  children: string;
  language?: string;
}) => {
  return (
    <Box
      component="pre"
      sx={{
        bgcolor: "#1e1e1e",
        color: "#e0e0e0",
        p: 2,
        borderRadius: 2,
        overflowX: "auto",
        fontFamily: "Consolas, 'Fira Code', monospace",
        fontSize: "0.875rem",
        my: 2,
      }}
    >
      <code className={`language-${language}`}>{children.trim()}</code>
    </Box>
  );
};

export default CodeBlock;
