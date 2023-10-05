import icon from '../../assets/icons/icon-document.svg';

const DocumentItem = () => {
    return (
        <div className="flex items-center mb-6">
            <img src={icon} alt="document" />

            <div className="ml-4">
                <p className="text-gray-text text-[0.813rem] leading-[0.938rem]">
                    04/01/2022
                </p>
                <h2 className="text-white font-medium transition hover:text-orange cursor-pointer">
                    welcome.md
                </h2>
            </div>
        </div>
    );
};

export default DocumentItem;
