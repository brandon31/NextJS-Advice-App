"use client";

import axios from "axios";
import { useEffect, useState } from "react";

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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello</h1>
    </main>
  );
}
