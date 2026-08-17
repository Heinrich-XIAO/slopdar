"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Field,
  FieldLabel,
} from "@/components/ui/field"

export default function Main() {
  const [repoUrl, setRepoUrl] = useState("");
  const scanRepo = () => {
    console.log(`${repoUrl}`);
  }
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Field>
          <FieldLabel>GitHub Repo URL:</FieldLabel>
          <Input
            type="text"
            placeholder="Enter your GitHub repo URL"
            className="w-full"
            value={repoUrl}
            onChange={(e) => setRepoUrl(e.target.value)}
          />
        </Field>
        <Button
          onClick={scanRepo}
        >
          Scan Repo for ai slop
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/1/12/Full_image_of_Tung_Tung_Tung_Sahur.png"
            alt="Tung Tung Tung Sahur"
            width={20}
            height={20}
            className="size-5"
          />
        </Button>
      </main>
    </div>
  );
}
