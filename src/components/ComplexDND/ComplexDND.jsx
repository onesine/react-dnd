import React, {useState} from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import initialComplexData from "../../constants/initialComplexData";
import Column from "./Column";

const Container = styled.div`
    display: flex;
`;

class InnerList extends React.PureComponent {
    render() {
        const {column, taskMap, index} = this.props;
        const tasks = column.taskIds.map(taskId => taskMap[taskId]);
        return (
            <Column key={column.id} column={column} tasks={tasks} index={index}/>
        );
    }
}

const ComplexDND = (props) => {
    const [state, setState] = useState(initialComplexData);
    const ondDragStart = (start, provided) => {
        provided.announce(
            `Your have lifted the task in position ${start.source.index + 1}`,
        );
        document.body.style.color = 'orange';
        document.body.style.transition = `background-color 0.2s ease`;
    };

    const onDragUpdate = (update, provided) => {
        const message = update.destination ?
            `You have moved the task to position ${update.destination.index + 1}`
            : `You are currently not over a droppable area`
        ;
        provided.announce(message);
    };

    const onDragEnd = (result, provided) => {
        const message = result.destination ?
            `You have moved the task to position ${result.source.index + 1} to ${result.destination.index + 1}`
            : `The task has been returned to its starting position of ${result.source.index + 1}`
        ;

        provided.announce(message);

        document.body.style.color = 'inherit';
        document.body.style.backgroundColor = 'inherit';

        const { destination, source, draggableId, type } = result;

        if(!destination) {
            return;
        }

        if (destination.droppabledId === source.droppableId && destination.index === source.index) {
            return;
        }

        if (type === 'column') {
            const newColumnOrder = Array.from(state.columnOrder);
            newColumnOrder.splice(source.index, 1);
            newColumnOrder.splice(destination.index, 0, draggableId);

            const newState = {
                ...state,
                columnOrder: newColumnOrder,
            };

            setState(newState);
            return;
        }

        const start = state.columns[source.droppableId];
        const finish = state.columns[destination.droppableId];

        if (start === finish) {
            const newTaskIds = Array.from(start.taskIds);
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);
            const newColumn = {
                ...start,
                taskIds: newTaskIds
            };

            const newState = {
                ...state,
                columns: {
                    ...state.columns,
                    [newColumn.id]: newColumn,
                }
            };

            setState(newState);
            return;
        }

        const startTaskIds = Array.from(start.taskIds);
        startTaskIds.splice(source.index, 1);
        const newStart = {
            ...start,
            taskIds: startTaskIds,
        };

        const finishTaskIds = Array.from(finish.taskIds);
        finishTaskIds.splice(destination.index, 0, draggableId);
        const newFinish = {
            ...finish,
            taskIds: finishTaskIds,
        };

        const newState = {
            ...state,
            columns: {
                ...state.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish,
            },
        };

        setState(newState);
    };

    return (
        <DragDropContext
            onDragStart={ondDragStart}
            onDragUpdate={onDragUpdate}
            onDragEnd={onDragEnd}
        >
            <Droppable
                droppableId={"all-columns"}
                direction={"Horizontal"}
                type={"column"}
            >
                {(provided) => (
                    <Container
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {
                            state.columnOrder.map( (columnId, index) => {
                                const column = state.columns[columnId];

                                return (
                                    <InnerList
                                        key={columnId}
                                        column={column}
                                        taskMap={state.tasks}
                                        index={index}
                                    />
                                );
                            })
                        }
                        {provided.placeholder}
                    </Container>
                )}

            </Droppable>
        </DragDropContext>
    );
};

export default ComplexDND;