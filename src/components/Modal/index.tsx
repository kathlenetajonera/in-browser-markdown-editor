import Button from '../Button';

type Props = {
    show: boolean;
    onClickOutside: () => void;
    title: string;
    subtitle: string;
    buttonLabel: string;
    handleClick: () => void;
};

const Modal = ({
    show,
    onClickOutside,
    title,
    subtitle,
    buttonLabel,
    handleClick,
}: Props) => {
    return (
        <div
            className={`fixed inset-y-[0] inset-x-[0] bg-[rgba(0,0,0,0.3)] dark:bg-[rgba(255,255,255,0.2)] flex items-center justify-center z-10 transition-opacity ${
                show
                    ? 'opacity-100 pointer-events-auto'
                    : 'opacity-0 pointer-events-none'
            }`}
            onClick={onClickOutside}
        >
            <div className="bg-white dark:bg-black max-w-[21.875rem] p-6 text-dark-gray dark:text-white rounded-md">
                <p className="font-roboto-slab font-bold text-xl">{title}</p>
                <p className="my-4 text-sm text-gray-text dark:text-lighter-gray">
                    {subtitle}
                </p>

                <Button label={buttonLabel} handleClick={handleClick} />
            </div>
        </div>
    );
};

export default Modal;
