import ContentHeader from '../ContentHeader';
import ContentContainer from '../ContentContainer';
import hideIcon from '../../assets/icons/icon-hide-preview.svg';
import viewIcon from '../../assets/icons/icon-show-preview.svg';

type Props = {
    isPreview: boolean;
    setIsPreview: (val: boolean) => void;
};

const Preview = ({ isPreview, setIsPreview }: Props) => {
    const handleIconClick = () => setIsPreview(!isPreview);

    return (
        <div
            className={`flex-1 h-full ${
                isPreview ? 'flex flex-col' : 'hidden md:flex md:flex-col'
            }`}
        >
            <ContentHeader
                title="PREVIEW"
                icon={isPreview ? hideIcon : viewIcon}
                handleIconClick={handleIconClick}
            />
            <ContentContainer>
                <></>
            </ContentContainer>
        </div>
    );
};

export default Preview;
