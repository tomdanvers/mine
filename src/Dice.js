//https://www.svgrepo.com/
import FaceOne from './icons/dice/1.svg';
import FaceTwo from './icons/dice/2.svg';
import FaceThree from './icons/dice/3.svg';
import FaceFour from './icons/dice/4.svg';
import FaceFive from './icons/dice/5.svg';
import FaceSix from './icons/dice/6.svg';

import './Dice.scss';

const FACE_IMAGES = [FaceOne, FaceTwo, FaceThree, FaceFour, FaceFive, FaceSix];


function Dice(props) {
  
  
  return (
    <div className="Dice">
      {[...Array(props.count)].map((e, i) => (
        <div key={`dice-${i}`} className='Dice-layout'>
          <div className='grid-item face-space'></div>
          <img className='grid-item face' src={FACE_IMAGES[0]} alt={props.dice[0].label}/>
          <div className='grid-item face-space'></div>
          
          <img className='grid-item face' src={FACE_IMAGES[1]} alt={props.dice[1].label}/>
          <img className='grid-item face' src={FACE_IMAGES[2]} alt={props.dice[2].label}/>
          <img className='grid-item face' src={FACE_IMAGES[3]} alt={props.dice[3].label}/>

          <div className='grid-item face-space'></div>
          <img className='grid-item face' src={FACE_IMAGES[5]} alt={props.dice[5].label}/>
          <div className='grid-item face-space'></div>

          <div className='grid-item face-space'></div>
          <img className='grid-item face' src={FACE_IMAGES[4]} alt={props.dice[4].label}/>
          <div className='grid-item face-space'></div>

        </div>
      ))}
    </div>
  );
}

export default Dice;