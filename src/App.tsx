import { createContext, useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Content from './components/Content';
import data from './json/data.json';

export const AppContext = createContext<any>(null);

function App() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [documentList, setDocumentList] = useState(data);
    const [selectedDocument, setSelectedDocument] = useState(data[0]);
    const [draftState, setDraftState] = useState(data[0]);

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
