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
import './Time.scss';

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

function Time(props) {
  
  const renderTable = (id, data) =>  {
    const count = data.reduce((count, bracket) => {
      return count + bracket.value;
    }, 0);
    return (
      <div className={`TimePanel-table TimePanel-${id}`}>
        {data.map((bracket, a) => (
          <>
            {[...Array(bracket.value)].map((e, b) => (
              <div key={`${a}-${b}`} className='TimePanel-tableItem' style={{flexBasis: `${100 / count}%`}}><img className={`icon icon-${bracket.icon}`} src={ICONS[bracket.icon]} />{bracket.stop && b === 0 ? (<img className={`icon-stop icon-${bracket.icon}`} src={ICONS['stop']} />) : null}</div>
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
      <div className={`TimePanel-table TimePanel-${id}Brackets`}>
        {data.map((bracket, a) => (
          <div key={`${id}-${a}`} className={`TimePanel-tableItem`} style={{flexBasis: `${bracket.value / count * 100}%`}}>{bracket.label ? bracket.label : ''}</div>
        ))}
      </div>
    );
  };

  return (
    <div className="Time">
      <h2>Time Keeper</h2>
      <div className='Time-list'>
        {[...Array(props.count)].map((e, i) => (
          <div key={`player-${i}`} className='TimePanel'>
            <div className='TimePanel-title'>
              <h3>Time Tracker</h3>
            </div>
            {renderTable('time', props.time)}
            {renderBrackets('time', props.time)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Time;