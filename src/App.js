import React, { Component } from 'react';
import './App.css';
import AddTaskForm from './AddTaskForm';
import Task from './Task';


class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            tasks: [],
        }
    }

    addTask(task) {
        this.setState({
            tasks: [...this.state.tasks, task]
        });
    }

    deleteTask(taskToDel) {
        this.setState({
            tasks: this.state.tasks.filter(task => task !== taskToDel)
        });
        /*  
        PREFARABLE FOR PERFORMANCES:

            const newTasks = [...this.state.tasks];
            const index = this.state.tasks.indexOf(taskToDel);
            newTasks.splice(index, 1);
            this.setState({
                tasks: newTasks
            });
        */
    }

    render() {
        return ( 
            <div>
            <br />
            <br />
            <br />
                <AddTaskForm onAdd={this.addTask.bind(this)}/>
                <ul>
                    {this.state.tasks.map((task, index) => {
                        return <Task key={index} 
                                    task={task}
                                    index={index}
                                    onDelete={this.deleteTask.bind(this)}
                                />
                    })}
                </ul>
            </div>
        );
    }

}

export default App;