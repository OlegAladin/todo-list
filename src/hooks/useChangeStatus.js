import { useItems } from './useItems';
import { db } from './../firebase';
import { doc, updateDoc, } from '@firebase/firestore';

/**
 * Изменение статуса элемента todo
 * @returns {Function} функция изменения, которая принимает "id, status"
 */

export const useChangeStatus = () => {
    //eslint-disable-next-line no-unused-vars
    const [items, itemsRef, getItems] = useItems();

    const changeStatus = async (id, status) => {
        const itemDoc = doc(db, "items", id);
        const newInfo = { status: !status };
        await updateDoc(itemDoc, newInfo);
        getItems();
    };

    return changeStatus;
};