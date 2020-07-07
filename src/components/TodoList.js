import React from 'react';
import Todo from './Todo';
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

class TodoList {
    constructor(props) {

        return 
    }

    render() {
        return (
            <div className='tasks-list'>
                {props.tasks.map(task => (
                    <Todo toggleTask={props.toggleTask} key={task.id} item={task} />
                ))}
            </div>
        )
    }
}

export default TodoList;
