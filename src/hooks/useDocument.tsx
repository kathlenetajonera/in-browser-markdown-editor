import { useContext } from 'react';
import { AppContext } from '../App';
import { Data } from '../types';

const useDocument = () => {
    const { setIsNavOpen, setDocumentList, setSelectedDocument } =
        useContext(AppContext);

    const handleAdd = () => {
        const docTemplate = {
            id: Date.now(),
            createdAt: new Date().toLocaleDateString(),
            name: 'untitled.md',
            content: '# Create your new markdown here!',
        };

        setDocumentList((prev: Data[]) => [...prev, docTemplate]);
        setSelectedDocument(docTemplate);
        setIsNavOpen(false);
    };

    return { handleAdd };
};

export default useDocument;
