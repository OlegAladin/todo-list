import { useItems } from './useItems';
import { storage } from './../firebase';
import { addDoc } from '@firebase/firestore';
import { ref, uploadBytes } from '@firebase/storage';
import { v4 } from 'uuid';

/**
 * Добавление новых элементов спика todo
 * @returns {Function} функция добавления addItem, которая принимает в себя "header, description, date, file"
 */

export const useAdd = () => {
    //eslint-disable-next-line no-unused-vars
    const [items, itemsRef, getItems] = useItems();

    const addItem = (header, description, date, file) => {
        let fileId = '';
        if (file !== '') {
            fileId = v4();
            let fileRef = '';
            if (file.type.includes('image')) {
                fileRef = ref(storage, `images/${fileId}`);
            } else {
                fileRef = ref(storage, `files/${fileId}`);
            }
            uploadBytes(fileRef, file);
        }
        addDoc(itemsRef, { header: header, description: description, date: date, fileId: `${fileId}`, status: false });
    };

    return addItem;
};