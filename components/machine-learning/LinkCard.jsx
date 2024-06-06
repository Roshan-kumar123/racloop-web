"use client";
import Link from "next/link";
import { useState } from "react";

export default function LinkCard({ data }) {
  let [hover, setHover] = useState(false);
  function handleMouseEnter() {
    setHover(true);
  }
  function handleMouseLeave() {
    setHover(false);
  }
  return (
    <Link
      href={data.href}
      class="inline-flex items-center justify-center p-4 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-800 dark:hover:text-black"
      style={{
        backgroundColor: "rgb(225, 150, 83)",
        opacity: hover ? 0.9 : 1,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span class="w-full">{data.title}</span>
      <svg
        class="w-4 h-4 ms-2 rtl:rotate-180"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </Link>
  );
}
