import { Document, Page, View } from "@react-pdf/renderer";
import Markdown from "markdown-to-jsx";

const InvoiceTemplate = ({ content }: {
    content: string
}) => {
    return (
        <Document>
            <Page size={'A4'}>
                <View>
                    <Markdown>
                        {content}
                    </Markdown>
                </View>
            </Page>
        </Document>
    )
}

export default InvoiceTemplate