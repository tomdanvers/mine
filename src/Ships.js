import Ship from './Ship';
import './Ships.scss';

import DroneTokens from './DroneTokens';


function Ships(props) {
  let ships = [
    {
      label: 'RED',
      colour: '#b50000'
    },
    {
      label: 'GREEN',
      colour: '#007d06'
    },
    {
      label: 'BLUE',
      colour: '#0032c1'
    },
    {
      label: 'PURPLE',
      colour: '#6e15e8'
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