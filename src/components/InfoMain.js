// #region imports
import React, { useState } from "react"
import { Document, Page, pdfjs } from 'react-pdf';
import resume from "../data/resume.pdf"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
// #endregion
export const InfoMain = (props) => {
    return (
        <div class="main">
            <div class="infomain">
                <a class="btn" href={resume} target="_blank" rel="noreferrer">Open Resume &rarr;</a>
            </div>
            <div class="document">
                <Document file={resume}>
                    <Page pageNumber={1}/>
                </Document>
            </div>
        </div>
    );
};