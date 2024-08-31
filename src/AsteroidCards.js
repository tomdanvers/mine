import './AsteroidCards.scss';

import AsteroidCard from './AsteroidCard';

function AsteroidCards(props) {
  return (
    <div className="AsteroidCards">
      <h2>Asteroid Cards</h2>
      <div className="AsteroidCards-list">
        {props.cards.map((card, index) => {
          return (<AsteroidCard key={card.id} {...card} type={props.cardTypes[card.type]} resources={props.resources}/>);
        })}
      </div>  
    </div>
  );
}

export default AsteroidCards;