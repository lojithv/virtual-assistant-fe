"use client";
import { supabase } from "@/auth/instance";
import CharacterCount from "@/components/charcount";
import Chats from "@/components/chats";
import TextInput from "@/components/textInput";
import { msgList$, setMsgList, useMsgList } from "@/store/msgStore";
import { Subscribe } from "@react-rxjs/core";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useEffect, useState } from "react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";
import { AppProps } from "next/app";

export default function Home() {
  const [msg, setMsg] = useState("");

  const msgList = useMsgList();

  const router = useRouter();

  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  const [session,setSession] = useState()

  useEffect(() => {
    
  }, [])
  

  const sendMsg = () => {
    setMsgList([...msgList, msg]);
    axios
      .post("http://127.0.0.1:5000/chat", {
        q: msg,
      })
      .then((response) => {
        setMsgList([...msgList$.getValue(), response.data.a]);
      });
    setMsg("");
  };

  const handleMsgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMsg(e.target.value);
  };

  async function signout() {
    console.log("signout");
    await supabase.auth.signOut();
    sessionStorage.clear();
    router.push("/signin");
  }

  return (
    <SessionContextProvider
    supabaseClient={supabaseClient}
    initialSession={session}
  >
      <main className="flex min-h-screen flex-col items-center justify-between p-10 bg-white">
        <div className="flex w-full items-end justify-end">
          <div className="bg-[#aaaaaa] p-2 rounded-md" onClick={signout}>
            Logout
          </div>{" "}
        </div>
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
                className="flex grow w-full bg-[#acd3f8] h-12 rounded-md text-black p-2"
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
      </SessionContextProvider>
  );
}
