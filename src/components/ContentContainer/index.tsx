type Props = {
    children: JSX.Element;
};

const ContentContainer = ({ children }: Props) => {
    return <div className="bg-black h-full py-3 px-4">{children}</div>;
};

export default ContentContainer;
