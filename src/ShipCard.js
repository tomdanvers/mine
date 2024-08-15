import ShipIcon from "./ShipIcon";
import VP from './VP';

import './ShipCard.scss';

const PhaseCopy = {
  start: 'Use at the start of your turn.',
  end: 'Use at the end of your turn.'
};

function ShipCard(props) {

  const iconWidth = 70;
  const iconHeight = 70;

  const renderCost = () => {
    return props.costs.map((cost) => cost.cost > 0 ? (<span className={`resource-${cost.id}`} style={{backgroundColor: props.resources[cost.id].colour, borderColor: props.resources[cost.id].colour, borderStyle: cost.id === 'z' ? 'dashed' : 'solid'}}>{cost.cost}</span>) : null);
  };

  const renderBack = () => {
    return (<div className="ShipCard-face ShipCard-back" >
      <div className="ShipCard-label">SHIP UPGRADE</div>
    </div>);
  }
  
 return (<div className={`ShipCard ShipCard-${props.id}`}>
    {props.hideBack ? null : renderBack()}
    <div className="ShipCard-face ShipCard-front">
      <div className="ShipCard-header">
        <div className="ShipCard-name">{props.name}</div>
        <div className="ShipCard-cost">{renderCost()}</div>
      </div>
      <div className="ShipCard-description">{props.phase ? (<p>{PhaseCopy[props.phase]}</p>) : null}{props.description}</div>
      <ShipIcon id={props.type.id} width={iconWidth} height={iconHeight}/>
      {props.isDisposable ? (<div className="ShipCard-disposable print-bg">DISCARD</div>) : null}
      <VP vp={props.vp} />
    </div>
  </div>)
}

export default ShipCard;