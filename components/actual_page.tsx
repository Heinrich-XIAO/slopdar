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
  const scanRepo = async () => {
    console.log(`${repoUrl}`);
    const response = await fetch(
      `/api/check_repo?repo=${encodeURIComponent(repoUrl)}`
    );
    const json = await response.json();
    console.log(json);
  }
  return (
    <div className="w-full flex flex-col gap-4">
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
        Scan repo for AI slop
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/1/12/Full_image_of_Tung_Tung_Tung_Sahur.png"
          alt="Tung Tung Tung Sahur"
          width={40}
          height={40}
          className="size-15"
        />
      </Button>
    </div>
  );
}
