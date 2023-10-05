type Props = {
    isNavOpen: boolean;
    setIsNavOpen: (open: boolean) => void;
};

const Burger = ({ isNavOpen, setIsNavOpen }: Props) => {
    return (
        <button
            className={`flex flex-col items-center justify-center w-16 h-full cursor-pointer transition-all hover:bg-orange ${
                isNavOpen ? 'bg-orange' : 'bg-dark-gray'
            }`}
            onClick={() => setIsNavOpen(!isNavOpen)}
        >
            <span
                className={`block w-6 h-[2px] bg-white rounded-full mb-1.5 transition-transform origin-[3px_4px] ${
                    isNavOpen ? 'rotate-45' : ''
                }`}
            />
            <span
                className={`block w-6 h-[2px] bg-white rounded-full mb-1.5 transition-opacity ${
                    isNavOpen ? 'opacity-0' : ''
                }`}
            />
            <span
                className={`block w-6 h-[2px] bg-white rounded-full transition-transform  origin-[1px_-2px] ${
                    isNavOpen ? '-rotate-45' : ''
                }`}
            />
        </button>
    );
};

export default Burger;
