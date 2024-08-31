import Ship from './Ship';
import './Ships.scss';

import DroneTokens from './DroneTokens';


function Ships(props) {
  let ships = [
    {
      label: 'RED',
      colour: '#b61313'
    },
    {
      label: 'GREEN',
      colour: '#12a354'
    },
    {
      label: 'BLUE',
      colour: '#615ee5'
    },
    {
      label: 'PURPLE',
      colour: '#c35bdb'
    }
  ];

  return (<div>
    <h2>Ships</h2>
    {ships.map((ship, index) => (
      <div key={index} className='Ships-shipContainer'>
        <Ship name={ship.label} colour={ship.colour} {...props} />
        <DroneTokens colour={ship.colour}/>
      </div>))}
  </div>);
}

export default Ships;