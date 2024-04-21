import React from "react";
import { Handle } from "reactflow";

// Styled
import { StyledOutputNode } from "../styled";

const OutputNode = ({ data }) => (
  <StyledOutputNode>
    {data.label}
    <Handle
      type="target"
      position="top"
      style={{ background: "#555", width: "10px", height: "10px" }}
    />
  </StyledOutputNode>
);

export default OutputNode;
