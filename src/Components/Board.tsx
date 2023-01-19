import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DragabbleCard from "./DragabbleCard";

const Wrapper = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.bgColor};
  border-radius: 5px;
  min-height: 200px;
`;

interface IBoardProps {
  toDos: string[];
  boardId: string;
}

function Board({ toDos, boardId }: IBoardProps) {
  return (
    <Droppable droppableId="one">
      {(magic) => (
        <Wrapper ref={magic.innerRef} {...magic.droppableProps}>
          {toDos.map((toDo, index) => (
            <DragabbleCard toDo={toDo} key={toDo} index={index} />
          ))}
          {magic.placeholder}
        </Wrapper>
      )}
    </Droppable>
  );
}

export default Board;
