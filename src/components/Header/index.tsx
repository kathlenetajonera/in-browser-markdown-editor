import { useContext } from 'react';
import { AppContext } from '../../App';
import { Data } from '../../types';
import Burger from '../Burger';
import Logo from '../Logo';
import InputField from '../InputField';
import DeleteIcon from '../DeleteIcon';
import Button from '../Button';
import icon from '../../assets/icons/icon-save.svg';

const Header = () => {
    const {
        isNavOpen,
        setIsNavOpen,
        selectedDocument,
        setSelectedDocument,
        documentList,
        setDocumentList,
        draftState,
    } = useContext(AppContext);
    const currentId = selectedDocument?.id;

    const handleSave = () => {
        const updatedDoc = {
            ...draftState,
            createdAt: new Date().toLocaleDateString(),
        };
        const updatedList = documentList.map((doc: Data) => {
            if (doc.id !== currentId) {
                return doc;
            }
            return updatedDoc;
        });

        setSelectedDocument(updatedDoc);
        setDocumentList(updatedList);
    };

    const handleDelete = () => {
        const indexToDelete = documentList.findIndex(
            (doc: Data) => doc.id === currentId
        );
        const updatedList = documentList.filter((doc: Data) => {
            return doc.id !== currentId;
        });
        setDocumentList(updatedList);

        if (updatedList.length > 0) {
            setSelectedDocument(updatedList[indexToDelete - 1]);
        } else {
            setSelectedDocument(null);
        }
    };

    return (
        <div className="flex bg-gray h-14">
            <Burger isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />

            <div className="flex justify-between basis-full h-full py-1.5 pr-3">
                <div className="flex items-center">
                    <Logo />
                    <InputField />
                </div>

                <div className="flex items-center">
                    <DeleteIcon handleClick={handleDelete} />
                    <Button
                        icon={icon}
                        label="Save changes"
                        handleClick={handleSave}
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
