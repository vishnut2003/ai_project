import TripleDotLoading from "@/components/TripleDotLoading/TripleDotLoading";
import { getAllCustomPrompt } from "@/utils/client/customPromptHelper"
import { RiAddLine } from "@remixicon/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react"

const CustomPromptItems = ({ setInputPrompt, setPromptPopup }: {
    setInputPrompt: Dispatch<SetStateAction<string>>,
    setPromptPopup: Dispatch<SetStateAction<boolean>>
}) => {

    const [customPromptsList, setCustomPromptList] = useState<string[] | undefined>([]);
    const [fetchingInProgress, setFetchingInProgress] = useState<boolean>(false)

    useEffect(() => {
        setFetchingInProgress(true);
        getAllCustomPrompt()
            .then((prompts) => {
                setCustomPromptList(prompts);
                setFetchingInProgress(false);
            })
    }, [])

    return (
        <div className="max-h-[300px] overflow-y-auto p-2">
            {
                fetchingInProgress ?
                    <TripleDotLoading /> :
                    <div className="h-max flex flex-col-reverse gap-2">
                        {customPromptsList?.map((prompt, index) => (
                            <div key={index} className="w-full flex justify-between items-center py-3 px-4 rounded-lg bg-secodary-color hover:bg-white/5">
                                <p className="m-0">{prompt}</p>
                                <RiAddLine onClick={() => {
                                    setInputPrompt(prompt);
                                    setPromptPopup(false);
                                }}
                                    size={20} className="cursor-pointer" />
                            </div>
                        ))}
                    </div>
            }
        </div>
    )
}

export default CustomPromptItems