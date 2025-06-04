'use client';

import { getChatNameByChatId, updateChatNameByChatId } from "@/utils/client/historyHelper";
import { RiLoader4Line } from "@remixicon/react";
import { useEffect, useState } from "react"

const RenameChat = ({
    chatId,
    onCancel,
    onSuccess,
}: {
    chatId: string,
    onCancel: () => void,
    onSuccess: () => void,
}) => {

    const [chatName, setChatName] = useState<string>('Loading...');
    const [disableInput, setdisableInput] = useState<boolean>(true);
    const [inProgress, setInProgress] = useState<boolean>(false);

    const actionButtons: {
        text: string,
        onClick: () => void,
        className: string,
    }[] = [
        {
            text: "Rename",
            onClick: () => {
                setInProgress(true);
                updateChatNameByChatId({
                    chatId,
                    newChatName: chatName,
                }).then(() => {
                    onSuccess();
                }).finally(() => setInProgress(false))
            },
            className: "bg-white text-black",
        },
        {
            text: "Close",
            onClick: () => {
                onCancel();
            },
            className: "bg-red-500",
        },
    ]

    useEffect(() => {
        getChatNameByChatId(chatId)
            .then((chatName) => {
                setChatName(chatName);
                setdisableInput(false);
            })
    }, [chatId]);

    return (
        <div
            className="z-50 fixed top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center"
        >
            <div
                className="flex flex-col gap-3 items-end justify-center max-w-[350px] w-full bg-secodary-color p-4 shadow-2xl rounded-md"
            >
                <h2
                    className="w-full text-xl font-semibold"
                >Rename Chat</h2>
                <input
                    type="text"
                    value={chatName}
                    onChange={(e) => setChatName(e.target.value)}
                    className="border-0 bg-white/10 outline-none w-full py-2 px-4 rounded-md"
                    disabled={disableInput}
                />
                <div
                    className="flex gap-3 items-center"
                >
                    {
                        inProgress &&
                        <RiLoader4Line
                            size={20}
                            className="animate-spin"
                        />
                    }
                    {
                        actionButtons.map((button, index) => (
                            <button
                                key={index}
                                className={`${button.className} py-2 px-4 rounded-md font-semibold text-sm`}
                                onClick={button.onClick}
                            >
                                {button.text}
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default RenameChat