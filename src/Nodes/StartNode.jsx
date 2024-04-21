import React from "react";
import { Handle } from "reactflow";

// Styled
import { StyledInputNode } from "../styled";

const InputNode = ({ data }) => (
  <StyledInputNode>
    {data.label}
    <Handle
      type="source"
      position="bottom"
      style={{ background: "#555", width: "10px", height: "10px" }}
    />
  </StyledInputNode>
);

export default InputNode;
