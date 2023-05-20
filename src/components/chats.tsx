"use client";
import { setMsgList, useMsgList } from "@/store/msgStore";
import { Subscribe } from "@react-rxjs/core";
import React, { useEffect } from "react";

type Props = {};

const Chats = (props: Props) => {
  const chats = ["hello", "hi", "How are you", "I'm fine"];

  const msgList = useMsgList()

  useEffect(() => {
    setMsgList(["hello", "hi", "How are you", "I'm fine"]);
  }, []);
  
  return (
    <div className="w-full">
      {msgList.map((m, i) => {
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
