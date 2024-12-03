import { RiFileWordLine } from "@remixicon/react"
import { useEffect, useState } from "react"
import { htmlToDocLink } from "./DownloadWord/GenerateDocFile"

const DownloadWord = () => {

    const [downloadLink, setDownloadLink] = useState('#')

    useEffect(() => {
        const docLink = htmlToDocLink({content: 'hello'})
        setDownloadLink(docLink);
    }, [])

    return (
        <a href={downloadLink ? downloadLink : '#'} download={'Document.docx'} className="flex gap-2 py-3 px-4 bg-[#ffffff08] rounded-lg shadow-md hover:bg-white hover:text-secodary-color">
            <RiFileWordLine size={20} />
            <p className="m-0 text-sm font-medium">Download Word</p>
        </a>
    )
}

export default DownloadWord