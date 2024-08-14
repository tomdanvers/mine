import './Tile.scss';
import IconExplore from './icons/explore.svg';
import IconSearch from './icons/search.svg';
import IconMove from './icons/move.svg';
import IconRest from './icons/rest.svg';
import IconFood from './icons/food.svg';
import IconWater from './icons/water.svg';
import IconCost from './icons/cost.svg';

const HEX_HEIGHT_MOD = .865;
const HEX_WIDTH_OFFSET_MOD = .248;

function Tile(props) {
  const showBack = props.showBack === undefined ? true : props.showBack;
  const width = 300;
  const widthModified = 300 * props.tileScale;
  const height = 300;
  const heightModified = 300 * props.tileScale;
  
  const drawHexagon = (xOrigin, yOrigin, width, height) => {
    // It has 6 equal sides and 6 equal angles. It has 6 vertices. Sum of interior angles equals 720°. Interior angle is 120° and exterior angle is 60°.
    // "M0,92.375l46.188-80h92.378l46.185,80l-46.185,80H46.188L0,92.375z"
    let str = '';
    let x = xOrigin + 0;
    let y = yOrigin + height * .5;
    let angleStart = 60 / 180 * Math.PI * -2;
    let angleIncrement = 60 / 180 * Math.PI;
    let lineLength = width * .5;
    for (var i = 0; i < 6; i++) {
      if (i === 0) {
        str += `M${x},${y} `;
      } else {
        let a = angleStart + angleIncrement * i;
        x += Math.cos(a) * lineLength;
        y += Math.sin(a) * lineLength;
        str += `L${x},${y} `;
      }
    }
    str += `Z`;
    return str;
  }

  const renderBack = () => {
    const placementY = heightModified * .2;
    const placementLines = [];
    const lineHeight = 50;
    placementLines.push(`Stage ${props.stage} | ${props.archetype.label.toUpperCase()}`);
    placementLines.push(`Can't adjoin`);
    if (props.archetype.placement.must) {
      placementLines.push(`Must adjoin`);
    }

    const renderPlacementHexes = (placementData, x, y) => {
      let xIncrement = 30;
      let xStart = placementData.length * xIncrement * - .5 + 5;
      if (typeof(placementData[0]) === 'string') {
        return (<g transform={`translate(${x},${y})`}>{placementData.map((archetype, index) => (renderPlacementHex(index, archetype, xStart + xIncrement * index, 0)))}</g>)
      } else {
        return (<g transform={`translate(${x},${y})`}>{placementData.map((archetype, index) => (renderPlacementHex(index, archetype.archetype, xStart + xIncrement * index, 0, `${archetype.count}+`)))}</g>)
      }
    };

    const renderPlacementHex = (index, archetype, x, y, label = false) => {
      if (label) {
        return (<g key={index}>
            <path className={`archetype fill-${archetype}`} d={drawHexagon(x, y, 20, 20)} />
            <text x={x + 10} y={y + 11} dominantBaseline="middle" textAnchor="middle" className={`Tile-back-label placement label`}>{label}</text>
          </g>);
      } else {
        return (<path className={`archetype fill-${archetype}`} key={index} d={drawHexagon(x, y, 20, 20)} stroke='#FFF' />);
      }
    };

    return (
      <div className='Tile-back' style={{width: widthModified, height: heightModified}}>
        <svg xmlns="http://www.w3.org/2000/svg" height={widthModified} width={heightModified} >
          <path className={`stage stage-${props.stage}`} d={drawHexagon(0, 0, widthModified, heightModified)} />
          <path className='border' d={drawHexagon(5, 5, widthModified - 10, heightModified - 10)} fill='#000' />
          <path className={`archetype fill-${props.archetype.id}`} d={drawHexagon(10, 10, widthModified - 20, heightModified - 20)} fill={props.archetype.colour} stroke='#000000' />
          {props.print ? (<path d={drawHexagon(20, 20, widthModified - 40, heightModified - 40)} fill='#FFF' stroke='#000000' />) : null}
          <g style={{transform: `scale(${props.tileScale})`, transformOrigin: `${widthModified * .5}px ${heightModified * .5}px`}}>
            <text x={widthModified * .5} y={placementY} dominantBaseline="middle" textAnchor="middle" className={`Tile-back-label placement`}>{placementLines.map((line, index) => (<tspan key={index} x={widthModified * .5} dy={index === 0 ? 0 : lineHeight}>{line}</tspan>))}</text>
            ({props.archetype.placement.cant ? renderPlacementHexes(props.archetype.placement.cant, widthModified * .5, placementY + 65) : null})
            ({props.archetype.placement.must ? renderPlacementHexes(props.archetype.placement.must, widthModified * .5, placementY + 115) : null})
          </g>
        </svg>
      </div>
    );
  };

  const renderBackSimple = () => {
    
    return (
      <div className='Tile-back' style={{width: widthModified, height: heightModified}}>
        <svg xmlns="http://www.w3.org/2000/svg" height={widthModified} width={heightModified} >
          <path className={`stage stage-${props.stage}`} d={drawHexagon(0, 0, widthModified, heightModified)} />
          <path className='border' d={drawHexagon(5, 5, widthModified - 10, heightModified - 10)} fill='#000' />
          <path className={`stage stage-${props.stage}`} d={drawHexagon(10, 10, widthModified - 20, heightModified - 20)} stroke='#000000' />
          {props.print ? (<path d={drawHexagon(20, 20, widthModified - 40, heightModified - 40)} fill='#FFF' stroke='#000000' />) : null}
        </svg>
      </div>
    );
  };

  const renderFront = () => {

    const renderCost = (Icon, cost, prefix) => {
      let costFood;
      let costWater;
      if (prefix) {
        costFood = `${prefix}${cost.food}`;
        costWater = `${prefix}${cost.water}`;
      } else {
        costFood = cost.food > 0 ? `+${cost.food}` : cost.food;
        costWater = cost.water > 0 ? `+${cost.water}` : cost.water;
      }
      if (cost === undefined) {
        return null;
      } else {
        return (<div className={`Tile-front-label cost`}>
          {Icon ? (<><img className='cost-icon' src={Icon} /><div className='cost-label'> - </div></>) : null}
          <div className='cost-group'>
            <img className='cost-icon' src={IconFood} />
            <div className='cost-label'>{costFood}</div>
          </div>
          <div className='cost-group'>
            <img className='cost-icon' src={IconWater} />
            <div className='cost-label'>{costWater}</div>
          </div>
        </div>);
      }
    }

    let style = showBack ? {
      width: widthModified,
      height: heightModified,
      marginTop: heightModified * HEX_HEIGHT_MOD * .5,
      marginLeft: - widthModified * HEX_WIDTH_OFFSET_MOD
    } : {
      width: widthModified,
      height: heightModified
    };

    let paddingVertical = (height - (height * HEX_HEIGHT_MOD));

    return (
      <div className='Tile-front' style={style}>
        <svg xmlns="http://www.w3.org/2000/svg" width={widthModified} height={heightModified} className='vector'>
          <path className={`stage stage-${props.stage}`} d={drawHexagon(0, 0, widthModified, heightModified)} />
          <path className='border' d={drawHexagon(5, 5, widthModified - 10, heightModified - 10)} fill='#000' />
          <path className={`archetype fill-${props.archetype.id}`} d={drawHexagon(10, 10, widthModified - 20, heightModified - 20)} fill={`url(#fill-${props.id})`} stroke='#000000'/>
          {props.print ? (<path d={drawHexagon(20, 20, widthModified - 40, heightModified - 40)} fill='#FFF' stroke='#000000' />) : null}
          <text x={widthModified * .5} y={heightModified * .5} dominantBaseline="middle" textAnchor="middle" className={`Tile-front-label title archetype-${props.archetype.id}`}>{props.label.toUpperCase()}</text>
          {[...Array(props.resourceCount)].map((e, i) => {
            let pos = i - props.resourceCount * .5;
            let x = widthModified * .5 + (pos * (35 * props.tileScale));
            let y = paddingVertical + 5;
            let size = 30 * props.tileScale;
            return (<rect className='resource-space' width={size} height={size} x={x} y={y} rx={2}/>);
          })}
        </svg>
        <div className='content' style={{transform: `translate(-50%, -50%) scale(${props.tileScale})`}}>
          <div className='content-scaled' style={{width: width, height: height - paddingVertical}}>
            <div className='content-inner'>
              {props.vpExplore === undefined ? null : (<div className='Tile-front-label cost'><img className='cost-icon' src={IconExplore} /><div className='cost-label'> - {props.vpExplore}vp</div></div>)}
              {renderCost(IconSearch, props.resourceModifier)}
              {renderCost(IconCost, props.cost, 'x')}
            </div>
          </div>
        </div>
      </div>
    );
  };

  let style = {
    marginRight: -widthModified * HEX_WIDTH_OFFSET_MOD
  };
  if (!showBack) {
    style = {
      ...props.style
    };
  };
  return (
    <div className='Tile' style={style} >
      {showBack ? renderBackSimple() : null}
      {renderFront()}
    </div>
  );
}

export default Tile;
