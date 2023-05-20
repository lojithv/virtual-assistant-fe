import Chats from "@/components/chats";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className="flex flex-col grow w-2/3">
        <div className="flex grow w-full mb-2">
          <Chats />
        </div>
        <div className="flex justify-between w-full gap-2">
          <input
            type="text"
            className="flex grow w-full bg-white h-12 rounded-md text-black p-2"
          />
          <button
            type="button"
            id="bt"
            className="w-20 bg-[#258ab6] hover:bg-[#35a6d6] rounded-md"
          >
            Send
          </button>
        </div>
      </div>
    </main>
  );
}
