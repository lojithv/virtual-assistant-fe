"use client";
import React, { useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { supabase } from "@/auth/instance";

type Props = {};

const page = (props: Props) => {
  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  }

  return (
    <div className="flex w-full min-h-screen justify-center items-center bg-white">
      <div onClick={signInWithGoogle} className="bg-[#2bb1ff] p-2 rounded-md cursor-pointer text-white">
        sign in
      </div>
    </div>
  );
};

export default page;
