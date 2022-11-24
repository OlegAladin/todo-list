import React, { useRef, useState } from 'react';
import { useItems } from '../../hooks/useItems';
import { useAdd } from '../../hooks/useAdd';
import m from './createTodo.module.scss';

const CreateTodo = (props) => {
    //eslint-disable-next-line no-unused-vars
    const [items, itemsRef, getItems] = useItems();
    const addItem = useAdd();
    const [header, setHeader] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [file, setFile] = useState('');
    const fileRef = useRef();

    const onAdd = (header, description, date, file) => {
        if (header !== '' || description !== '') {
            addItem(header, description, date, file);
            setHeader('');
            setDescription('');
            setDate('');
            fileRef.current.value = '';
            getItems();
        } else {
            alert('Заполните заголовок или описание!')
        }
    }

    return (
        <div className={m.createTodo}>
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
                    <input type='file' ref={fileRef} onChange={(e) => { setFile(e.target.files[0]) }} />
                </div>
                <button onClick={() => { onAdd(header, description, date, file) }}>Добавить</button>
            </div>
        </div>
    )
}

export default CreateTodo;