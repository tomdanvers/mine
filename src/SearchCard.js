import './SearchCard.scss';
import IconSearch from './icons/search.svg';
import IconTick from './icons/tick.svg';
import IconSkull from './icons/skull.svg';
import IconFood from './icons/food.svg';
import IconWater from './icons/water.svg';
import IconHeart from './icons/heart.svg';


function SearchCard(props) {
  
  const renderReward = (reward) => {
    let value = reward.value > 0 ? `+${reward.value}` : reward.value;
    let contents;
    if (reward.type === 'water') {
      contents = (<><img className='reward-icon' src={IconWater}/><div className='reward-value'>{value}</div></>);
    } else if (reward.type === 'food') {
      contents = (<><img className='reward-icon' src={IconFood}/><div className='reward-value'>{value}</div></>);
    } else if (reward.type === 'health') {
      contents = (<><img className='reward-icon' src={IconHeart}/><div className='reward-value'>{value}</div></>);
    } else if (reward.type === 'item') {
      contents = (<>Item {value > 0 ? `${value}` : value}</>);
    }

    return (<div className='reward'>{contents}</div>)
  }

  const renderOutcomeType = (type) => {
    if (type === '-2') {
      return (<><img src={IconSkull} /><img src={IconSkull} /></>)
    } else if (type === '-1') {
      return (<><img src={IconSkull} /></>)
    } else if (type === '+1') {
      return (<><img src={IconTick} /></>)
    } else if (type === '+2') {
      return (<><img src={IconTick} /><img src={IconTick} /></>)
    }
  }

  return (
    <div className="SearchCard">
      <div className="SearchCard-front">
        <h5 className={`archetype archetype-label color-${props.archetype.id}`}>{props.archetype.label}</h5>
        <img src={IconSearch}/>
        <div className={`archetype archetype-fill bg-${props.archetype.id}`}></div>
      </div>
      <div className="SearchCard-back">
        <h4 className='title'>{props.title}</h4>
        <p className='description'>{props.description}</p>
        <div className='outcomes'>
          {props.outcomes.map((outcome, index) => {
            return (<div key={index} className='outcome'><div className='type'>{renderOutcomeType(outcome.type)}</div><div className='content'><div className='label'>{outcome.label}</div>{outcome.rewards ? (<div className='rewards'>{outcome.rewards.map(reward => renderReward(reward))}</div>) : null}</div></div>)
          })}
        </div>
      </div>
    </div>
  );
}

export default SearchCard;