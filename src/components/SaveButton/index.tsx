import icon from '../../assets/icons/icon-save.svg';

const SaveButton = () => {
    return (
        <div className="inline-flex items-center justify-center w-full h-full bg-orange p-3 rounded-md cursor-pointer transition-[background] hover:bg-[#f39765]">
            <img src={icon} alt="save" className="block w-6" />
        </div>
    );
};

export default SaveButton;
