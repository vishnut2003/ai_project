import Image from "next/image"

const Card = ({ url, alt }: Readonly<{url: string, alt: string}>) => {
  return (
    <div style={{ position: "relative", width: "140px", height:'70px' }}>
        <Image src={url} alt={alt} layout="fill" objectFit="contain" />
    </div>
  )
}

export default Card