import React from 'react';
import m from './../../app.module.scss';
import TodoItemContainer from './todoItemContainer/TodoItemContainer';

const TodoList = (props) => {
    return (
        <div className={m.todoList}>
            {
                props.items.map(item =>
                    <TodoItemContainer
                        id={item.id}
                        header={item.header}
                        description={item.description}
                        date={item.date}
                        fileId={item.fileId}
                        status={item.status}
                        key={item.id}
                    />)
            }
        </div>
    )
}

export default TodoList;