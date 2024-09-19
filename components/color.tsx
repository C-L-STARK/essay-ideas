import React, { useState } from "react";
import { SketchPicker, GithubPicker, SwatchesPicker } from "react-color";

export default function Color() {
  const [color, setColor] = useState();

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <SketchPicker color={color} onChangeComplete={setColor} />
      <div style={{ width: 20 }}></div>
      <SwatchesPicker color={color} onChangeComplete={setColor} />
      <div style={{ width: 20 }}></div>
      <GithubPicker color={color} onChangeComplete={setColor} />
    </div>
  );
}
