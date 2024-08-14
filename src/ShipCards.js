import './ShipCards.scss';

import ShipCard from './ShipCard';

function ShipCards(props) {
  return (
    <div className="ShipCards">
      <h3>Ship Cards</h3>
      <div className="ShipCards-list">
        {props.cards.map((card, index) => {
          if (card.count > 0) {
            return (<ShipCard key={card.id} {...card} type={props.cardTypes[card.type]} resources={props.resources} />);
          }
        })}
      </div>  
    </div>
  );
}

export default ShipCards;