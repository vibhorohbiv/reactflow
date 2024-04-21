import React, { useMemo, useCallback } from "react";
import ReactFlow, {
  ReactFlowProvider,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";
// import { v4 as uuid } from "uuid";

// components
import StartNode from "./Nodes/StartNode";
import ResultNode from "./Nodes/ResultNode";
import InputNode from "./Nodes/InputNode";
import DropdownNode from "./Nodes/DropdownNode";

// Styled
import { StyledContainer } from "./styled";
import "reactflow/dist/style.css";

const initialNodes = [
  {
    id: "A",
    type: "group",
    data: { label: null },
    position: { x: 0, y: 0 },
  },
  {
    id: "1",
    data: {
      label: "Start",
    },
    position: { x: 100, y: 0 },
    type: "start",
    parentId: "A",
    extent: "parent",
    expandParent: true,
  },
  {
    id: "2",
    data: {
      label: "Input",
    },
    position: { x: 100, y: 0 },
    type: "input",
    parentId: "A",
    extent: "parent",
    expandParent: true,
  },
  {
    id: "3",
    data: {
      label: "Dropdown",
    },
    position: { x: 100, y: 0 },
    type: "dropdown",
    parentId: "A",
    extent: "parent",
    expandParent: true,
  },
  {
    id: "4",
    data: {
      label: "Dropdown 2",
    },
    position: { x: 100, y: 0 },
    type: "dropdown",
    parentId: "A",
    extent: "parent",
    expandParent: true,
  },
  {
    id: "5",
    data: {
      label: "Output",
    },
    position: { x: 100, y: 100 },
    type: "result",
    parentId: "A",
    extent: "parent",
    expandParent: true,
  },
];

const initialEdges = [];

const App = () => {
  const onChange = (value) => {
    console.log(value)
  }

  const nodeTypes = useMemo(
    () => ({
      start: (props) => <StartNode {...props} />,
      result: (props) => <ResultNode {...props} />,
      input: (props) => <InputNode {...props} onChange={onChange}/>,
      dropdown: (props) => <DropdownNode {...props} onChange={onChange} />,
    }),
    []
  );

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((connection) => {
    setEdges((eds) => addEdge(connection, eds));
  }, []);

  return (
    <StyledContainer>
      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          snapToGrid={true}
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      </ReactFlowProvider>
    </StyledContainer>
  );
};

export default App;
