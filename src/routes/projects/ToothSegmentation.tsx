import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import {
  Box,
  Divider,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import PageTitle from "../../components/PageTitle";
import ProjectLabel from "../../components/ProjectLabel";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const ToothSegmentation = () => {
  useDocumentTitle("Tooth Segmentation");

  return (
    <>
      <ProjectLabel type="Machine Learning" />
      <PageTitle>Tooth Segmentation</PageTitle>

      <Link
        href="https://github.com/Devroic/ai-tooth-segmentation"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: "primary.main", textTransform: "none" }}
      >
        {" "}
        Source Code <OpenInNewIcon fontSize="inherit" />
      </Link>

      <Box my={2} />

      <Typography variant="body1">
        Binary and multi-class tooth segmentation for panoramic dental
        radiographs. Given a panoramic X-ray, the system first identifies
        which pixels belong to a tooth versus background, then segments and
        numbers each individual tooth using FDI (ISO-3950) notation, deriving
        its tooth-group (incisor / canine / premolar / molar) from the FDI
        code.
      </Typography>
      <br />
      <Typography variant="body1">
        Both models are YOLOv8n-seg, trained entirely on CPU with no
        dedicated GPU, across 13,819 images and 136,935 tooth annotations
        unified from 7 public radiograph datasets, with cross-dataset
        deduplication to keep near-duplicate images from leaking across the
        train/val/test split.
      </Typography>

      <Divider sx={{ my: 4, borderColor: "primary.main" }} />
      <Typography variant="h6" gutterBottom>
        Results
      </Typography>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "gray" }}>Model</TableCell>
              <TableCell sx={{ color: "gray" }}>Epochs</TableCell>
              <TableCell sx={{ color: "gray" }}>Precision</TableCell>
              <TableCell sx={{ color: "gray" }}>Recall</TableCell>
              <TableCell sx={{ color: "gray" }}>mAP50</TableCell>
              <TableCell sx={{ color: "gray" }}>mAP50-95</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Binary (tooth vs background)</TableCell>
              <TableCell>15</TableCell>
              <TableCell>0.818</TableCell>
              <TableCell>0.835</TableCell>
              <TableCell>0.852</TableCell>
              <TableCell>0.506</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Multi-class (32 FDI classes)</TableCell>
              <TableCell>25</TableCell>
              <TableCell>0.798</TableCell>
              <TableCell>0.838</TableCell>
              <TableCell>0.874</TableCell>
              <TableCell>0.515</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="body2" color="gray" sx={{ mt: 1 }}>
        Evaluated on a held-out test split. Every one of the 32 FDI classes
        scores mask mAP50 between 0.66 and 0.95 - no class collapses to
        near-zero, though third-molar/wisdom-tooth classes are the weakest,
        consistent with them being the rarest and most position-ambiguous
        teeth in the training data.
      </Typography>

      <Divider sx={{ my: 4, borderColor: "primary.main" }} />
      <Typography variant="h6" gutterBottom>
        Two Interfaces, One Pipeline
      </Typography>
      <Typography variant="body1">
        Both front ends call the exact same inference pipeline, so they
        always agree with each other:
      </Typography>
      <Box component="ul" sx={{ pl: 3 }}>
        <li>
          <Typography variant="body1">
            <strong>Gradio dev tool</strong> - a fast way to sanity-check a
            newly trained checkpoint, exposing raw ML controls like a
            confidence-threshold slider and a binary tooth-mask view.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>Clinical web app</strong> - a React frontend with a
            FastAPI backend, built for non-technical clinical use. It shows
            the annotated radiograph alongside an <strong>odontogram</strong>{" "}
            (the standard tooth-chart layout dentists already read),
            color-codes confidence per tooth, and flags teeth with
            duplicate or ambiguous FDI predictions for manual review.
          </Typography>
        </li>
      </Box>

      <Divider sx={{ my: 4, borderColor: "primary.main" }} />
      <Typography variant="h6" gutterBottom>
        Tech Stack
      </Typography>
      <Typography variant="body1">
        Python, PyTorch, Ultralytics YOLOv8, FastAPI, React, and Gradio.
      </Typography>
    </>
  );
};

export default ToothSegmentation;
