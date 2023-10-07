import { useContext } from 'react';
import { AppContext } from '../../App';
import ContentHeader from '../ContentHeader';
import ContentContainer from '../ContentContainer';
import viewIcon from '../../assets/icons/icon-show-preview.svg';

type Props = {
    isPreview: boolean;
    setIsPreview: (val: boolean) => void;
};

const TextEditor = ({ isPreview, setIsPreview }: Props) => {
    const { draftState, setDraftState } = useContext(AppContext);

    const handleIconClick = () => setIsPreview(true);
    const handleChange = (e: any) => {
        const { value } = e.target;
        const updatedDraft = {
            ...draftState,
            content: value,
        };

        setDraftState(updatedDraft);
    };

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
                <textarea
                    className="font-roboto-mono text-dark-gray dark:text-lighter-gray text-sm outline-none bg-white dark:bg-black w-full h-full pt-8 pb-12 px-6 resize-none transition-[background]"
                    value={draftState?.content}
                    onChange={handleChange}
                />
            </ContentContainer>
        </div>
    );
};

export default TextEditor;
