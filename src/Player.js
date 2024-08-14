//https://www.svgrepo.com/
import IconHeart from './icons/heart.svg';
import IconHeartOff from './icons/heart-off.svg';
import IconFood from './icons/food.svg';
import IconWater from './icons/water.svg';
import IconWarning from './icons/stop.svg';
import IconMorning from './icons/morning.svg';
import IconAfternoon from './icons/afternoon.svg';
import IconEvening from './icons/evening.svg';
import IconNight from './icons/night.svg';
import './Player.scss';

const ICONS = {
  'heart': IconHeart,
  'heart-off': IconHeartOff,
  'food': IconFood,
  'water': IconWater,
  'stop': IconWarning,
  'morning': IconMorning,
  'afternoon': IconAfternoon,
  'evening': IconEvening,
  'night': IconNight
};

function Player(props) {
  
  const renderTable = (id, data) =>  {
    const count = data.reduce((count, bracket) => {
      return count + bracket.value;
    }, 0);
    return (
      <div className={`PlayerPanel-table PlayerPanel-${id}`}>
        {data.map((bracket, a) => (
          <>
            {[...Array(bracket.value)].map((e, b) => (
              <div key={`${a}-${b}`} className='PlayerPanel-tableItem' style={{flexBasis: `${100 / count}%`}}>{bracket.icon ? (<img className={`icon icon-${bracket.icon}`} src={ICONS[bracket.icon]} />):(<>{a + b}</>)} {bracket.stop && b === 0 ? (<img className={`icon-stop icon-${bracket.icon}`} src={ICONS['stop']} />) : null}</div>
            ))}
          </>
        ))}
      </div>
    );
  };

  const renderBrackets = (id, data) =>  {
    const count = data.reduce((count, bracket) => {
      return count + bracket.value;
    }, 0);
    return (
      <div className={`PlayerPanel-table PlayerPanel-${id}Brackets`}>
        {data.map((bracket, a) => (
          <div key={`${id}-${a}`} className={`PlayerPanel-tableItem`} style={{flexBasis: `${bracket.value / count * 100}%`}}>{bracket.label ? bracket.label : ''}</div>
        ))}
      </div>
    );
  };

  return (
    <div className="Player">
      <h2>Player Boards</h2>
      <div className='Player-list'>
        {[...Array(props.count)].map((e, i) => (
          <div key={`player-${i}`} className='PlayerPanel'>
            <div className='PlayerPanel-title'>
              <h3>Player {i + 1}</h3>
            </div>
            {renderTable('vp', props.vp)}
            {renderBrackets('vp', props.vp)}
            {renderTable('health', props.health)}
            {renderBrackets('health', props.health)}
            {renderTable('water', props.water)}
            {renderBrackets('water', props.water)}
            {renderTable('food', props.food)}
            {renderBrackets('food', props.food)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Player;