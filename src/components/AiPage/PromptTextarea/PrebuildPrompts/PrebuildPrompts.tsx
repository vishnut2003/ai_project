import { RiAddLine, RiCloseLargeFill, RiMenuAddFill, RiSearchLine } from "@remixicon/react"
import { useState } from "react";
import { motion } from 'framer-motion';
import PromptItemTemplate from "./PromptItemTemplate";

const PrebuildPrompts = () => {
    const [promptPopup, setPromptPopup] = useState(false);
    return (
        <div>
            <button
                onClick={() => setPromptPopup(true)}
                className="flex flex-nowrap justify-center items-center gap-1 bg-[#ffffff07] hover:bg-white hover:text-secodary-color text-white font-semibold py-3 px-5 rounded-lg rounded-b-none text-sm">
                Prompts
                <RiAddLine size={20} />
            </button>

            {/* Prompt Popup */}
            {
                promptPopup &&
                <div className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center p-5 bg-[#00000000]">
                    <motion.div
                        initial={{
                            scale: 0.5,
                        }}
                        animate={{
                            scale: 1
                        }}
                        className="max-w-md w-full bg-secodary-color p-6 rounded-lg shadow-2xl shadow-[#00000080] flex flex-col gap-5 justify-between items-center">

                        <div className="flex w-full justify-between items-center">
                            <h2 className="text-xl font-thin">Prebuild Prompts</h2>
                            <button onClick={() => setPromptPopup(false)}>
                                <RiCloseLargeFill size={23} />
                            </button>
                        </div>
                        <div className="w-full">
                            <div className="flex flex-col gap-3 justify-between items-center w-full">
                                <button className="flex justify-between items-center w-full rounded-md bg-gradient-to-br from-white to-[#ffffff90] text-secodary-color px-4 py-3">
                                    <p className="m-0">Create new prompt</p>
                                    <RiMenuAddFill size={20} />
                                </button>
                                <div className="flex justify-center w-full gap-3 items-center">
                                    <RiSearchLine size={20} />
                                    <input type="text" placeholder="Search Prompt..." className="bg-transparent outline-none w-full" />
                                </div>
                                <PromptItemTemplate/>
                            </div>
                        </div>
                    </motion.div>

                </div>
            }
        </div>
    )
}

export default PrebuildPrompts