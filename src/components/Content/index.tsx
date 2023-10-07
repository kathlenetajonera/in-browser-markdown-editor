import { useContext, useState } from 'react';
import { AppContext } from '../../App';
import useDocument from '../../hooks/useDocument';
import TextEditor from '../TextEditor';
import Preview from '../Preview';
import Button from '../Button';

const Content = () => {
    const { draftState } = useContext(AppContext);
    const [isPreview, setIsPreview] = useState(false);
    const { handleAdd } = useDocument();

    return draftState ? (
        <div className="flex flex-col h-[calc(100vh-56px)] md:flex-row">
            <TextEditor isPreview={isPreview} setIsPreview={setIsPreview} />
            <Preview isPreview={isPreview} setIsPreview={setIsPreview} />
        </div>
    ) : (
        <div className="h-[calc(100vh-56px)] bg-white dark:bg-black p-6 flex flex-col items-center justify-center">
            <p className="font-roboto-mono text-sm text-dark-gray dark:text-lighter-gray text-center">
                Get started by creating a new document.
            </p>
            <span className="w-[12.625rem] mt-4">
                <Button label="+ New Document" handleClick={handleAdd} />
            </span>
        </div>
    );
};

export default Content;
