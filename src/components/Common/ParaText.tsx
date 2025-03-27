import { ReactNode } from "react"

const ParaText = ({ className, children }: {
    className?: string,
    children: ReactNode,
}) => {
    return (
        <p
            className={`text-base leading-8 text-secodary-color/80 ${className}`}
        >{children}</p>
    )
}

export default ParaText