"use client";
import CharacterCount from "@/components/charcount";
import Chats from "@/components/chats";
import TextInput from "@/components/textInput";
import { msgList$, setMsgList, useMsgList } from "@/store/msgStore";
import { Subscribe } from "@react-rxjs/core";
import axios from "axios";
import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";

export default function Home() {
  const [msg, setMsg] = useState("");

  const msgList = useMsgList();

  const sendMsg = () => {
    console.log("msg");
    setMsgList([...msgList, msg]);
    axios
      .post("http://127.0.0.1:5000/chat", {
        q: msg,
      })
      .then((response) => {
        console.log(response);
        console.log(msgList$.getValue());
        setMsgList([...msgList$.getValue(), response.data.a]);
      });
    setMsg("");
  };

  const handleMsgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setMsg(e.target.value);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <Subscribe>
        <div className="flex flex-col grow w-2/3">
          <div className="flex grow w-full mb-2">
            <Chats />
          </div>
          <div className="flex justify-between w-full gap-2">
            <input
              type="text"
              value={msg}
              onChange={handleMsgChange}
              className="flex grow w-full bg-white h-12 rounded-md text-black p-2"
            />
            <button
              type="button"
              id="bt"
              className="w-20 bg-[#258ab6] hover:bg-[#35a6d6] rounded-md"
              onClick={sendMsg}
            >
              Send
            </button>
          </div>
        </div>
      </Subscribe>
    </main>
  );
}
