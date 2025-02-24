"use client";
import React, { useState } from "react";
import Link from "next/link";

const Togglebar = () => {
  const [activeItem, setActiveItem] = useState("");

  const toggleMenu = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="w-fit bg-slate-50 text-slate-800 p-4 shadow-md rounded-lg m-auto mt-3">
      <ul className="flex space-x-6">
        <Link href="/">
          <li
            className={`p-2 rounded cursor-pointer hover:bg-slate-200 ${
              activeItem === "websites" ? "bg-slate-200" : ""
            }`}
            onClick={() => toggleMenu("websites")}
          >
            Websites
          </li>
        </Link>
        <Link href="/Files">
          <li
            className={`p-2 rounded cursor-pointer hover:bg-slate-200 ${
              activeItem === "files" ? "bg-slate-200" : ""
            }`}
            onClick={() => toggleMenu("files")}
          >
            Files
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Togglebar;
