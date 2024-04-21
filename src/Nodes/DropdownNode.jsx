import React from "react";
import { Handle } from "reactflow";

// Styled
import { StyledOutputNode } from "../styled";

const options = ["HTML", "CSS", "JavaScript", "React", "Redux"];

const DropdownNode = ({ data, onChange }) => {
  const onChangeFn = (event) => {
    onChange(event.target.value);
  };
  return (
    <StyledOutputNode>
      <label>{data.label}</label>
      <select onChange={onChangeFn} value={data.value}>
        <option>Please choose one option</option>
        {options.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
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

export default DropdownNode;
