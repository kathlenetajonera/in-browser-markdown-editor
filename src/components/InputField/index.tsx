import icon from '../../assets/icons/icon-document.svg';

const InputField = () => {
    return (
        <div className="flex items-center ml-5 mr-2">
            <img src={icon} alt="save" className="mr-3" />
            <div>
                <p className="hidden md:block text-gray-text text-[0.813rem] leading-[1]">
                    Document Name
                </p>
                <input
                    type="text"
                    placeholder="untitled.md"
                    className="font-roboto bg-transparent outline-none w-full text-white placeholder:text-white border-b-[1px] border-b-transparent transition-[border] focus:border-b-white md:w-[17.5rem]"
                />
            </div>
        </div>
    );
};

export default InputField;
