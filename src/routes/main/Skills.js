import NextTabButton from '../../components/NextTabButton';
import SkillsWrapper from '../../components/SkillsWrapper';
import TabTitle from '../../components/TabTitle';

const Skills = props => {

    const { skills, onSelect, tabIndex, nextButtonClick, tabText, tabError, isDisabled, buttonText } = props;
    return (
        <>
            <TabTitle tabError={tabError} tabText={tabText} />
            <SkillsWrapper changeSkill={onSelect} skills={skills} />
            <NextTabButton buttonText={buttonText} isDisabled={isDisabled} onClick={() => nextButtonClick(tabIndex + 1)} />
        </>
    )
}

export default Skills;