const initialState = {
    tasks: [],
    openAdd: false,
}

export default function(state = initialState, action) {
    switch(action.type) {
        case 'ADD':
            if(state.tasks.some(t => action.task === t))
                return state;
            return Object.assign({}, state, { tasks: [...state.tasks, action.task] });
        case 'DELETE':
            return Object.assign({}, state, { tasks: state.tasks.filter(task => task !== action.task) });
    }

    return state;
}