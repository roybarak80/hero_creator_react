import Image from './HerosSelection/Image'
const ResultWrapper = props =>{

    const {heroData} = props.heroData[0];
   // const {skills} = props.heroData[2];
    return(
        <div>
            
           
{JSON.stringify(props)}
        </div>
    )
}
export default ResultWrapper;