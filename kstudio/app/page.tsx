"use client";

import { useState } from "react";
import Image from "next/image";
import Scene from "./components/Scene";

export default function Home() {
  const [rangeValue, setRangeValue] = useState(0);

  return (
    <div className="content-wrapper">
      <Scene rangeValue={rangeValue} />
      <input
        type="range"
        className="range-slider"
        min={0}
        max={10}
        value={rangeValue}
        onChange={(e) => setRangeValue(Number(e.target.value))}
      />
    </div>
  );
}