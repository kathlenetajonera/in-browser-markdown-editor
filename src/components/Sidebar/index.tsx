import { useContext } from 'react';
import { AppContext } from '../../App';
import { Data } from '../../types';
import Button from '../Button';
import DocumentList from '../DocumentList';
import ModeToggle from '../ModeToggle';

const Sidebar = () => {
    const { isNavOpen, setIsNavOpen, setDocumentList, setSelectedDocument } =
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

    return (
        <nav
            className={`h-full bg-sidebar p-6 w-sidebar fixed top-0 left-0 transition-transform ease-in-out duration-300 ${
                isNavOpen ? 'translate-x-[0]' : '-translate-x-sidebar'
            }`}
        >
            <h3 className="text-gray-text mb-6 text-sm tracking-[2px]">
                MY DOCUMENTS
            </h3>
            <Button label="+ New Document" handleClick={handleAdd} />
            <DocumentList />
            <ModeToggle />
        </nav>
    );
};

export default Sidebar;
