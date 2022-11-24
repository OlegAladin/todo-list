import React, { useState, useEffect } from 'react';
import m from './todoItem.module.scss';
import { useChangeStatus } from '../../../../hooks/useChangeStatus';
import { useDelete } from '../../../../hooks/useDelete';
import { useFile } from '../../../../hooks/useFile';
import dayjs from 'dayjs';
import { FaTrashAlt } from 'react-icons/fa';
import { BsFillPencilFill } from 'react-icons/bs';
import { BsCheckLg } from 'react-icons/bs';

const TodoItem = (props) => {
    const [fileUrl, setFileUrl] = useState('');
    const getFile = useFile();
    const changeStatus = useChangeStatus();
    const deleteItem = useDelete();

    useEffect(() => {
        if (props.fileId !== '') {
            getFile(props.fileId, setFileUrl);
        };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className={m.todoItem}>
            <div className={m.header}>
                <h2>
                    {
                        props.header !== ''
                            ? props.header
                            : '(без имени)'
                    }
                </h2>
                <div className={m.buttons}>
                    <button onClick={() => { changeStatus(props.id, props.status) }} title='Изменить статус'>
                        <BsCheckLg className={m.icon} />
                    </button>
                    <button onClick={() => { props.setEditMode(!props.editMode) }} title='Редактировать'>
                        <BsFillPencilFill className={m.icon} />
                    </button>
                    <button onClick={() => { deleteItem(props.id, props.fileId) }} title='Удалить'>
                        <FaTrashAlt className={m.icon} />
                    </button>
                </div>
            </div>
            <div className={m.info}>
                {
                    props.date !== ""
                    && <span className={m.date}>
                        Выполнить до: <span className={m.bold}>{dayjs(props.date).format('DD:MM:YY')}г.</span>
                    </span>
                }
                <span>Статус:
                    {
                        props.status === false
                            ? <span className={`${m.bold} ${m.notComplete}`}>НЕ ВЫПОЛНЕННО</span>
                            : <span className={`${m.bold} ${m.complete}`}>ВЫПОЛНЕННО</span>
                    }
                </span>
            </div>
            <p>
                {
                    props.description !== ''
                        ? props.description
                        : '(описание отсутствует)'
                }
            </p>
            {
                (fileUrl !== '' && fileUrl.includes('images'))
                && <img src={fileUrl} alt="Фото" />
            }
            {
                (fileUrl !== '' && fileUrl.includes('files'))
                && <a href={fileUrl} download={fileUrl}>Скачать файл</a>
            }
        </div>
    )
}

export default TodoItem