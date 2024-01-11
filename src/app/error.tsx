"use client"; // Error components must be Client Components

import YouTubeBtn from "@/components/buttons/YouTubeBtn";
import { useEffect } from "react";

export default function Error({ error, reset }: { error: any; reset: any }) {
  // useEffect(() => {
  //   // Log the error to an error reporting service
  //   // console.error(error);
  // }, [error]);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <h2 className="text-xl p-4">Uh Oh! Something went wrong :-(</h2>
      <button
        className="p-4"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        <YouTubeBtn>{`Try again`}</YouTubeBtn>
      </button>
    </div>
  );
}
