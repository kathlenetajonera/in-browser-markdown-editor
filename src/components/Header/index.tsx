import Burger from '../Burger';
import Logo from '../Logo';
import InputField from '../InputField';
import DeleteIcon from '../DeleteIcon';
import Button from '../Button';
import icon from '../../assets/icons/icon-save.svg';

type Props = {
    isNavOpen: boolean;
    setIsNavOpen: (open: boolean) => void;
};

const Header = ({ isNavOpen, setIsNavOpen }: Props) => {
    return (
        <div className="flex bg-gray h-14">
            <Burger isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />

            <div className="flex justify-between basis-full h-full py-1.5 pr-3">
                <div className="flex items-center">
                    <Logo />
                    <InputField />
                </div>

                <div className="flex items-center">
                    <DeleteIcon />
                    <Button
                        icon={icon}
                        label="Save changes"
                        handleClick={() => {}}
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
