import './TileStage.scss';
import Tile from './Tile';

function TileStage(props) {

  let count = props.print ? props.count : 1;

  return (
    <div className="TileStage">
      <div className="TileStage-header">
        <h3>Stage {props.stage + 1} | x{props.count}</h3>
      </div>
      <div className='TileStage-list'>{[...Array(count)].map((e, i) => (<Tile key={i} {...props} />))}</div>
    </div>
  );
}

export default TileStage;
