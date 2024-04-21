import React from "react";
import { Handle } from "reactflow";

// Styled
import { StyledOutputNode } from "../styled";

const InputNode = ({ data, onChange }) => {
  const onChangeFn = (event) => {
    onChange(event.target.value);
  };

  return (
    <StyledOutputNode>
      <label>{data.label}</label>
      <input type="text" value={data.value} onChange={onChangeFn} />
      <Handle
        type="target"
        position="top"
        style={{ background: "#555", width: "10px", height: "10px" }}
      />
      <Handle
        type="source"
        position="bottom"
        style={{ background: "#555", width: "10px", height: "10px" }}
      />
    </StyledOutputNode>
  );
};

export default InputNode;
