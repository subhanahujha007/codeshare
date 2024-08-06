import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Create chat rooms across the world", "connect with people across the world", "great user experiance join in now", "build in india"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Welcome to codeshare
        <FlipWords words={words} /> <br />
        
      </div>
    </div>
  );
}
