
export default interface WordpressBlogInterface {
    date: string | null,
    date_gmt: string | null,
    guid: object,
    id: number,
    link: string,
    modified: string,
    modified_gmt: string,
    slug: string,
    status: string,
    type: string,
    password: string,
    permalink_template: string,
    generated_slug: string,
    title: string
}