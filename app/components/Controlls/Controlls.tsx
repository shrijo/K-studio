"use client";

import React, { use } from "react";
import "./Controlls.css";
import { useAppContext } from "../../context";

const Controlls = ({
  onRangeChange,
}: {
  onRangeChange: (value: string) => void;
}) => {
  const { boxAttributes, setBoxAttributes } = useAppContext();

  return (
    <div className="controlls-wrapper p-4 absolute m-4">
      <h1 className="mb-1">Controlls</h1>
      <div className="controlls-inputs"></div>
      <label htmlFor="range-slider" className="text-xs mb-1 mt-4">
        Change
      </label>
      <input
        type="range"
        className="range-slider"
        min={0}
        max={10}
        step={0.1}
        onChange={(e) => setBoxAttributes({ size: e.target.value })}
      />
    </div>
  );
};

export default Controlls;
