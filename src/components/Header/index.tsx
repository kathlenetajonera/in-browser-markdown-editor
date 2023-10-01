import Burger from '../Burger';
import InputField from '../InputField';
import DeleteIcon from '../DeleteIcon';
import SaveButton from '../SaveButton';

const Header = () => {
    return (
        <div className="flex bg-gray h-14">
            <Burger />

            <div className="flex justify-between basis-full h-full py-1.5 pr-3">
                <InputField />

                <div className="flex items-center">
                    <DeleteIcon />
                    <SaveButton />
                </div>
            </div>
        </div>
    );
};

export default Header;
