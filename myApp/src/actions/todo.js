const add = (task) => {
    return {
        type: 'ADD',
        task
    }
}

const del = (task) => {
    return {
        type: 'DELETE',
        task
    }
}


export default { add, del }