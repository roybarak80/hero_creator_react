import HerosList from "../../components/HerosSelection/HerosList";
import NextTabButton from '../../components/NextTabButton';
import TabTitle from '../../components/TabTitle';

const Heros = (props) => {
   
    const { tabIndex, nextButtonClick, tabText, tabError, isDisabled, buttonText } = props;
    return (
        <>
            <TabTitle tabError={tabError} tabText={tabText} />
            <HerosList heros={props.heros} onSelect={props.onSelect} />
            <NextTabButton buttonText={buttonText} isDisabled={isDisabled} onClick={() => nextButtonClick(tabIndex + 1)} />
        </>
    );
};

export default Heros;
