import { useItems } from './useItems';
import { db, storage } from './../firebase';
import { doc, updateDoc } from '@firebase/firestore';
import { ref, uploadBytes } from '@firebase/storage';

/**
 * Редактирует элемент списка todo
 * @returns {Function} функция редактирования, которая принимает "id, header, description, date, file, fileId"
 */

export const useEdit = () => {
    //eslint-disable-next-line no-unused-vars
    const [items, itemsRef, getItems] = useItems();

    const editItem = async (id, header, description, date, file, fileId) => {
        const itemDoc = doc(db, "items", id);
        let newInfo;
        if (file === '') {
            newInfo = { header: header, description: description, date: date };
        } else {
            newInfo = { header: header, description: description, date: date, fileId: fileId };
            let fileRef;
            if (file.type.includes('image')) {
                fileRef = ref(storage, `images/${fileId}`);
            } else {
                fileRef = ref(storage, `files/${fileId}`);
            }
            uploadBytes(fileRef, file);
        };
        await updateDoc(itemDoc, newInfo);
        getItems();
    };

    return editItem;
};