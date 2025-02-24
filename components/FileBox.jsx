"use client";
import { useEffect, useState } from "react";
import { FiFolder, FiMoreHorizontal } from "react-icons/fi";

const files = [
  {
    title: "Project Management",
    tumb: "/file.png",
    meeting: "2",
  },
  {
    title: "Design",
    img: "/file.png",
    meeting: "4",
  },
  {
    title: "UI UX",
    img: "/file.png",
    meeting: "23",
  },
  {
    title: "Backend",
    img: "/file.png",
    meeting: "56",
  },
  {
    title: "frontend",
    img: "/file.png",
    meeting: "3",
  },
  {
    title: "PR",
    img: "/file.png",
    meeting: "4",
  },
];

const FileBox = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(files);
  }, []);

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 p-6">
      {data &&
        data.map((file, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow relative"
          >
            <FiFolder className="text-purple-500 text-4xl" />

            <FiMoreHorizontal className="absolute top-4 right-4 text-gray-400 cursor-pointer" />

            <h2 className="mt-4 text-lg font-semibold text-gray-800">
              {file.title}
            </h2>

            <p className="text-sm text-gray-500">{file.meeting} meetings</p>
          </div>
        ))}
    </div>
  );
};

export default FileBox;
