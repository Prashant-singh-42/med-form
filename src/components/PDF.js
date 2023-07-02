import React from "react";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import PdfDocument from "./PdfDocument";
import '../styles/pdf.css';
import { Button } from "@mui/material";

function PDF(props) {
  const fileName = "Invoice.pdf";

  return (
    <div className="Container" style={{width: "85vw"}}>
      <PDFViewer className="pdf-Con" showToolbar={false}>
        <PdfDocument person={props.person} />
      </PDFViewer>

      <div className="download-link">
        <Button>
        <PDFDownloadLink
          document={<PdfDocument person={props.person} />}
          fileName={`${props.person.name}.pdf`}
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading..." : "Download Report"
          }
        </PDFDownloadLink>
        </Button>
      </div>
    </div>
  );
}

export default PDF;
