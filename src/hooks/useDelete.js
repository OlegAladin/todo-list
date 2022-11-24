import { useItems } from './useItems';
import { db, storage } from './../firebase';
import { doc, deleteDoc } from '@firebase/firestore';
import { ref, deleteObject } from '@firebase/storage';

/**
 * Удаляет элемент списка todo
 * @returns {Function} функцию удаления, которая принимает "id, fileId"
 */

export const useDelete = () => {
    //eslint-disable-next-line no-unused-vars
    const [items, itemsRef, getItems] = useItems();

    const deleteItem = async (id, fileId) => {
        const itemDoc = doc(db, "items", id);
        await deleteDoc(itemDoc);
        if (fileId !== '') {
            const imageRef = ref(storage, `images/${fileId}`);
            const fileRef = ref(storage, `files/${fileId}`);
            await deleteObject(imageRef);
            await deleteObject(fileRef);
        }
        getItems();
    };

    return deleteItem;
};