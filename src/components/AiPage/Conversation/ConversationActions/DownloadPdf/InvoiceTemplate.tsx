import { Document, Page } from "@react-pdf/renderer";
import Markdown from "markdown-to-jsx";
import { renderToString } from "react-dom/server";
import {DOMParser} from 'xmldom'
import { generatePDFComponents } from "./generatePDFComponents";

const InvoiceTemplate = ({ content }: {
    content: string
}) => {

    const htmlNode = Markdown({children: content});
    const htmlContent = renderToString(htmlNode);
    const htmlJson = new DOMParser().parseFromString(htmlContent);
    const pdfElements = generatePDFComponents({nodeJson: htmlJson})

    return (
        <Document>
            <Page 
            size={'A4'}
            style={{
                padding: '40px'
            }}
            >
                {pdfElements}
            </Page>
        </Document>
    )
}

export default InvoiceTemplate