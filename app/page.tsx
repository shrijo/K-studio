"use client";

import { useState } from "react";
import Image from "next/image";
import Scene from "./components/Scene/Scene";
import Controlls from "./components/Controlls/Controlls";

export default function Home() {
  return (
    <div className="content-wrapper">
      {/* <input
        type="range"
        className="range-slider"
        min={0}
        max={10}
        step={0.01}
        value={rangeValue}
        onChange={(e) => setRangeValue(Number(e.target.value))}
      /> */}
      <Scene />
    </div>
  );
}
