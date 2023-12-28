"use client";

export default function TitleHP() {
  // { text }: { text: string }
  return (
    <div className="py-2 flex items-center justify-center text-center">
      <span className="font-semibold xl:text-6xl sm:text-5xl text-3xl bg-gradient-to-r from-[#4dbdfd] to-[#0ef1b9] inline-block text-transparent bg-clip-text drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        Welcome to my site!
      </span>
    </div>
  );
}
