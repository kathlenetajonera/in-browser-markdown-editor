import { useContext, useState } from 'react';
import { AppContext } from '../../App';
import Preview from '../Preview';
import TextEditor from '../TextEditor';

const Content = () => {
    const { draftState } = useContext(AppContext);
    const [isPreview, setIsPreview] = useState(false);

    return draftState ? (
        <div className="flex flex-col h-[calc(100vh-56px)] md:flex-row">
            <TextEditor isPreview={isPreview} setIsPreview={setIsPreview} />
            <Preview isPreview={isPreview} setIsPreview={setIsPreview} />
        </div>
    ) : (
        <div className="h-[calc(100vh-56px)] bg-white dark:bg-black p-6">
            <p className="font-roboto-mono text-sm text-dark-gray dark:text-lighter-gray">
                Looks like you deleted everything! Please create a new document
                in the sidebar :)
            </p>
        </div>
    );
};

export default Content;
