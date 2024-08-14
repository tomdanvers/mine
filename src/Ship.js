import ShipCard from './ShipCard';
import ShipIcon from './ShipIcon'

function Ship(props) {
  const iconWidth = 70;
  const iconHeight = 70;
  return (<div className='Ship-container'>
    <div className="Ship">
      <h3 className='Ship-player' style={{color: props.colour}}>{props.name}</h3>
      <ShipCard id='1' {...props.hold} hideBack={true} type={{id: 'hold'}} />
      <ShipCard id='2' {...props.drone} hideBack={true} type={{id: 'drones'}} />
      <ShipIcon id="defense" arrow="up" width={iconWidth} height={iconHeight}/>
      <ShipIcon id="offense" arrow="up"  width={iconWidth} height={iconHeight} />
      <ShipIcon id="engines" arrow="right"  width={iconWidth} height={iconHeight} />
      <ShipIcon id="lifesupport" arrow="left"  width={iconWidth} height={iconHeight} />
      <ShipIcon id="sensors" variant="a" arrow="down"  width={iconWidth} height={iconHeight} />
      <ShipIcon id="sensors" variant="b" arrow="down"  width={iconWidth} height={iconHeight} />
    </div>
  </div>);
}

export default Ship;