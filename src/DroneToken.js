import ShipIcon from './ShipIcon';

function DroneToken(props) {
  const iconWidth = 150;
  const iconHeight = 150;
  return (<div className='DroneToken'>
    <ShipIcon id="drones" colour={props.colour} width={iconWidth} height={iconHeight}/>
  </div>);
}

export default DroneToken;