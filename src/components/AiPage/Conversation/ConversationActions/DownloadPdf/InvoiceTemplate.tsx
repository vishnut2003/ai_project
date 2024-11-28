import { Document, Page, View, Text } from "@react-pdf/renderer";
import Markdown from "markdown-to-jsx";

const InvoiceTemplate = ({ content }: {
    content: string
}) => {
    return (
        <Document>
            <Page size={'A4'}>
                <View>
                    <Text>
                        {content}
                    </Text>
                </View>
            </Page>
        </Document>
    )
}

export default InvoiceTemplate