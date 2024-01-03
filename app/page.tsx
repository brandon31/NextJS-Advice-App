"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { MdRefresh } from "react-icons/md";

export default function Home() {
  const [advice, setAdvice] = useState<string>("");
  const [id, setId] = useState<number>(0);

  const fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice, id } = response.data.slip;
        setAdvice(advice);
        setId(id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchAdvice();
  }, []);
  return (
    <main className="flex h-screen w-full flex-col items-center pt-16 px-6">
      <div
        className="mx-4 flex items-center w-full p-3 flex-col text-center bg-emerald-900 rounded-md"
        style={{ maxWidth: "800px" }}
      >
        <h1 className="text-emerald-100 my-3 text-3xl">
          Inspire<span className="text-emerald-500">Me</span>
        </h1>
        <p className="text-center text-sm tracking-wider text-emerald-500">
          Recieve tailored advice that sparks motivation and guides you towards
          a brighter tomorrow.
        </p>
        <p className="flex items-center gap-2 my-3 text-emerald-200 text-2xl">
          <AiOutlineFieldNumber className="text-3xl" />
          {id}
        </p>
        <p className="text-emerald-200 text-sm">"{advice}"</p>
        <button
          className="flex items-center gap-2 text-emerald-900 bg-emerald-200 rounded-full p-2 mt-6 shadow-md"
          onClick={fetchAdvice}
        >
          <MdRefresh className="text-4xl" />
        </button>
        <p className="text-emerald-500 text-sm mt-3 tracking-wider">
          - press the button for a new Advice -
        </p>
      </div>
    </main>
  );
}
