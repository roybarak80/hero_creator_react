import TabTitle from '../../components/TabTitle';
import HeroItem from '../../components/HerosSelection/HeroItem';
const Result = props => {

    const { tabText, tabError ,tabData} = props;
    const heros = tabData[0];
    const skills = tabData[1]
    
    return (
        <>
            <TabTitle tabError={tabError} tabText={tabText} />
            <HeroItem hero={heros} isSingleItem={true} skills={skills}/>
            
        </>
    )
}

export default Result;