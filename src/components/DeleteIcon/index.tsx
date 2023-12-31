import { useState } from 'react';
import Modal from '../Modal';

type Props = {
    handleClick: () => void;
};

const DeleteIcon = ({ handleClick }: Props) => {
    const [showConfirmation, setShowConfirmation] = useState(false);

    return (
        <>
            <div
                className="block cursor-pointer mr-4 md:mr-5 fill-gray-text transition-[fill] hover:fill-orange"
                onClick={() => setShowConfirmation(true)}
            >
                <svg
                    width="18"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    className="w-6 h-6 md:w-5 md:h-5"
                >
                    <path d="M7 16a1 1 0 0 0 1-1V9a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1ZM17 4h-4V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H1a1 1 0 1 0 0 2h1v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6h1a1 1 0 0 0 0-2ZM7 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1H7V3Zm7 14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6h10v11Zm-3-1a1 1 0 0 0 1-1V9a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z" />
                </svg>
            </div>

            <Modal
                show={showConfirmation}
                onClickOutside={() => setShowConfirmation(false)}
                title="Delete this document?"
                subtitle="Are you sure you want to delete the ‘welcome.md’ document and its contents? This action cannot be reversed."
                buttonLabel="Confirm & Delete"
                handleClick={handleClick}
            />
        </>
    );
};

export default DeleteIcon;
