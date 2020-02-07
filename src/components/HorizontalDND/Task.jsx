import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
    border: 3px solid lightgrey;
    border-radius: 50%;
    padding: 8px;
    margin-right: 8px;
    background-color: ${props => props.isDragging ? "lightgreen" : "white" };
    width: 100px;
    height: 100px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    &:focus {
        ouline: none;
        border-color: red;
    }
`;

const Task = (props) => {
    return (
        <Draggable
            draggableId={props.task.id}
            index={props.index}
        >
            {(provided, snapshot) => (
                <Container
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                >
                    {props.task.content[0]}
                </Container>
            )}
        </Draggable>
    );
};

export default Task;