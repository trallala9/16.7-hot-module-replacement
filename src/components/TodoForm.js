import React from 'react';
import style from './TodoForm.css';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        this.props.addTodo(this.input.value);
        this.input.value = '';
        event.preventDefault();
    }

    render() {
        return ( <
            form className = {
                style.TodoForm
            }
            onSubmit = {
                this.handleSubmit
            } >
            <
            div className = "form-group" >
            <
            label > Todo: < /label> <
            textarea type = "text"
            className = "form-control"
            ref = {
                (input) => this.input = input
            }
            row = "3" / >
            <
            small className = "form-text text-muted" > Write your todo stuff < /small> < /
            div > <
            input type = "submit"
            className = "btn btn-primary"
            value = "Submit" / >
            <
            /form>
        );
    }
}


export default TodoForm
