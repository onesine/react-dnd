import React from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
`;
const Title = styled.h3`
    padding: 8px;
`;
const TaskList = styled.div`
    padding: 8px;
    transition: background-color 2s ease;
    background-color: ${(props) => props.isDraggingOver ? "skyblue" : "#f3f3f3" };
    
    display: flex;
`;

const Column = (props) => {
    return (
       <Container>
           <Title>{props.column.title}</Title>
           <Droppable
               droppableId={props.column.id}
               direction={"horizontal"}
           >
               {(provided, snapshot) => (
                   <TaskList
                       ref={provided.innerRef}
                       {...provided.droppableProps}
                       isDraggingOver={snapshot.isDraggingOver}
                   >
                       {props.tasks.map( (task, index) => (<Task key={task.id} task={task} index={index}/>))}
                       {provided.placeholder}
                   </TaskList>
               )}
           </Droppable>
       </Container>
    )
};

export default Column;