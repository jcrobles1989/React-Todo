import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const tasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: tasks
    }
  }

  addTask = taskName => {
    const newTask = {
      task: taskName,
      id: new Date(),
      completed: false
    };
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  removeTask = () => {
    this.state.tasks.filter(task => task.completed === true)
  }

  toggleTask = taskId => {
    this.setState({
      tasks: this.state.tasks.map(item => {
        if (item.id === taskId) {
          return {
            ...item, 
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    })
  }


  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h1>Todo List:</h1>
        </div>
        <TodoList toggleTask={this.toggleTask} tasks={this.state.tasks} />
        <div className='inputField'>
          <TodoForm addTask={this.addTask} removeTask={this.removeTask} />
        </div>
      </div>
    );
  }
}

export default App;
