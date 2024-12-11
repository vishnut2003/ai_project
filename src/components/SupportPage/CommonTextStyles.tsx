export function HeadingText({ children }: Readonly<{
    children: React.ReactNode
  }>) {
    return (
      <h2 className='font-semibold text-[25px]'>{children}</h2>
    )
  }
  
  export function ParaText({ children }: Readonly<{
    children: React.ReactNode
  }>) {
    return (
      <p className='font-thin text-[18px] mb-6'>{children}</p>
    )
  }
  
  export function ListItems({ items }: Readonly<{
    items: string[]
  }>) {
    return (
      <ul className='list-disc pl-8'>
        {items.map((item, index) => (
          <li className='font-thin text-[18px]' key={index}>{item}</li>
        ))}
      </ul>
    )
  }