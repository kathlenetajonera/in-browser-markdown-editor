import Loading from '../Loading';

type Props = {
    isLoading?: boolean;
    icon?: string;
    label: string;
    handleClick: () => void;
};

const Button = ({ isLoading, icon, label, handleClick }: Props) => {
    return (
        <button
            className="inline-flex items-center justify-center w-full bg-orange p-3 rounded-md cursor-pointer transition-[background] hover:bg-[#f39765]"
            onClick={handleClick}
        >
            {icon && !isLoading && (
                <img src={icon} alt="save" className="block w-6 md:w-5" />
            )}
            {isLoading && <Loading />}
            <p
                className={`${
                    icon ? 'hidden' : ''
                } md:block text-white text-[0.938rem] ml-3`}
            >
                {label}
            </p>
        </button>
    );
};

export default Button;
