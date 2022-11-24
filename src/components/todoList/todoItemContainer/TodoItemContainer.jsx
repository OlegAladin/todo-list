import React, { useState } from 'react';
import TodoItemEdit from './todoItemEdit/TodoItemEdit';
import TodoItem from './todoItem/TodoItem';



const TodoItemContainer = (props) => {
    const [editMode, setEditMode] = useState(false);

    return (
        <div className='todoItemContainer'>
            {
                !editMode
                    ? <TodoItem
                        id={props.id}
                        header={props.header}
                        description={props.description}
                        data={props.data}
                        fileId={props.fileId}
                        status={props.status}
                        changeStatus={props.changeStatus}
                        setEditMode={setEditMode}
                        deleteItem={props.deleteItem}
                    />
                    : <TodoItemEdit
                        id={props.id}
                        header={props.header}
                        description={props.description}
                        date={props.date}
                        fileId={props.fileId}
                        setEditMode={setEditMode}
                    />
            }
        </div>
    )
}

export default TodoItemContainer;