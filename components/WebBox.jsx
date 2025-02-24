"use client";
import { useEffect, useState } from "react";

const websites = [
  {
    status: true,
    title: "React",
    img: "/reactIcon.png",
    category: "frontend",
  },
  {
    status: true,
    title: "Angular",
    img: "/angular.png",
    category: "frontend",
  },
  {
    status: true,
    title: "Html",
    img: "/html.png",
    category: "frontend",
  },
  {
    status: true,
    title: "Css",
    img: "/css.png",
    category: "frontend",
  },
  {
    status: true,
    title: "Sql",
    img: "/sql.png",
    category: "backend",
  },
  {
    status: false,
    title: "Node Js",
    img: "/node.png",
    category: "backend",
  },
];

const WebBox = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(websites);
  }, []);

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 p-6">
      {data.map((item, index) => (
        <div
          key={index}
          className="relative p-4 flex flex-col justify-center items-center bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer"
        >
          <span
            className={`absolute top-2 right-2 ${
              item.status
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            } text-xs font-semibold px-2 py-1 rounded`}
          >
            {item.status ? "Active" : "Disabled"}
          </span>

          <img src={item.img} alt={item.title} className="w-12 h-12 my-3" />

          <h2 className="text-lg font-bold text-center">{item.title}</h2>

          <p className="text-sm bg-[#eee] text-gray-700 px-2 rounded-lg">
            {item.category}
          </p>
        </div>
      ))}
    </div>
  );
};

export default WebBox;
