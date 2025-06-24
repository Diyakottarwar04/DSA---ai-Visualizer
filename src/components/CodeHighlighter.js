import React from "react";
import "../styles/CodeHighlighter.css";

const CodeHighlighter = ({ code }) => (
  <pre className="code-container">
    <code>{code}</code>
  </pre>
);

export default CodeHighlighter;
