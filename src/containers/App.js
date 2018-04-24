import React from 'react';
import uuid from 'uuid';
import Title from '../components/Title';
import style from './App.css';
import TodoList from '../components/TodoList';
import Todo from '../components/Todo';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
            Title title = "ToDo List"
            number = {
                this.state.data.length
            }
            /> <
            TodoList items = {
                this.state.data
            }
            remove = {
                (id) => this.removeTodo(id)
            }
            />
            Tutaj pojawią się komponenty naszej aplikacji. <
            /div>
        );
    }
}


export default App;
//skonczylam na loader dla css
