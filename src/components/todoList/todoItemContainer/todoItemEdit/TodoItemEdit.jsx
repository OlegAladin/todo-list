import React, { useState } from 'react';
import { useEdit } from '../../../../hooks/useEdit';
import m from './todoItemEdit.module.scss';
import { storage } from './../../../../firebase'
import { ref, deleteObject } from '@firebase/storage';
import { FaTrashAlt } from 'react-icons/fa';

const TodoItemEdit = (props) => {
    const [header, setHeader] = useState(props.header);
    const [description, setDescription] = useState(props.description);
    const [date, setDate] = useState(props.date);
    const [file, setFile] = useState('');
    const editItem = useEdit();

    const editItemInfo = () => {
        editItem(props.id, header, description, date, file, props.fileId);
        props.setEditMode(false)
    };

    const deleteFile = () => {
        if (props.fileId !== '') {
            const imageRef = ref(storage, `images/${props.fileId}`);
            const fileRef = ref(storage, `files/${props.fileId}`);
            deleteObject(imageRef);
            deleteObject(fileRef);
        }
    };

    return (
        <div className={m.todoItemEdit}>
            <input
                type="text"
                placeholder='Заголовок'
                maxLength='50'
                value={header}
                onChange={(e) => { setHeader(e.target.value) }}
            />
            <textarea
                placeholder='Описание'
                maxLength='250'
                value={description}
                onChange={(e) => { setDescription(e.target.value) }}
            />
            <div className={m.bottomBox}>
                <div className={m.dateAndFile}>
                    <input type="date" value={date} onChange={(e) => { setDate(e.target.value) }} />
                    <input type='file' onChange={(e) => { setFile(e.target.files[0]) }} />
                    {
                        props.fileId !== ''
                        && <FaTrashAlt className={m.deleteBtn} onClick={deleteFile} title='Удалить файл' />
                    }
                </div>
                <div className={m.buttons}>
                    <button className={m.cancelBtn} onClick={() => { props.setEditMode(false) }}>Отмена</button>
                    <button onClick={editItemInfo}>Изменить</button>
                </div>
            </div>
        </div>
    )
}

export default TodoItemEdit;