import './AsteroidCards.scss';

import AsteroidCard from './AsteroidCard';

function AsteroidCards(props) {
  return (
    <div className="AsteroidCards">
      <h3>Asteroid Cards</h3>
      <div className="AsteroidCards-list">
        {props.cards.map((card, index) => {
          return (<AsteroidCard key={card.id} {...card} type={props.cardTypes[card.type]} resources={props.resources}/>);
        })}
      </div>  
    </div>
  );
}

export default AsteroidCards;