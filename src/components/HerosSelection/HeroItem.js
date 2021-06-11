import Image from '../HerosSelection/Image';
import Button from '@material-ui/core/Button';

const HeroItem = props =>{

    const {hero} = props;

    return <Button variant="outlined" onClick={()=>props.onSelect(hero)} className="hero-button">
           {hero.name}
           <Image image={hero.image} />
          </Button>
   
}

export default HeroItem;