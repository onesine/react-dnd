const initialComplexData = {
    tasks: {
        "task-1": { id: "task-1", content: "Take out the garbage" },
        "task-2": { id: "task-2", content: "Watch my favorite show" },
        "task-3": { id: "task-3", content: "Design a prototype" },
        "task-4": { id: "task-4", content: "Organize photo shoot" },
        "task-5": { id: "task-5", content: "Bring a umbrella" },
        "task-6": { id: "task-6", content: "Polish brand idea" },
        "task-7": { id: "task-7", content: "Meet a laura" },
        "task-8": { id: "task-8", content: "Cook my dinner" },
        "task-9": { id: "task-9", content: "Watch Movie" },
        "task-10": { id: "task-10", content: "Learn JavaScrip" },
        "task-11": { id: "task-11", content: "Learn PHP" },
        "task-12": { id: "task-12", content: "Learn CSS" },
    },
    columns: {
        "column-1": {
            id: "column-1",
            title: "To do",
            taskIds: ["task-1", "task-2", "task-3", "task-4"],
        },
        "column-2": {
            id: "column-2",
            title: "In progress",
            taskIds: [],
        },
    },
    columnOrder: ["column-1", "column-2"],
};

export default initialComplexData;