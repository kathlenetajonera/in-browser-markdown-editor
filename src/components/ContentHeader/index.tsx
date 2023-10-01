type Props = {
    title: string;
    icon?: string;
    handleIconClick?: () => void;
    iconStyles?: string;
};

const ContentHeader = ({ title, icon, handleIconClick, iconStyles }: Props) => {
    return (
        <div className="flex items-center justify-between py-3 px-4 bg-[#1e2022]">
            <h3 className="text-sm text-gray-text font-medium tracking-[2px]">
                {title}
            </h3>

            {icon && (
                <span
                    className={`cursor-pointer ${iconStyles}`}
                    onClick={handleIconClick}
                >
                    <img src={icon} alt={title} />
                </span>
            )}
        </div>
    );
};

export default ContentHeader;