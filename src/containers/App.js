import React from 'react';
import uuid from 'uuid';
import Title from '../components/Title';
import style from './App.css';
import TodoList from '../components/TodoList';
import Todo from '../components/Todo';
import TodoForm from '../components/TodoForm';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "This is ToDo List app",
            data: [{
                    id: 1,
                    text: 'zadanie  do zrobienia 1'
                }, {
                    id: 2,
                    text: 'zadanie do wykonania 2'
                }, {
                    id: 3,
                    text: 'zadanie do ogarniecia 3'
                }
            ]
        };
    }
    addTodo(val) {
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({
            data
        });
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({
            data: remainder
        });
    }
    render() {
        return ( <
            div className = {
                style.TodoApp
            } >
            <
            Title title = {
                this.state.title
            }
            noumber = {
                this.state.data.length
            }
            /> <
            TodoForm addTodo = {
                (value) => this.addTodo(value)
            }
            />   <
            TodoList items = {
                this.state.data
            }
            remove = {
                (id) => this.removeTodo(id)
            }
            />                < /
            div >
        );
    }
}

export default App;
//skonczylam na loader dla css
