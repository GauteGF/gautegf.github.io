// src/TerminalDisplay.tsx

import React from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { tomorrowNight as theme } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FiClipboard } from "react-icons/fi"; // You can use an icon library like react-icons

interface TerminalDisplayProps {
  commands: string;
}

const Terminal: React.FC<TerminalDisplayProps> = ({ commands }) => {
  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#282c34",
        borderRadius: "8px",
        fontFamily: "monospace",
        margin: "10px 0",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#3b3d3f",
          padding: "8px 12px",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        }}
      >
        <span style={{ color: "#a6a8a8" }}>bash</span>
        <CopyToClipboard text={commands}>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "transparent",
              border: "none",
              color: "#a6a8a8",
              cursor: "pointer",
            }}
          >
            <FiClipboard style={{ marginRight: "5px" }} />
            Copy code
          </button>
        </CopyToClipboard>
      </div>
      <div
        style={{
          backgroundColor: "#282c34",
          borderBottomLeftRadius: "8px",
          borderBottomRightRadius: "8px",
          overflowX: "auto", // Ensure horizontal scroll if needed
          height: "auto", // Ensure proper height
        }}
      >
        <pre
          style={{
            margin: 0,
            marginLeft: "-100px", //CURSED BUT IT WORKS FOR NOW
            padding: 0,
            whiteSpace: "pre-wrap", // Ensure text wrapping and alignment
            overflow: "hidden", // Prevent any extra overflow
          }}
        >
          <code
            style={{
              textAlign: "left", // Align text to the left
              margin: 0,
              padding: 0,
            }}
          >
            {commands}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Terminal;
