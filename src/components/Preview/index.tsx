import ContentHeader from '../ContentHeader';
import ContentContainer from '../ContentContainer';
import hideIcon from '../../assets/icons/icon-hide-preview.svg';
import viewIcon from '../../assets/icons/icon-show-preview.svg';
import Markdown from 'markdown-to-jsx';
import CustomH1 from '../MarkdownElements/H1';
import CustomH2 from '../MarkdownElements/H2';
import CustomH3 from '../MarkdownElements/H3';
import CustomH4 from '../MarkdownElements/H4';
import CustomH5 from '../MarkdownElements/H5';
import CustomH6 from '../MarkdownElements/H6';
import CustomParagraph from '../MarkdownElements/Paragraph';
import CustomAnchor from '../MarkdownElements/Anchor';
import OrderedList from '../MarkdownElements/OrderedList';
import UnorderedList from '../MarkdownElements/UnorderedList';
import ListItem from '../MarkdownElements/ListItem';
import CustomPreformatted from '../MarkdownElements/Pre';
import CustomBlockquote from '../MarkdownElements/Blockquote';

type Props = {
    isPreview: boolean;
    setIsPreview: (val: boolean) => void;
    content: string;
};

const Preview = ({ isPreview, setIsPreview, content }: Props) => {
    const handleIconClick = () => setIsPreview(!isPreview);

    const options = {
        overrides: {
            h1: { component: CustomH1 },
            h2: { component: CustomH2 },
            h3: { component: CustomH3 },
            h4: { component: CustomH4 },
            h5: { component: CustomH5 },
            h6: { component: CustomH6 },
            p: { component: CustomParagraph },
            a: { component: CustomAnchor },
            ol: { component: OrderedList },
            ul: { component: UnorderedList },
            li: { component: ListItem },
            pre: { component: CustomPreformatted },
            blockquote: { component: CustomBlockquote },
        },
    };

    return (
        <div
            className={`text-dark-gray dark:text-white flex-1 h-full ${
                isPreview ? 'flex flex-col' : 'hidden md:flex md:flex-col'
            }`}
        >
            <ContentHeader
                title="PREVIEW"
                icon={isPreview ? hideIcon : viewIcon}
                handleIconClick={handleIconClick}
            />
            <ContentContainer customClass="font-roboto-slab overflow-y-auto">
                <Markdown options={options}>{content}</Markdown>
            </ContentContainer>
        </div>
    );
};

export default Preview;
