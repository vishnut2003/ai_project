import { RiBardFill } from "@remixicon/react";

const ConversationLoadingEffect = () => {
  return (
    <div className="flex flex-nowrap gap-2 max-w-[95%] md:max-w-[60%] w-full p-6 rounded-md self-start">
      <div>
        <RiBardFill size={20} />
      </div>
      <div className="flex flex-col gap-2 w-full">
        {[1, 2, 3].map((key) => (
          <div
            key={key}
            className={`p-[5px] rounded-lg shadow-md animate-pulse ${
              key === 3 ? "w-1/3" : "w-full"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ConversationLoadingEffect;
