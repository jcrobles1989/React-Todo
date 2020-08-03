import React from 'react';

class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            task: ''
        };
    }

    handleChanges = e => {

        this.setState({
            task: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.task);
        this.setState({
            task: ''
        })
    };

    handleCompletedTasks = e => {
        e.preventDefault();
        this.props.removeTask();
    }

    render() {
        return (
            <div className='todoForm'>
            <form onSubmit={this.handleSubmit}>
                <input type='text' name='task' value={this.state.task} onChange={this.handleChanges} placeholder='...todo' />
            </form>
            <button onClick={this.handleSubmit}>Add Todo</button>
            <button onClick={this.handleCompletedTasks}>Clear Completed</button>
            </div>
        )
    }
}

export default TodoForm;