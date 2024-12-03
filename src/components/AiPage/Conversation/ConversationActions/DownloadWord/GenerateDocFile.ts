'use client';

export function htmlToDocLink ({content}: {
    content: string
}) {
    const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
    const footer = "</body></html>";

    const html = header + content + footer;
    const blob = new Blob(['\ufeff', html], {
        type: "application/msword"
    })

    const url = window.URL.createObjectURL(blob);
    return url;
} 