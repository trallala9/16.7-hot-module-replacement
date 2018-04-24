import React from 'react';
import style from './TodoList.css';
import Todo from '../components/Todo';

const TodoList = props => {
        let todos = props.items.map(item => < Todo key = {
                item.id
            }
            id = {
                item.id
            }
            text = {
                item.text
            }
            remove = {
                props.remove
            }
            />);

            return ( <
                div className = {
                    style.TodoList
                } >
                <
                h1 > TodoList < /h1> <
                ul > {
                    todos
                } <
                /ul> < /
                div >
            );
        }

        export default TodoList
