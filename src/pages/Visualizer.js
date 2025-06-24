import React from "react";
import { bubbleSort } from "../utils/algorithms/bubbleSort";
import CodeHighlighter from "../components/CodeHighlighter";
import LineByLineExplain from "../components/LineByLineExplain";

const Visualizer = () => {
  const input = [5, 2, 8, 1];
  const steps = bubbleSort(input);
  const explanation = steps.map((s, i) => `Step ${i + 1}: ${s.join(", ")}`);

  const code = `
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
  `;

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Bubble Sort Visualization</h2>
      <CodeHighlighter code={code} />
      <LineByLineExplain explanations={explanation} />
    </div>
  );
};

export default Visualizer;
