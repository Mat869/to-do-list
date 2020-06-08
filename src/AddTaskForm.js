import React, { Component } from 'react';


class AddTaskForm extends Component {

    constructor(props) {
        super(props);
        this.taskInput = React.createRef();
    }

    addTask(e) {
        e.preventDefault();
        this.props.onAdd({
            title: this.taskInput.current.value
        });
        e.target.reset();
    }

    render() {
        return ( 
            <div>
                <form onSubmit={this.addTask.bind(this)}>
                    <input placeholder='Your task...' ref={this.taskInput} />
                    <button>Add</button>
                </form>
            </div>
        );
    }

}

export default AddTaskForm;