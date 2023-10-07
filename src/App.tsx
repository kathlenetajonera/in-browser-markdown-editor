import { createContext, useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Content from './components/Content';
import data from './json/data.json';
import { Data } from './types';

export const AppContext = createContext<any>(null);

function App() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [documentList, setDocumentList] = useState<Data[] | null>(null);
    const [selectedDocument, setSelectedDocument] = useState<Data | null>(null);
    const [draftState, setDraftState] = useState<Data | null>(null);

    const context = {
        isNavOpen,
        setIsNavOpen,
        documentList,
        setDocumentList,
        selectedDocument,
        setSelectedDocument,
        draftState,
        setDraftState,
    };

    useEffect(() => {
        const savedData = localStorage.getItem('document_list');

        if (savedData) {
            const savedList = JSON.parse(savedData);

            setDocumentList(savedList);
            setSelectedDocument(savedList[0]);
        } else {
            setDocumentList(data);
            setSelectedDocument(data[0]);
        }
    }, []);

    useEffect(() => {
        setDraftState(selectedDocument);
    }, [selectedDocument]);

    useEffect(() => {
        if (documentList) {
            localStorage.setItem('document_list', JSON.stringify(documentList));
        }
    }, [documentList]);

    return (
        <AppContext.Provider value={context}>
            <div className="font-roboto overflow-hidden">
                <Sidebar />

                <main
                    className={`transition-transform ease-in-out duration-300 ${
                        isNavOpen ? 'translate-x-sidebar' : 'translate-x-[0]'
                    }`}
                >
                    <Header />
                    <Content />
                </main>
            </div>
        </AppContext.Provider>
    );
}

export default App;
