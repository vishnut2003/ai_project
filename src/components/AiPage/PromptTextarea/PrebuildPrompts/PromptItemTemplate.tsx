import prebuildPrompts from "./PromptItems"

const PromptItemTemplate = () => {
  return (
    <div className="w-full">
        {
            prebuildPrompts.map((mainItem, index) => (
                <div key={index}>
                    <p>{mainItem.category}</p>
                </div>
            ))
        }
    </div>
  )
}

export default PromptItemTemplate