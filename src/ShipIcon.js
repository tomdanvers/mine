import SVGDrone from './icons/drone.svg'
import SVGHold from './icons/hold.svg'
import SVGDefense from './icons/defense.svg'
import SVGOffense from './icons/offense.svg'
import SVGEngine from './icons/engine.svg'
import SVGLifeSupport from './icons/lifesupport.svg'
import SVGSensors from './icons/sensors.svg'

import './ShipIcon.scss';

const ICONS = {
  drones: SVGDrone,
  hold: SVGHold,
  defense: SVGDefense,
  offense: SVGOffense,
  engines: SVGEngine,
  lifesupport: SVGLifeSupport,
  sensors: SVGSensors
};

const DEG = {
  up: 0,
  right: 90, 
  down: 180,
  left: 270
}

function ShipIcon(props) {

  const getIcon = (id) => {
    return ICONS[id];
  }

  const halfWidth = props.width * .5;

  const arrowWidth = 18;
  const arrowHeight = 8;

  const renderArrow = () => {
    const deg = DEG[props.arrow];
    return (<svg className={`ShipIcon-arrow ${props.arrow}`} version="1.1" width={props.width} height={props.height} xmlns="http://www.w3.org/2000/svg" style={{top: -15, left: -15, transform: `rotate(${deg}deg)`}}>
      <polygon points={`${halfWidth - arrowWidth * .5},${arrowHeight} ${halfWidth},${0} ${halfWidth + arrowWidth * .5},${arrowHeight}`} fill='#000' />
    </svg>);
  }

  return (<div className={`ShipIcon ${props.variant ? `${props.id}-${props.variant}` : props.id} ${props.colour === undefined ? '' : 'has-colour' }`} style={{width: props.width - 30, height: props.height - 30}}>
    <div className='ShipIcon-imageContainer' style={{borderColor: props.colour}}><img src={getIcon(props.id)} className='ShipIcon-image' /></div>
    {props.arrow ? renderArrow() : null}
  </div>);
}

export default ShipIcon;