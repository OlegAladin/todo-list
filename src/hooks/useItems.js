import { useState } from 'react';
import { db } from './../firebase';
import { collection, getDocs } from '@firebase/firestore';

/**
 * Загрузка элементов списка todo
 * @returns {array} список элементов, ссылку на бд, функцию загрузки
 */

export const useItems = () => {
    const [items, setItems] = useState([]);
    const itemsRef = collection(db, "items");

    const getItems = async () => {
        const data = await getDocs(itemsRef);
        setTimeout(() => {
            setItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }, 1000);
    };

    getItems();

    return [items, itemsRef, getItems];
};