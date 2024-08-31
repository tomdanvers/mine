import AsteroidSVG from "./AsteroidSVG";
import VP from "./VP";

function AsteroidCard(props) {

  const svgOffsetY = 200;
  
  const renderResourceGroup = (count, index) => {
    let arr = [];
    for (let i = 0; i < count.count; i ++) {
      arr[i] = count.id;
    }
    return (<>{arr.map((type, index) => (<div key={index} className={`AsteroidCard-resource ${type}`} style={{borderColor: props.resources[type].colour}} >{props.resources[type].name.substring(0, 1)}</div>))}</>);
  }
 return (<div className={`AsteroidCard AsteroidCard-${props.type.id}`}>
    <div className="AsteroidCard-face AsteroidCard-back" style={{backgroundColor: props.type.colour}} >
      <div className="AsteroidCard-type" style={{height: svgOffsetY}}>{props.type.id}</div>
      <AsteroidSVG type={props.type.id} offsetY={svgOffsetY} />
    </div>
    <div className="AsteroidCard-face AsteroidCard-front">
      <div className="AsteroidCard-resources">
        <div className="AsteroidCard-resourcesContainer">
          {props.counts.map((count, index) => count.count > 0 ? (<div key={index} className="AsteroidCard-resourceGroup">{renderResourceGroup(count, index)}</div>) : null)}
        </div>
      </div>
      <div className="AsteroidCard-type">
        <div className="AsteroidCard-typeLabel">{props.type.id}</div>
        <VP vp={props.vp} />
      </div>
    </div>
  </div>)
}

export default AsteroidCard;