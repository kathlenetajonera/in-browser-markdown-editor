import { useContext } from 'react';
import { AppContext } from '../../App';
import { Data } from '../../types';
import icon from '../../assets/icons/icon-document.svg';

type Props = {
    id: number;
    createdAt: string;
    name: string;
};

const DocumentItem = ({ id, createdAt, name }: Props) => {
    const {
        documentList,
        selectedDocument,
        setSelectedDocument,
        setDraftState,
    } = useContext(AppContext);
    const isActive = selectedDocument?.id === id;

    const handleClick = () => {
        const selectedDoc = documentList.find((doc: Data) => doc.id === id);
        setSelectedDocument(selectedDoc);
        setDraftState(selectedDoc);
    };

    return (
        <div className="flex items-center mb-6" onClick={handleClick}>
            <img src={icon} alt="document" />

            <div className="ml-4">
                <p className="text-gray-text text-[0.813rem] leading-[0.938rem]">
                    {createdAt}
                </p>
                <h2
                    className={`${
                        isActive ? 'text-orange' : 'text-white'
                    } font-medium transition hover:text-orange cursor-pointer`}
                >
                    {name}
                </h2>
            </div>
        </div>
    );
};

export default DocumentItem;
