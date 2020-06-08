import React, { Component } from 'react';

class Task extends Component {

    render() {
        return ( 
            <li>
                {this.props.task.title}
                <button onClick={this.props.onDelete.bind(this, this.props.task)}>Delete</button>
            </li>
        );
    }

}

export default Task;