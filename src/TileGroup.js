import './TileGroup.scss';
import TileStage from './TileStage';

function TileGroup(props) {

  let stages = [];
  props.stagesToShow.forEach(stage => {
    stages[stage] = props.stages[stage];
  });

  return (
    <div className="TileGroup">
      <div className="TileGroup-header">
        <h2>{props.label}</h2>
        <p>{props.description}</p>
      </div>
      <div className='TileGroup-list'>
        {stages[0] > 0 ? (<TileStage stage={0} count={stages[0]} {...props} />) : null}
        {stages[1] > 0 ? (<TileStage stage={1} count={stages[1]} {...props} />) : null}
        {stages[2] > 0 ? (<TileStage stage={2} count={stages[2]} {...props} />) : null}
      </div>
    </div>
  );
}

export default TileGroup;
