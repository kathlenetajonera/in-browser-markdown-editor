import { useState } from 'react';
import Preview from '../Preview';
import TextEditor from '../TextEditor';

const Content = () => {
    const [isPreview, setIsPreview] = useState(false);

    return (
        <div className="flex flex-col h-[calc(100vh-56px)] md:flex-row">
            <TextEditor isPreview={isPreview} setIsPreview={setIsPreview} />
            <Preview isPreview={isPreview} setIsPreview={setIsPreview} />
        </div>
    );
};

export default Content;
