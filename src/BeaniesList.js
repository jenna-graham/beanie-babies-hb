import BeanieBaby from './BeanieBaby.js';
import { Link } from 'react-router-dom';

export default function BeaniesList({ beanieBabies }) {
  return (
    <div className='beanies'> 
      {
        beanieBabies.map((beanieBaby, i) => {
          return <BeanieBaby {...beanieBaby} key={beanieBaby.title + i + beanieBaby.id} />;
        })
      }
    </div>);
}
