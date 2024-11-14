import Image from "next/image"

const Card = ({ url, alt }: Readonly<{url: string, alt: string}>) => {
  return (
    <div style={{ position: "relative", width: "140px", height:'70px' }}>
        <Image src={url} alt={alt} width={0} height={0} style={{width: '140px', height: '70px'}} />
    </div>
  )
}

export default Card