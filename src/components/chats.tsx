import React from "react";

type Props = {};

const Chats = (props: Props) => {
  const chats = ["hello", "hi", "How are you", "I'm fine"];
  
  return (
    <div className="w-full">
      {chats.map((m, i) => {
        return i % 2 != 0 ? (
          <div key={i} className="flex w-full justify-start">
            <div className="bg-[#146C94] p-2">{m}</div>
          </div>
        ) : (
          <div key={i} className="flex w-full justify-end">
            <div className="bg-[#19A7CE] p-2">{m}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Chats;
