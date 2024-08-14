import ShipIcon from "./ShipIcon";
import VP from './VP';

import './ShipCard.scss';

function ShipCard(props) {

  const iconWidth = 70;
  const iconHeight = 70;

  const renderCost = () => {
    return props.costs.map((cost) => cost.cost > 0 ? (<span className={`resource-${cost.id}`} style={{backgroundColor: props.resources[cost.id].colour, borderColor: props.resources[cost.id].colour}}>{cost.cost}</span>) : null);
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
      <div className="ShipCard-description">{props.description}</div>
      <ShipIcon id={props.type.id} width={iconWidth} height={iconHeight}/>
      {props.isDisposable ? (<div className="ShipCard-disposable">DISCARD!</div>) : null}
      <VP vp={props.vp} />
    </div>
  </div>)
}

export default ShipCard;