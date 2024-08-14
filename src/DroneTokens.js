import DroneToken from './DroneToken';
import './DroneTokens.scss';

function DroneTokens(props) {
  return (<div className='DroneTokens'>
    <DroneToken {...props} />
    <DroneToken {...props} />
  </div>);
}

export default DroneTokens;