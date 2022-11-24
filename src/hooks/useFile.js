import { storage } from './../firebase';
import { ref, getDownloadURL } from '@firebase/storage';

/**
 * Загрущка файла
 * @returns {Function }функция загрузки файла, которая принимает "fileId, setFileUrl"
 */

export const useFile = () => {
    const getFile = async (fileId, setFileUrl) => {
        try {
            const responseImage = await getDownloadURL(ref(storage, `images/${fileId}`));
            setFileUrl(responseImage)
        } catch {
            const responseFile = await getDownloadURL(ref(storage, `files/${fileId}`));
            setFileUrl(responseFile)
        }
    };

    return getFile;
};