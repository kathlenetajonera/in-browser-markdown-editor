import icon from '../../assets/icons/icon-save.svg';

const SaveButton = () => {
    return (
        <div className="inline-flex items-center justify-center w-full h-full bg-orange p-3 rounded-md cursor-pointer transition-[background] hover:bg-[#f39765]">
            <img src={icon} alt="save" className="block w-6 md:w-5" />
            <p className="hidden md:block text-white text-[0.938rem] ml-3">
                Save changes
            </p>
        </div>
    );
};

export default SaveButton;
