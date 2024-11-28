import { PDFDownloadLink, render } from "@react-pdf/renderer"
import { RiFilePdf2Line } from "@remixicon/react"
import InvoiceTemplate from "./DownloadPdf/InvoiceTemplate"
import Markdown from "markdown-to-jsx"
import { renderToString } from "react-dom/server"

const DownloadPdf = ({ content }: {
  content: string
}) => {

  // function savePdf() {
  //   const html = renderToString(<Markdown children={content} />);

  // }

  return (
    <PDFDownloadLink document={<InvoiceTemplate content={content} />}>
      <button className="flex gap-2 py-3 px-4 bg-[#ffffff08] rounded-lg shadow-md hover:bg-white hover:text-secodary-color">
        <RiFilePdf2Line size={20} />
        <p className="m-0 text-sm font-medium">Download PDF</p>
      </button>
    </PDFDownloadLink>
  )
}

export default DownloadPdf