import { useContext, useState } from 'react';
import { AppContext } from '../../App';
import { Data } from '../../types';
import Burger from '../Burger';
import Logo from '../Logo';
import InputField from '../InputField';
import DeleteIcon from '../DeleteIcon';
import Button from '../Button';
import Modal from '../Modal';
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
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleSave = () => {
        setIsLoading(true);
        const updatedDoc = {
            ...draftState,
            name: draftState.name || 'untitled.md',
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

        setTimeout(() => {
            setIsLoading(false);
            setShowModal(true);
        }, 1000);
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
            const index = indexToDelete > 1 ? indexToDelete - 1 : 0;
            setSelectedDocument(updatedList[index]);
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

                {draftState && (
                    <div className="flex items-center">
                        <DeleteIcon handleClick={handleDelete} />
                        <Button
                            isLoading={isLoading}
                            icon={icon}
                            label="Save changes"
                            handleClick={handleSave}
                        />
                    </div>
                )}
            </div>

            <Modal
                show={showModal}
                onClickOutside={() => setShowModal(false)}
                title="Document has been saved."
                subtitle="You may download the file or click outside of the modal to close."
                buttonLabel="Download document"
                handleClick={() => {}}
            />
        </div>
    );
};

export default Header;
