type Props = {
    children: JSX.Element;
    customClass?: string;
};

const ContentContainer = ({ children, customClass }: Props) => {
    return (
        <div className={`bg-black h-full pt-8 pb-12 px-6 ${customClass || ''}`}>
            {children}
        </div>
    );
};

export default ContentContainer;
