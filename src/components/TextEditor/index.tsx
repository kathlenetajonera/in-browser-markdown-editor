import ContentHeader from '../ContentHeader';
import ContentContainer from '../ContentContainer';
import viewIcon from '../../assets/icons/icon-show-preview.svg';

type Props = {
    isPreview: boolean;
    setIsPreview: (val: boolean) => void;
};

const TextEditor = ({ isPreview, setIsPreview }: Props) => {
    const handleIconClick = () => setIsPreview(true);

    return (
        <div
            className={`flex-1 h-full ${
                isPreview ? 'hidden' : 'flex flex-col'
            } md:border-r-[1px] md:border-r-gray-text`}
        >
            <ContentHeader
                title="MARKDOWN"
                icon={viewIcon}
                handleIconClick={handleIconClick}
                iconStyles="md:hidden"
            />
            <ContentContainer>
                <textarea className="font-roboto-mono text-lighter-gray text-sm outline-none bg-black w-full h-full resize-none"></textarea>
            </ContentContainer>
        </div>
    );
};

export default TextEditor;
