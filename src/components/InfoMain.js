// #region imports
import React, { useState } from "react"
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
// #endregion
export const InfoMain = (props) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
      }

    return (
        <div class="main">
            <div class="infomain row">
                <div class="col-6">
                    <Document file="/resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                        <Page pageNumber={pageNumber}/>
                    </Document>
                </div>                
                <div class="col-6">
                    <a class="btn" href="./resume.pdf" target="_blank" rel="noreferrer">Go to resume</a>
                </div>
            </div>
        </div>
    );
};