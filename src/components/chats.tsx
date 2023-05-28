"use client";
import { setMsgList, useMsgList } from "@/store/msgStore";
import { Subscribe } from "@react-rxjs/core";
import React, { useEffect } from "react";
import { Avatar } from "@nextui-org/react";

type Props = {};

const Chats = (props: Props) => {
  const chats = ["hello", "hi", "How are you", "I'm fine"];

  const msgList = useMsgList();

  useEffect(() => {
    // setMsgList([
    //   "What is virtual reality (VR)?",
    //   "Virtual reality (VR) is a computer-generated simulation of a three-dimensional environment that users can interact with and explore. It typically involves the use of specialized headsets and controllers to create an immersive and realistic experience.",
    //   "What is machine learning?",
    //   "Machine learning is a subset of artificial intelligence (AI) that focuses on developing algorithms and models that enable computers to learn from and make predictions or decisions based on data without being explicitly programmed. It involves training models on sample data and using them to analyze and interpret new data.",
    //   "What is a firewall?",
    //   "A firewall is a network security device that monitors and controls incoming and outgoing network traffic based on predetermined security rules. It acts as a barrier between internal and external networks, protecting against unauthorized access and potential threats.",
    //   "What is a database?",
    //   "A database is an organized collection of structured data stored and accessed electronically. It allows users to store, retrieve, and manipulate data efficiently.A database is an organized collection of structured data stored and accessed electronically. It allows users to store, retrieve, and manipulate data efficiently.",
    // ]);
  }, []);

  return (
    <div className="w-full">
      {msgList.map((m, i) => {
        return i % 2 != 0 ? (
          <div key={i} className="flex w-full justify-start m-1 gap-1">
            <Avatar text="CB" size="md" />{" "}
            <div className="bg-[#146C94] text-white rounded-md p-2 w-4/5">
              {m}
            </div>
          </div>
        ) : (
          <div key={i} className="flex w-full justify-end m-1 gap-1">
            <div className="bg-[#19A7CE] p-2 rounded-md w-4/5">{m}</div>{" "}
            <Avatar text="ME" size="md" />
          </div>
        );
      })}
    </div>
  );
};

export default Chats;
